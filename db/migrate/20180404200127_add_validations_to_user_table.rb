class AddValidationsToUserTable < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :latitude
    remove_column :users, :longitude
    remove_column :users, :age
    remove_column :users, :image_url

    add_column :users, :latitude, :float, default: 37.7749, null: false
    add_column :users, :longitude, :float, default: 122.4194, null: false
    add_column :users, :age, :integer, default: 24, null: false
    add_column :users, :image_url, :string, default: "https://vignette.wikia.nocookie.net/spongebob/images/a/ac/Spongebobwithglasses.jpeg/revision/latest?cb=20121014113150", null: false
  end
end
