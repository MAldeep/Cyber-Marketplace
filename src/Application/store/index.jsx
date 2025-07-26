import { create } from "zustand";

export const isLoggedIn = create((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (status) => set({ isLoggedIn: status }),
}));

// export const useCompany = create((set) => ({
//   company : 
// }))