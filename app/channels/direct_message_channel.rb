class DirectMessageChannel < ApplicationCable::Channel
  def subscribed
    stream_from "direct_message_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def talk(data)
    
    message = data['message']
    toUserId = data['to_user_id']
    fromUserId = data['from_user_id']

    # ダイレクトメッセージ作成
    directMessage = DirectMessage.new(
      to_user_id: toUserId, 
      from_user_id: fromUserId, 
      message: message
    );
    directMessage.save

    message_row = DirectMessage.find_by_sql([
      "
        select dm.id, dm.to_user_id as toUserId, dm.message, dm.created_at as createdAt, u.id as userId, u.name as userName, u.email as userEmail, u.image as userImageUrl
        from direct_messages as dm
        join users as u
        on u.id = dm.from_user_id
        where dm.id = #{directMessage.id}
      "
    ]).first
    return ActionCable.server.broadcast 'direct_message_channel', {message: message_row}
  end
end
