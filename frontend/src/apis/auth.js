import { client } from "./client";
import Cookies from "js-cookie";

// サインアップ処理
export const signup = (params) => {
    return client.post('auth', params)
        .then(response => {
            return response.data;
        })
        .catch((e) => console.error(e));
}

// サインイン
export const signIn = (params) => {
    return client.post("/auth/sign_in", params)
        .then(response => {
            return response.data;
        })
        .catch((e) => console.error(e));
};

// サインアウト
export const signOut = () => {
    return client.delete("/auth/sign_out", {
        headers: {
            "access-token": Cookies.get("_access_token"),
            client: Cookies.get("_client"),
            uid: Cookies.get("_uid"),
        },
    });
};

// ログインユーザーの取得
export const getCurrentUser = () => {
    if (
        !Cookies.get("_access_token") ||
        !Cookies.get("_client") ||
        !Cookies.get("_uid")
    ) return;

    return client.get("/auth/sessions", {
        headers: {
            "access-token": Cookies.get("_access_token"),
            client: Cookies.get("_client"),
            uid: Cookies.get("_uid"),
        },
    });
};

