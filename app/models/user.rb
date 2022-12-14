# frozen_string_literal: true

class User < ActiveRecord::Base
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :validatable, :confirmable
  include DeviseTokenAuth::Concerns::User
  
  has_many :reactions
  has_many :direct_messages
end
