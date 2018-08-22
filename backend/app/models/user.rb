class User < ApplicationRecord

  has_secure_password

  has_many :payments, foreign_key: :created_by_id

  validates_presence_of :name, :password_digest, :email

end
