class EnrollmentsController < ApplicationController
  before_action :set_enrollment, only: [:show, :update, :destroy]
  def index
    @enrollments = Enrollment.all

    render json: @enrollments
  end

  def show
    render json: @enrollment
  end

  def create
    @enrollment = Enrollment.new(enrollment_params)

    if @enrollment.save
      render json: {id: @enrollment.id}, status: :created, location: @task
    else
      render json: @enrollment.errors, status: :unprocessable_entity
    end
  end

  def update
    @enrollment = Enrollment.find(params[:id])

    if @Enrollment.update(enrollment_params)
      head :no_content
    else
      render json: @enrollment.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @enrollment.destroy

    head :no_content
  end

  private

    def set_enrollment
      @entrollment = Enrollment.find(params[:id])
    end

    def enrollment_params
      params.permit(:task_id, :team_id)
    end
end
