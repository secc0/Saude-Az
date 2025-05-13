import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LoginForm from "@/components/ui/LoginForm";
import useRedirectIfAuthenticated from "@/hooks/useRedirectIfAuthenticated";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow flex items-center justify-center bg-slate-50 py-12">
        <LoginForm />
      </main>

      <Footer />
    </div>
  );
};

export default Login;
