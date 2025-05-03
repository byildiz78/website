'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ViewToggle } from "@/components/ui/view-toggle";
import { GTranslateWidget } from "@/components/ui/gtranslate-widget";
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
  Link as LinkIcon,
  ChevronDown
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
    href: "#",
    children: [
      {
        title: "Yazılım Ürünleri",
        href: "#",
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
        href: "#",
        description: "Restoran ve cafe işletmeleri için özel donanım çözümleri",
        icon: <Tablet className="w-5 h-5 text-blue-600" />,
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
    title: "Müşteri Görüşleri",
    href: "/musteri-gorusleri",
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
    href: "#",
    children: [
      {
        title: "Kurumsal",
        href: "/kurumsal",
        description: "Kurumsal bilgiler ve hizmetler",
        icon: <Building2 className="w-5 h-5 text-blue-600" />,
        children: [
          {
            title: "Hakkımızda",
            href: "/hakkimizda",
            description: "robotPOS'un hikayesi ve misyonu",
            icon: <Info className="w-5 h-5 text-blue-600" />,
          },
          {
            title: "Restoran Yazılımı Makaleleri",
            href: "/blog",
            description: "Sektörel bilgi ve makaleler",
            icon: <FileText className="w-5 h-5 text-blue-600" />,
          },
          {
            title: "Kariyer",
            href: "/kurumsal/kariyer",
            description: "robotPOS'ta kariyer fırsatları",
            icon: <Briefcase className="w-5 h-5 text-blue-600" />,
          },
        ]
      }
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
>(({ className, title, children, icon, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={href || "#"}
          ref={ref}
          className={cn(
            "group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
            "hover:bg-blue-50 hover:text-blue-600",
            "focus:bg-blue-50 focus:text-blue-600",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2">
            {icon && (
              <div className="p-1 rounded-md bg-blue-50 group-hover:bg-blue-100 transition-colors">
                {icon}
              </div>
            )}
            <div>
              <div className="text-sm font-medium leading-none mb-1">{title}</div>
              {children && (
                <p className="line-clamp-2 text-xs leading-snug text-muted-foreground group-hover:text-blue-600/70">
                  {children}
                </p>
              )}
            </div>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";

function Header() {
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
                            <a
                              href={subChild.href}
                              className="flex items-center gap-2 py-2 text-sm hover:text-blue-600 transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subChild.icon}
                              <span>{subChild.title}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <a
                      href={child.href}
                      className="flex items-center gap-2 py-2 text-sm hover:text-blue-600 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {child.icon}
                      <span>{child.title}</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </details>
        ) : (
          <a
            href={item.href}
            className="block font-medium hover:text-blue-600 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.title}
          </a>
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
          : "bg-white/90 backdrop-blur-sm shadow-sm py-3 md:py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center">
            <Image
              src="/images/robotpos-logo.svg"
              alt="robotPOS Logo"
              width={150}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                {navItems.map((item) =>
                  item.children ? (
                    <NavigationMenuItem key={item.title}>
                      <NavigationMenuTrigger
                        className={cn(
                          "bg-transparent text-gray-800 font-medium hover:bg-blue-500 hover:text-white",
                          "data-[state=open]:bg-blue-500 data-[state=open]:text-white rounded-md"
                        )}
                      >
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="w-[600px] p-4 bg-white rounded-lg shadow-lg border border-gray-100">
                          {item.children.map((category) => (
                            <div key={category.title} className="mb-4 last:mb-0">
                              <div className="flex items-center gap-2 mb-2">
                                {category.icon && (
                                  <div className="p-1.5 rounded-md bg-blue-100">
                                    {category.icon}
                                  </div>
                                )}
                                <div>
                                  <h3 className="text-sm font-semibold text-gray-900">{category.title}</h3>
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
                      <a 
                        href={item.href}
                        className={cn(
                          "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
                          "text-gray-800 hover:bg-blue-500 hover:text-white",
                          "focus:bg-blue-500 focus:text-white focus:outline-none"
                        )}
                      >
                        {item.title}
                      </a>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-2 ml-4">
              <GTranslateWidget />
              <ViewToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <GTranslateWidget />
            <ViewToggle />
            <button
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 top-[57px] bg-white z-40 lg:hidden overflow-y-auto transition-transform duration-300 transform",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-1">
            {renderMenuItems(navItems)}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;