class AddFirstNameToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :first_name, :string

    change_column_null :users, :gender, false
    change_column_null :users, :orientation, false
    change_column_null :users, :zipcode, false
    change_column_null :users, :location, false

    change_column_default(:users, :latitude, nil)
    change_column_default(:users, :longitude, nil)
    change_column_default(:users, :age, nil)
  end
end
