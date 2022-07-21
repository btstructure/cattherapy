Rails.application.routes.draw do
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get "/cats", to: "cats#index"
  post "/newcomment", to: "comments#create"
  patch "/comment/:comment_id", to: "comments#update" 
  delete "/deletecomment/:comment_id", to: "comments#destroy"
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end