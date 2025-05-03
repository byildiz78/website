"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const modalVariants = cva(
  "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50",
  {
    variants: {
      variant: {
        default: "",
        hidden: "hidden",
      },
    },
    defaultVariants: {
      variant: "hidden",
    },
  }
);

const contentVariants = cva(
  "bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative animate-in fade-in-50 zoom-in-95 duration-300",
  {
    variants: {
      variant: {
        default: "",
        success: "border-l-4 border-green-500",
        error: "border-l-4 border-red-500",
        loading: "border-l-4 border-blue-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ModalProps extends VariantProps<typeof modalVariants> {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  isOpen?: boolean;
  onClose?: () => void;
  contentVariant?: "default" | "success" | "error" | "loading";
  icon?: React.ReactNode;
}

export function Modal({
  children,
  title,
  description,
  isOpen = false,
  onClose,
  contentVariant = "default",
  icon,
}: ModalProps) {
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  // Escape tuşu ile kapatma
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isVisible) {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isVisible]);

  // Body scroll engelleme
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const getIcon = () => {
    if (icon) return icon;
    
    switch (contentVariant) {
      case "success":
        return <CheckCircle className="h-8 w-8 text-green-500" />;
      case "error":
        return <AlertCircle className="h-8 w-8 text-red-500" />;
      case "loading":
        return <Loader2 className="h-8 w-8 text-blue-500 animate-spin" />;
      default:
        return null;
    }
  };

  return (
    <div
      className={cn(modalVariants({ variant: isVisible ? "default" : "hidden" }))}
      onClick={handleClose}
    >
      <div
        className={cn(contentVariants({ variant: contentVariant }))}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none"
          aria-label="Kapat"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-start space-x-4">
          {getIcon() && (
            <div className="flex-shrink-0">
              {getIcon()}
            </div>
          )}
          
          <div className="flex-1">
            {title && <h3 className="text-lg font-medium text-gray-900 mb-1">{title}</h3>}
            {description && <p className="text-sm text-gray-500">{description}</p>}
            {children && <div className="mt-4">{children}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
