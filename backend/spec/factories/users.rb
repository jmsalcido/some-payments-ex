FactoryBot.define do
  factory :user do
    name { Faker::Fallout.name }
    email { 'foo@email.com' }
    password { 'foobar' }
  end
end