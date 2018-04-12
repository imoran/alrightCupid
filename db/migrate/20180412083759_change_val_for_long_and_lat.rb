class ChangeValForLongAndLat < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :latitude, :float, :null => true
    change_column :users, :longitude, :float, :null => true
  end
end
