class Payment < ApplicationRecord
  require 'csv'

  validates_presence_of :date, :quantity, :concept
  validates :quantity, numericality: {
    less_than_or_equal_to: 9_223_372_036_854_775_807,
    only_integer: true
  }

  def self.csv(file, user_id)
    import = []
    CSV.foreach(file.path, headers: true) do |row|
      payment_params = row.to_hash
      payment_params[:created_by_id] = user_id
      payment = Payment.create(payment_params)
      if payment.valid?
        import.push(payment)
      end
    end

    import
  end

end
