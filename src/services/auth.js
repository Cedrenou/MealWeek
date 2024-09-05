// src/auth.js
import { supabase } from "./supabase";

export const signUp = async (email, password) => {
  const { user, error } = await supabase.auth.signUp({ email, password });
  if (error) {
    console.error("SIGNUP error : ", error);
    throw error;
  }
  return user;
};

export const signIn = async (email, password) => {
  const { user, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    throw error;
  }
  return user;
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};

export const getCurrentUser = () => {
  return supabase.auth.getUser();
};
