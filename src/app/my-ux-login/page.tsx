"use client";

import { useRouter } from "next/navigation"; // Import useRouter
import { supabase } from "@/supabase"; // Assuming you've set up Supabase
import React, { useState } from "react";
import Text_INPUT from "@/components/Text_INPUT/Text_INPUT";

export default function Login() {
  const email = "domassirbike@gmail.com";
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter(); // Initialize useRouter

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Sign in the user with email and password
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(error.message);
        return;
      }

      // Check if the logged-in user is the admin
      if (data?.user?.email === email) {
        console.log("Logged in as admin:", data?.user);
        router.push("/my-ux-admin"); // Redirect to admin page
      } else {
        setError("Unauthorized: You are not the admin.");
        console.log("Unauthorized login attempt:", data?.user?.email);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="w-[32rem] mx-auto mobile:w-full mobile:p-[2rem] py-[5rem]">
      <h2 className="mb-[4rem]">Admin login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleLogin}>
        <Text_INPUT
          label="Password"
          name="password"
          type="password"
          isRequired={true}
          value={password}
          onChange={setPassword}
        />

        <button className="btn w-full justify-center mt-[6rem]" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
