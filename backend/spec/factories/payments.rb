FactoryBot.define do
  factory :payment do
    quantity { Faker::Number.rand 100 }
    concept { Faker::Lorem.words 3 }
    date { Faker::Date.forward 1 }
    created_by_id { Faker::Number.number(10) }
  end
end