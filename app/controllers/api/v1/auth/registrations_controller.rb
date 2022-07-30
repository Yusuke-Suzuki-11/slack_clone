class Api::V1::Auth::RegistrationsController < DeviseTokenAuth::RegistrationsController
    private
    def sign_up
        params.permit(:email, :password, :password_confirmation)
    end
end
