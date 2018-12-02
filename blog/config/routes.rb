Rails.application.routes.draw do
  devise_for :users
  resources :books 
  resources :tables do
  	get :close
  end
  resources :lists do
    post :change_position
  end
  resources :cards do
    post :change_position
    post :archive
    post :copy
  end

  resources :sessions, only: [:create, :destroy]
  resources :user, only: [:create]

  resources :comments do
    post :delete
  end

  resources :tasklists, only: [:create, :update, :show]
  resources :tasks, only: [:create, :update, :show]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
