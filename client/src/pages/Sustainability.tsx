import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Leaf, Recycle, ShieldCheck, Globe, BarChart, 
  Menu, FileText, Target, Award, CheckCircle 
} from "lucide-react";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function Sustainability() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const esgStrategies = [
    {
      title: "Environmental (E)",
      subtitle: "탄소 저감 및 순환경제 실현",
      icon: Leaf,
      items: [
        "2025-2027 탄소중립 사업화 지원사업 수행",
        "해중합 및 화학적 재활용 기술 고도화",
        "에너지 저감형 스마트 압출 공정 도입"
      ]
    },
    {
      title: "Social (S)",
      subtitle: "안전 경영 및 지역사회 상생",
      icon: ShieldCheck,
      items: [
        "산업안전보건 기준 준수 및 무재해 달성",
        "공정 자동화를 통한 작업 환경 개선",
        "지역 인재 채용 및 산학 협력 확대"
      ]
    },
    {
      title: "Governance (G)",
      subtitle: "투명한 품질 경영 및 신뢰",
      icon: BarChart,
      items: [
        "ISO 9001 품질경영시스템 기반 공정 관리",
        "데이터 기반 리스크 관리 체계 가동",
        "윤리 경영 및 공정 거래 질서 확립"
      ]
    }
  ];

  const certifications = [
    { title: "ISO 9001", description: "품질경영시스템 인증", date: "2022 획득" },
    { title: "소부장 전문기업", description: "소재·부품·장비 전문기업 확인", date: "2022 획득" },
    { title: "스마트공장", description: "스마트공장 수준 확인 인증", date: "2022 획득" },
    { title: "연구개발전담부서", description: "기업부설 연구소 인정", date: "2024 획득" }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <SEO title="지속가능경영" description="(주)창맥의 ESG 경영 비전과 탄소중립 실천 전략을 소개합니다." />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="container px-4 mx-auto max-w-7xl flex items-center justify-between h-20">
          <a href="/" className="flex items-center">
            <div className="text-2xl font-extrabold text-slate-900 tracking-tight">(주)창맥</div>
          </a>
          <div className="hidden md:flex gap-8 items-center font-bold text-sm">
            <a href="/about" className="text-slate-500 hover:text-slate-900 transition-colors">회사소개</a>
            <a href="/products" className="text-slate-500 hover:text-slate-900 transition-colors">사업소개</a>
            <a href="/sustainability" className="text-slate-900 transition-colors">지속가능경영</a>
            <a href="/ir" className="text-slate-500 hover:text-slate-900 transition-colors">IR</a>
            <a href="#careers" className="text-slate-500 hover:text-slate-900 transition-colors">채용공고</a>
          </div>
          <button onClick={() => setSidebarOpen(true)} className="md:hidden p-2 text-slate-600"><Menu className="w-6 h-6" /></button>
          <a href="mailto:changmaec1@naver.com" className="hidden md:block">
            <Button className="bg-slate-900 text-white hover:bg-slate-800 font-bold px-6 rounded-xl shadow-md">문의하기</Button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-slate-900 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="container px-4 mx-auto max-w-7xl relative z-10">
          <span className="text-slate-400 font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Sustainability</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white tracking-tight">
            내일을 위한 <span className="text-emerald-400">순환경제</span>의 중심
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto font-medium">
            (주)창맥은 재생 플라스틱 기술 혁신을 통해 탄소 발생을 억제하고,<br />지속가능한 미래를 위한 사회적 책임을 다합니다.
          </p>
        </div>
      </section>

      {/* Circular Economy Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 leading-tight">
                플라스틱의 생애주기를<br />다시 정의합니다
              </h2>
              <p className="text-slate-600 font-medium leading-relaxed mb-10">
                단순한 폐기물 처리를 넘어, 고분자 사슬 보강 기술과 화학적 재활용 공정을 통해 폐플라스틱에 새로운 생명력을 불어넣습니다. 창맥의 순환경제 모델은 자원 고갈을 방지하고 환경 부하를 최소화하는 기술적 해답입니다.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <Recycle className="w-8 h-8 text-emerald-500 mb-4" />
                  <h4 className="font-bold text-slate-900 mb-2">자원 순환율 극대화</h4>
                  <p className="text-xs text-slate-500 font-medium">선별 및 정제 기술을 통한 고품질 원료 회수</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <Globe className="w-8 h-8 text-blue-500 mb-4" />
                  <h4 className="font-bold text-slate-900 mb-2">탄소 배출 저감</h4>
                  <p className="text-xs text-slate-500 font-medium">신재 대비 탄소 배출량 획기적 감축</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1600&auto=format&fit=crop" 
                  alt="Research" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                />
              </div>
              <div className="absolute -bottom-6 -left-6 p-8 bg-slate-900 text-white rounded-3xl shadow-xl hidden md:block">
                <p className="text-3xl font-black mb-1">16+</p>
                <p className="text-xs font-bold text-slate-400">YEARS OF EXPERTISE</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESG Strategy Section */}
      <section className="py-24 bg-slate-50">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">ESG 경영 전략</h2>
            <p className="mt-4 text-slate-500 font-medium">창맥은 환경(E), 사회(S), 지배구조(G) 전 영역에서 실질적인 변화를 만듭니다.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {esgStrategies.map((strategy, idx) => {
              const Icon = strategy.icon;
              return (
                <div key={idx} className="p-10 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{strategy.title}</h3>
                  <p className="text-sm font-bold text-slate-400 mb-8">{strategy.subtitle}</p>
                  <ul className="space-y-4">
                    {strategy.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-3 text-sm font-medium text-slate-600">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-slate-500 font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Compliance</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">인증 및 준수 사항</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className="p-8 text-center rounded-3xl bg-slate-50 border border-slate-100 hover:bg-slate-900 group transition-all duration-300">
                <Award className="w-10 h-10 text-slate-300 mx-auto mb-6 group-hover:text-emerald-400 transition-colors" />
                <h4 className="font-extrabold text-slate-900 group-hover:text-white transition-colors mb-2">{cert.title}</h4>
                <p className="text-xs text-slate-500 group-hover:text-slate-400 mb-4 transition-colors">{cert.description}</p>
                <span className="text-[10px] font-bold text-slate-400 px-3 py-1 bg-white rounded-full group-hover:bg-slate-800 transition-colors">
                  {cert.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="py-24 bg-slate-900 text-white text-center">
        <div className="container px-4 mx-auto">
          <Target className="w-16 h-16 text-emerald-400 mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">탄소중립을 향한 멈추지 않는 도전</h2>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto font-medium">
            (주)창맥은 2030 탄소중립 로드맵을 바탕으로 친환경 플라스틱 산업의 글로벌 표준을 선도하겠습니다.
          </p>
          <a href="/contact">
            <Button className="bg-emerald-500 text-slate-900 hover:bg-emerald-400 font-bold text-lg px-10 h-16 rounded-2xl transition-all shadow-xl">
              환경 경영 문의하기
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

