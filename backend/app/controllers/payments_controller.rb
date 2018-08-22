class PaymentsController < ApplicationController

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

end
