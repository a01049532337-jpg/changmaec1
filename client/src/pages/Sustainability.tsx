import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Leaf, Zap, Globe, TrendingUp, Target, CheckCircle, Droplet, Recycle, Users } from "lucide-react";
import Footer from "@/components/Footer";

export default function Sustainability() {
  const esgPillars = [
    {
      icon: Leaf,
      title: "환경(Environment)",
      description: "탄소중립 달성과 순환경제 구현을 통한 지구 보호",
      color: "bg-green-100"
    },
    {
      icon: Users,
      title: "사회(Social)",
      description: "공정한 노동 환경과 지역사회 발전에 기여",
      color: "bg-blue-100"
    },
    {
      icon: Target,
      title: "지배(Governance)",
      description: "투명한 경영과 윤리적 의사결정 체계 구축",
      color: "bg-purple-100"
    }
  ];

  const carbonNeutralProjects = [
    {
      title: "탄소중립 사업화 지원사업 (2025~2027)",
      period: "2025년 ~ 2027년",
      status: "진행 중",
      description: "정부 선정 탄소중립 사업화 지원사업으로 재생 플라스틱 기반 저탄소 소재 개발 및 상용화",
      goals: [
        "재생 플라스틱 생산 공정의 탄소 배출량 30% 감축",
        "저탄소 인증 제품 개발 및 시장 진출",
        "탄소 중립 생산 라인 구축"
      ],
      impact: "연간 CO₂ 감축량 500톤 이상 달성 목표"
    },
    {
      title: "탄소소재 화학적 순환 자원화 기술개발 (2023)",
      period: "2023년 수행",
      status: "완료",
      description: "폐플라스틱의 화학적 재활용 기술 개발로 진정한 순환경제 실현",
      goals: [
        "폐플라스틱 화학적 분해 기술 개발",
        "고품질 재생 원료 생산 공정 확립",
        "기술 특허 출원 및 확보"
      ],
      impact: "기존 기계적 재활용 대비 품질 향상 및 재활용 횟수 무제한 확대"
    }
  ];

  const circularEconomySteps = [
    {
      step: "1단계",
      title: "폐플라스틱 수집",
      description: "산업 현장과 소비자로부터 폐플라스틱 수거 및 분류"
    },
    {
      step: "2단계",
      title: "전처리 및 선별",
      description: "불순물 제거 및 재질별 분류를 통한 품질 향상"
    },
    {
      step: "3단계",
      title: "화학적 순환 자원화",
      description: "고급 기술을 통한 폐플라스틱의 화학적 분해 및 재구성"
    },
    {
      step: "4단계",
      title: "고품질 컴파운드 생산",
      description: "PP, PC, PA6, PA66 등 고부가가치 재생 소재 제조"
    },
    {
      step: "5단계",
      title: "고객 공급",
      description: "자동차, 가전, 전자 등 다양한 산업에 공급"
    },
    {
      step: "6단계",
      title: "제품 재활용",
      description: "사용 후 제품의 재수거 및 재활용 사이클 반복"
    }
  ];



  const socialInitiatives = [
    {
      title: "공정한 노동 환경",
      items: [
        "산업 안전 기준 초과 충족",
        "근로자 교육 및 역량 개발 프로그램",
        "공정한 임금 및 복리후생 제공"
      ]
    },
    {
      title: "지역사회 기여",
      items: [
        "지역 인재 채용 및 고용 창출",
        "환경 정화 활동 참여",
        "지역 대학과의 산학협력 추진"
      ]
    },
    {
      title: "공급망 책임경영",
      items: [
        "협력사 ESG 기준 준수 요구",
        "공정한 거래 관행 실천",
        "협력사 기술 지원 및 동반 성장"
      ]
    }
  ];

  const governanceInitiatives = [
    {
      title: "투명한 정보 공개",
      description: "정기적인 지속가능경영 보고서 발간 및 이해관계자 소통"
    },
    {
      title: "윤리 경영 체계",
      description: "임직원 윤리 교육 및 부정행위 신고 시스템 운영"
    },
    {
      title: "이사회 다양성",
      description: "전문성과 다양성을 갖춘 이사회 구성"
    },
    {
      title: "리스크 관리",
      description: "환경, 사회, 경제적 리스크 사전 예방 및 관리"
    }
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
      <section className="relative text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663320104260/dsmUceotfjVoRwPp.png" 
            alt="Sustainability Vision" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-blue-900/90"></div>
        </div>
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">지속가능경영</h1>
          <p className="text-lg text-green-100 max-w-2xl">
            (주)창맥은 환경, 사회, 지배구조(ESG)의 균형 있는 발전을 통해 
            지속가능한 미래를 만들어갑니다.
          </p>
        </div>
      </section>

      {/* ESG Vision Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            ESG 경영 비전
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {esgPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <Card key={idx} className="p-8 hover:shadow-lg transition">
                  <div className={`w-12 h-12 ${pillar.color} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-gray-800" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                  <p className="text-gray-600">{pillar.description}</p>
                </Card>
              );
            })}
          </div>

        </div>
      </section>

      {/* Carbon Neutral Projects Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            주요 탄소중립 사업
          </h2>
          <div className="space-y-8">
            {carbonNeutralProjects.map((project, idx) => (
              <Card key={idx} className="p-8 border-l-4 border-l-green-600 hover:shadow-lg transition">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-green-700 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-2">{project.period}</p>
                  </div>
                  <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                    project.status === "진행 중" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-blue-100 text-blue-800"
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">주요 목표</h4>
                    <ul className="space-y-2">
                      {project.goals.map((goal, goalIdx) => (
                        <li key={goalIdx} className="flex gap-2 text-gray-700">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span>{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-2">예상 효과</h4>
                    <p className="text-green-700 font-semibold">{project.impact}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Circular Economy Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            순환경제 실현 프로세스
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            (주)창맥은 폐플라스틱의 화학적 순환 자원화 기술을 통해 
            진정한 순환경제를 구현하고 있습니다.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {circularEconomySteps.map((item, idx) => (
              <div key={idx} className="relative">
                <Card className="p-6 h-full">
                  <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mb-4">
                    {item.step.split("단계")[0]}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </Card>
                {idx < circularEconomySteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-1 bg-green-300"></div>
                )}
              </div>
            ))}
          </div>
          <div className="bg-green-50 rounded-lg p-8 border border-green-200">
            <h3 className="text-xl font-bold text-green-800 mb-4">화학적 순환 자원화의 장점</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-green-700 mb-2">무제한 재활용</h4>
                <p className="text-gray-700 text-sm">
                  기계적 재활용과 달리 화학적 재활용은 품질 저하 없이 무제한 재활용 가능
                </p>
              </div>
              <div>
                <h4 className="font-bold text-green-700 mb-2">고품질 소재</h4>
                <p className="text-gray-700 text-sm">
                  원료와 동등한 품질의 재생 소재 생산으로 고부가가치 제품 제조 가능
                </p>
              </div>
              <div>
                <h4 className="font-bold text-green-700 mb-2">환경 보호</h4>
                <p className="text-gray-700 text-sm">
                  폐기물 최소화와 탄소 배출 감축으로 지구 환경 보호에 기여
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Social Initiatives Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            사회적 책임 (Social)
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {socialInitiatives.map((initiative, idx) => (
              <Card key={idx} className="p-8 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-blue-700 mb-4">{initiative.title}</h3>
                <ul className="space-y-3">
                  {initiative.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            투명한 지배구조 (Governance)
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {governanceInitiatives.map((initiative, idx) => (
              <Card key={idx} className="p-8 hover:shadow-lg transition">
                <h3 className="text-lg font-bold text-purple-700 mb-3">{initiative.title}</h3>
                <p className="text-gray-700">{initiative.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-green-700 to-blue-900 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            지속가능한 미래를 위한 약속
          </h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            (주)창맥은 탄소중립 사업화와 화학적 순환 자원화 기술개발을 통해 
            진정한 순환경제를 실현하고, 모든 이해관계자와 함께 
            지속가능한 미래를 만들어가겠습니다.
          </p>
          <a href="mailto:changmaec1@naver.com">
            <Button className="bg-lime-400 text-green-900 hover:bg-lime-500 text-lg px-8 py-6">
              지금 문의하기
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}


