Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :show]
    resource :session, only: [:create, :destroy]
    resources :questions, only: [:index]
    #responses will change
    resources :question_answers, only: [:index, :create]
    resources :description_responses, only: [:index, :create, :update]
    resources :question_responses, only: [:index, :show]
    resources :descriptions, only: [:index]

    # get '/search' 'search_controller#search'
  end

  root "static_pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
