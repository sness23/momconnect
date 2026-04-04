import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { api } from "./api";

interface User {
  id: string;
  email: string;
  name?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("momconnect-token");
    if (!token) {
      setLoading(false);
      return;
    }

    api.get("/api/auth/me")
      .then(setUser)
      .catch(() => localStorage.removeItem("momconnect-token"))
      .finally(() => setLoading(false));
  }, []);

  async function signIn(email: string, password: string) {
    const data = await api.post("/api/auth/signin", { email, password });
    localStorage.setItem("momconnect-token", data.token);
    setUser(data.user);
  }

  async function signUp(email: string, password: string, name: string) {
    const data = await api.post("/api/auth/signup", { email, password, name });
    localStorage.setItem("momconnect-token", data.token);
    setUser(data.user);
  }

  function signOut() {
    localStorage.removeItem("momconnect-token");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
