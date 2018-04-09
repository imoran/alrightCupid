class CreateQuestionResponses < ActiveRecord::Migration[5.1]
  def change
    create_table :question_responses do |t|
      t.integer :question_id
      t.integer :user_id
      t.integer :answer_id

      t.timestamps
    end
  end
end
