"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/supabase"; // Assuming you've set up Supabase
import { useRouter } from "next/navigation";
import Text_INPUT from "@/components/Text_INPUT/Text_INPUT";

export default function ResetPassword() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<any>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  // Extract the token from the URL hash fragment
  useEffect(() => {
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.replace("#", "?")); // Convert hash to query parameters
    const token = params.get("access_token");

    if (token) {
      setAccessToken(token);
    } else {
      setError("Invalid or missing token.");
    }
  }, []);

  // Handle password reset
  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!accessToken) {
      setError("Invalid or expired token.");
      return;
    }

    try {
      // Call updateUser with the accessToken and new password
      const { error } = await supabase.auth.updateUser({
        password,
      });

      if (error) {
        setError(error.message);
        return;
      }

      setMessage("Your password has been successfully updated.");
      setTimeout(() => {
        router.push("/my-ux-admin"); // Redirect to login page after successful reset
      }, 2000); // Wait 2 seconds before redirecting
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="w-[32rem] mx-auto mobile:w-full mobile:p-[2rem] py-[5rem]">
      <h2 className="mb-[4rem]">Reset Your Password</h2>
      {error && <p className="text-red-600">{error}</p>}
      {message && <p className="text-green-600">{message}</p>}
      <form onSubmit={handleResetPassword}>
        <Text_INPUT
          label="New Password"
          name="password"
          type="password"
          isRequired={true}
          value={password}
          onChange={setPassword}
        />
        <Text_INPUT
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          isRequired={true}
          value={confirmPassword}
          onChange={setConfirmPassword}
        />

        <button className="btn w-full justify-center mt-[6rem]" type="submit">
          Reset Password
        </button>
      </form>
    </div>
  );
}
