class CreateJoinTableUsersTables < ActiveRecord::Migration[5.2]
  def change
    create_join_table :users, :tables do |t|
      # t.index [:user_id, :table_id]
      # t.index [:table_id, :user_id]
    end
  end
end
