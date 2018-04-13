class AddDefaultPictureForUsers < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :image_url, :string, default: "http://slogreengoods.com/wp-content/uploads/profile-pic-generic.jpg"
  end
end
