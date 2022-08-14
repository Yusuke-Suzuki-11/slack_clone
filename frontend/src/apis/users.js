import { client } from "./client";
import Cookies from "js-cookie";

// サインアップ処理
export const userInvite = (params) => {
  if (
    !Cookies.get("_access_token") ||
    !Cookies.get("_client") ||
    !Cookies.get("_uid")
  )
    return;

  return client
    .post("api/v1/auth/account/invite", params, {
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

export const getDirectMessageAbleUsers = () => {
  if (
    !Cookies.get("_access_token") ||
    !Cookies.get("_client") ||
    !Cookies.get("_uid")
  )
    return;

  return client
    .get("api/v1/auth/account/direct_message", {
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
