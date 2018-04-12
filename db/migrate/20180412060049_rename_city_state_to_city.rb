class RenameCityStateToCity < ActiveRecord::Migration[5.1]
  def change
    rename_column :users, :city_state, :city
  end
end
