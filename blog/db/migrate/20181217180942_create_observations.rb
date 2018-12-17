class CreateObservations < ActiveRecord::Migration[5.2]
  def change
    create_table :observations do |t|
      t.integer :user_id
      t.integer :card_id

      t.timestamps
    end
  end
end
