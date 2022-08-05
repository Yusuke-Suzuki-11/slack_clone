class Api::V1::Auth::DirectMessagesController < ApplicationController
    def create
        message = params[:message]
        
    end
    
    def index
        user_id = params[:user_id].to_i
        target_user = User.find_by(id: user_id)
        message_row_set = DirectMessage.find_by(to_user_id: target_user, from_user_id: current_user.id)
        render json: {success: true, message: message_row_set}
    end
end