import Cookies from "js-cookie";
import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { signIn } from "../apis/auth";
import { AuthContext } from "../App";

export const SignIn = () => {
  const { setIsSignedIn, setCurrentUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const generateParams = () => {
    const signInParams = {
      email: email,
      password: password,
    };
    return signInParams;
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    const params = generateParams();

    const res = await signIn(params).then((value) => {
      return value;
    });
    try {
      if (res.status === 200) {
        Cookies.set("_access_token", res.headers["access-token"]);
        Cookies.set("_client", res.headers["client"]);
        Cookies.set("_uid", res.headers["uid"]);
        setIsSignedIn(true);
        setCurrentUser(res.data);
        history.push("/");
      }
    } catch (e) {
      console.log("ログインに失敗しました。");
    }
  };
  return (
    <>
      <div className="py-14 ">
        <div className="py-6 bg-white sm:py-8 lg:py-12">
          <div className="px-4 mx-auto max-w-screen-2xl md:px-8">
            {/* <img
                src="images/logo.svg" alt=""
                className="block m-auto mb-5 w-36"
            /> */}
            <h2 className="mb-4 text-2xl font-bold text-center text-gray-800 lg:text-3xl md:mb-8">
              ログイン
            </h2>
            <form className="max-w-lg mx-auto border rounded-lg">
              <div className="flex flex-col gap-4 p-4 md:p-8">
                <div>
                  <label
                    htmlFor="email"
                    className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
                  >
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    value={email}
                    className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 focus:ring ring-indigo-300"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
                  >
                    Password
                  </label>
                  <input
                    name="password"
                    type="password"
                    id="password"
                    value={password}
                    className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 focus:ring ring-indigo-300"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  onClick={(e) => handleSignInSubmit(e)}
                  className="block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-gray-800 rounded-lg outline-none hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-gray-300 md:text-base"
                >
                  Log In
                </button>
                <div className="relative flex items-center justify-center">
                  <span className="absolute inset-x-0 h-px bg-gray-300"></span>
                  <span className="relative px-4 text-sm text-gray-400 bg-white">
                    Log in with social
                  </span>
                </div>
                <button className="flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-blue-500 rounded-lg outline-none hover:bg-blue-600 active:bg-blue-700 focus-visible:ring ring-blue-300 md:text-base">
                  <svg
                    className="w-5 h-5 shrink-0"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 0C5.37273 0 0 5.37273 0 12C0 18.0164 4.43182 22.9838 10.2065 23.8516V15.1805H7.23764V12.0262H10.2065V9.92727C10.2065 6.45218 11.8996 4.92655 14.7878 4.92655C16.1711 4.92655 16.9025 5.02909 17.2489 5.076V7.82945H15.2787C14.0525 7.82945 13.6244 8.99182 13.6244 10.302V12.0262H17.2178L16.7302 15.1805H13.6244V23.8773C19.4815 23.0825 24 18.0747 24 12C24 5.37273 18.6273 0 12 0Z"
                      fill="white"
                    />
                  </svg>
                  Continue with Facebook
                </button>
                <button className="flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold text-center text-gray-800 transition duration-100 bg-white border border-gray-300 rounded-lg outline-none hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-gray-300 md:text-base">
                  <svg
                    className="w-5 h-5 shrink-0"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.7449 12.27C23.7449 11.48 23.6749 10.73 23.5549 10H12.2549V14.51H18.7249C18.4349 15.99 17.5849 17.24 16.3249 18.09V21.09H20.1849C22.4449 19 23.7449 15.92 23.7449 12.27Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12.2549 24C15.4949 24 18.2049 22.92 20.1849 21.09L16.3249 18.09C15.2449 18.81 13.8749 19.25 12.2549 19.25C9.12492 19.25 6.47492 17.14 5.52492 14.29H1.54492V17.38C3.51492 21.3 7.56492 24 12.2549 24Z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.52488 14.29C5.27488 13.57 5.14488 12.8 5.14488 12C5.14488 11.2 5.28488 10.43 5.52488 9.71V6.62H1.54488C0.724882 8.24 0.254883 10.06 0.254883 12C0.254883 13.94 0.724882 15.76 1.54488 17.38L5.52488 14.29Z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12.2549 4.75C14.0249 4.75 15.6049 5.36 16.8549 6.55L20.2749 3.13C18.2049 1.19 15.4949 0 12.2549 0C7.56492 0 3.51492 2.7 1.54492 6.62L5.52492 9.71C6.47492 6.86 9.12492 4.75 12.2549 4.75Z"
                      fill="#EA4335"
                    />
                  </svg>
                  Continue with Google
                </button>
              </div>
              <div className="flex items-center justify-center p-4 bg-gray-100">
                <p className="text-sm text-center text-gray-500">
                  Don't have an account?{" "}
                  <a
                    href="#"
                    className="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                  >
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>

        <Link to="/signup">サインアップへ</Link>
      </div>
    </>
  );
};
