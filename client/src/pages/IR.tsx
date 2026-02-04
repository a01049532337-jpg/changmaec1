import { TrendingUp, Award, Zap, Target, CheckCircle, ArrowRight, BarChart3 } from "lucide-react";
import Footer from "@/components/Footer";

export default function IR() {
  const investmentHighlights = [
    {
      title: "검증된 기술력",
      description: "2건의 핵심 특허와 '소재·부품·장비 전문기업' 인증이 증명하는 독보적인 재생수지 배합 기술",
      icon: Award,
      color: "from-blue-50 to-blue-100"
    },
    {
      title: "미래 성장성",
      description: "2025~2027 탄소중립 사업화 지원사업 선정을 통한 차세대 화학적 순환 자원화 기술 선점",
      icon: TrendingUp,
      color: "from-lime-50 to-lime-100"
    },
    {
      title: "안정적 인프라",
      description: "스마트공장 시스템을 도입한 체계적인 제조 공정과 경북 정밀화학소재 네트워크 보유",
      icon: Zap,
      color: "from-blue-50 to-blue-100"
    }
  ];

  const certifications = [
    { name: "ISO 9001", year: "2022", category: "품질경영", icon: "✓" },
    { name: "소재·부품·장비 전문기업", year: "2022", category: "정부 인증", icon: "✓" },
    { name: "스마트공장 확인서", year: "2022", category: "산업 4.0", icon: "✓" },
    { name: "연구개발전담부서 인정", year: "2024", category: "R&D 역량", icon: "✓" }
  ];

  const businessCore = [
    {
      title: "① 재생수지 컴파운딩 기술",
      description: "폐플라스틱을 고품질 재생 원료로 재탄생시키는 맞춤형 배합 기술",
      details: [
        "이축압출기(Twin-Screw Extruder)를 활용한 물성 최적화",
        "신재(Virgin)급 품질 구현",
        "PA6/PA66, PP, PC 전문 제조"
      ]
    },
    {
      title: "② 탄소소재 화학적 순환 자원화",
      description: "단순 재활용을 넘어 화학적 공정을 통해 원료 상태로 되돌리는 고부가가치 자원화",
      details: [
        "화학적 순환 자원화 기술 (2023 개발 완료)",
        "2025~2027 탄소중립 사업화 지원사업 추진",
        "저탄소 공정 모델 확립"
      ]
    }
  ];

  const marketOpportunity = [
    {
      title: "글로벌 규제 대응",
      description: "EU 탄소국경조정제도(CBAM) 및 플라스틱 재활용 의무화 정책에 따른 재생수지 수요 폭증"
    },
    {
      title: "ESG 경영의 필수 파트너",
      description: "탄소 배출권 확보를 위해 기업들이 '친환경 인증 소재'를 필수로 채택하는 흐름 속 핵심 공급망 역할"
    }
  ];

  const futureVision = [
    {
      period: "2025-2027",
      title: "탄소중립 공정 상용화",
      description: "탄소중립 사업화 지원사업 완료 및 친환경 브랜드 입지 굳히기"
    },
    {
      period: "2030 Beyond",
      title: "자원 순환 토털 솔루션 기업",
      description: "국내 최고 수준의 순환경제 리더로서의 입지 강화"
    }
  ];

  const performanceMetrics = [
    { label: "생산 효율 향상", value: "35%", color: "text-blue-700" },
    { label: "품질 편차 감소", value: "50%", color: "text-lime-600" },
    { label: "신재급 품질", value: "100%", color: "text-blue-700" },
    { label: "보유 특허", value: "2건", color: "text-lime-600" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="container flex items-center justify-between h-16">
          <a href="/" className="text-2xl font-bold text-blue-700">창맥</a>
          <a href="/" className="text-blue-700 hover:text-blue-800">← 돌아가기</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-lime-400 rounded-full blur-3xl"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4">미래를 향한 순환 경제의 리더</h1>
            <p className="text-xl opacity-90 mb-2">16년의 업력과 탄소중립 기술로 완성하는</p>
            <p className="text-2xl font-semibold text-lime-300">Plastic Round-Trip</p>
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold mb-16 text-center">Investment Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {investmentHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className={`bg-gradient-to-br ${item.color} rounded-xl p-8 shadow-lg hover:shadow-xl transition`}>
                  <Icon className="w-12 h-12 text-blue-700 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>



      {/* Certifications & Awards */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold mb-16 text-center">인증 및 수상</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-white border-2 border-blue-200 rounded-lg p-6 text-center hover:border-lime-400 hover:shadow-lg transition">
                <div className="text-4xl font-bold text-lime-500 mb-3">{cert.icon}</div>
                <div className="text-sm text-blue-700 font-bold mb-2">{cert.year}</div>
                <h3 className="font-bold text-gray-900 mb-1 text-sm">{cert.name}</h3>
                <p className="text-xs text-gray-600">{cert.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Quality Pellets Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">고품질 재생수지 펠릿</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                (주)창맥의 화학적 순환 자원화 기술로 만들어진 재생수지 펠릿은 신재(Virgin) 수준의 물성을 자랑합니다. 
                PA6/PA66, PP, PC 등 다양한 소재를 고객사의 요구에 맞게 맞춤 제조하며, 글로벌 자동차 및 가전 산업의 
                엄격한 품질 기준을 충족합니다.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-lime-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">신재급 물성 보증 (Virgin Grade Quality)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-lime-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">ISO 9001 품질 관리 시스템</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-lime-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">맞춤형 배합 기술 (Custom Compounding)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-lime-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">친환경 인증 소재 (GRS 대비)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-lime-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">스마트공장 기술 기반 생산</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://private-us-east-1.manuscdn.com/sessionFile/x3J7qhmfKNtJ15WezGjR6C/sandbox/bv8yk1EQEBod6yuuWhFTnh-img-2_1770092556000_na1fn_cmVjeWNsZWQtcGxhc3RpYy1wZWxsZXRz.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUveDNKN3FobWZLTnRKMTVXZXpHalI2Qy9zYW5kYm94L2J2OHlrMUVRRUJvZDZ5dXVXaEZUbmgtaW1nLTJfMTc3MDA5MjU1NjAwMF9uYTFmbl9jbVZqZVdOc1pXUXRjR3hoYzNScFl5MXdaV3hzWlhSei5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=MqUuQwdV7JiFVtIM3FX--7JEPnGPtdafFZdbA8rVM6NiEyyMyk7TQsqODdrVD~8o~GxFn8cni92hM4QtOrLrdQRG08v-rXrV4NhxHRQg2B286Lq8YkJHijNY01E8VDlYa0yzZUZ1jge1NL8OlGEC5fuR4PsaQ15BRlNVrFbhssaWiaeE7EkTJOujEFc0qty2VLM27x6Ps7zoNUa~tkK7cJ-Rk8BcUuwEhSZqkoNNDdWOrZXppYNQ42y2Qorh6iiTClanNSLDAPLs0GwUrf3uNpXXaR0nPqZnyl5nwhxdHlwZbZH52IaiWMHS-gas0aycyunqTYVbwKfY4mJ2PdnqEg__" 
                alt="Recycled Plastic Pellets" 
                className="w-full h-auto object-cover"
              />
              <div className="p-6 bg-gradient-to-r from-blue-50 to-lime-50">
                <p className="text-sm text-gray-600 font-semibold">신재급 품질의 재생수지 펠릿</p>
                <p className="text-xs text-gray-500 mt-1">화학적 순환 자원화 기술로 완성된 고품질 컴파운드</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Core */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold mb-16 text-center">Business Core</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {businessCore.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 border-2 border-blue-200 shadow-lg hover:shadow-xl transition">
                <h3 className="text-2xl font-bold text-blue-700 mb-3">{item.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{item.description}</p>
                <ul className="space-y-3">
                  {item.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-lime-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold mb-16 text-center">Market Opportunity</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {marketOpportunity.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-lime-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition border-l-4 border-blue-700">
                <h3 className="text-xl font-bold text-blue-700 mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* R&D & Certification */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold mb-16 text-center">R&D & Certification</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">연구소 중심 경영</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                2024년 인정받은 '연구개발전담부서'를 통해 고객사 맞춤형 신소재 개발 역량을 지속적으로 강화하고 있습니다. 
                PA6/PA66, PP, PC 등 다양한 소재의 특성을 극대화하는 배합 기술 개발에 투자하고 있습니다.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-2 font-semibold">보유 특허</p>
                <p className="text-3xl font-bold text-blue-700">2건</p>
                <p className="text-xs text-gray-600 mt-2">특허번호: 10-2021-0165852, 10-2014-0027148</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-lime-400">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">대외 공신력</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                ISO 9001, 소부장 전문기업, 스마트공장 확인서 등 정량적 지표를 통해 기술력과 경영 능력을 입증합니다. 
                국제 품질 기준을 충족하며 정부 인증을 획득한 신뢰할 수 있는 파트너입니다.
              </p>
              <div className="bg-gradient-to-r from-lime-50 to-lime-100 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-2 font-semibold">주요 인증</p>
                <p className="text-3xl font-bold text-lime-600">4개</p>
                <p className="text-xs text-gray-600 mt-2">ISO 9001, 소재부품장비 전문기업, 스마트공장, R&D전담부서</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container">
          <h2 className="text-4xl font-bold mb-16 text-center">Future Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {futureVision.map((item, idx) => (
              <div key={idx} className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition">
                <div className="text-lime-300 font-bold text-lg mb-3">{item.period}</div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-white opacity-90 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">투자 문의</h2>
          <p className="text-xl text-gray-700 mb-12">
            (주)창맥의 성장 스토리에 함께하세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:changmaec1@naver.com" className="bg-lime-400 text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-lime-300 transition text-lg shadow-lg">
              이메일 문의
            </a>
            <a href="tel:054-931-0718" className="border-2 border-blue-700 text-blue-700 px-8 py-4 rounded-lg font-bold hover:bg-blue-700 hover:text-white transition text-lg">
              전화 문의: 054-931-0718
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
