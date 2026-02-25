import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ArrowRight, CheckCircle, Layers, Settings, Factory, Menu 
} from "lucide-react";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function Products() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const representativeTechnologies = [
    {
      name: "중합소재 (Polymeric Material)",
      description: "고부가 화학 첨가제 중합재료",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1600&auto=format&fit=crop",
      details: [
        "고부가 화학 첨가제 중합제",
        "추출, 해중합, 정제, 중합의 화학적 재활용",
        "다양한 산업 분야 적용 가능"
      ]
    },
    {
      name: "난연(FR)소재 (Flame Retardant)",
      description: "안전성이 강화된 난연 플라스틱",
      image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=1600&auto=format&fit=crop",
      details: [
        "ABS/PC/ABS, PC/PA, PBT/PET 등 적용",
        "Hallogen Free UL 94 V0(5VA)",
        "높은 안전 기준 충족"
      ]
    },
    {
      name: "전도성 소재 (Conductive Material)",
      description: "정전기 방지 및 EMI 차폐 기능",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
      details: [
        "ESD 정전기 방지 제품 E9-11승(PE/PS/ABS/PC/ABS)",
        "E3-E6승(CF/CNT/CB)그래핀 고전도성 구현",
        "EMI 차폐율 30-60 dB 확보"
      ]
    },
    {
      name: "복합기능 소재 (Complex Functional Material)",
      description: "다기능성 복합 플라스틱",
      image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1600&auto=format&fit=crop",
      details: [
        "고분자 ESG 기반 복합소재",
        "전자기파 차폐, 방열, 난연 기능",
        "다기능성 복합소재 연구 개발"
      ]
    }
  ];

  const processFlow = [
    { step: "01", title: "분쇄된 폐플라스틱 수거", description: "산업 현장에서 분쇄된 고품질의 폐플라스틱 원료를 수거" },
    { step: "02", title: "건조공정", description: "수분을 제거하여 다음공정을 준비" },
    { step: "03", title: "1차압출공정", description: "불순물 제거를 위한 공정을 실시" },
    { step: "04", title: "컴파운드 및 펠렛화", description: "물성향상을 위한 첨가제 및 부자제를 투입 및 컴파운드하여 고품질의 펠렛을 생산" },
    { step: "05", title: "화학적 순환 자원화", description: "고급 기술을 통한 화학적 순환 자원화 공정으로 물성이 우수한 재생 소재로 변환" },
    { step: "06", title: "품질 검사 및 포장", description: "엄격한 품질 기준에 따라 검사하고 안전하게 포장하여 납품" }
  ];

  const customizationOptions = [
    { title: "용도별 물성 설계", description: "고강도, 고인성, 내열성 등 용도별 최적화" },
    { title: "전용 컬러 커스터마이징", description: "고객사 브랜드 고유 컬러 완벽 구현" },
    { title: "기능성 첨가제 처방", description: "UV차단 기능 추가" },
    { title: "혼합 비율 최적화", description: "경제성과 성능을 고려한 최적의 배합비 제공" }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SEO 
        title="사업소개" 
        description="(주)창맥의 고품질 재생 플라스틱 핵심 기술과 생산 프로세스를 소개합니다." 
      />
      
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="container px-4 mx-auto max-w-7xl flex items-center justify-between h-20">
          <a href="/" className="flex items-center">
            <div className="text-2xl font-extrabold text-slate-900 tracking-tight">(주)창맥</div>
          </a>
          
          <div className="hidden md:flex gap-8 items-center">
            <a href="/about" className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors">회사소개</a>
            <a href="/products" className="text-sm font-bold text-slate-900 transition-colors">사업소개</a>
            <a href="/sustainability" className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors">지속가능경영</a>
            <a href="/ir" className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors">IR</a>
            <a href="#careers" className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors">채용공고</a>
          </div>

          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>

          <a href="mailto:changmaec1@naver.com" className="hidden md:block">
            <Button className="bg-slate-900 text-white hover:bg-slate-800 font-bold px-6 rounded-xl transition-all shadow-md">
              문의하기
            </Button>
          </a>
        </div>
      </nav>

      <section className="relative py-24 md:py-32 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="container px-4 mx-auto max-w-7xl relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white tracking-tight">
            기술로 증명하는 <span className="text-slate-400">소재의 혁신</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-medium">
            (주)창맥의 4대 핵심 기술을 통해 구현된 차세대 엔지니어링 플라스틱 솔루션
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-slate-500 font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Core Technology</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">4대 핵심 기술</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {representativeTechnologies.map((tech, idx) => (
              <div key={idx} className="group overflow-hidden rounded-3xl bg-slate-50 border border-slate-100 transition-all hover:shadow-2xl">
                <div className="relative h-64 overflow-hidden">
                  <img src={tech.image} alt={tech.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-8">
                    <h3 className="text-2xl font-bold text-white mb-1">{tech.name}</h3>
                    <p className="text-slate-300 text-sm font-medium">{tech.description}</p>
                  </div>
                </div>
                <div className="p-8">
                  <ul className="space-y-3">
                    {tech.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-3 text-slate-600 font-medium text-sm">
                        <CheckCircle className="w-4 h-4 text-slate-400 mt-1 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container px-4 mx-auto max-w-7xl text-center">
          <div className="mb-16">
            <span className="text-slate-500 font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Production Process</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">생산 프로세스</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {processFlow.map((flow, idx) => (
              <div key={idx} className="relative group">
                <div className="p-6 rounded-2xl bg-white border border-slate-200 h-full group-hover:bg-slate-900 transition-all shadow-sm">
                  <span className="block text-3xl font-black text-slate-100 group-hover:text-slate-800 mb-4 transition-colors">{flow.step}</span>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-white mb-2 transition-colors">{flow.title}</h4>
                  <p className="text-[11px] text-slate-500 group-hover:text-slate-400 leading-tight transition-colors">{flow.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto max-w-7xl text-center">
          <div className="mb-16">
            <span className="text-slate-500 font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Customized Solution</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">맞춤형 솔루션</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {customizationOptions.map((opt, idx) => (
              <div key={idx} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:-translate-y-2 transition-all">
                <Layers className="w-8 h-8 text-slate-300 mx-auto mb-6" />
                <h4 className="text-lg font-bold text-slate-900 mb-3">{opt.title}</h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{opt.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white text-center">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">귀사의 산업에 최적화된 재생 수지를 제안합니다</h2>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto font-medium">데이터로 증명된 품질과 16년 업력의 신뢰를 경험하십시오.</p>
          <a href="mailto:changmaec1@naver.com">
            <Button className="bg-white text-slate-900 hover:bg-slate-200 font-bold text-lg px-10 h-16 rounded-2xl transition-all shadow-xl hover:-translate-y-1">
              상담 요청하기
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
