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
            'select dm.id, dm.to_user_id, dm.message, dm.created_at, u.id as user_id, u.name as user_name, u.email as user_email
            from direct_messages as dm
            join users as u
            on u.id = dm.from_user_id
            where to_user_id = 1 and from_user_id = 2
            union 
            select dm.id, dm.to_user_id, dm.message, dm.created_at, u.id as user_id, u.name as user_name, u.email as user_email
            from direct_messages as dm
            join users as u
            on u.id = dm.from_user_id
            where to_user_id = 2 and from_user_id = 1
            ORDER BY id DESC'
            # 'select * from direct_messages where to_user_id = 1 and from_user_id = 2 union select * from direct_messages where to_user_id = 2 and from_user_id = 1 ORDER BY id DESC'
        ])
        render json: {success: true, message: message_row_set}
    end
end