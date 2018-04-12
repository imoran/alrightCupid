class Api::UsersController < ApplicationController
  #hooks to protect against accessing data api endpoints
  # before_action :require_login

  def index
    #if params do query ajax otherwise:
    #near browse functionality
    @users = User.all
    if params[:search]
      @users = User.search_by_name(search_params[:search_query])
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

  # params: {
  #   search: {
  #     search_query: "Melissa"
  #   }
  # }

end
