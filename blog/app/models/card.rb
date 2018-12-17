class Card < ApplicationRecord
  belongs_to :list
  has_many :comments
  has_many :tasklist
  has_many :observations
  has_many :users, through: :observations
end
