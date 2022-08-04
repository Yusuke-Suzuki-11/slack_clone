Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth', controllers: {
    registrations: 'api/v1/auth/registrations'
  }
  namespace :api do
    namespace :v1 do
      namespace :auth do
        resources :sessions, only: %i[index]
        post 'account/invite',        to: 'users#invite'
        get  'direct_message/index',  to: 'direct_messages#index'
        post 'direct_message/create', to: 'direct_messages#create'
      end
    end
  
  end
end
