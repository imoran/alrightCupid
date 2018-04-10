class AddMottoToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :motto, :string
  end
end
