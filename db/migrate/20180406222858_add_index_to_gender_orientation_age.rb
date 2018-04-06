class AddIndexToGenderOrientationAge < ActiveRecord::Migration[5.1]
  def change
    add_index :users, :age
    add_index :users, :gender
    add_index :users, :orientation
    add_index :users, :zipcode
  end
end
