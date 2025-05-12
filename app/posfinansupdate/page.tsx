import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default function InfiniaPage() {
  redirect('https://pozitifbilg-my.sharepoint.com/:f:/g/personal/serdar_altundal_robotpos_com/Esqlj31FKgJBrzTo7CI5794B-5yrny3ZD0N7SfsOBx-LTQ?e=hrQFhY');
  
  // Bu kısım asla çalışmayacak, çünkü redirect fonksiyonu sayfanın çalışmasını durduracak
  return null;
}
