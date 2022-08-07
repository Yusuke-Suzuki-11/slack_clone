
import ActionCable from "actioncable";

import { DEFAULT_API_LOCALHOST } from "../urls";


const cable = ActionCable.createConsumer(`${DEFAULT_API_LOCALHOST}/cable`);
export const directMessageChannel = cable.subscriptions.create("DirectMessageChannel", {
  connected() {
    console.log('connected');
  },
  disconnected() {
    console.log('wow');
  },
  received(data) {
    console.log(data);
  },
  talk(msg) {
    console.log(this.perform('talk', {message: msg}))

  }
})
