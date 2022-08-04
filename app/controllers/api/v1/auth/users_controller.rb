class Api::V1::Auth::UsersController < ApplicationController
    def invite
        targetUser = User.find_by(email: params['invite_email'])
        if targetUser.nil? 
            render json: {success: false, message: 'ユーザーが見つかりませんでした。'}
            return
        end
        
        
        
        render json: {success: true, message: targetUser.nil?}
        # render json: {success: true, message: params['invite_email']}
    end
end
