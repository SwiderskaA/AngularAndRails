Rails.application.routes.draw do
  resources :books 
  resources :tables do
  	resources :lists do
  		resources :cards
  	end
  end
  resources :lists
  resources :cards
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
