import { createContext, useState, useEffect } from "react";

export const ContextStore = createContext(null);

export const ContextProvider = ({ children }) => {

  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const token = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");

    if (token) {
      setIsLogin(true);
    }

    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch {
        setUser(null);
      }
    }

    setLoading(false);

  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setIsLogin(false);
    setUser(null);
  };

  return (
    <ContextStore.Provider
      value={{
        isLogin,
        setIsLogin,
        user,
        setUser,
        loading,
        logout
      }}
    >
      {children}
    </ContextStore.Provider>
  );
};