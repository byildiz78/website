'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { 
  Menu, 
  X, 
  ChevronRight,
  ShoppingCart,
  Package,
  Users,
  Percent,
  BarChart2,
  Clock,
  Building2,
  Info,
  Star,
  MessageCircle,
  Newspaper,
  FileText,
  Briefcase,
  Mail,
  Monitor,
  Tablet,
  Phone as MobilePhone,
  CreditCard,
  QrCode,
  Link as LinkIcon
} from "lucide-react";

type NavItem = {
  title: string;
  href: string;
  description?: string;
  icon?: React.ReactNode;
  children?: NavItem[];
};

const navItems: NavItem[] = [
  {
    title: "Ürünler",
    href: "/urunler",
    children: [
      {
        title: "Yazılım Ürünleri",
        href: "/urunler/yazilim-urunleri",
        description: "Restoran ve cafe işletmeleri için kapsamlı yazılım çözümleri",
        icon: <Monitor className="w-5 h-5 text-blue-600" />,
        children: [
          {
            title: "Satış Noktası (POS)",
            href: "/urunler/yazilim-urunleri/satis-noktasi-pos",
            description: "Her tip gıda işletmesinde kullanılabilen POS sistemi",
            icon: <ShoppingCart className="w-5 h-5 text-blue-600" />,
          },
          {
            title: "Stok Maliyet Yönetimi",
            href: "/urunler/yazilim-urunleri/stok-maliyet-yonetimi",
            description: "Stok ve maliyet takibi için kapsamlı çözümler",
            icon: <Package className="w-5 h-5 text-blue-600" />,
          },
          {
            title: "Sadakat ve Kazanç Arttırıcı Çözümler",
            href: "/urunler/yazilim-urunleri/sadakat-ve-kazanc-arttirici-cozumler",
            description: "Müşteri sadakat programları ve kazanç artırıcı çözümler",
            icon: <Users className="w-5 h-5 text-blue-600" />,
          },
          {
            title: "İş Verimliliği",
            href: "/urunler/yazilim-urunleri/is-verimliligi",
            description: "İş süreçlerinizi optimize eden çözümler",
            icon: <Clock className="w-5 h-5 text-blue-600" />,
          },
          {
            title: "Raporlama ve Analiz",
            href: "/urunler/yazilim-urunleri/raporlama-ve-analiz",
            description: "Kapsamlı raporlama ve analiz araçları",
            icon: <BarChart2 className="w-5 h-5 text-blue-600" />,
          },
          {
            title: "Zincir Mağaza Yönetimi",
            href: "/urunler/yazilim-urunleri/zincir-magaza-yonetimi",
            description: "Çoklu şube yönetimi için entegre çözümler",
            icon: <Building2 className="w-5 h-5 text-blue-600" />,
          },
          {
            title: "QR Menü",
            href: "/robotpos-cozum-uretir/qr-menu-siparis",
            description: "Dijital menü ve mobil sipariş çözümleri",
            icon: <QrCode className="w-5 h-5 text-blue-600" />,
          },
          {
            title: "Entegrasyonlar",
            href: "/urunler/yazilim-urunleri/entegrasyonlar",
            description: "3. parti yazılımlarla entegrasyon seçenekleri",
            icon: <LinkIcon className="w-5 h-5 text-blue-600" />,
          },
        ]
      },
      {
        title: "Donanım Ürünleri",
        href: "/urunler/donanim-urunleri",
        description: "Profesyonel donanım çözümleri",
        icon: <Monitor className="w-5 h-5 text-blue-600" />,
        children: [
          {
            title: "Dokunmatik Terminal",
            href: "/urunler/donanim-urunleri/dokunmatik-terminal",
            description: "Profesyonel dokunmatik POS terminalleri",
            icon: <Monitor className="w-5 h-5 text-blue-600" />,
          },
          {
            title: "Mobil Terminaller",
            href: "/urunler/donanim-urunleri/mobil-terminaller",
            description: "Garson el terminalleri ve mobil POS cihazları",
            icon: <MobilePhone className="w-5 h-5 text-blue-600" />,
          },
          {
            title: "ÖKC Ürünleri",
            href: "/urunler/donanim-urunleri/okc-urunleri",
            description: "Yeni nesil ödeme kaydedici cihazlar",
            icon: <CreditCard className="w-5 h-5 text-blue-600" />,
          },
          {
            title: "Para Çekmecesi",
            href: "/urunler/donanim-urunleri/para-cekmecesi",
            description: "Güvenli para saklama çözümleri",
            icon: <Package className="w-5 h-5 text-blue-600" />,
          },
          {
            title: "Self Servis Kiosk",
            href: "/urunler/donanim-urunleri/self-servis-kiosk",
            description: "Self servis sipariş kioskları",
            icon: <Monitor className="w-5 h-5 text-blue-600" />,
          },
        ]
      }
    ],
  },
  {
    title: "Referanslar",
    href: "/referanslar",
  },
  {
    title: "Müşteri",
    href: "/musteri",
  },
  {
    title: "Haberler",
    href: "/haberler",
  },
  {
    title: "SSS",
    href: "/sss",
  },
  {
    title: "Kurumsal",
    href: "/kurumsal",
    children: [
      {
        title: "Hakkımızda",
        href: "/kurumsal/hakkimizda",
        description: "RobotPOS'un hikayesi ve misyonu",
        icon: <Info className="w-5 h-5 text-blue-600" />,
      },
      {
        title: "Referanslarımız",
        href: "/referanslar",
        description: "Müşterilerimiz ve başarı hikayeleri",
        icon: <Star className="w-5 h-5 text-blue-600" />,
      },
      {
        title: "Müşteri Görüşleri",
        href: "/kurumsal/musteri-gorusleri",
        description: "Müşterilerimizin deneyimleri",
        icon: <MessageCircle className="w-5 h-5 text-blue-600" />,
      },
      {
        title: "Bizden Haberler",
        href: "/haberler",
        description: "En son haberler ve duyurular",
        icon: <Newspaper className="w-5 h-5 text-blue-600" />,
      },
      {
        title: "Restoran Yazılımı Makaleleri",
        href: "/kurumsal/makaleler",
        description: "Sektörel bilgi ve makaleler",
        icon: <FileText className="w-5 h-5 text-blue-600" />,
      },
      {
        title: "Kariyer",
        href: "/kurumsal/kariyer",
        description: "RobotPOS'ta kariyer fırsatları",
        icon: <Briefcase className="w-5 h-5 text-blue-600" />,
      },
      {
        title: "İletişim",
        href: "/iletisim",
        description: "Bize ulaşın",
        icon: <Mail className="w-5 h-5 text-blue-600" />,
      },
    ],
  },
  {
    title: "İletişim",
    href: "/iletisim",
  },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "group block select-none space-y-1 rounded-lg p-4 leading-none no-underline outline-none transition-colors",
            "hover:bg-blue-50 hover:text-blue-600",
            "focus:bg-blue-50 focus:text-blue-600",
            className
          )}
          {...props}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {icon && (
                <div className="p-2 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors">
                  {icon}
                </div>
              )}
              <div>
                <div className="text-base font-medium leading-none mb-1">{title}</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-blue-600/70">
                  {children}
                </p>
              </div>
            </div>
            <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderMenuItems = (items: NavItem[]) => {
    return items.map((item) => (
      <div key={item.title} className="py-2">
        {item.children ? (
          <details className="group">
            <summary className="flex cursor-pointer items-center justify-between font-medium hover:text-blue-600 transition-colors">
              {item.title}
              <ChevronRight className="w-4 h-4 transition-transform group-open:rotate-90" />
            </summary>
            <ul className="mt-2 space-y-1 px-4">
              {item.children.map((child) => (
                <li key={child.title}>
                  {child.children ? (
                    <details className="group">
                      <summary className="flex cursor-pointer items-center justify-between text-sm hover:text-blue-600 transition-colors py-2">
                        <div className="flex items-center gap-2">
                          {child.icon}
                          <span>{child.title}</span>
                        </div>
                        <ChevronRight className="w-3 h-3 transition-transform group-open:rotate-90" />
                      </summary>
                      <ul className="mt-1 space-y-1 pl-4">
                        {child.children.map((subChild) => (
                          <li key={subChild.title}>
                            <Link
                              href={subChild.href}
                              className="flex items-center gap-2 py-2 text-sm hover:text-blue-600 transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subChild.icon}
                              <span>{subChild.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <Link
                      href={child.href}
                      className="flex items-center gap-2 py-2 text-sm hover:text-blue-600 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {child.icon}
                      <span>{child.title}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </details>
        ) : (
          <Link
            href={item.href}
            className="block font-medium hover:text-blue-600 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.title}
          </Link>
        )}
      </div>
    ));
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4 md:py-6"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/robotpos-logo.svg"
              alt="RobotPOS Logo"
              width={150}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                {navItems.map((item) =>
                  item.children ? (
                    <NavigationMenuItem key={item.title}>
                      <NavigationMenuTrigger
                        className={cn(
                          "bg-transparent hover:bg-blue-50 hover:text-blue-600",
                          "data-[state=open]:bg-blue-50 data-[state=open]:text-blue-600"
                        )}
                      >
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="p-6 w-[400px] md:w-[600px] lg:w-[800px]">
                          {item.children.map((category) => (
                            <div key={category.title} className="mb-6 last:mb-0">
                              <div className="flex items-center gap-3 mb-4">
                                {category.icon && (
                                  <div className="p-2 rounded-lg bg-blue-50">
                                    {category.icon}
                                  </div>
                                )}
                                <div>
                                  <h3 className="text-lg font-semibold">{category.title}</h3>
                                  <p className="text-sm text-gray-600">{category.description}</p>
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                {category.children?.map((child) => (
                                  <ListItem
                                    key={child.title}
                                    title={child.title}
                                    href={child.href}
                                    icon={child.icon}
                                  >
                                    {child.description}
                                  </ListItem>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={item.title}>
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
                            "bg-transparent hover:bg-blue-50 hover:text-blue-600",
                            "focus:bg-blue-50 focus:text-blue-600 focus:outline-none"
                          )}
                        >
                          {item.title}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>

            <Button 
              size="sm" 
              className={cn(
                "ml-4 bg-blue-600 hover:bg-blue-700 transition-all duration-300",
                "shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30",
                "scale-100 hover:scale-105"
              )}
            >
              <MobilePhone className="mr-2 h-4 w-4" />
              0850 123 45 67
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-blue-50 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden fixed inset-x-0 top-[57px] bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out overflow-hidden",
            mobileMenuOpen ? "max-h-[calc(100vh-57px)] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {renderMenuItems(navItems)}
              <Button 
                className={cn(
                  "bg-blue-600 hover:bg-blue-700 transition-all duration-300 mt-4",
                  "shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30",
                  "scale-100 hover:scale-105"
                )}
              >
                <MobilePhone className="mr-2 h-4 w-4" />
                0850 123 45 67
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}