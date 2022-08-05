class Api::V1::Auth::DirectMessagesController < ApplicationController
    def create
        message = params[:message]
        
    end
    
    def index
        user_id = params[:user_id].to_i
        target_user = User.find_by(id: user_id)
        message_row_set = DirectMessage.where(
            to_user_id: target_user, 
            from_user_id: current_user.id
        )
        
        message_row_set = DirectMessage.find_by_sql([
            'select * from direct_messages where to_user_id = 1 and from_user_id = 2 union select * from direct_messages where to_user_id = 2 and from_user_id = 1 ORDER BY id DESC'
        ])
        render json: {success: true, message: message_row_set}
    end
end