class Api::DescriptionsController < ApplicationController
  def index
    @descriptions = Description.all
    render '/api/descriptions/index'
  end
end
