"use client";

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const router = useRouter();
  
  // Determine active tab based on pathname
  const getActiveTab = () => {
    if (pathname.startsWith('/admin/dashboard')) return 'dashboard';
    if (pathname.startsWith('/admin/blog')) return 'blog';
    if (pathname.startsWith('/admin/referanslar')) return 'referanslar';
    if (pathname.startsWith('/admin/musteri-gorusleri')) return 'musteri-gorusleri';
    if (pathname.startsWith('/admin/form-verileri')) return 'form-verileri';
    return 'dashboard';
  };

  useEffect(() => {
    // Skip auth check on login page
    if (pathname === '/admin') {
      setIsLoading(false);
      return;
    }

    // Check if user is authenticated
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin');
    } else {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, [pathname, router]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    router.push('/admin');
  };

  // If on login page or loading, just render children
  if (pathname === '/admin' || isLoading) {
    return <>{children}</>;
  }

  // If not authenticated and not on login page, don't render anything
  // (useEffect will redirect to login)
  if (!isAuthenticated && pathname !== '/admin') {
    return null;
  }

  const isActive = (path: string) => {
    return getActiveTab() === path 
      ? 'bg-blue-500 text-white' 
      : 'bg-gray-100 text-gray-700 hover:bg-gray-200';
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/images/robotpos-logo.svg"
              alt="RobotPOS Logo"
              width={150}
              height={50}
              className="w-auto h-auto"
            />
            <h1 className="ml-4 text-2xl font-bold text-gray-900">Admin Panel</h1>
          </div>
          <button
            onClick={handleLogout}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
          >
            <svg
              className="mr-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            Çıkış Yap
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Tabbed Navigation */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <a
                href="/admin/dashboard"
                className={`${isActive('dashboard')} w-1/5 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                  getActiveTab() === 'dashboard' ? 'border-blue-500' : 'border-transparent'
                }`}
              >
                <span className="flex items-center justify-center">
                  <svg
                    className="mr-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Dashboard
                </span>
              </a>
              
              <a
                href="/admin/blog"
                className={`${isActive('blog')} w-1/5 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                  getActiveTab() === 'blog' ? 'border-blue-500' : 'border-transparent'
                }`}
              >
                <span className="flex items-center justify-center">
                  <svg
                    className="mr-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                  Makaleler
                </span>
              </a>
              
              <a
                href="/admin/referanslar"
                className={`${isActive('referanslar')} w-1/5 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                  getActiveTab() === 'referanslar' ? 'border-blue-500' : 'border-transparent'
                }`}
              >
                <span className="flex items-center justify-center">
                  <svg
                    className="mr-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Referanslar
                </span>
              </a>
              
              <a
                href="/admin/musteri-gorusleri"
                className={`${isActive('musteri-gorusleri')} w-1/5 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                  getActiveTab() === 'musteri-gorusleri' ? 'border-blue-500' : 'border-transparent'
                }`}
              >
                <span className="flex items-center justify-center">
                  <svg
                    className="mr-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                  Müşteri Görüşleri
                </span>
              </a>
              
              <a
                href="/admin/form-verileri"
                className={`${isActive('form-verileri')} w-1/5 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                  getActiveTab() === 'form-verileri' ? 'border-blue-500' : 'border-transparent'
                }`}
              >
                <span className="flex items-center justify-center">
                  <svg
                    className="mr-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Form Verileri
                </span>
              </a>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <main className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
