"use client";
import { useDispatch, useSelector } from "react-redux"
import { loginGuest, loginUser, logout } from "@/store/slice/auth"
import useAxios from "./useAxios"

export default function useAuth() {
    const axios = useAxios()

    const store = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const loggedIn = useSelector(state => state.auth.loggedIn)
    const loaded = useSelector(state => state.auth.loaded)
    const profile = useSelector(state => state.auth.profile)

    async function Login(form) {
        try {
            let resp = await axios.post("/api/auth/login/", form)
            localStorage.setItem("token", resp.data?.token)
            try {
                let profileRes = await axios.get("/api/auth/users/me/")
                dispatch(loginUser({ profile: profileRes.data }))
                return { success: true }
            } catch { }
        } catch (err) {
            if (err.response?.status == 401) {
                return { success: false, code: 1, message: "نام کاربری یا رمز عبور درست نیست" }
            }
            return { success: false, code: 2, message: "خطایی رخ داد" }
        }
        return { success: false, code: 2, message: "خطایی رخ داد" }
    }

    async function Logout() {
        localStorage.removeItem("token")
        dispatch(logout())
    }

    async function Load() {
        let token = localStorage.getItem("token")

        if (!token) { dispatch(loginGuest()); return }

        try {
            let profileRes = await axios.get("/api/auth/users/me/")
            dispatch(loginUser({ profile: profileRes.data }))
        } catch {
            Logout()
            localStorage.removeItem("token")
            dispatch(loginGuest())
        }
    }

    async function Update() {
        try {
            let prof_resp = await axios.get("/api/auth/users/me/")
            let me = prof_resp.data
            dispatch(loginUser({ profile: me }))

        } catch(err) {
            console.log(err)
        }
    }

    return { Login, Logout, Load, Update, store, loggedIn, loaded, profile }
}
