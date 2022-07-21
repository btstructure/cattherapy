class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.string :description
      t.belongs_to :user
      t.belongs_to :cat

      t.timestamps
    end
  end
end
