import React, {createContext, useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { AxiosResponse } from 'axios';

import { ResponseSignInUser, User } from "../models/User";
import api from '../services/api';

interface AuthContextData {
  signed: boolean;
  user: User | any;
  loading: boolean;
  signIn(
    email: string,
    senha: string
  ): Promise<AxiosResponse<ResponseSignInUser>>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoregedData() {
      const storegedUser = await AsyncStorage.getItem("@Auth:user");
      const storegedToken = await AsyncStorage.getItem("@Auth:token");

      await new Promise((resolve) => setTimeout(resolve, 2000));

      if (storegedUser && storegedToken) {
        setUser(JSON.parse(storegedUser));
        setLoading(false);
      } else if (!storegedUser) {
        setLoading(false);
      }
    }

    loadStoregedData();
  }, []);

  async function signIn(email: string, senha: string) {
    const response = await api.post<ResponseSignInUser>("/users/auth", {
      email,
      senha,
    });

    if (response.data.user) {
      setUser(response.data.user);
      await AsyncStorage.setItem("@Auth:user", JSON.stringify(response.data.user));
      await AsyncStorage.setItem("@Auth:token", response.data.token);
    }
    return response;
  }

  async function signOut() {
    await AsyncStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}