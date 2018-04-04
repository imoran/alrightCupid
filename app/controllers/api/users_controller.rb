class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render 'Sign up successful!'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.requre(:user).permit(:username, :password)
  end
end
