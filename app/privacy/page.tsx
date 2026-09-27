"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// Logo importu kök dizinden ayarlandı
import AppLogo from '@/public/assets/images/lsillyapplogo.png';

// --- İKONLAR ---
const Shield = ({ size = 24, className = "" }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>;
const Instagram = ({ size = 24, className = "" }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const Youtube = ({ size = 24, className = "" }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>;
const Mail = ({ size = 24, className = "" }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
const TikTok = ({ size = 24, className = "" }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>;

export default function PrivacyPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-white selection:bg-blue-200 selection:text-blue-900">
      
      {/* NAVBAR (Sadece Beyaz) */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-white'} border-b border-slate-100 py-3`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <Image src={AppLogo} alt="App Logo" width={38} height={38} style={{borderRadius: '25%'}} />
            <span className="font-bold text-xl tracking-tight text-slate-900">Nelly</span>
          </Link>
          <Link href="/" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
            Ana Sayfaya Dön
          </Link>
        </div>
      </nav>

      {/* İÇERİK ALANI */}
      <div className="max-w-3xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        
        <h1 className="text-[28px] font-extrabold text-slate-900 leading-[1.3] mb-8">Gizlilik Politikası</h1>

        <p className="text-[15px] text-slate-700 leading-[1.6] mb-8">
          <strong className="font-bold text-slate-900">Uygulama:</strong> Nelly – Okuma Günlüğü ve Kitap Takip Uygulaması<br/>
          <strong className="font-bold text-slate-900">Geliştirici:</strong> Kerevit<br/>
          <strong className="font-bold text-slate-900">İletişim:</strong> <a href="mailto:isot1821@outlook.com" className="text-blue-600 font-medium underline decoration-blue-600/50 hover:decoration-blue-600 transition-colors">isot1821@outlook.com</a><br/>
          <strong className="font-bold text-slate-900">Son Güncelleme Tarihi:</strong> 25.08.2026
        </p>

        <h2 className="text-[22px] font-bold text-slate-900 leading-[1.5] mt-10 mb-4">1. Giriş</h2>
        <p className="text-[15px] text-slate-700 leading-[1.6] mb-4">
          Bu Gizlilik Politikası, Nelly mobil uygulamasını kullanırken hangi verilerin işlendiğini, nasıl saklandığını ve haklarınızın neler olduğunu açıklar. Uygulamayı indirip kullanarak bu politikayı kabul etmiş sayılırsınız.
        </p>
        <p className="text-[15px] text-slate-700 leading-[1.6] mb-8">
          Nelly; okuduğunuz kitapları takip etmenizi, kişisel bir okuma günlüğü tutmanızı, notlar, alıntılar, fotoğraflar, sesli notlar ve kendi oluşturduğunuz çıkartmalarla içerik eklemenizi sağlayan kişisel bir uygulamadır.
        </p>

        <h2 className="text-[22px] font-bold text-slate-900 leading-[1.5] mt-10 mb-4">2. Veri Sorumlusu</h2>
        <p className="text-[15px] text-slate-700 leading-[1.6] mb-8">
          Bu Uygulama kapsamında kişisel verilerinizin işlenmesi bakımından veri sorumlusu:<br/>
          <strong className="font-bold text-slate-900">Kerevit</strong><br/>
          isot1821@outlook.com
        </p>

        <h2 className="text-[22px] font-bold text-slate-900 leading-[1.5] mt-10 mb-4">3. En Önemli İlke: Verileriniz Cihazınızda Kalır</h2>
        <p className="text-[15px] text-slate-700 leading-[1.6] mb-4">
          Nelly, kullanıcı hesabı gerektirmeyen ve bir bulut sunucusuna kayıt yapmayan bir uygulamadır. Girdiğiniz kitap bilgileri, günlük yazılarınız, fotoğraflarınız, sesli notlarınız ve çıkartmalarınız <strong className="font-bold text-slate-900">yalnızca cihazınızın yerel deposunda</strong> tutulur. Bu verileri hiçbir sunucumuza otomatik olarak göndermiyor, kullanıcı profili oluşturmuyor ve kullanıcılar arasında karşılaştırma yapmıyoruz.
        </p>
        <p className="text-[15px] text-slate-700 leading-[1.6] mb-8">
          Uygulamayı cihazınızdan kaldırdığınızda (uninstall) veya uygulama içi verileri sildiğinizde, bu veriler cihazınızdan silinir ve elimizde herhangi bir kopyası bulunmaz.
        </p>

        <h2 className="text-[22px] font-bold text-slate-900 leading-[1.5] mt-10 mb-4">4. İşlenen Veri Kategorileri</h2>
        
        <h3 className="text-[18px] font-semibold text-slate-900 leading-[1.5] mt-6 mb-3">4.1. Cihazda Yerel Olarak Sakladığımız Veriler</h3>
        <ul className="list-disc pl-5 space-y-2 mb-8 text-[15px] text-slate-700 leading-[1.6] marker:text-slate-400 marker:text-[16px]">
          <li><strong className="font-bold text-slate-900">Kitap bilgileri:</strong> ISBN, kitap adı, yazar, sayfa sayısı, tür/kategori, kapak görseli (uzak URL veya cihazda kaydedilmiş dosya), favori durumu, okuma durumu (okunacak/okunuyor/bitti/yarım bırakıldı).</li>
          <li><strong className="font-bold text-slate-900">Okuma günlüğü içerikleri:</strong> Yazdığınız paragraflar, alıntılar, oturum kayıtları (tarih, süre, sayfa sayısı).</li>
          <li><strong className="font-bold text-slate-900">Medya içerikleri:</strong> Kamera veya galeriden eklediğiniz fotoğraflar, kaydettiğiniz sesli notlar (ses dosyası ve dalga formu verisi), oluşturduğunuz özel çıkartmalar (stickerlar).</li>
          <li><strong className="font-bold text-slate-900">Uygulama ayarları:</strong> Dil tercihi, tema (açık/koyu) tercihi, defter görünüm ayarları (renk, sayfa stili vb.).</li>
          <li><strong className="font-bold text-slate-900">Yedek dosyaları:</strong> &quot;Yedek Oluştur&quot; özelliğini kullandığınızda yukarıdaki verilerin bir kısmı veya tamamı, cihazınızın belge klasöründe yerel bir JSON dosyası olarak saklanır. Bu dosya otomatik olarak hiçbir sunucuya yüklenmez; paylaşmayı veya taşımayı siz seçersiniz.</li>
        </ul>

        <h3 className="text-[18px] font-semibold text-slate-900 leading-[1.5] mt-6 mb-3">4.2. Cihaz İzinleri</h3>
        <p className="text-[15px] text-slate-700 leading-[1.6] mb-3">
          Uygulama, belirli özellikleri sunabilmek için aşağıdaki izinleri talep edebilir. Bu izinler yalnızca ilgili özelliği kullandığınızda etkinleşir:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-[15px] text-slate-700 leading-[1.6] marker:text-slate-400 marker:text-[16px]">
          <li><strong className="font-bold text-slate-900">Kamera:</strong> Kitap kapağı taramak, barkod/ISBN okutmak veya günlüğünüze fotoğraf eklemek için.</li>
          <li><strong className="font-bold text-slate-900">Mikrofon:</strong> Sesli not kaydetmek için.</li>
          <li><strong className="font-bold text-slate-900">Fotoğraflar / Depolama (Galeri erişimi):</strong> Galerinizden görsel seçmek, kapak/çıkartma oluşturmak ve uygulama içi dosyaları (kapaklar, sesler, yedekler) cihazınızda saklamak için.</li>
          <li><strong className="font-bold text-slate-900">İnternet:</strong> Kitap arama sırasında Google Books ve OpenLibrary servislerine bağlanmak ve reklamların yüklenmesi için.</li>
        </ul>
        <p className="text-[15px] text-slate-700 leading-[1.6] mb-8">
          Bu izinleri istediğiniz zaman cihazınızın Ayarlar menüsünden geri alabilirsiniz; bu durumda ilgili özellik çalışmayabilir.
        </p>

        <h2 className="text-[22px] font-bold text-slate-900 leading-[1.5] mt-10 mb-4">5. Üçüncü Taraf Servisler</h2>
        <p className="text-[15px] text-slate-700 leading-[1.6] mb-6">
          Nelly, bazı işlevleri yerine getirebilmek için üçüncü taraf servislerden yararlanır. Bu servislere yalnızca ilgili özelliği kullandığınızda ve gerekli minimum veri iletilir.
        </p>

        <h3 className="text-[18px] font-semibold text-slate-900 leading-[1.5] mt-6 mb-3">5.1. Google Books API</h3>
        <p className="text-[15px] text-slate-700 leading-[1.6] mb-6">
          Kitap bilgisi ararken girdiğiniz ISBN numarası, kitap bilgilerini getirmek amacıyla Google Books API&apos;sine gönderilir. Bu istek, Google&apos;ın kendi gizlilik politikasına tabidir: <a href="https://policies.google.com/privacy" target="_blank" className="text-blue-600 font-medium underline decoration-blue-600/50 hover:decoration-blue-600 transition-colors">https://policies.google.com/privacy</a>
        </p>

        <h3 className="text-[18px] font-semibold text-slate-900 leading-[1.5] mt-6 mb-3">5.2. OpenLibrary API (Internet Archive)</h3>
        <p className="text-[15px] text-slate-700 leading-[1.6] mb-6">
          Google Books&apos;ta bulunamayan veya eksik olan kitap bilgileri/kapak görselleri için ISBN numarası OpenLibrary servislerine gönderilir. Bu servis Internet Archive tarafından işletilir: <a href="https://openlibrary.org/privacy" target="_blank" className="text-blue-600 font-medium underline decoration-blue-600/50 hover:decoration-blue-600 transition-colors">https://openlibrary.org/privacy</a>
        </p>

        <h3 className="text-[18px] font-semibold text-slate-900 leading-[1.5] mt-6 mb-3">5.3. Google ML Kit (Cihaz Üzerinde İşleme)</h3>
        <p className="text-[15px] text-slate-700 leading-[1.6] mb-6">
          Çıkartma (sticker) oluştururken kullanılan arka plan ayırma (subject segmentation) özelliği <strong className="font-bold text-slate-900">cihazınız üzerinde</strong> çalışır; fotoğrafınız bu işlem sırasında Google sunucularına gönderilmez.
        </p>

        <h3 className="text-[18px] font-semibold text-slate-900 leading-[1.5] mt-6 mb-3">5.4. Google Mobile Ads (AdMob)</h3>
        <p className="text-[15px] text-slate-700 leading-[1.6] mb-3">
          Uygulama içinde reklam gösterebilmek için Google Mobile Ads SDK&apos;sı kullanılır. Bu SDK; reklam kimliğiniz (advertising ID), cihaz bilgileri, yaklaşık konum ve reklam etkileşim verileri gibi bilgileri, reklam sunmak, ölçümlemek ve kişiselleştirmek amacıyla işleyebilir. Bu verilerin işlenmesi Google&apos;ın gizlilik politikasına tabidir: <a href="https://policies.google.com/privacy" target="_blank" className="text-blue-600 font-medium underline decoration-blue-600/50 hover:decoration-blue-600 transition-colors">https://policies.google.com/privacy</a> ve <a href="https://support.google.com/admob/answer/6128543" target="_blank" className="text-blue-600 font-medium underline decoration-blue-600/50 hover:decoration-blue-600 transition-colors">https://support.google.com/admob/answer/6128543</a>
        </p>
        <p className="text-[15px] text-slate-700 leading-[1.6] mb-8">
          Uygulamayı ilk açtığınızda, bulunduğunuz bölgeye göre (örn. AB/EEA, İngiltere) geçerli mevzuat gereği reklam kişiselleştirme tercihlerinizi sormak amacıyla bir rıza formu (onay ekranı) karşınıza çıkabilir. Tercihinizi cihaz/uygulama ayarlarından değiştirebilirsiniz.
        </p>

        <h2 className="text-[22px] font-bold text-slate-900 leading-[1.5] mt-10 mb-4">6. Verilerin Yurt Dışına Aktarımı</h2>
        <p className="text-[15px] text-slate-700 leading-[1.6] mb-8">
          Kitap arama ve reklam servisleri (Google, Internet Archive) yurt dışında (başta ABD) konumlu sunucular kullanabilir. İlgili ISBN sorgusu veya reklam etkileşim verisi bu servislere iletildiğinde, veriler yurt dışına aktarılmış olur. Bu aktarımlar, ilgili servis sağlayıcıların kendi güvenlik ve uyumluluk çerçeveleri (örn. AB-ABD Veri Gizliliği Çerçevesi) kapsamında gerçekleşir.
        </p>

        <h2 className="text-[22px] font-bold text-slate-900 leading-[1.5] mt-10 mb-4">7. Verilerin Saklanma Süresi</h2>
        <p className="text-[15px] text-slate-700 leading-[1.6] mb-8">
          Yerel verileriniz, siz silmediğiniz veya uygulamayı kaldırmadığınız sürece cihazınızda tutulur. Biz herhangi bir merkezi sunucuda kalıcı bir kopya tutmuyoruz. Üçüncü taraf servislere (Google Books, OpenLibrary, AdMob) iletilen sorgu/etkileşim verileri, ilgili servislerin kendi saklama sürelerine tabidir.
        </p>

        <h2 className="text-[22px] font-bold text-slate-900 leading-[1.5] mt-10 mb-4">8. Çocukların Gizliliği</h2>
        <p className="text-[15px] text-slate-700 leading-[1.6] mb-8">
          Nelly, genel kullanıcı kitlesine yönelik bir uygulamadır ve bilerek 13 yaşın (bazı ülkelerde 16 yaş) altındaki çocuklardan doğrudan kişisel veri toplamaz. Uygulamanın çocuklar tarafından kullanılacağını düşünüyorsanız, reklam servisinin (AdMob) &quot;çocuklara yönelik reklam&quot; (Google Play Families Policy / COPPA) ayarlarının buna uygun şekilde yapılandırılması gerekir. Bir çocuğun bize veya üçüncü taraf servislere kişisel veri sağladığını fark ederseniz lütfen iletişime geçin.
        </p>

        <h2 className="text-[22px] font-bold text-slate-900 leading-[1.5] mt-10 mb-4">9. Veri Güvenliği</h2>
        <p className="text-[15px] text-slate-700 leading-[1.6] mb-8">
          Verileriniz cihazınızın işletim sistemi (Android/iOS) tarafından sağlanan uygulama sandbox&apos;ı içinde saklanır. Oluşturduğunuz yedek dosyalarının güvenliği (şifreleme, paylaşım) tamamen sizin sorumluluğunuzdadır; yedek dosyasını güvenmediğiniz kişi veya servislerle paylaşmamanızı öneririz.
        </p>

        <h2 className="text-[22px] font-bold text-slate-900 leading-[1.5] mt-10 mb-4">10. Haklarınız (KVKK ve GDPR)</h2>
        <p className="text-[15px] text-slate-700 leading-[1.6] mb-4">
          6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;<strong className="font-bold text-slate-900">KVKK</strong>&quot;) madde 11 ve ilgili mevzuat uyarınca; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işlenme amacını öğrenme, yurt içinde/yurt dışında aktarıldığı üçüncü kişileri öğrenme, eksik/yanlış işlenmişse düzeltilmesini isteme, silinmesini/yok edilmesini isteme ve itiraz etme haklarına sahipsiniz.
        </p>
        <p className="text-[15px] text-slate-700 leading-[1.6] mb-4">
          Avrupa Birliği/EEA&apos;da bulunan kullanıcılar için GDPR kapsamında da benzer haklar geçerlidir.
        </p>
        <p className="text-[15px] text-slate-700 leading-[1.6] mb-8">
          Nelly&apos;de veriler yerel olarak sizin cihazınızda tutulduğu için bu haklarınızın büyük kısmını doğrudan uygulama içindeki silme/düzenleme işlevleriyle veya uygulamayı kaldırarak kendiniz kullanabilirsiniz. Üçüncü taraf servislere (Google, OpenLibrary) iletilen veriler hakkında talepleriniz için ilgili servisin kendi başvuru kanallarını kullanmanız gerekebilir.
        </p>

        <h2 className="text-[22px] font-bold text-slate-900 leading-[1.5] mt-10 mb-4">11. Değişiklikler</h2>
        <p className="text-[15px] text-slate-700 leading-[1.6] mb-8">
          Bu Gizlilik Politikası zaman zaman güncellenebilir. Önemli değişikliklerde uygulama içi bir bildirim veya bu sayfanın üst kısmındaki &quot;Son Güncelleme Tarihi&quot; alanı güncellenerek bilgilendirme yapılır.
        </p>

        <h2 className="text-[22px] font-bold text-slate-900 leading-[1.5] mt-10 mb-4">12. İletişim</h2>
        <p className="text-[15px] text-slate-700 leading-[1.6] mb-8">
          Bu politika veya kişisel verilerinizin işlenmesiyle ilgili sorularınız için bize şu adresten ulaşabilirsiniz:<br/>
          <strong className="font-bold text-slate-900">isot1821@outlook.com</strong>
        </p>



      </div>

      {/* FOOTER */}
      <footer className="bg-white text-slate-900 py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10 pb-8 border-b border-slate-100">
            <div>
               <h3 className="text-slate-900 font-bold text-lg text-center md:text-left">Nelly&apos;i Takip Et</h3>
               <p className="text-sm text-slate-500">Gelişmelerden ve güncellemelerden haberdar ol.</p>
            </div>
            <div className="flex items-center gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2.5 text-slate-400 hover:text-pink-600 transition-colors bg-slate-50 hover:bg-pink-50 rounded-full"><Instagram size={20} /></a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="p-2.5 text-slate-400 hover:text-slate-900 transition-colors bg-slate-50 hover:bg-slate-200 rounded-full"><TikTok size={20} /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2.5 text-slate-400 hover:text-red-600 transition-colors bg-slate-50 hover:bg-red-50 rounded-full"><Youtube size={20} /></a>
              <a href="mailto:isot1821@outlook.com" className="p-2.5 text-slate-400 hover:text-blue-600 transition-colors bg-slate-50 hover:bg-blue-50 rounded-full"><Mail size={20} /></a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Image src={AppLogo} alt="App Logo" width={32} height={32} style={{borderRadius: '25%'}} />
                <span className="font-bold text-xl text-slate-900 tracking-tight">Nelly Book Tracker</span>
              </div>
              <p className="text-sm text-slate-500 max-w-sm mb-6">Okuma alışkanlıklarınızı geliştirmeniz ve okuduklarınız üzerine düşünmeniz için tasarlandı.</p>
            </div>
            
            <div>
              <h4 className="text-slate-900 font-semibold mb-4">Yasal</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/privacy" className="text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                    <Shield size={14} /> Gizlilik Politikası
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-slate-900 font-semibold mb-4">Destek</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="mailto:isot1821@outlook.com" className="text-slate-600 hover:text-blue-600 transition-colors">İletişim</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}