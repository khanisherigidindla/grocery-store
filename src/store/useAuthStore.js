import { create } from "zustand";

const useAuthStore = create((set, get) => ({
  user: null,
  isLoggedIn: false,
  cartCount: 0,
  savedEmail: null,
  savedPassword: null,

  // 🔐 Login
  login: (userData, token, rememberData) => {
    localStorage.setItem("userToken", token);
    localStorage.setItem("user", JSON.stringify(userData));

    if (rememberData) {
      localStorage.setItem("rememberedCredentials", JSON.stringify(rememberData));
    } else {
      localStorage.removeItem("rememberedCredentials");
    }

    set({
      user: userData,
      isLoggedIn: true,
    });
  },

  // ➕ Increase cart count
  incrementCart: (count) => {
    const currentCount = get().cartCount;
    set({ cartCount: currentCount + count });
  },

  setCartCount: (count) => {
    set({ cartCount: count });
  },

  // 🚪 Logout
  logout: () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");

    if (confirmLogout) {
      localStorage.removeItem("userToken");
      localStorage.removeItem("user");
      set({
        user: null,
        isLoggedIn: false,
        cartCount: 0,
      });
    }
  },

  // 🔄 Restore login after refresh
  initializeAuth: () => {
    const token = localStorage.getItem("userToken");
    const storedUser = localStorage.getItem("user");
    const remembered = localStorage.getItem("rememberedCredentials");

    if (token && storedUser) {
      set({
        isLoggedIn: true,
        user: JSON.parse(storedUser),
      });
    }

    if (remembered) {
      const saved = JSON.parse(remembered);
      if (saved.email) {
        set({ savedEmail: saved.email, savedPassword: saved.password });
      }
    }
  },
}));

export default useAuthStore;
