Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'tasks/index'
      post 'tasks/create'      
      put 'tasks/update'
      delete 'tasks/:id', to: 'tasks#destroy'
    end
  end


  root 'tasks#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
