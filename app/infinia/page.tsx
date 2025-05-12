import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default function InfiniaPage() {
  redirect('https://srv8.robotpos.com/TekSube/WebReport/');
  
  // Bu kısım asla çalışmayacak, çünkü redirect fonksiyonu sayfanın çalışmasını durduracak
  return null;
}
