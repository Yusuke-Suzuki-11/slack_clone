import { client } from "./client";
import Cookies from "js-cookie";

// サインアップ処理
export const getMessageByUserId = (userId) => {
  if (
    !Cookies.get("_access_token") ||
    !Cookies.get("_client") ||
    !Cookies.get("_uid")
  ) return;

  return client
    .get(`api/v1/auth/direct_message/index/${userId.userId}`, {
      headers: {
        "access-token": Cookies.get("_access_token"),
        client: Cookies.get("_client"),
        uid: Cookies.get("_uid"),
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((e) => console.error(e));
};
