class Team < ActiveRecord::Base
  has_many :enrollments
  has_many :tasks, through: :enrollments
  has_many :memberships
  has_many :users, through: :memberships
end
