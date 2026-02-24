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
      <section className="relative bg-cover bg-center text-white py-20 md:py-40 overflow-hidden" style={{backgroundImage: 'url(https://files.manuscdn.com/user_upload_by_module/session_file/310519663320104260/hHPQvQTOiOJeVxif.jpg)'}}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Beyond Recycling,  

              Towards Engineering
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-3">
              경험과 데이터로 증명된 품질. 다양한 산업군에 최적화된 맞춤형 재생 플라스틱 소재를 제공합니다.
            </p>
            <p className="text-base md:text-lg text-lime-300 font-semibold mb-8">
              16년의 업력, 특허 기술 기반의 고품질 재생수지 전문 제조 기업
            </p>
            <div className="flex gap-4">
              <a href="/products">
                <Button className="bg-lime-400 text-blue-900 hover:bg-lime-500">
                  제품 보기
                </Button>
              </a>
              <a href="/about">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  회사소개 <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            핵심 역량
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Technology */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-blue-700">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Cpu className="w-8 h-8 text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">기술력</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                이축압출기(Twin-Screw Extruder) 설비를 통한 <strong>균일한 물성 구현 기술</strong>로 
                신재(Virgin)급 품질의 재생수지를 제조합니다.
              </p>
            </div>

            {/* Patents */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-lime-600">
              <div className="w-14 h-14 bg-lime-100 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-lime-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">특허 기술</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                차별화된 재생수지 배합 기술과 공정 혁신으로 
                <strong>2건의 핵심 특허</strong>를 보유하고 있습니다.
              </p>
              <div className="bg-lime-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 font-semibold mb-3">보유 특허</p>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>• 특허번호 10-2021-0165852</p>
                  <p>• 특허번호 10-2014-0027148</p>
                </div>
              </div>
            </div>

            {/* Eco-Friendly */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-green-600">
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <LeafIcon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">친환경 경영</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>탄소중립 사업화 지원사업</strong> 선정으로 
                ESG 경영을 실천하고 있습니다.
              </p>
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 font-semibold mb-3">ESG 성과</p>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>• 2025~2027 탄소중립 사업화 지원사업 선정</p>
                  <p>• 화학적 순환 자원화 기술 개발 완료</p>
                  <p>• 저탄소 공정 모델 확립</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            (주)창맥에 대해
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                재생 플라스틱의 미래를 선도합니다
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                (주)창맥은 2010년 설립 이후 고품질의 재생 플라스틱 소재 제조에 특화된 기업입니다.
                신소재 기술과 혁신적인 공정으로 지속가능한 순환경제 실현에 앞장서고 있습니다.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>주요 인증:</strong> 스마트공장 인증 확인서, ISO 9001 인증, 소재부품장비 전문기업 인정
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                대기업의 친환경 제품 개발을 지원하며, 글로벌 표준의 품질을 제공합니다.
              </p>
              <a href="/about">
                <Button className="bg-blue-700 hover:bg-blue-800">
                  자세히 알아보기
                </Button>
              </a>
            </div>
            <div className="flex items-center justify-center p-8 bg-gray-50 rounded-xl">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663320104260/TXZUbWyeLOLNEyrb.png" 
                alt="(주)창맥 로고" 
                className="max-w-full h-auto max-h-64 object-contain"
              />
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
