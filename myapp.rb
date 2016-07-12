# myapp.rb
require 'sinatra'

get '/' do
	logger.info "loading data"
	erb :index
end

get '/login' do
	logger.info "get login"
  "Hello World"
end

post "/login" do
  #request.body.rewind  # in case someone already read it
  #data = JSON.parse request.body.read
  email = params['email']
  password = params['password']
  logger.info email
  if email=="example@example.com" && password=="123"
  	logger.info "email and password match"
  	"Hello World!"
  else
  	logger.info "incorrect password"
  	"incorrect password"
  end
end