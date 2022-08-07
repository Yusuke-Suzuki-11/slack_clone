class DirectMessageChannel < ApplicationCable::Channel
  def subscribed
    stream_from "direct_message_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def talk(data)
    return ActionCable.server.broadcast 'direct_message_channel', {message: data['message']}
  end
end
