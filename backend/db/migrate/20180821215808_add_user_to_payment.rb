class AddUserToPayment < ActiveRecord::Migration[5.2]
  def change
    add_reference :payments, :created_by, foreign_key: true
  end
end
