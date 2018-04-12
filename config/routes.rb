Rails.application.routes.draw do
  namespace :api do
    get 'descriptions/index'
  end

  namespace :api do
    get 'descriptions/update'
  end

  namespace :api do
    get 'descriptions/show'
  end

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :show]
    resource :session, only: [:create, :destroy]
    resources :questions, only: [:index]
    resources :responses, only: [:index]
    resources :descriptions, only: [:index, :show, :update]
  end

  root "static_pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
