import { client } from "./client";
import Cookies from "js-cookie";
import { directMessageChannel } from "../consumer/direct_message_channel";

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

export const apiSendMessage = (message, toUserId) => {
  if (
    !Cookies.get("_access_token") ||
    !Cookies.get("_client") ||
    !Cookies.get("_uid")
  ) return;
  alert('test');
  
  directMessageChannel.talk('unko').then(
    (value) => {
      alert('成功');
    }
  )

  // return client
  //   .post(
  //     `api/v1/auth/direct_message/create`, 
  //     {
  //       message: message,
  //       to_user_id: toUserId
  //     }, 
  //     { 
  //       headers: {
  //         "access-token": Cookies.get("_access_token"),
  //         client: Cookies.get("_client"),
  //         uid: Cookies.get("_uid"),
  //       },
  //     }
  //   )
  //   .then((response) => {
  //     console.log(response.data);
  //     return response.data;
  //   })
  //   .catch((e) => console.error(e));
};
