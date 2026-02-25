import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Leaf, Zap, Globe, Award, CheckCircle, Menu, Lightbulb, Cpu, Leaf as LeafIcon } from "lucide-react";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="홈" 
        description="고품질 재생 플라스틱 소재 전문 제조 기업 (주)창맥입니다." 
      />
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="container flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-blue-700">(주)창맥</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <a href="/about" className="text-gray-700 hover:text-blue-700 transition">회사소개</a>
            <a href="/products" className="text-gray-700 hover:text-blue-700 transition">사업소개</a>
            <a href="/sustainability" className="text-gray-700 hover:text-blue-700 transition">지속가능경영</a>
            <a href="/ir" className="text-gray-700 hover:text-blue-700 transition">IR</a>
            <a href="#careers" className="text-gray-700 hover:text-blue-700 transition">채용공고</a>
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>

          {/* Desktop CTA Button */}
          <a href="mailto:changmaec1@naver.com">
            <Button className="hidden md:block bg-blue-700 hover:bg-blue-800">문의하기</Button>
          </a>
        </div>
      </nav>

      {/* Hero Section with Factory Background */}
      <section className="relative bg-cover bg-center text-white h-[85vh] min-h-[600px] flex flex-col overflow-hidden" style={{backgroundImage: "url('/펠렛배경.jpg')"}}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="flex-1 container relative z-10 flex flex-col justify-center mt-10 md:mt-20">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight tracking-tight">
              Beyond Recycling,
              <span className="block mt-4 text-4xl md:text-6xl text-white font-light">
                Towards Engineering.
              </span>
            </h1>
            <p className="text-xl text-slate-200 font-light leading-relaxed max-w-xl">
              경험과 데이터로 증명된 품질. <br className="hidden md:block"/> 
              다양한 산업군에 최적화된 맞춤형 재생 플라스틱 소재를 제공합니다.
            </p>
          </div>
        </div>
            <div className="container relative z-10 mt-auto pb-16 flex flex-col sm:flex-row gap-4">
              <a href="/products" className="w-fit">
                <Button className="w-fit px-8 h-14 flex items-center justify-center bg-white text-gray-900 hover:bg-gray-200 border border-white font-bold text-lg shadow-lg transition-colors">
                  제품 보기
                </Button>
              </a>
              <a href="/about" className="w-fit">
                <Button variant="outline" className="w-fit px-8 h-14 flex items-center justify-center border border-white/60 text-white hover:bg-white/10 hover:border-white font-bold text-lg transition-all">
                  회사소개 <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>
        
          </section>
    {/* Core Competencies Section */}
      <section className="py-24 md:py-32 bg-slate-50">
  <div className="container px-4 mx-auto max-w-7xl">
    <div className="text-center max-w-3xl mx-auto mb-20">
      <span className="text-blue-800 font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
        Core Competencies
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
        데이터로 증명하는 품질 기준
      </h2>
      <p className="text-lg text-slate-600 leading-relaxed md:px-10 font-medium">
        데이터 기반 품질 관리 시스템으로 신재(Virgin)급 물성을 구현합니다.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
      {/* 카드 1 */}
      <div className="group bg-white p-10 rounded-xl shadow-sm border border-slate-200 transition-all duration-300 hover:border-blue-500 hover:shadow-md hover:-translate-y-1 flex flex-col">
        <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center mb-8 transition-colors group-hover:bg-blue-50">
          <Award className="w-8 h-8 text-slate-700 transition-colors group-hover:text-blue-700" />
        </div>
        <div className="flex-grow">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">고충격 물성 복원 기술</h3>
          <p className="text-slate-600 mb-10 leading-relaxed">
            TPE 같은 충격 보강제를 완벽한 비율로 배합하여, 미세 균열을 막고 자동차 부품 수준의 강력한 Izod 충격 강도를 구현합니다.
          </p>
        </div>
        <div className="pt-6 border-t border-slate-100 flex items-center text-slate-500 text-sm font-medium mt-auto">
          <CheckCircle className="w-5 h-5 mr-3 text-blue-600/70" />
          <span>대한민국 특허 등록 제 10-2021-0165852호</span>
        </div>
      </div>

      {/* 카드 2 */}
      <div className="group bg-white p-10 rounded-xl shadow-sm border border-slate-200 transition-all duration-300 hover:border-blue-500 hover:shadow-md hover:-translate-y-1 flex flex-col">
        <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center mb-8 transition-colors group-hover:bg-blue-50">
          <Cpu className="w-8 h-8 text-slate-700 transition-colors group-hover:text-blue-700" />
        </div>
        <div className="flex-grow">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">혼합 수지 상용화·안정화</h3>
          <p className="text-slate-600 mb-10 leading-relaxed">
            서로 다른 플라스틱이 섞여도 열안정제와 상용화제를 정밀하게 제어해, 생산 시 MFI(용융지수)가 널뛰지 않고 일정하게 유지됩니다.
          </p>
        </div>
        <div className="pt-6 border-t border-slate-100 flex items-center text-slate-500 text-sm font-medium mt-auto">
          <CheckCircle className="w-5 h-5 mr-3 text-blue-600/70" />
          <span>대한민국 특허 등록 제 10-2014-0027148호</span>
        </div>
      </div>

      {/* 카드 3 */}
      <div className="group bg-white p-10 rounded-xl shadow-sm border border-slate-200 transition-all duration-300 hover:border-blue-500 hover:shadow-md hover:-translate-y-1 flex flex-col">
        <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center mb-8 transition-colors group-hover:bg-blue-50">
          <CheckCircle className="w-8 h-8 text-slate-700 transition-colors group-hover:text-blue-700" />
        </div>
        <div className="flex-grow">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Data-Driven 품질 관리</h3>
          <p className="text-slate-600 mb-10 leading-relaxed">
            공장에서 나가는 모든 펠렛은 자체 연구실을 거칩니다. 수분율부터 인장강도까지 철저하게 데이터를 추출하여 통과된 제품만 납품합니다.
          </p>
        </div>
        <div className="pt-6 border-t border-slate-100 flex items-center text-blue-800 text-sm font-bold mt-auto">
          <CheckCircle className="w-5 h-5 mr-3 text-blue-600/70" />
          <span>자체 기업부설연구소 데이터 검증 시스템</span>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* About Section */}
      <section id="about" className="relative py-24 md:py-32 overflow-hidden">
  <div 
    className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2000&auto=format&fit=crop')" }}
  >
    <div className="absolute inset-0 bg-slate-900/70"></div>
  </div>

  <div className="container relative z-10 px-4 mx-auto max-w-7xl">
    <div className="text-center max-w-3xl mx-auto mb-20">
      <span className="text-slate-300 font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
        About Changmaec
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
        창맥은 복합 기능을 구현한<br />
        재생수지를 제조합니다
      </h2>
    </div>

    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
      <div className="order-2 lg:order-1">
        <div className="space-y-4 mb-12">
          <div className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="w-2 h-2 bg-slate-300 rounded-full mr-4 flex-shrink-0"></div>
            <p className="text-lg text-white font-bold tracking-tight">첨단 재활용 플라스틱 기술 개발</p>
          </div>
          <div className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="w-2 h-2 bg-slate-300 rounded-full mr-4 flex-shrink-0"></div>
            <p className="text-lg text-white font-bold tracking-tight">재활용 플라스틱 생산 공정 개발</p>
          </div>
          <div className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="w-2 h-2 bg-slate-300 rounded-full mr-4 flex-shrink-0"></div>
            <p className="text-lg text-white font-bold tracking-tight">복합기능 재활용 합성수지 생산</p>
          </div>
          <div className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="w-2 h-2 bg-slate-300 rounded-full mr-4 flex-shrink-0"></div>
            <p className="text-lg text-white font-bold tracking-tight">재활용소재 기반 B2C제품 개발 및 생산</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-10">
          <span className="px-4 py-2.5 bg-transparent border border-white/40 text-white font-bold rounded-lg text-sm">
            스마트공장 인증
          </span>
          <span className="px-4 py-2.5 bg-transparent border border-white/40 text-white font-bold rounded-lg text-sm">
            ISO 9001 인증
          </span>
          <span className="px-4 py-2.5 bg-transparent border border-white/40 text-white font-bold rounded-lg text-sm">
            소재부품장비 전문기업
          </span>
        </div>

        <a href="/about" className="inline-block">
          <Button className="h-14 px-8 bg-white text-slate-900 hover:bg-slate-200 font-bold text-lg rounded-xl transition-colors shadow-lg">
            회사 소개 자세히 보기
          </Button>
        </a>
      </div>

      <div className="order-1 lg:order-2 relative h-full min-h-[400px]">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-3xl transform rotate-3 scale-105 -z-10 border border-white/10"></div>
        
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden h-full min-h-[400px] border border-slate-200 group">
          <div 
            className={`absolute inset-0 flex items-center justify-center p-12 bg-white transition-opacity duration-500 ease-in-out ${activeSlide === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663320104260/TXZUbWyeLOLNEyrb.png"
              alt="(주)창맥 로고"
              className="max-w-full h-auto max-h-48 object-contain"
            />
          </div>
          
          <div 
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${activeSlide === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663320104260/lmuUhRDlyrXsdAHq.jpeg"
              alt="고품질 컴파운드 샘플"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
            <button 
              onClick={() => setActiveSlide(0)} 
              className={`h-2.5 rounded-full transition-all duration-300 ${activeSlide === 0 ? 'bg-slate-800 w-8' : 'bg-slate-300 w-2.5 hover:bg-slate-400'}`}
              aria-label="첫번째 이미지 보기"
            ></button>
            <button 
              onClick={() => setActiveSlide(1)} 
              className={`h-2.5 rounded-full transition-all duration-300 ${activeSlide === 1 ? 'bg-slate-800 w-8' : 'bg-slate-300 w-2.5 hover:bg-slate-400'}`}
              aria-label="두번째 이미지 보기"
            ></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Products Section */}
     <section id="products" className="py-24 md:py-32 bg-white">
  <div className="container px-4 mx-auto max-w-7xl">
    <div className="text-center max-w-3xl mx-auto mb-20">
      <span className="text-slate-500 font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
        Our Products
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
        고성능 재생 컴파운드 라인업
      </h2>
      <p className="text-lg text-slate-600 font-medium">
        복합 기능을 구현한 합성수지로 다양한 산업 분야의 요구사항을 충족합니다.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* 1. PP Compound */}
      <div className="group bg-slate-50 p-8 rounded-2xl border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-slate-300">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">PP 컴파운드</h3>
        <p className="text-slate-600 mb-8 leading-relaxed text-sm">
          PCR 폴리프로필렌 기반 소재. 내충격성과 성형성이 우수하여 자동차 내장재 및 가전 부품에 최적화되어 있습니다.
        </p>
        <div className="space-y-2 pt-6 border-t border-slate-200 text-xs">
          <div className="flex justify-between"><span className="text-slate-400">주요 용도</span><span className="text-slate-900 font-bold">자동차 내장재, 가전</span></div>
          <div className="flex justify-between"><span className="text-slate-400">핵심 강점</span><span className="text-slate-900 font-bold">고강성, 고유동성</span></div>
        </div>
      </div>

      {/* 2. PA6/PA66 Compound */}
      <div className="group bg-slate-50 p-8 rounded-2xl border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-slate-300">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">PA6/PA66 컴파운드</h3>
        <p className="text-slate-600 mb-8 leading-relaxed text-sm">
          고강도 폴리아마이드 재생 소재. 뛰어난 내열성과 기계적 강도를 바탕으로 엔진 커버 및 산업용 부품에 적용됩니다.
        </p>
        <div className="space-y-2 pt-6 border-t border-slate-200 text-xs">
          <div className="flex justify-between"><span className="text-slate-400">주요 용도</span><span className="text-slate-900 font-bold">기계 및 엔진 부품</span></div>
          <div className="flex justify-between"><span className="text-slate-400">핵심 강점</span><span className="text-slate-900 font-bold">내열성, 기계적 강도</span></div>
        </div>
      </div>

      {/* 3. PC Compound */}
      <div className="group bg-slate-50 p-8 rounded-2xl border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-slate-300">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">PC 컴파운드</h3>
        <p className="text-slate-600 mb-8 leading-relaxed text-sm">
          재생 폴리카보네이트. 투명성과 고충격성이 필요한 조명 및 광학 부품에 적합합니다.
        </p>
        <div className="space-y-2 pt-6 border-t border-slate-200 text-xs">
          <div className="flex justify-between"><span className="text-slate-400">주요 용도</span><span className="text-slate-900 font-bold">조명, 광학 부품</span></div>
          <div className="flex justify-between"><span className="text-slate-400">핵심 강점</span><span className="text-slate-900 font-bold">투명성, 고충격성</span></div>
        </div>
      </div>

      {/* 4. ABS (내열) */}
      <div className="group bg-slate-50 p-8 rounded-2xl border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-slate-300">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">ABS (내열)</h3>
        <p className="text-slate-600 mb-8 leading-relaxed text-sm">
          고온 환경에서도 형태 변형이 적은 내열 ABS 소재. 가전제품의 외장재나 자동차의 고온 노출 부위에 최적입니다.
        </p>
        <div className="space-y-2 pt-6 border-t border-slate-200 text-xs">
          <div className="flex justify-between"><span className="text-slate-400">주요 용도</span><span className="text-slate-900 font-bold">가전 외장재, 자동차 부품</span></div>
          <div className="flex justify-between"><span className="text-slate-400">핵심 강점</span><span className="text-slate-900 font-bold">열안정성, 광택 유지</span></div>
        </div>
      </div>

      {/* 5. PBT Compound */}
      <div className="group bg-slate-50 p-8 rounded-2xl border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-slate-300">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">PBT 컴파운드</h3>
        <p className="text-slate-600 mb-8 leading-relaxed text-sm">
          우수한 전기적 특성과 치수 안정성을 가진 소재. 정밀 커넥터 및 전기·전자 분야의 핵심 부품 소재로 공급됩니다.
        </p>
        <div className="space-y-2 pt-6 border-t border-slate-200 text-xs">
          <div className="flex justify-between"><span className="text-slate-400">주요 용도</span><span className="text-slate-900 font-bold">전기·전자 커넥터</span></div>
          <div className="flex justify-between"><span className="text-slate-400">핵심 강점</span><span className="text-slate-900 font-bold">절연성, 치수 안정성</span></div>
        </div>
      </div>

      {/* 6. PC/ABS Alloy */}
      <div className="group bg-slate-50 p-8 rounded-2xl border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-slate-300">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">PC/ABS Alloy</h3>
        <p className="text-slate-600 mb-8 leading-relaxed text-sm">
          PC의 내열·충격성과 ABS의 가공성을 결합한 합성 수지. IT 기기 하우징 및 자동차 부품에 폭넓게 적용됩니다.
        </p>
        <div className="space-y-2 pt-6 border-t border-slate-200 text-xs">
          <div className="flex justify-between"><span className="text-slate-400">주요 용도</span><span className="text-slate-900 font-bold">IT 기기 하우징, 외장 부품</span></div>
          <div className="flex justify-between"><span className="text-slate-400">핵심 강점</span><span className="text-slate-900 font-bold">균형 잡힌 물리 특성</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Sustainability Section */}
      <section id="sustainability" className="relative py-24 md:py-32 overflow-hidden">
  {/* 바다 배경 이미지와 어두운 오버레이 */}
  <div 
    className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=2000&auto=format&fit=crop')" }}
  >
    <div className="absolute inset-0 bg-slate-900/80"></div>
  </div>

  <div className="container relative z-10 px-4 mx-auto max-w-7xl">
    <div className="text-center max-w-3xl mx-auto mb-20">
      <span className="text-slate-400 font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
        Sustainability
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
        자원 순환으로 완성하는<br />
        지속가능한 미래
      </h2>
      <p className="text-lg text-slate-300 font-medium leading-relaxed">
        창맥은 폐플라스틱의 고부가 가치 자원화를 통해 탄소 배출을 절감하고, 차세대 친환경 공정 모델을 확립하여 사회적 책임을 다하고 있습니다.
      </p>
    </div>

    {/* 반투명 유리 질감 카드 (Glassmorphism) */}
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <div className="p-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-300 hover:bg-white/20">
        <h3 className="text-2xl font-bold text-white mb-4">탄소중립 실천</h3>
        <p className="text-slate-300 leading-relaxed">
          2025-2027 탄소중립 사업화 지원사업 선정 및 저탄소 공정 모델 확립을 통해 기후 위기 극복에 적극적으로 동참합니다.
        </p>
      </div>
      
      <div className="p-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-300 hover:bg-white/20">
        <h3 className="text-2xl font-bold text-white mb-4">순환 자원화</h3>
        <p className="text-slate-300 leading-relaxed">
          화학적·기계적 재활용 기술을 결합하여 폐기물을 줄이고, 최적의 자원 순환 솔루션을 산업 전반에 제공합니다.
        </p>
      </div>
    </div>
  </div>
</section>

{/* 하단 CTA (문의하기) 섹션 */}
<section className="py-24 bg-white border-t border-slate-100 relative z-10">
  <div className="container px-4 mx-auto max-w-4xl text-center">
    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-10 tracking-tight leading-tight">
      최상의 품질로 귀사의 혁신을 지원합니다
    </h2>
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <a href="/contact">
        <Button className="h-16 px-12 bg-slate-900 text-white hover:bg-slate-800 font-bold text-xl rounded-2xl transition-all shadow-xl hover:-translate-y-1">
          견적 및 샘플 문의하기
        </Button>
      </a>
      <a href="/products">
        <Button variant="outline" className="h-16 px-12 border-slate-300 text-slate-700 hover:bg-slate-50 font-bold text-xl rounded-2xl transition-all hover:-translate-y-1">
          제품 카탈로그 확인
        </Button>
      </a>
    </div>
  </div>
</section>
      
      <Footer />
    </div>
  );
}
