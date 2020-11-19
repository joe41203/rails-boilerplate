Rails.application.routes.draw do
  mount GraphiQL::Rails::Engine, :at => '/graphiql', :graphql_path => '/graphql' if ENV.fetch('GRAPHIQL_ENABLED', false)
  post '/graphql', :to => 'graphql#execute'
  root :to => 'welcom#index'
end
