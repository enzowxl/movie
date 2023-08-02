import React, { ReactNode, createContext, useState, useEffect } from "react";
import { UserSignInProps, UserSignUpProps } from "../types/types";
import { apiServer } from "../constants";
import { ToastAndroid } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface Props {
  children: ReactNode;
}

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  token: string;
}

export const AuthContext = createContext<{
  user: User | null;
  logged: boolean;
  signIn: any;
  signUp: any;
  signOut: any;
}>({
  user: null,
  logged: false,
  signIn: () => {},
  signUp: () => {},
  signOut: () => {},
});

export default function Provider({ children }: Props) {
  const n = useNavigation<any>();

  const [user, updateUser] = useState<User | null>(null);

  async function signIn({ email, password }: UserSignInProps) {
    if (email.length === 0 || password.length === 0)
      return ToastAndroid.show("Please, fill in all", ToastAndroid.SHORT);

    await apiServer
      .post("session", {
        email: email,
        password: password,
      })
      .then((res) => {
        updateUser(res.data);
      })
      .catch((e) => console.log(e));
  }

  async function signUp({
    username,
    email,
    password,
    confirmPassword,
  }: UserSignUpProps) {
    if (
      username.length === 0 ||
      email.length === 0 ||
      password.length === 0 ||
      confirmPassword.length === 0
    )
      return ToastAndroid.show("Please, fill in all", ToastAndroid.SHORT);

    if (password !== confirmPassword)
      return ToastAndroid.show("Password is not match", ToastAndroid.SHORT);

    await apiServer
      .post("create/user", {
        name: username,
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        ToastAndroid.show("Account created", ToastAndroid.SHORT);
        n.navigate("SignIn");
      })
      .catch((e) => console.log(e));
  }

  async function signOut() {
    updateUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        logged: !!user,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
