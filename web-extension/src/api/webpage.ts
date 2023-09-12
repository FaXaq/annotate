import axios from "axios";
import { API_URL } from "../utils/env";
import browser from "webextension-polyfill";

export async function fetchWebpage(body: BodyInit | null | undefined) {
    const res = await browser.runtime.sendMessage({
        test: "try"
    })

    if (res.status === 'KO') {
        throw res
    }

    return res
}