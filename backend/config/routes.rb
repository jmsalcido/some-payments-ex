Rails.application.routes.draw do
  resources :payments

  post 'auth/login', to: 'authentication#authenticate'
  post 'signup', to: 'users#create'

end
