import { create } from "zustand";
import Cookies from "universal-cookie";

export const useAuthStore = create((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (status) => set({ isLoggedIn: status }),
}));

// src/store/authStore.js

const cookies = new Cookies();

export const useLoginStore = create((set) => ({
  token: cookies.get("token") || null,
  isLoggedIn: !!cookies.get("token"),

  logout: () => {
    cookies.remove("token", { path: "/" });
    set({ token: null, isLoggedIn: false });
  },
  syncFromCookies: () => {
    const tokenFromCookie = cookies.get("token") || null;
    set({ token: tokenFromCookie, isLoggedIn: !!tokenFromCookie });
  },
}));
