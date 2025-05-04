'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ViewToggle } from "@/components/ui/view-toggle";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { 
  ChevronRight, 
  Menu, 
  X, 
  ChevronDown,
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
  Cpu,
  HardDrive,
} from "lucide-react";
import { GTranslateWidget } from "@/components/ui/gtranslate-widget";

type NavItem = {
  title: string;
  href: string;
  description?: string;
  icon?: React.ReactNode;
  children?: NavItem[];
  category?: 'software' | 'hardware';
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
        category: 'software',
        children: [
          {
            title: "Satış Noktası (POS)",
            href: "/urunler/yazilim-urunleri/satis-noktasi-pos",
            description: "Her tip gıda işletmesinde kullanılabilen POS sistemi",
            icon: <ShoppingCart className="w-5 h-5 text-blue-600" />,
            category: 'software',
          },
          {
            title: "Stok Maliyet Yönetimi",
            href: "/urunler/yazilim-urunleri/stok-maliyet-yonetimi",
            description: "Stok ve maliyet takibi için kapsamlı çözümler",
            icon: <Package className="w-5 h-5 text-blue-600" />,
            category: 'software',
          },
          {
            title: "Sadakat ve Kazanç Arttırıcı Çözümler",
            href: "/urunler/yazilim-urunleri/sadakat-ve-kazanc-arttirici-cozumler",
            description: "Müşteri sadakat programları ve kazanç artırıcı çözümler",
            icon: <Users className="w-5 h-5 text-blue-600" />,
            category: 'software',
          },
          {
            title: "İş Verimliliği",
            href: "/urunler/yazilim-urunleri/is-verimliligi",
            description: "İş süreçlerinizi optimize eden çözümler",
            icon: <Clock className="w-5 h-5 text-blue-600" />,
            category: 'software',
          },
          {
            title: "Raporlama ve Analiz",
            href: "/urunler/yazilim-urunleri/raporlama-ve-analiz",
            description: "Kapsamlı raporlama ve analiz araçları",
            icon: <BarChart2 className="w-5 h-5 text-blue-600" />,
            category: 'software',
          },
          {
            title: "Zincir Mağaza Yönetimi",
            href: "/urunler/yazilim-urunleri/zincir-magaza-yonetimi",
            description: "Çoklu şube yönetimi için entegre çözümler",
            icon: <Building2 className="w-5 h-5 text-blue-600" />,
            category: 'software',
          },
          {
            title: "QR Menü",
            href: "/robotpos-cozum-uretir/qr-menu-siparis",
            description: "Dijital menü ve mobil sipariş çözümleri",
            icon: <QrCode className="w-5 h-5 text-blue-600" />,
            category: 'software',
          },
          {
            title: "Entegrasyonlar",
            href: "/urunler/yazilim-urunleri/entegrasyonlar",
            description: "3. parti yazılımlarla entegrasyon seçenekleri",
            icon: <LinkIcon className="w-5 h-5 text-blue-600" />,
            category: 'software',
          },
        ]
      },
      {
        title: "Donanım Ürünleri",
        href: "#",
        description: "Restoran ve cafe işletmeleri için özel donanım çözümleri",
        icon: <HardDrive className="w-5 h-5 text-orange-600" />,
        category: 'hardware',
        children: [
          {
            title: "Dokunmatik Terminal",
            href: "/urunler/donanim-urunleri/dokunmatik-terminal",
            description: "Profesyonel dokunmatik POS terminalleri",
            icon: <Monitor className="w-5 h-5 text-orange-600" />,
            category: 'hardware',
          },
          {
            title: "Mobil Terminaller",
            href: "/urunler/donanim-urunleri/mobil-terminaller",
            description: "Garson el terminalleri ve mobil POS cihazları",
            icon: <MobilePhone className="w-5 h-5 text-orange-600" />,
            category: 'hardware',
          },
          {
            title: "ÖKC Ürünleri",
            href: "/urunler/donanim-urunleri/okc-urunleri",
            description: "Yeni nesil ödeme kaydedici cihazlar",
            icon: <CreditCard className="w-5 h-5 text-orange-600" />,
            category: 'hardware',
          },
          {
            title: "Self Servis Kiosk",
            href: "/urunler/donanim-urunleri/self-servis-kiosk",
            description: "Self servis sipariş kioskları",
            icon: <Cpu className="w-5 h-5 text-orange-600" />,
            category: 'hardware',
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
            title: "Restoran Makaleleri",
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
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode; category?: 'software' | 'hardware' }
>(({ className, title, children, icon, href, category, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={href || "#"}
          ref={ref}
          className={cn(
            "group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
            category === 'hardware' 
              ? "hover:bg-orange-50 hover:text-orange-600 focus:bg-orange-50 focus:text-orange-600" 
              : "hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2">
            {icon && (
              <div className={cn(
                "p-1 rounded-md transition-colors",
                category === 'hardware' 
                  ? "bg-orange-50 group-hover:bg-orange-100" 
                  : "bg-blue-50 group-hover:bg-blue-100"
              )}>
                {icon}
              </div>
            )}
            <div>
              <div className="text-sm font-medium leading-none mb-1">{title}</div>
              {children && (
                <p className={cn(
                  "line-clamp-2 text-xs leading-snug text-muted-foreground",
                  category === 'hardware' 
                    ? "group-hover:text-orange-600/70" 
                    : "group-hover:text-blue-600/70"
                )}>
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
      <div key={item.title} className="py-2 relative z-[1000]">
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
                      <summary className={cn(
                        "flex cursor-pointer items-center justify-between text-sm transition-colors py-2",
                        child.category === 'hardware' ? "hover:text-orange-600" : "hover:text-blue-600"
                      )}>
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
                              className={cn(
                                "flex items-center gap-2 py-2 text-sm transition-colors",
                                subChild.category === 'hardware' ? "hover:text-orange-600" : "hover:text-blue-600"
                              )}
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
                      className={cn(
                        "flex items-center gap-2 py-2 text-sm transition-colors",
                        child.category === 'hardware' ? "hover:text-orange-600" : "hover:text-blue-600"
                      )}
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
          <div className="flex items-center">
            <div className="mr-4">
              <GTranslateWidget />
            </div>
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
          </div>

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
                            <div key={category.title} className="mb-6 last:mb-0">
                              <div className={cn(
                                "flex items-center gap-2 mb-3 pb-2",
                                category.category === 'hardware' 
                                  ? "border-b border-orange-200" 
                                  : "border-b border-blue-200"
                              )}>
                                {category.icon && (
                                  <div className={cn(
                                    "p-2 rounded-md",
                                    category.category === 'hardware' 
                                      ? "bg-orange-100" 
                                      : "bg-blue-100"
                                  )}>
                                    {category.icon}
                                  </div>
                                )}
                                <div>
                                  <h3 className={cn(
                                    "text-sm font-bold",
                                    category.category === 'hardware' 
                                      ? "text-orange-700" 
                                      : "text-blue-700"
                                  )}>
                                    {category.title}
                                  </h3>
                                  {category.description && (
                                    <p className="text-xs text-gray-500">{category.description}</p>
                                  )}
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                {category.children?.map((child) => (
                                  <ListItem
                                    key={child.title}
                                    title={child.title}
                                    href={child.href}
                                    icon={child.icon}
                                    category={child.category}
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
            <a 
              href="/demo-talebi" 
              className="ml-2 inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-6 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
              Sizi Arayalım
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[999] bg-black/20 backdrop-blur-sm mobile-menu-overlay">
          <div className="absolute top-[60px] right-0 w-full max-w-sm h-[calc(100vh-60px)] bg-white shadow-xl overflow-y-auto mobile-menu-content">
            <div className="p-4">
              {renderMenuItems(navItems)}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <a
                  href="/demo-talebi"
                  className="block w-full py-3 px-4 rounded-md bg-blue-600 text-center font-medium text-white hover:bg-blue-700 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sizi Arayalım
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;