import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default function InfiniaPage() {
  redirect('https://srv7.robotpos.com/tavukdunyasi/WebReport2020');
  
  // Bu kısım asla çalışmayacak, çünkü redirect fonksiyonu sayfanın çalışmasını durduracak
  return null;
}
