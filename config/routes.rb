Rails.application.routes.draw do
 resources :architecturals, only: [:index,:show, :create]
 resources :webdevs, only: [:index,:create]
end
