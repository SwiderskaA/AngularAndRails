class Tasklist < ApplicationRecord
  belongs_to :card
  has_many :tasks
end
