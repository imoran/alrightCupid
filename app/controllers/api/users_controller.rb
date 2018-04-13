class Api::UsersController < ApplicationController

  def index
    #if params do query ajax otherwise:
    #near browse functionality
    if params[:search]
      @users = User.search_by_name(params[:search])
    else
      @users = User.all.select { |u| u.first_name != "demo_user" && u.first_name != current_user.first_name }
    end
    render '/api/users/index'
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render '/api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render '/api/users/show'
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :zipcode, :first_name, :age, :latitude, :longitude, :gender, :orientation, :location)
  end

  def search_params
    params.require(:search).permit(:search_query)
  end
end
