class Api::DescriptionResponsesController < ApplicationController
  def index
    @description_responses = DescriptionResponse.all
    render '/api/description_responses/index'
  end

  def create
    @description_response = DescriptionResponse.create!(desc_params)

    if @description_response.save
      render '/api/description_responses/show'
    else
      render json: @description_response.errors.full_messages, status: 422
    end
  end

  def update
    @description_response = DescriptionResponse.find(params[:id])

    if @description_response.update_attributes(desc_params)
      render '/api/description_responses/show'
    else
      render json: @description_response.errors.full_messages, status: 422
    end
  end

  def show
    @description_response = DescriptionResponse.find(params[:id])
    render '/api/description_responses/show'
  end


  def desc_params
    params.require(:description_responses).permit(:description_id, :user_id, :response)
  end

end
