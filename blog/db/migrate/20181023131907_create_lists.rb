class CreateLists < ActiveRecord::Migration[5.2]
  def change
    create_table :lists do |t|
      t.references :table, foreign_key: true
      t.text :name

      t.timestamps
    end
  end
end
