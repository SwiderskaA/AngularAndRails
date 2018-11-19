class AddClosedToTables < ActiveRecord::Migration[5.2]
  def change
    add_column :tables, :closed, :boolean, :null => false, :default => false
  end
end
