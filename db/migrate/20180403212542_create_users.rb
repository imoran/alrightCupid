class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.integer :age, null: false
      t.string :image_url, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false

      t.timestamps
    end
    add_index :users, :username, unique: true
    add_index :users, :session_token, unique: true
    add_index :users, [:latitude, :longitude]
  end
end
