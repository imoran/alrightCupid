class AddNullConstraintToFirstName < ActiveRecord::Migration[5.1]
  def change
    change_column_null :users, :first_name, false
  end
end
