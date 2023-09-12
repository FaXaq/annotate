import browser, { Runtime } from 'webextension-polyfill';
import { API_URL } from '../utils/env';
import axios from 'axios';

function handleApiCall(msg: any, sender: Runtime.MessageSender, sendResponse: (o: any) => void): boolean | void | Promise<any> {
  console.log('API CALL', msg);

  async function interalApiCall() {
    try {
      const res = await fetch(`${API_URL}/webpage`, { method: "POST" })
      const resBody = await res.json()
      sendResponse({ status: res.status, data: resBody })
    } catch (err) {
      console.log(err)
      sendResponse({ status: 'KO', data: err })
    }
  }

  interalApiCall()

  return true
}

// ts-ignore 
browser.runtime.onMessage.addListener(handleApiCall);