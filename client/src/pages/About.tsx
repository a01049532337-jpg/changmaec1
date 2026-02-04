import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Target, Lightbulb, Users, Zap } from "lucide-react";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function About() {
  const coreValues = [
    {
      icon: Target,
      title: "완벽한 품질",
      description: "가장 까다로운 기준도 만족시킬 수 있는 완벽한 품질 실현"
    },
    {
      icon: Lightbulb,
      title: "기술 혁신",
      description: "R&D 투자 확대와 독자적인 기술력으로 업계의 기준을 세움"
    },
    {
      icon: Users,
      title: "장인정신",
      description: "현장의 작은 디테일 하나 놓치지 않는 전문가 정신"
    },
    {
      icon: Zap,
      title: "지속가능성",
      description: "탄소중립과 순환경제 실현으로 미래 세대를 위한 책임 이행"
    }
  ];

  const timeline = [
    {
      period: "2021 ~ 현재",
      title: "기술 혁신 및 탄소중립 선도",
      items: [
        "2025 ~ 2027 탄소중립 사업화 지원사업 선정 및 수행",
        "2024 연구개발전담부서 인정서 획득",
        "2022 ~ 2024 중소기업기술개발지원사업 시장대응형 R&D 수행",
        "2023 탄소소재 화학적 순환 자원화 기술개발사업 수행",
        "2023 경북 정밀화학소재산업 경쟁력강화 지원사업 선정",
        "2022 소재·부품·장비 전문기업 확인서 획득",
        "2022 품질경영시스템 인증(ISO 9001) 획득",
        "2022 스마트공장 수준 확인서 획득",
        "2021 경북 정밀화학소재산업 경쟁력강화 지원사업 수행",
        "2021 중소기업 산학연협력사업 현장형 R&D 수행",
        "2021 특허 등록 [특허번호 10-2021-0165852]"
      ]
    },
    {
      period: "2015 ~ 2020",
      title: "원천 기술 확보 및 시장 확대",
      items: [
        "2015 친환경 재생수지 생산 라인 증설 및 주요 협력사 공급 확대",
        "2014 특허 등록 [특허번호 10-2014-0027148]"
      ]
    },
    {
      period: "2010 ~ 2014",
      title: "(주)창맥 설립 및 기반 구축",
      items: [
        "2010 (주)창맥 설립 (경상북도 성주군)",
        "2010 재생 플라스틱 소재 제조 시설 및 인프라 구축"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="회사소개" 
        description="(주)창맥의 기업 소개, CEO 인사말, 연혁 및 핵심 가치를 소개합니다. 16년 업력의 기술력으로 완벽한 품질을 약속합니다." 
      />
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="container flex items-center justify-between h-16">
          <a href="/" className="text-2xl font-bold text-blue-700">창맥</a>
          <a href="/" className="text-blue-700 hover:text-blue-800">← 돌아가기</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">회사소개</h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            순환경제의 리더로서 고품질의 재생 플라스틱 소재로 지속가능한 미래를 만들어갑니다.
          </p>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-700">
                멈추지 않는 혁신으로 업계의 기준을 세우겠습니다
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  안녕하십니까. (주)창맥 대표이사 이재구입니다.
                </p>
                <p>
                  오늘날의 산업 현장은 그 어느 때보다 빠르고 정교한 변화를 요구하고 있습니다. (주)창맥은 이러한 변화의 흐름에 발맞춰 독자적인 기술력 확보와 공정의 효율화를 통해 독보적인 경쟁력을 쌓아왔습니다.
                </p>
                <p>
                  저희의 목표는 명확합니다. 가장 까다로운 기준도 만족시킬 수 있는 '완벽한 품질'을 실현하는 것입니다. 이를 위해 (주)창맥은 R&D 투자 확대와 전문 인재 양성에 힘쓰며, 현장의 작은 디테일 하나 놓치지 않는 장인정신으로 임하고 있습니다.
                </p>
                <p>
                  (주)창맥은 현재에 안주하지 않고, 기술의 한계를 넘어 글로벌 시장에서도 인정받는 기술 혁신 기업으로 도약하겠습니다. 저희의 열정과 노력이 고객 여러분의 성공으로 이어질 수 있도록 최선을 다하겠습니다.
                </p>
                <p className="font-bold pt-4">
                  감사합니다.<br />
                  (주)창맥 대표이사 이재구
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-lime-100 rounded-lg h-96 flex items-center justify-center">
              <img 
                src="/images/hero-background.jpg" 
                alt="CEO 이재구" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            핵심 가치
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <Card key={idx} className="p-6 hover:shadow-lg transition">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-700" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            회사 개요
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-blue-700 mb-2">회사명</h3>
                <p className="text-gray-700">(주)창맥</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-700 mb-2">설립일</h3>
                <p className="text-gray-700">2010년 10월</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-700 mb-2">대표이사</h3>
                <p className="text-gray-700">이재구</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-700 mb-2">주소</h3>
                <p className="text-gray-700">경상북도 성주군 선남면 선노로 55-36</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-700 mb-2">연락처</h3>
                <p className="text-gray-700">전화: 054-931-0718</p>
                <p className="text-gray-700">팩스: 054-931-0719</p>
                <p className="text-gray-700">이메일: changmaec1@naver.com</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-blue-700 mb-2">주요 사업</h3>
                <p className="text-gray-700">재생 플라스틱 소재 제조 및 판매</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-700 mb-2">주요 인증</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• 스마트공장 수준 확인서 (2022)</li>
                  <li>• ISO 9001 인증 (2022)</li>
                  <li>• 소재·부품·장비 전문기업 확인서 (2022)</li>
                  <li>• 연구개발전담부서 인정서 (2024)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-700 mb-2">특허</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• 특허번호 10-2021-0165852</li>
                  <li>• 특허번호 10-2014-0027148</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            회사 연혁
          </h2>
          <div className="space-y-12">
            {timeline.map((period, idx) => (
              <div key={idx} className="relative">
                <div className="flex gap-6">
                  {/* Timeline marker */}
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-blue-700 rounded-full mt-2"></div>
                    {idx < timeline.length - 1 && (
                      <div className="w-1 bg-blue-200 flex-grow mt-4" style={{ minHeight: "200px" }}></div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="pb-8 flex-grow">
                    <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition">
                      <div className="inline-block bg-blue-700 text-white px-4 py-1 rounded-full text-sm font-bold mb-3">
                        {period.period}
                      </div>
                      <h3 className="text-2xl font-bold text-blue-700 mb-4">
                        {period.title}
                      </h3>
                      <ul className="space-y-2">
                        {period.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex gap-3 text-gray-700">
                            <span className="text-lime-600 font-bold">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-700 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            (주)창맥과 함께 미래를 만들어보세요
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            고품질의 재생 플라스틱 소재로 당신의 제품을 한 단계 업그레이드하세요.
          </p>
          <Button className="bg-lime-400 text-blue-900 hover:bg-lime-500 text-lg px-8 py-6">
            지금 문의하기
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
