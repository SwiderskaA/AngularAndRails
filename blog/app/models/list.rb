class List < ApplicationRecord
  belongs_to :table
  has_many :cards, -> {order(position: :asc)}
end
