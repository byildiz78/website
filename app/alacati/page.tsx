import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default function InfiniaPage() {
  redirect('http://141.98.207.106/Alacati/WebReport2020/Login');
  
  // Bu kısım asla çalışmayacak, çünkü redirect fonksiyonu sayfanın çalışmasını durduracak
  return null;
}
