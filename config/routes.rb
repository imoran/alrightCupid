Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :show]
    resource :session, only: [:create, :destroy]
    resource :responses, only: [:index, :create]
  end

  root "static_pages#root"


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
