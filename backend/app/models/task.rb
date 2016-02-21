class Task < ActiveRecord::Base
  has_many :enrollments
  has_many :teams, through: :enrollments
end
