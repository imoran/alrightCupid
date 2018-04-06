class AddGenderOrientationZipcodeLocationToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :gender, :string
    add_column :users, :orientation, :string
    add_column :users, :zipcode, :integer
    add_column :users, :location, :string
  end
end
