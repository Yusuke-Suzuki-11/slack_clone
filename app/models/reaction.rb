class Reaction < ApplicationRecord
    
    belongs_to :to_user, class_name: 'User'
    belongs_to :from_user, class_name: 'User'
    
    enum status: { invite: 0, rejection: 1 }
end
