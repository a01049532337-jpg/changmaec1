import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Leaf, Zap, Globe, Award, CheckCircle, Menu, Lightbulb, Cpu, Leaf as LeafIcon } from "lucide-react";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function Home() {
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
      <section id="about" className="py-24 md:py-32 bg-white overflow-hidden">
  <div className="container px-4 mx-auto max-w-7xl">
    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
      <div className="order-2 lg:order-1">
        <span className="text-blue-800 font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
          About Changmac
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-10 tracking-tight leading-tight">
          창맥은 복합 기능을 구현한<br />
          재생수지를 제조합니다
        </h2>

        <div className="space-y-5 mb-12">
          <div className="flex items-center p-4 bg-slate-50 rounded-xl border border-slate-100">
            <div className="w-2 h-2 bg-blue-600 rounded-full mr-4 flex-shrink-0"></div>
            <p className="text-lg text-slate-800 font-bold tracking-tight">첨단 재활용 플라스틱 기술 개발</p>
          </div>
          <div className="flex items-center p-4 bg-slate-50 rounded-xl border border-slate-100">
            <div className="w-2 h-2 bg-blue-600 rounded-full mr-4 flex-shrink-0"></div>
            <p className="text-lg text-slate-800 font-bold tracking-tight">재활용 플라스틱 생산 공정 개발</p>
          </div>
          <div className="flex items-center p-4 bg-slate-50 rounded-xl border border-slate-100">
            <div className="w-2 h-2 bg-blue-600 rounded-full mr-4 flex-shrink-0"></div>
            <p className="text-lg text-slate-800 font-bold tracking-tight">복합기능 재활용 합성수지 생산</p>
          </div>
          <div className="flex items-center p-4 bg-slate-50 rounded-xl border border-slate-100">
            <div className="w-2 h-2 bg-blue-600 rounded-full mr-4 flex-shrink-0"></div>
            <p className="text-lg text-slate-800 font-bold tracking-tight">재활용소재 기반 B2C제품 개발 및 생산</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-10">
          <span className="px-4 py-2.5 bg-white border border-slate-200 text-slate-600 font-bold rounded-lg text-sm shadow-sm">
            스마트공장 인증
          </span>
          <span className="px-4 py-2.5 bg-white border border-slate-200 text-slate-600 font-bold rounded-lg text-sm shadow-sm">
            ISO 9001 인증
          </span>
          <span className="px-4 py-2.5 bg-white border border-slate-200 text-slate-600 font-bold rounded-lg text-sm shadow-sm">
            소재부품장비 전문기업
          </span>
        </div>

        <a href="/about" className="inline-block">
          <Button className="h-14 px-8 bg-slate-900 text-white hover:bg-blue-700 font-bold text-lg rounded-xl transition-colors shadow-lg">
            회사 소개 자세히 보기
          </Button>
        </a>
      </div>

      <div className="order-1 lg:order-2 relative">
        <div className="absolute inset-0 bg-slate-100 rounded-3xl transform rotate-3 scale-105 -z-10 transition-transform hover:rotate-6 duration-500 border border-slate-200"></div>
        <div className="bg-white p-12 rounded-3xl shadow-xl border border-slate-200 flex items-center justify-center min-h-[400px]">
          <img
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663320104260/TXZUbWyeLOLNEyrb.png"
            alt="(주)창맥 로고"
            className="max-w-full h-auto max-h-48 object-contain"
          />
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Products Section */}
      <section id="products" className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            사업소개
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold mb-3">PP 컴파운드</h3>
              <p className="text-gray-600 mb-4">
                Post-Consumer Recycled 폴리프로필렌을 기반으로 한 고성능 컴파운드입니다.
                자동차 내장재, 가전 제품, 전자 부품 등에 광범위하게 적용됩니다.
              </p>
              <a href="/products">
                <Button variant="ghost" className="text-blue-700">
                  자세히 <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </Card>

            <Card className="p-8 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-lime-700" />
              </div>
              <h3 className="text-xl font-bold mb-3">PA6/PA66 컴파운드</h3>
              <p className="text-gray-600 mb-4">
                고강도 폴리아마이드 재생 소재로 자동차 부품, 기계 부품, 산업용 제품에 사용됩니다.
                우수한 내열성과 기계적 강도를 제공합니다.
              </p>
              <a href="/products">
                <Button variant="ghost" className="text-blue-700">
                  자세히 <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </Card>

            <Card className="p-8 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold mb-3">PC 컴파운드</h3>
              <p className="text-gray-600 mb-4">
                재생 폴리카보네이트 소재로 투명성과 강도가 필요한 제품에 적합합니다.
                전자제품 외관, 조명 부품, 광학 부품 등에 사용됩니다.
              </p>
              <a href="/products">
                <Button variant="ghost" className="text-blue-700">
                  자세히 <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </Card>
          </div>

          {/* Product Features with Materials Image */}
          <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="h-full min-h-[300px]">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663320104260/lmuUhRDlyrXsdAHq.jpeg" 
                alt="고품질 컴파운드 샘플" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-700">제품 특징</h3>
              <div className="space-y-6">
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-lime-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">국제 품질 기준 충족</h4>
                    <p className="text-gray-700 text-sm">ISO 9001 인증으로 일관된 고품질 제품 보증</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-lime-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">환경 친화적</h4>
                    <p className="text-gray-700 text-sm">폐플라스틱 재활용으로 순환경제 실현</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-lime-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">맞춤형 솔루션</h4>
                    <p className="text-gray-700 text-sm">고객 요구에 맞춘 특화된 제품 개발</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-lime-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">안정적 공급</h4>
                    <p className="text-gray-700 text-sm">스마트공장으로 안정적인 생산 및 배송</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section id="sustainability" className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            지속가능경영
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-lg h-80 flex items-center justify-center overflow-hidden">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663320104260/pYtJNSYKPyyBRpHm.png" 
                alt="ESG 지속가능경영" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-700 mb-6">
                환경과 사회를 생각하는 기업
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-lime-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">탄소 중립 달성</h4>
                    <p className="text-gray-700 text-sm">2030년까지 탄소 중립 목표 추진</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-lime-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">폐기물 감량</h4>
                    <p className="text-gray-700 text-sm">재생 플라스틱 활용으로 폐기물 최소화</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-lime-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">사회공헌</h4>
                    <p className="text-gray-700 text-sm">지역사회 발전과 고용 창출에 기여</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-lime-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">투명한 경영</h4>
                    <p className="text-gray-700 text-sm">윤리 경영과 투명한 정보 공개</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-700 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            (주)창맥과 함께하세요
          </h2>
          <p className="text-lg mb-8 opacity-90">
            고품질 재생수지로 지속가능한 미래를 만드는 파트너
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <Button className="bg-lime-400 text-blue-900 hover:bg-lime-500 text-lg px-8 py-6">
                문의하기
              </Button>
            </a>
            <a href="/about">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-3">
                회사소개 보기
              </Button>
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
