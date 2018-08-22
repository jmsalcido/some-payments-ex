class CreatePayments < ActiveRecord::Migration[5.2]
  def change
    create_table :payments do |t|
      t.string :concept
      t.integer :quantity
      t.datetime :date

      t.timestamps
    end
  end
end
