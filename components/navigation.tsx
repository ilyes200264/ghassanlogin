"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, LogIn, User, Loader2 } from "lucide-react"
import { useAuth } from "@/components/auth-provider"
import Link from "next/link"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, loading } = useAuth()

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-primary">Centre Communautaire de Salaberry</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#accueil"
                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Accueil
              </a>
              <a
                href="#services"
                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Services
              </a>
              <a
                href="#a-propos"
                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                À Propos
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </a>
              {loading ? (
                <Button variant="outline" size="sm" className="ml-4" disabled>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Chargement...
                </Button>
              ) : user ? (
                <Link href="/dashboard">
                  <Button variant="outline" size="sm" className="ml-4">
                    <User className="h-4 w-4 mr-2" />
                    Dashboard
                  </Button>
                </Link>
              ) : (
                <Link href="/login">
                  <Button variant="outline" size="sm" className="ml-4">
                    <LogIn className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                </Link>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
            <a
              href="#accueil"
              className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Accueil
            </a>
            <a
              href="#services"
              className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Services
            </a>
            <a
              href="#a-propos"
              className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              À Propos
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Contact
            </a>
            {loading ? (
              <div className="pt-2 border-t border-border">
                <Button variant="outline" size="sm" className="w-full" disabled>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Chargement...
                </Button>
              </div>
            ) : user ? (
              <div className="pt-2 border-t border-border">
                <Link href="/dashboard">
                  <Button variant="outline" size="sm" className="w-full">
                    <User className="h-4 w-4 mr-2" />
                    Dashboard
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="pt-2 border-t border-border">
                <Link href="/login">
                  <Button variant="outline" size="sm" className="w-full">
                    <LogIn className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
