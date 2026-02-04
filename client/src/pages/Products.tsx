import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Zap, Thermometer, Droplet, Shield, TrendingUp, CheckCircle, Layers } from "lucide-react";
import Footer from "@/components/Footer";

export default function Products() {
  const products = [
    {
      name: "PA6/PA66 컴파운드",
      category: "고강도 엔지니어링 플라스틱",
      description: "폴리아마이드 기반 재생 소재로 우수한 기계적 강도와 내열성을 제공합니다.",
      icon: Shield,
      color: "from-blue-600 to-blue-800",
      specs: [
        { label: "인장강도", value: "60-80 MPa", description: "우수한 강도로 고하중 부품에 적합" },
        { label: "융점", value: "220-260°C", description: "높은 내열성으로 고온 환경 적용 가능" },
        { label: "충격강도", value: "5-8 kJ/m²", description: "충격 흡수 특성으로 안정성 확보" },
        { label: "수분흡수율", value: "1.5-2.5%", description: "적절한 수분 흡수로 치수 안정성 유지" }
      ],
      applications: [
        "자동차: 엔진 부품, 기어, 냉각 시스템 부품",
        "산업기계: 베어링, 기어, 펌프 부품",
        "전자제품: 커넥터, 릴레이, 스위치 부품",
        "가전제품: 세탁기 부품, 냉장고 부품, 에어컨 부품"
      ],
      advantages: [
        "원료와 동등한 품질의 재생 소재",
        "높은 강도와 내열성으로 다양한 산업 적용 가능",
        "우수한 화학 저항성으로 장기 내구성 보장",
        "친환경 소재로 ESG 경영 실현"
      ],
      certifications: [
        "ISO 9001 인증",
        "RoHS 준수",
        "REACH 규정 준수",
        "UL 인증 (선택 사양)"
      ]
    },
    {
      name: "PP 컴파운드",
      category: "경량 범용 플라스틱",
      description: "폴리프로필렌 기반 재생 소재로 경량성과 가공성이 우수합니다.",
      icon: Zap,
      color: "from-green-600 to-green-800",
      specs: [
        { label: "인장강도", value: "30-40 MPa", description: "적절한 강도로 다양한 용도 적용" },
        { label: "밀도", value: "0.90-0.95 g/cm³", description: "경량으로 연비 개선에 기여" },
        { label: "융점", value: "160-170°C", description: "낮은 융점으로 가공성 우수" },
        { label: "충격강도", value: "3-5 kJ/m²", description: "우수한 충격 저항성" }
      ],
      applications: [
        "자동차: 내장재, 범퍼, 트림, 대시보드",
        "가전제품: 세탁기 통, 냉장고 부품, 에어컨 하우징",
        "전자제품: 케이싱, 커버, 패널",
        "생활용품: 용기, 상자, 포장재"
      ],
      advantages: [
        "우수한 가공성으로 복잡한 형태 제조 가능",
        "경량으로 제품 무게 감소 및 연비 개선",
        "뛰어난 화학 저항성과 방습성",
        "비용 효율적인 솔루션"
      ],
      certifications: [
        "ISO 9001 인증",
        "FDA 식품 접촉 승인 (선택 사양)",
        "RoHS 준수",
        "REACH 규정 준수"
      ]
    },
    {
      name: "PC 컴파운드",
      category: "투명 고강도 플라스틱",
      description: "폴리카보네이트 기반 재생 소재로 투명성과 강도를 동시에 제공합니다.",
      icon: Droplet,
      color: "from-cyan-600 to-cyan-800",
      specs: [
        { label: "인장강도", value: "55-70 MPa", description: "높은 강도로 안전성 확보" },
        { label: "광투과율", value: "85-90%", description: "우수한 투명성으로 광학 특성 제공" },
        { label: "융점", value: "220-230°C", description: "높은 내열성 제공" },
        { label: "충격강도", value: "8-12 kJ/m²", description: "뛰어난 충격 저항성" }
      ],
      applications: [
        "자동차: 헤드라이트 렌즈, 윈도우, 센서 렌즈",
        "조명: LED 렌즈, 투명 커버, 광학 부품",
        "전자제품: 디스플레이 보호 패널, 카메라 렌즈",
        "의료기기: 투명 부품, 광학 기구"
      ],
      advantages: [
        "우수한 투명성으로 광학 응용 분야 적합",
        "높은 강도와 내열성으로 안정성 보장",
        "뛰어난 자외선 차단 특성 (선택 사양)",
        "친환경 재생 소재로 지속가능성 실현"
      ],
      certifications: [
        "ISO 9001 인증",
        "RoHS 준수",
        "REACH 규정 준수",
        "광학 특성 인증 (선택 사양)"
      ]
    }
  ];

  const productComparison = [
    { feature: "인장강도", pa6pa66: "높음 (60-80 MPa)", pp: "중간 (30-40 MPa)", pc: "높음 (55-70 MPa)" },
    { feature: "밀도", pa6pa66: "1.13-1.15 g/cm³", pp: "0.90-0.95 g/cm³", pc: "1.20 g/cm³" },
    { feature: "융점", pa6pa66: "높음 (220-260°C)", pp: "낮음 (160-170°C)", pc: "높음 (220-230°C)" },
    { feature: "투명성", pa6pa66: "불투명", pp: "불투명", pc: "투명 (85-90%)" },
    { feature: "가공성", pa6pa66: "중간", pp: "우수", pc: "중간" },
    { feature: "비용", pa6pa66: "중상", pp: "저가", pc: "중상" },
    { feature: "화학저항성", pa6pa66: "우수", pp: "우수", pc: "우수" },
    { feature: "환경친화성", pa6pa66: "재생 소재 사용", pp: "재생 소재 사용", pc: "재생 소재 사용" }
  ];

  const processFlow = [
    {
      step: "1",
      title: "분쇄된 폐플라스틱 수거",
      description: "산업 현장에서 분쇄된 고품질의 폐플라스틱 원료를 수거합니다."
    },
    {
      step: "2",
      title: "건조공정",
      description: "수분을 제거하여 다음공정을 준비합니다."
    },
    {
      step: "3",
      title: "1차압출공정",
      description: "불순물 제거를 위한 공정을 실시합니다."
    },
    {
      step: "4",
      title: "컴파운드 및 펠렛화",
      description: "물성향상을 위한 첨가제 및 부자제를 투입 및 컴파운드하여 고품질의 펠렛을 생산합니다."
    },
    {
      step: "5",
      title: "화학적 순환 자원화",
      description: "고급 기술을 통한 화학적 순환 자원화 공정으로 물성이 우수한 재생 소재로 변환합니다."
    },
    {
      step: "6",
      title: "품질 검사 및 포장",
      description: "엄격한 품질 기준에 따라 검사하고 안전하게 포장하여 고객에게 납품합니다."
    }
  ];

  const customizationOptions = [
    { title: "색상 커스터마이징", description: "고객 요구에 맞는 다양한 색상 제공 가능" },
    { title: "첨가제 조정", description: "강도, 유연성, 난연성 등 특성 맞춤 조정" },
    { title: "입자 크기 조절", description: "용도에 맞는 펠릿 크기 선택 가능" },
    { title: "특수 기능 추가", description: "UV 차단, 항균, 정전기 방지 등 기능 추가" },
    { title: "혼합 비율 조정", description: "재생 소재와 첨가제의 최적 비율 설정" },
    { title: "테스트 샘플 제공", description: "대량 주문 전 테스트 샘플 무료 제공" }
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
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">사업소개</h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            (주)창맥은 PA6/PA66, PP, PC 등 고품질의 재생 플라스틱 컴파운드를 
            전문적으로 제조하여 다양한 산업에 공급합니다.
          </p>
        </div>
      </section>

      {/* Product Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            주요 제품
          </h2>
          <div className="space-y-16">
            {products.map((product, idx) => {
              const Icon = product.icon;
              return (
                <div key={idx} className="grid md:grid-cols-2 gap-12 items-start">
                  {/* Product Info */}
                  <div>
                    <div className={`inline-block bg-gradient-to-r ${product.color} text-white px-4 py-2 rounded-full text-sm font-bold mb-4`}>
                      {product.category}
                    </div>
                    <h3 className="text-3xl font-bold mb-4 text-blue-700">{product.name}</h3>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">{product.description}</p>

                    {/* Specifications */}
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-gray-800 mb-4">기술 사양</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {product.specs.map((spec, specIdx) => (
                          <Card key={specIdx} className="p-4 bg-gray-50">
                            <p className="text-sm text-gray-600 mb-1">{spec.label}</p>
                            <p className="text-lg font-bold text-blue-700 mb-2">{spec.value}</p>
                            <p className="text-xs text-gray-600">{spec.description}</p>
                          </Card>
                        ))}
                      </div>
                    </div>

                    {/* Certifications */}
                    <div className="mb-8">
                      <h4 className="text-lg font-bold text-gray-800 mb-3">인증 및 규격</h4>
                      <div className="space-y-2">
                        {product.certifications.map((cert, certIdx) => (
                          <div key={certIdx} className="flex gap-2 text-gray-700">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                            <span>{cert}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Applications & Advantages */}
                  <div className="space-y-8">
                    {/* Applications */}
                    <div className="bg-blue-50 rounded-lg p-8">
                      <h4 className="text-xl font-bold text-blue-700 mb-4">주요 용도</h4>
                      <ul className="space-y-3">
                        {product.applications.map((app, appIdx) => (
                          <li key={appIdx} className="flex gap-3 text-gray-700">
                            <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <span>{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Advantages */}
                    <div className="bg-green-50 rounded-lg p-8">
                      <h4 className="text-xl font-bold text-green-700 mb-4">제품의 장점</h4>
                      <ul className="space-y-3">
                        {product.advantages.map((adv, advIdx) => (
                          <li key={advIdx} className="flex gap-3 text-gray-700">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>{adv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Comparison Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            제품 비교
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-700 text-white">
                  <th className="px-6 py-4 text-left font-bold">특성</th>
                  <th className="px-6 py-4 text-left font-bold">PA6/PA66</th>
                  <th className="px-6 py-4 text-left font-bold">PP</th>
                  <th className="px-6 py-4 text-left font-bold">PC</th>
                </tr>
              </thead>
              <tbody>
                {productComparison.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                    <td className="px-6 py-4 font-bold text-gray-800">{row.feature}</td>
                    <td className="px-6 py-4 text-gray-700">{row.pa6pa66}</td>
                    <td className="px-6 py-4 text-gray-700">{row.pp}</td>
                    <td className="px-6 py-4 text-gray-700">{row.pc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Production Process Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            생산 프로세스
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {processFlow.map((item, idx) => (
              <div key={idx} className="relative">
                <Card className="p-6 h-full hover:shadow-lg transition">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mb-4 text-lg">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </Card>
                {idx < processFlow.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-1 bg-blue-300"></div>
                )}
              </div>
            ))}
          </div>
          <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
            <h3 className="text-xl font-bold text-blue-800 mb-4">스마트공장 기술 적용</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              (주)창맥은 스마트공장 인증을 획득하여 자동화 설비와 데이터 기반 공정 관리를 통해 
              일관된 고품질 제품을 생산합니다. 실시간 품질 모니터링과 공정 최적화로 
              고객 만족도를 극대화합니다.
            </p>

          </div>
        </div>
      </section>

      {/* Customization Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            맞춤형 솔루션
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            (주)창맥은 고객의 다양한 요구사항에 맞춘 맞춤형 컴파운드를 제공합니다.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {customizationOptions.map((option, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition">
                <Layers className="w-8 h-8 text-blue-700 mb-3" />
                <h3 className="text-lg font-bold text-gray-800 mb-2">{option.title}</h3>
                <p className="text-gray-600 text-sm">{option.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            품질 보증
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-blue-50">
              <h3 className="text-xl font-bold text-blue-700 mb-4">검사 항목</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span>인장강도 및 신율 측정</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span>충격강도 및 경도 측정</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span>용융지수(MFI) 측정</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span>색상 및 외관 검사</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span>화학 성분 분석</span>
                </li>
              </ul>
            </Card>
            <Card className="p-8 bg-green-50">
              <h3 className="text-xl font-bold text-green-700 mb-4">품질 기준</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>ISO 9001 품질 경영 시스템</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>로트별 시험 성적서 제공</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>고객 요구 규격 준수</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>지속적인 개선 활동</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>기술 지원 및 상담</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-700 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            고품질 재생 플라스틱 소재가 필요하신가요?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            (주)창맥의 전문가 팀이 당신의 요구사항에 맞는 최적의 솔루션을 제공합니다.
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
