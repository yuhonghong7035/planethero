class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :name
      t.string :description
      t.string :image_url
      t.datetime :date_start
      t.datetime :date_end
      t.string :city
      t.string :country

      t.timestamps null: false
    end
  end
end
