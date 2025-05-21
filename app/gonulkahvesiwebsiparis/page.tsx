import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default function InfiniaPage() {
  redirect('https://srv6.robotpos.com/GonulKahvesi/WebSiparis/');
  
  // Bu kısım asla çalışmayacak, çünkü redirect fonksiyonu sayfanın çalışmasını durduracak
  return null;
}
