Rails.application.routes.draw do
  resources :payments

  post 'payments/import', to: 'payments#import'
  post 'auth/login', to: 'authentication#authenticate'
  post 'signup', to: 'users#create'

end
