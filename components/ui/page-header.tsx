import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
  centered?: boolean;
}

export function PageHeader({ title, description, className, centered = false }: PageHeaderProps) {
  return (
    <div className={cn("bg-blue-50 py-12 md:py-16", className)}>
      <Container>
        <div className={cn("max-w-3xl", centered && "mx-auto text-center")}>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-gray-600">{description}</p>
          )}
        </div>
      </Container>
    </div>
  );
}
