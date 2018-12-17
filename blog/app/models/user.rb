class User < ApplicationRecord
	acts_as_token_authenticatable
  	# Include default devise modules. Others available are:
	# :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
	devise :database_authenticatable, :registerable,
	       :recoverable, :rememberable, :validatable
	has_and_belongs_to_many :tables
	has_many :observations
  	has_many :cards, through: :observations
end
