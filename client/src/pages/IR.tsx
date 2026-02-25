import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  TrendingUp, PieChart, FileDown, ArrowUpRight, 
  BarChart3, Globe2, Briefcase, Menu, CheckCircle2 
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
      title: "지속 가능한 성장을 향한 투자",
      desc: "16년의 신뢰를 바탕으로 한 데이터 기반 품질 경영"
    },
    {
      image: "https://images.unsplash.com/photo-1554469384-e58fb162295a?q=80&w=2000&auto=format&fit=crop",
      title: "탄소중립의 기술적 해답",
      desc: "2025-2027 탄소중립 사업화 지원사업 공식 수행 기업"
    },
    {
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2000&auto=format&fit=crop",
      title: "순환경제의 새로운 기준",
      desc: "화학적 재활용 기술로 구현하는 물성"
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

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <SEO title="투자정보(IR)" description="(주)창맥의 재무 정보와 미래 성장 비전, 투자 하이라이트를 소개합니다." />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container px-4 mx-auto max-w-7xl flex items-center justify-between h-20">
          <a href="/" className="flex items-center">
            <div className="text-2xl font-extrabold text-slate-900 tracking-tight">(주)창맥</div>
          </a>
          <div className="hidden md:flex gap-8 items-center font-bold text-sm">
            <a href="/about" className="text-slate-500 hover:text-slate-900 transition-colors">회사소개</a>
            <a href="/products" className="text-slate-500 hover:text-slate-900 transition-colors">사업소개</a>
            <a href="/sustainability" className="text-slate-500 hover:text-slate-900 transition-colors">지속가능경영</a>
            <a href="/ir" className="text-slate-900">IR</a>
            <a href="#careers" className="text-slate-500 hover:text-slate-900 transition-colors">채용공고</a>
          </div>
          <button onClick={() => setSidebarOpen(true)} className="md:hidden p-2 text-slate-600"><Menu className="w-6 h-6" /></button>
          <a href="mailto:changmaec1@naver.com" className="hidden md:block">
            <Button className="bg-slate-900 text-white font-bold px-6 rounded-xl">문의하기</Button>
          </a>
        </div>
      </nav>

      {/* Hero Slider Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-110"
            }`}
          >
            <div className="absolute inset-0 bg-slate-900/60 z-10" />
            <img src={slide.image} className="w-full h-full object-cover transform transition-transform duration-[5000ms] scale-110" />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="text-center px-4">
                <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-xl text-slate-200 font-medium drop-shadow-md">
                  {slide.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
        {/* Slider Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {slides.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                idx === currentSlide ? "w-10 bg-white" : "w-2 bg-white/30"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-slate-500 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Highlights</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">창맥의 핵심 가치</h2>
            </div>
            <p className="text-slate-500 font-medium max-w-md mt-4 md:mt-0">
              안정적인 사업 기반과 독보적인 기술력을 바탕으로 재생 플라스틱 시장의 새로운 패러다임을 제시합니다.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {investmentHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="p-10 border border-slate-100 shadow-sm hover:shadow-xl transition-all rounded-3xl">
                  <div className="w-12 h-12 bg-slate-50 text-slate-900 rounded-xl flex items-center justify-center mb-8 border border-slate-100">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-400 mb-2 uppercase tracking-wider">{item.title}</h4>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">{item.value}</h3>
                  <p className="text-slate-600 font-medium text-sm leading-relaxed">{item.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Financial Summary Preview */}
      <section className="py-24 bg-slate-50">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                안정적인 재무 성과와<br />투명한 공정 관리
              </h2>
              <p className="text-slate-600 font-medium leading-relaxed">
                창맥은 16년의 업력 동안 스마트공장 도입과 연구개발 투자를 통해 효율적인 생산 원가를 달성했습니다. 탄소중립 신사업을 통해 새로운 수익 구조를 창출하고 있습니다.
              </p>
              <div className="flex gap-4">
                <Button className="bg-slate-900 text-white font-bold h-14 px-8 rounded-2xl flex items-center gap-2">
                  <FileDown className="w-5 h-5" /> 재무보고서 다운로드
                </Button>
                <Button variant="outline" className="border-slate-200 h-14 px-8 rounded-2xl font-bold">
                  자세히 보기
                </Button>
              </div>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-100">
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-xl font-bold text-slate-900">주요 경영 지표</h3>
                <span className="text-slate-400 font-bold text-xs uppercase tracking-widest">Year: 2024-2027</span>
              </div>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-3 text-sm font-bold">
                    <span className="text-slate-500">탄소중립 기술 투자율</span>
                    <span className="text-slate-900">35% Increase</span>
                  </div>
                  <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-slate-900 w-[35%] rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-3 text-sm font-bold">
                    <span className="text-slate-500">생산 공정 자동화율</span>
                    <span className="text-slate-900">80% Reached</span>
                  </div>
                  <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-slate-400 w-[80%] rounded-full" />
                  </div>
                </div>
                <div className="pt-6 border-t border-slate-50 flex items-center gap-4">
                  <PieChart className="w-10 h-10 text-slate-200" />
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    * 탄소중립 사업화 지원사업 수행 결과에 따른 기술 고도화 지표를 포함한 예측치입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IR Contact Banner */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container px-4 mx-auto max-w-4xl text-center">
          <Globe2 className="w-16 h-16 text-slate-200 mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">창맥의 성장에 함께하십시오</h2>
          <p className="text-lg text-slate-600 mb-10 font-medium leading-relaxed">
            재무 및 IR 관련 궁금하신 사항은 담당 부서에서<br className="hidden md:block" /> 신속하고 상세하게 안내해 드리겠습니다.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center gap-3">
              <span className="text-slate-400">IR 문의</span>
              <span>054-931-0718</span>
            </div>
            <a href="mailto:changmaec1@naver.com">
              <Button className="h-16 px-10 rounded-2xl border-2 border-slate-900 bg-white text-slate-900 hover:bg-slate-900 hover:text-white transition-all font-black text-lg">
                이메일 문의하기 <ArrowUpRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
