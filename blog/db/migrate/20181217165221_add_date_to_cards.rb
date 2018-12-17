class AddDateToCards < ActiveRecord::Migration[5.2]
  def change
    add_column :cards, :deadline, :datetime
    add_column :cards, :showdate, :boolean
  end
end
