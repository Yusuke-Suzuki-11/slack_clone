import { client } from "./client";

// サインアップ処理
export const userInvite = (params) => {
    return client.post('api/v1/auth/account/invite', params)
        .then(response => {
            console.log(response);
            return response.data;
        })
        .catch((e) => console.error(e));
}
