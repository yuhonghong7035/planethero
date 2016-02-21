class AddColumnToEnrollment < ActiveRecord::Migration
  def change
    add_column :enrollments, :task_id, :integer
    add_column :enrollments, :team_id, :integer
  end
end
