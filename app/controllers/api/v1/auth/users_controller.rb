class Api::V1::Auth::UsersController < ApplicationController
    def invite
        
        render json: {success: true, message: params['invite_email']}
    end
end
