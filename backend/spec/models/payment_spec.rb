require 'rails_helper'

RSpec.describe Payment, type: :model do
  it { should validate_presence_of(:quantity) }
  it { should validate_presence_of(:concept) }
  it { should validate_presence_of(:date) }
end
