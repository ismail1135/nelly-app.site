"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import AppLogo from '../public/assets/images/lsillyapplogo.png';

// İkonlar (Navbar, Footer ve Butonlarda kullanılanlar bırakıldı)
const Menu = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const X = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const Download = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

const ExternalLink = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 3h6v6"></path>
    <path d="M10 14 21 3"></path>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
  </svg>
);

const Shield = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

// Sosyal Medya İkonları
const Instagram = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Youtube = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const Mail = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const TikTok = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
  </svg>
);


// 1. DÜZELTME: options parametresine tip eklendi
const useElementOnScreen = (options: IntersectionObserverInit): [React.RefObject<HTMLDivElement | null>, boolean] => {
  // 3. DÜZELTME: useRef için tip belirtildi
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (containerRef.current) observer.unobserve(containerRef.current);
      }
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef, options]);

  return [containerRef, isVisible];
};

// 2. DÜZELTME: children prop'una tip eklendi
const AnimatedSection = ({ children, className = '', delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => {
  const [ref, isVisible] = useElementOnScreen({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-100 py-3 shadow-sm' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src={AppLogo} alt="App Logo" width={38} height={38} style={{borderRadius: '25%'}} />
            {/* Scrolled ise siyah, değilse beyaz metin */}
            <span className={`font-bold text-xl tracking-tight transition-colors duration-300 ${scrolled ? 'text-slate-900' : 'text-white'}`}>
              Nelly
            </span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <button className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 flex items-center gap-2 text-sm" onClick={() => window.open('https://play.google.com/store/apps/details?id=com.kerevit.nelly_book_tracker', '_blank')}>
              <Download size={16} />
              İndir
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={`transition-colors duration-300 ${scrolled ? 'text-slate-900' : 'text-white'}`}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 py-4 px-4 flex flex-col gap-4">
          <button className="bg-slate-900 text-white px-5 py-3 rounded-xl font-medium w-full flex justify-center items-center gap-2 mt-2" onClick={() => window.open('https://play.google.com/store/apps/details?id=com.kerevit.nelly_book_tracker', '_blank')}>
            <Download size={18} />
            Hemen İndir
          </button>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-violet-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto">
          <AnimatedSection>
            {/* Metin renkleri beyaz olarak düzeltildi */}
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Kişisel <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">okuma</span> ve düşünme alanın.
            </h1>
            <p className="text-lg md:text-xl text-violet-100 mb-10 max-w-2xl mx-auto">
              Kitaplarınızı takip edin, okuma alışkanlıklarınızı analiz edin ve önemli anlarınızı saniyeler içinde kaydedin.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={200} className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="w-full sm:w-auto bg-black hover:bg-gray-800 text-white rounded-xl px-6 py-3 flex items-center justify-center gap-3 transition-colors h-14 shadow-lg" onClick={() => window.open('https://play.google.com/store/apps/details?id=com.kerevit.nelly_book_tracker', '_blank')}>
              <svg viewBox="0 0 512 512" className="h-7 w-7 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
              </svg>
              <div className="text-left">
                <div className="text-[10px] leading-tight text-gray-300">Google Play</div>
                <div className="text-sm font-semibold leading-tight">EDİNİN</div>
              </div>
            </button>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={400} className="mt-20 flex justify-center">
          {/* Main Hero Mockup Placeholder */}
          <div className="relative w-[300px] h-[600px] bg-slate-900 rounded-[3rem] p-2 border-4 border-slate-800 transform rotate-1 hover:rotate-0 transition-transform duration-500 group">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20"></div>
            <div className="w-full h-full bg-slate-50 rounded-[2.5rem] overflow-hidden relative border border-slate-200">
               <img 
                src="/assets/images/screens/frame1.jpg" 
                alt="Uygulama Arayüzü Ana Ekran" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  // 4. DÜZELTME: Type Casting (HTMLElement)
                  const target = e.target as HTMLElement;
                  target.style.display = 'none';
                  if (target.nextSibling) {
                    (target.nextSibling as HTMLElement).style.display = 'flex';
                  }
                }}
              />
               <div className="hidden absolute inset-0 flex-col bg-white">
                  <div className="h-20 bg-slate-100 flex items-end px-6 pb-4">
                    <div className="h-6 w-32 bg-slate-200 rounded-full"></div>
                  </div>
                  <div className="flex-1 p-6 space-y-4">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="flex gap-4 items-center">
                        <div className="w-16 h-20 bg-slate-200 rounded-lg"></div>
                        <div className="flex-1 space-y-2">
                          <div className="h-4 w-3/4 bg-slate-200 rounded"></div>
                          <div className="h-3 w-1/2 bg-slate-100 rounded"></div>
                        </div>
                      </div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      title: 'Hikayenize geri dönün',
      description: 'Okumanı saniyeler içinde, basit günlük kayıtlarla takip et. Kaldığın yeri asla unutma.',
      bgColor: 'bg-amber-400',
      titleColor: 'text-slate-900', // Turuncu üstünde koyu renk okunur
      descColor: 'text-slate-800',
      image: '/assets/images/screens/frame2.jpg'
    },
    {
      title: 'Gelişiminizi gözlemleyin',
      description: 'Analizlerinizi inceleyerek gelişiminizi gözlemleyin. Serilerinizi koruyarak motivasyonunuzu artırın.',
      bgColor: 'bg-pink-300',
      titleColor: 'text-black', // Mavi üstünde beyaz mükemmel okunur
      descColor: 'text-black/80',
      image: '/assets/images/screens/frame4.jpg'
    },
    {
      title: 'Anılarınızı asla kaybetmeyin',
      description: 'Günlerinizi işaretleyerek, altını çizdiğiniz satırları ve önemli anlarınızı kolayca bulun.',
      bgColor: 'bg-cyan-500',
      titleColor: 'text-white', // Gül rengi üstünde beyaz mükemmel okunur
      descColor: 'text-indigo-50',
      image: '/assets/images/screens/frame5.jpg'
    },
    {
      title: 'Oturumlarınızın zamanını kolayca tutun',
      description: 'Dahili kronometre ile okuma seanslarınızı planlayın ve serbest mod ile odaklanın.',
      bgColor: 'bg-teal-500',
      titleColor: 'text-white', // Yeşil üstünde beyaz mükemmel okunur
      descColor: 'text-teal-50',
      image: '/assets/images/screens/frame3.jpg'
    }
  ];

  return (
    <div id="features">
      {/* Özellikler Başlık Alanı - bg-orange-400 devamı olduğu için metin koyu */}
      <section className="py-24 bg-amber-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Her Okur İçin Tasarlandı</h2>
            <p className="text-slate-800 max-w-2xl mx-auto text-lg">Okuma alışkanlığınızı bir sonraki seviyeye taşımak için ihtiyacınız olan tüm araçlar tek bir yerde.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Özellikler Listesi - Renkler dinamik olarak atanır */}
      {features.map((feature, index) => (
        <section key={index} className={`py-24 ${feature.bgColor}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}>
              
              <AnimatedSection delay={100} className="flex-1 w-full max-w-md lg:max-w-none">
                <div className="relative group">
                  {/* Phone Mockup Wrapper - Gölgesiz */}
                  <div className="relative bg-slate-900 rounded-[2.5rem] p-1.5 mx-auto w-[280px] h-[580px]">
                    <div className="w-full h-full bg-white rounded-[2.2rem] overflow-hidden relative">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // 4. DÜZELTME: Type Casting (HTMLElement)
                          const target = e.target as HTMLElement;
                          target.style.display = 'none';
                          if (target.nextSibling) {
                            (target.nextSibling as HTMLElement).style.display = 'flex';
                          }
                        }}
                      />
                      <div className={`hidden absolute inset-0 flex-col items-center justify-center p-6 text-center bg-slate-50`}>
                        <h4 className="font-bold text-lg text-slate-800">{feature.title}</h4>
                        <p className="text-sm text-slate-500 mt-2">Görsel Alanı</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200} className="flex-1 space-y-6 text-center lg:text-left">
                <h3 className={`text-3xl md:text-7xl font-bold leading-tight ${feature.titleColor}`}>
                  {feature.title}
                </h3>
                <p className={`text-lg md:text-xl leading-relaxed ${feature.descColor}`}>
                  {feature.description}
                </p>
              </AnimatedSection>

            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white text-slate-900 py-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sosyal Medya - Footer Başı */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10 pb-8 border-b border-slate-100">
          <div>
             <h3 className="text-slate-900 font-bold text-lg text-center md:text-left">Nelly&rsquo;i Takip Et</h3>
             <p className="text-sm text-slate-500">Gelişmelerden ve güncellemelerden haberdar ol.</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://www.instagram.com/nelly.book.app/" target="_blank" rel="noopener noreferrer" className="p-2.5 text-slate-400 hover:text-pink-600 transition-colors bg-slate-50 hover:bg-pink-50 rounded-full" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="p-2.5 text-slate-400 hover:text-slate-900 transition-colors bg-slate-50 hover:bg-slate-200 rounded-full" aria-label="TikTok">
              <TikTok size={20} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2.5 text-slate-400 hover:text-red-600 transition-colors bg-slate-50 hover:bg-red-50 rounded-full" aria-label="YouTube">
              <Youtube size={20} />
            </a>
            <a href="mailto:isot1821@outlook.com" className="p-2.5 text-slate-400 hover:text-blue-600 transition-colors bg-slate-50 hover:bg-blue-50 rounded-full" aria-label="E-posta">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Mevcut Footer İçeriği */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image src={AppLogo} alt="App Logo" width={32} height={32} style={{borderRadius: '25%'}} />
              <span className="font-bold text-xl text-slate-900 tracking-tight">Nelly Book Tracker</span>
            </div>
            <p className="text-sm text-slate-500 max-w-sm mb-6">
              Okuma alışkanlıklarınızı geliştirmeniz ve okuduklarınız üzerine düşünmeniz için tasarlandı.
            </p>
            <div className="flex gap-4">  
               <button className="bg-slate-900 hover:bg-slate-800 text-white rounded-lg px-3 py-1.5 flex items-center gap-2 transition-colors" onClick={() => window.open('https://play.google.com/store/apps/details?id=com.kerevit.nelly_book_tracker', '_blank')}>
                 <span className="text-xs font-semibold">Google Play</span>
               </button>
            </div>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-semibold mb-4">Yasal</h4>
            <ul className="space-y-3 text-sm">
              <li><a id="privacy" href="#" className="text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-2"><Shield size={14} /> Gizlilik Politikası</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-semibold mb-4">Destek</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="mailto:isot1821@outlook.com" className="text-slate-600 hover:text-blue-600 transition-colors">İletişim</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Sıkça Sorulan Sorular</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Kerevit. Tüm hakları saklıdır.</p>
          <p>Türkiye&apos;de sevgiyle geliştirildi 🇹🇷</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-white selection:text-black overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <div className="py-24 px-12 bg-slate-100 text-center text-black flex flex-col justify-center items-center gap-4">
          <h1 className="text-3xl md:text-4xl ">Aşamaları görmek ister misin?</h1>

          <p className="text-normal text-slate-500 mt-2">
            Nelly&rsquo;i geliştirirken belirli aralıklarla kayıtlar aldım, taslakları ve notları kaydettim.
          </p>

          <button className="bg-cyan-500 text-white px-5 py-3 rounded-full font-medium flex justify-center items-center gap-2 mt-2" onClick={() => window.open('https://drive.google.com/drive/folders/1owt0QsUDw1oxY5H4dn96M-LX5stPL43Z?usp=sharing', '_blank')}>
            <ExternalLink size={18} />
            Drive&rsquo;da Görüntüle
          </button>

        </div>
      </main>

      <Footer />
    </div>
  );
}