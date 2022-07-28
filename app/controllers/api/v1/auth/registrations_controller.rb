class Api::V1::Auth::RegistrationsController < ApplicationController
    private
    def sign_up
        params.permit(:email, :password, :password_confirmation)
        
    end
end
