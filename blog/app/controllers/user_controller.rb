class UserController < ApplicationController
	def create
		user = User.create(user_params)
		if user.save
			head(:created)
		else
			render :json => {:message => user.errors.messages}, status: :not_acceptable
		end
		
	end


	private 
	def user_params
		params.permit(:email, :password, :password_confirmation)
	end
end
