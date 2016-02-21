class CreateTeams < ActiveRecord::Migration
  def change
    create_table :teams do |t|
      t.string :name
      t.string :motto
      t.string :description
      t.string :image_url

      t.timestamps null: false
    end
  end
end
