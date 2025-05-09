
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-display font-bold text-health-700">
              Saúde
            </span>
            <span className="text-health-500 font-medium ml-1">AZ</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-slate-700 hover:text-health-600 font-medium transition-colors"
            >
              Início
            </Link>
            <Link
              to="/plans"
              className="text-slate-700 hover:text-health-600 font-medium transition-colors"
            >
              Planos
            </Link>
            <Link
              to="/about"
              className="text-slate-700 hover:text-health-600 font-medium transition-colors"
            >
              Sobre
            </Link>
            <Link
              to="/contact"
              className="text-slate-700 hover:text-health-600 font-medium transition-colors"
            >
              Contato
            </Link>
            <Link to="/login">
              <Button variant="outline" className="mr-2">
                Entrar
              </Button>
            </Link>
            <Link to="/register">
              <Button>Contratar Agora</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-slate-700 hover:text-health-600 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-slate-700 hover:text-health-600 font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Início
              </Link>
              <Link
                to="/plans"
                className="text-slate-700 hover:text-health-600 font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Planos
              </Link>
              <Link
                to="/about"
                className="text-slate-700 hover:text-health-600 font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link
                to="/contact"
                className="text-slate-700 hover:text-health-600 font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contato
              </Link>
              <div className="flex flex-col space-y-2 pt-2">
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button variant="outline" className="w-full">
                    Entrar
                  </Button>
                </Link>
                <Link
                  to="/register"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button className="w-full">Contratar Agora</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
