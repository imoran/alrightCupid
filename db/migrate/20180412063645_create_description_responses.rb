class CreateDescriptionResponses < ActiveRecord::Migration[5.1]
  def change
    create_table :description_responses do |t|
      t.integer :description_id
      t.integer :user_id
      t.text :response

      t.timestamps
    end
  end
end
