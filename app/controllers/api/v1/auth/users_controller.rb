class Api::V1::Auth::UsersController < ApplicationController
    def invite
        
        if current_user.nil?
            render json: {success: false, message: 'ユーザーが見つかりませんでした。'}
            return
        end
        post_email = params[:invite_email]
        target_user = User.find_by(email: post_email)
        if target_user.nil? 
            render json: {success: false, message: 'ユーザーが見つかりませんでした。'}
            return
        end
        
        if current_user.id == target_user.id
            render json: {success: false, message: 'ログインユーザーです。'}
            return
        end
        
        reaction = Reaction.find_or_initialize_by(to_user_id: target_user.id, from_user_id: current_user.id)
        reaction.status = 0
        reaction.save
        
        render json: {success: true, message: target_user}
    end
    
    def direct_message_able
        if current_user.nil?
            render json: {success: false, message: 'ユーザーが見つかりませんでした。'}
            return
        end
        
        user_row_set = User.find_by_sql([
            "
            select *
            from users as u
            where id IN (
                select r.to_user_id from users as u
                join reactions as r
                on u.id = r.from_user_id
                where r.status = 0
                and r.from_user_id = #{current_user.id}
            )
            union
            select *
            from users as u
            where id IN (
                select r.from_user_id from users as u
                join reactions as r
                on u.id = r.to_user_id 
                where r.status = 0
                and r.to_user_id = #{current_user.id}
            )
            "
        ])
        
        render json: {success: true, message: user_row_set}
    end
    
end
