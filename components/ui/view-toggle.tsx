"use client";

import { LayoutGrid, Monitor } from "lucide-react";
import { useLayoutStore } from "@/lib/store";
import { Button } from "@/components/ui/button";

// .env dosyasından layout toggle görünürlük ayarını al
const showLayoutToggle = process.env.NEXT_PUBLIC_SHOW_LAYOUT_TOGGLE === "true";

export function ViewToggle() {
  // Eğer layout toggle gösterilmeyecekse, boş div döndür
  if (!showLayoutToggle) return null;
  
  const { layout, setLayout } = useLayoutStore();

  return (
    <div className="flex items-center gap-2">
      <Button
        variant={layout === "boxed" ? "default" : "outline"}
        size="icon"
        onClick={() => setLayout("boxed")}
        className="w-8 h-8"
        title="Boxed Layout"
      >
        <LayoutGrid className="h-4 w-4" />
      </Button>
      <Button
        variant={layout === "full" ? "default" : "outline"}
        size="icon"
        onClick={() => setLayout("full")}
        className="w-8 h-8"
        title="Full Width Layout"
      >
        <Monitor className="h-4 w-4" />
      </Button>
    </div>
  );
}