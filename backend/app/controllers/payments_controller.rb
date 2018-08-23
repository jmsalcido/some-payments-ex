class PaymentsController < ApplicationController
  require 'mimemagic'

  before_action :set_payment, only: [:show, :update, :destroy]

  # GET /payments
  def index
    @payments = @current_user.payments
    json_response @payments
  end

  # GET /payments/:id
  def show
    json_response @payment
  end

  # POST /payments
  def create
    @payment = @current_user.payments.create!(payment_params)
    json_response @payment, :created
  end

  # POST /payments/import
  def import
    file = params[:file]
    validate_file_type file

    response = Payment.csv(file, @current_user.id)
    json_response response, :created
  end

  # PUT /payments/:id
  def update
    @payment.update(payment_params)
    head :no_content
  end

  # DELETE /payments/:id
  def destroy
    @payment.destroy
    head :no_content
  end

  private

  def payment_params
    params.permit(:concept, :quantity, :date)
  end

  def set_payment
    @payment = Payment.find(params[:id])
    if @payment.created_by_id != @current_user.id
      raise ExceptionHandler::AuthenticationError, Message.invalid_credentials
    end
  end

  def validate_file_type(file)
    expected_type = 'text/csv'
    mime_file = MimeMagic.by_magic(File.open(file.tempfile))

    if !mime_file.nil? && mime_file.type != expected_type
      raise ExceptionHandler::FileNotValid, Message.invalid_file_type(expected_type)
    end
  end

end
