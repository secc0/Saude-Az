import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RegisterForm from "@/components/ui/RegisterForm";
import useRedirectIfAuthenticated from "@/hooks/useRedirectIfAuthenticated";

const Register = () => {
  useRedirectIfAuthenticated();
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow flex items-center justify-center bg-slate-50 py-12">
        <RegisterForm />
      </main>

      <Footer />
    </div>
  );
};

export default Register;
