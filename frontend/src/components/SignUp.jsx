import Cookies from "js-cookie";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { signUp } from '../apis/auth';
import { AuthContext } from "../App";

export const SignUp = () => {
    const { setIsSignedIn, setCurrentUser } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const confirmSuccessUrl = "http://localhost:3000";

    const generateParams = () => {
        const signUpParams = {
            email: email,
            password: password,
            passwordConfirmation: passwordConfirmation,
            confirmSuccessUrl: confirmSuccessUrl,
        };
        return signUpParams;
    };

    const handleSignUpSubmit = async (e) => {
        e.preventDefault();
        const params = generateParams();
        try {
            const res = await signUp(params);
            console.log(res);
            alert("confirm email");
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <>
            <div className="py-14   ">

                <div className="bg-white py-6 sm:py-8 lg:py-12">
                    <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                        <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">アカウント作成</h2>

                        <form className="max-w-lg border rounded-lg mx-auto">
                            <div className="flex flex-col gap-4 p-4 md:p-8">
                                <div>
                                    <label htmlFor="email" className="inline-block text-gray-800 text-sm sm:text-base mb-2">Email</label>
                                    <input
                                        name="email"
                                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="password" className="inline-block text-gray-800 text-sm sm:text-base mb-2">パスワード</label>
                                    <input
                                        name="password"
                                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                                        id="password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="password_confirmation" className="inline-block text-gray-800 text-sm sm:text-base mb-2">パスワード（確認）</label>
                                    <input
                                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                                        type="password"
                                        id="password_confirmation"
                                        name="password_confirmation"
                                        value={passwordConfirmation}
                                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                                    />
                                </div>


                                <input
                                    type="hidden"
                                    id="confirm_success_url"
                                    name="confirm_success_url"
                                    value={confirmSuccessUrl}
                                />

                                <button
                                    className="block bg-gray-800 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                                    type="submit"
                                    onClick={(e) => handleSignUpSubmit(e)}
                                >
                                    Sign Up
                                </button>

                            </div>

                        </form>
                    </div>
                </div>

                <Link to="/signin">サインインへ</Link>
            </div>
        </>
    );
};