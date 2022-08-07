class Api::V1::Auth::DirectMessagesController < ApplicationController
    def create
        message = params[:message]
        toUserId = params[:to_user_id]
        
        # ダイレクトメッセージ作成
        directMessage = DirectMessage.new(
                to_user_id: params[:to_user_id], 
                from_user_id: current_user.id, 
                message: params[:message]
            );
        directMessage.save
        
        message_row = DirectMessage.find_by_sql([
            "select dm.id, dm.to_user_id, dm.message, dm.created_at, u.id as user_id, u.name as user_name, u.email as user_email, u.image as user_image_url
            from direct_messages as dm
            join users as u
            on u.id = dm.from_user_id
            where dm.id = #{directMessage.id}
            "
        ])
        
        
        render json: {success: true, message: message_row.first()}
    end
    
    def index
        user_id = params[:user_id].to_i
        target_user = User.find_by(id: user_id)
        message_row_set = DirectMessage.where(
            to_user_id: target_user, 
            from_user_id: current_user.id
        )
        
        message_row_set = DirectMessage.find_by_sql([
            "select dm.id, dm.to_user_id, dm.message, dm.created_at, u.id as user_id, u.name as user_name, u.email as user_email, u.image as user_image_url
            from direct_messages as dm
            join users as u
            on u.id = dm.from_user_id
            where to_user_id =  #{target_user.id} and from_user_id = #{current_user.id}
            union 
            select dm.id, dm.to_user_id, dm.message, dm.created_at, u.id as user_id, u.name as user_name, u.email as user_email, u.image as user_image_url
            from direct_messages as dm
            join users as u
            on u.id = dm.from_user_id
            where to_user_id = #{current_user.id} and from_user_id = #{target_user.id}
            ORDER BY id ASC"
        ])
        render json: {success: true, message: message_row_set}
    end
end