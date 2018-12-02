class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text :name
      t.references :card, foreign_key: true
      t.boolean :deleted, :null => false, :default => false

      t.timestamps
    end
  end
end
