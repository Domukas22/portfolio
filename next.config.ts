import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["peqzwbqszuogacqebfev.supabase.co"],
  },
  devIndicators: {
    appIsrStatus: false, // Disable the Static Indicator, the little icon in bottom left corner
  },
};

export default nextConfig;
