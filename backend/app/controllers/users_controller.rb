class UsersController < ApplicationController
  before_action :set_user, only: [:show, :destroy]

  # GET /users
  # GET /users.json
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  # GET /users/1.json
  def show
    render json: @user
  end

  # POST /users
  # POST /users.json
  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private

    def set_user
      @user = User.find(params[:id])
    end

    def user_params
      params.permit(:email, :password, :name)
    end
end
