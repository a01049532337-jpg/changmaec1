import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  TrendingUp, Award, Zap, CheckCircle2, ArrowRight, 
  BarChart3, FileDown, Menu, Briefcase, ShieldCheck 
} from "lucide-react";
import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function IR() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop",
      title: "Sustainable Growth",
      subtitle: "미래를 향한 순환 경제의 리더",
      desc: "16년의 업력과 탄소중립 기술로 완성하는 Plastic Round-Trip"
    },
    {
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop",
      title: "Proven Technology",
      subtitle: "검증된 기술력과 안정적 인프라",
      desc: "2025~2027 탄소중립 사업화 지원사업 선정을 통한 차세대 기술 선점"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const investmentHighlights = [
    {
      title: "압도적 시장 점유율",
      value: "PA6/PA66 전문",
      desc: "자동차 엔진 및 가전 핵심 부품 공급망 확보",
      icon: Briefcase
    },
    {
      title: "기술 경쟁력",
      value: "ISO 9001 인증",
      desc: "독자적인 연구소와 데이터 기반 품질 관리 체계",
      icon: CheckCircle2
    },
    {
      title: "미래 성장 가치",
      value: "Net-Zero 선도",
      desc: "화학적 재활용 원천 기술 및 특허 보유",
      icon: TrendingUp
    }
  ];

  const certifications = [
    { name: "ISO 9001", year: "2022", category: "품질경영" },
    { name: "소부장 전문기업", year: "2022", category: "정부 인증" },
    { name: "스마트공장 확인서", year: "2022", category: "산업 4.0" },
    { name: "연구개발전담부서", year: "2024", category: "R&D 역량" }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <SEO title="투자정보(IR)" description="(주)창맥의 기술력과 비전을 담은 투자 정보 페이지입니다." />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container px-4 mx-auto max-w-7xl flex items-center justify-between h-20">
          <a href="/" className="flex items-center">
            <div className="text-2xl font-extrabold text-slate-900 tracking-tight">(주)창맥</div>
          </a>
          <div className="hidden md:flex gap-8 items-center font-bold text-sm text-slate-500">
            <a href="/about" className="hover:text-slate-900 transition-colors">회사소개</a>
            <a href="/products" className="hover:text-slate-900 transition-colors">사업소개</a>
            <a href="/sustainability" className="hover:text-slate-900 transition-colors">지속가능경영</a>
            <a href="/ir" className="text-slate-900">IR</a>
            <a href="#careers" className="hover:text-slate-900 transition-colors">채용공고</a>
          </div>
          <button onClick={() => setSidebarOpen(true)} className="md:hidden p-2 text-slate-600"><Menu className="w-6 h-6" /></button>
          <a href="mailto:changmaec1@naver.com" className="hidden md:block">
            <Button className="bg-slate-900 text-white font-bold px-6 rounded-xl transition-all shadow-md">문의하기</Button>
          </a>
        </div>
      </nav>

      {/* Hero Parallax Slider */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-slate-900/60 z-10" />
            <img 
              src={slide.image} 
              className={`w-full h-full object-cover transition-transform duration-[10000ms] ${idx === currentSlide ? "scale-110" : "scale-100"}`} 
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
              <div className={`px-4 transition-all duration-1000 delay-300 transform ${idx === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                <span className="text-lime-400 font-bold tracking-[0.4em] text-sm uppercase mb-4 block">{slide.title}</span>
                <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                  {slide.subtitle}
                </h1>
                <p className="text-lg md:text-xl text-slate-200 font-medium max-w-2xl mx-auto">
                  {slide.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Highlights Dashboard */}
      <section className="py-24 bg-white relative -mt-20 z-30">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-0 rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100">
            {investmentHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-12 bg-white border-r border-slate-50 last:border-0 hover:bg-slate-50 transition-colors group text-center">
                  <Icon className="w-10 h-10 text-slate-300 mb-8 mx-auto group-hover:text-slate-900 transition-colors" />
                  <h4 className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">{item.title}</h4>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">{item.value}</h3>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Business Core & Certifications */}
      <section className="py-24 bg-slate-50">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <span className="text-slate-400 font-bold tracking-[0.2em] text-xs uppercase">Core Competency</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                검증된 기술력과<br />안정적인 제조 인프라
              </h2>
              <p className="text-slate-600 font-medium leading-relaxed">
                (주)창맥은 재생 플라스틱 제조를 전문으로 하며, 스마트공장 시스템을 도입하여 효율적인 생산 공정을 확보했습니다. 2025-2027 탄소중립 사업화 지원사업을 통해 미래 성장 동력을 강화하고 있습니다.
              </p>
              <div className="bg-slate-900 text-white p-8 rounded-[2rem] flex items-center justify-between shadow-xl">
                <div>
                  <p className="text-xs font-bold text-slate-400 mb-1">보유 특허</p>
                  <p className="text-2xl font-black">2건 공식 등록</p>
                </div>
                <BarChart3 className="w-12 h-12 text-lime-400" />
              </div>
            </div>

            <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-lime-500" /> 인증 및 대외 신뢰도
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-slate-900 group transition-all">
                    <p className="text-[10px] font-bold text-slate-400 mb-1 group-hover:text-slate-500">{cert.year} 획득</p>
                    <h4 className="font-extrabold text-slate-900 group-hover:text-white mb-1 transition-colors text-sm">{cert.name}</h4>
                    <p className="text-[11px] text-slate-500 group-hover:text-slate-400">{cert.category}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Roadmap Section */}
      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto max-w-4xl text-center">
          <span className="text-slate-500 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Future Vision</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-16">2030 Beyond Roadmap</h2>
          
          <div className="space-y-12 text-left relative before:absolute before:left-[19px] before:top-0 before:h-full before:w-0.5 before:bg-slate-100">
            <div className="relative pl-16 group">
              <div className="absolute left-0 top-2 w-10 h-10 bg-white border-2 border-slate-900 rounded-full flex items-center justify-center z-10 group-hover:bg-slate-900 transition-colors">
                <div className="w-2 h-2 bg-slate-900 group-hover:bg-white rounded-full" />
              </div>
              <span className="text-sm font-bold text-slate-400 mb-1 block">2025 - 2027</span>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">탄소중립 공정 상용화</h3>
              <p className="text-slate-500 font-medium text-sm">탄소중립 사업화 지원사업 완료 및 독자적 친환경 브랜드 강화</p>
            </div>

            <div className="relative pl-16 group">
              <div className="absolute left-0 top-2 w-10 h-10 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center z-10 group-hover:bg-slate-900 transition-colors">
                <div className="w-2 h-2 bg-slate-200 group-hover:bg-white rounded-full" />
              </div>
              <span className="text-sm font-bold text-slate-400 mb-1 block">2030 Beyond</span>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">자원 순환 토털 솔루션 기업</h3>
              <p className="text-slate-500 font-medium text-sm">국내 최고 수준의 순환경제 리더로서의 글로벌 입지 강화</p>
            </div>
          </div>
          
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-slate-900 text-white text-center">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">창맥의 성장에 함께하십시오</h2>
          <p className="text-lg text-slate-400 mb-12 font-medium">IR 및 재무 관련 문의는 아래 채널을 이용해 주십시오.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="mailto:changmaec1@naver.com">
              <Button className="h-16 px-10 bg-white text-slate-900 font-bold rounded-2xl flex items-center gap-2 hover:bg-slate-200 transition-all shadow-xl">
                이메일 문의하기
              </Button>
            </a>
            <div className="px-8 py-4 border border-white/20 rounded-2xl font-bold flex items-center gap-3">
              <span className="text-slate-400">IR 문의</span>
              <span>054-931-0718</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
