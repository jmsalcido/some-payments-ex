class Payment < ApplicationRecord

  validates_presence_of :date, :quantity, :concept

end
