"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";

interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  city: string;
  message: string;
  date: string;
  filePath: string;
}

export default function FormVerileri() {
  const [formEntries, setFormEntries] = useState<FormData[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    async function fetchFormData() {
      try {
        // public/form-data dizinindeki tüm JSON dosyalarını listele
        const response = await fetch('/api/list-form-data');
        if (!response.ok) {
          throw new Error('Form verilerini getirirken hata oluştu');
        }
        
        const data = await response.json();
        setFormEntries(data.formEntries);
      } catch (error) {
        console.error('Form verilerini yükleme hatası:', error);
        toast({
          title: "Hata",
          description: "Form verileri yüklenirken bir hata oluştu.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    }

    fetchFormData();
  }, [toast]);

  // Tarihe göre sırala (en yeniden en eskiye)
  const sortedEntries = [...formEntries].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Form Verileri</h1>
        <Link href="/">
          <Button variant="outline">Ana Sayfaya Dön</Button>
        </Link>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-lg">Veriler yükleniyor...</p>
        </div>
      ) : sortedEntries.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-lg text-gray-500">Henüz form verisi bulunmuyor.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedEntries.map((entry, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="bg-blue-50">
                <CardTitle>{entry.name}</CardTitle>
                <CardDescription>
                  {new Date(entry.date).toLocaleString('tr-TR')}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <p><span className="font-medium">Firma:</span> {entry.company}</p>
                  <p><span className="font-medium">Telefon:</span> {entry.phone}</p>
                  <p><span className="font-medium">E-posta:</span> {entry.email}</p>
                  <p><span className="font-medium">Şehir:</span> {entry.city}</p>
                  {entry.message && (
                    <div>
                      <p className="font-medium">Mesaj:</p>
                      <p className="mt-1 text-gray-600">{entry.message}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
