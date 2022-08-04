class Api::V1::Auth::UsersController < ApplicationController
    def invite
        current_user_const = User.find_by(id: 1)
        
        post_email = params[:params][:invite_email]
        targetUser = User.find_by(email: post_email)
        if targetUser.nil? 
            render json: {success: false, message: 'ユーザーが見つかりませんでした。'}
            return
        end
        
        if current_user_const.id == targetUser.id
            return
        end
        
        # reaction = Reaction.find_or_initialize_by(to_user_id: params[:user_id], from_user_id: current_user.id)
        # reaction.update_attributes(
        #     status: 1
        # )
        
        
        
        render json: {success: true, message: current_user}
    end
end
