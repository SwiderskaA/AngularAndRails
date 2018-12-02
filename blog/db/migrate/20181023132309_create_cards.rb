class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.references :list, foreign_key: true
      t.text :name
      t.text :description
      t.integer :position
      t.boolean :archived, :null => false, :default => false

      t.timestamps
    end
  end
end
