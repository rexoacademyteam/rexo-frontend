import { publicRuntimeConfig } from "@/next.config";
import axios from "axios";

export default function genAxios() {
    const baseURL = publicRuntimeConfig.BASEAPI
    const instance = axios.create({
        baseURL
    })

    return instance
}
