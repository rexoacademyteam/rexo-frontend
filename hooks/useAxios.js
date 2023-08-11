"use client";

import { publicRuntimeConfig } from "@/next.config";
import axios from "axios";

export default function useAxios() {
    const baseURL = publicRuntimeConfig.BASEAPI

    const instance = axios.create({
        baseURL
    })

    instance.interceptors.request.use(
        async config => {
            const token = localStorage.getItem("token")

            if (token && config.url.startsWith("/")) {
                config.headers.Authorization = `Bearer ${token}`
            }

            return config
        },
        error => {
            Promise.reject(error)
        }
    )

    return instance
}
