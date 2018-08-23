class Payment < ApplicationRecord

  validates_presence_of :date, :quantity, :concept
  validates :quantity, numericality: {
    less_than_or_equal_to: 9_223_372_036_854_775_807,
    only_integer: true
  }

end
