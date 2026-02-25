import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Leaf, BarChart3, Settings, Factory, FlaskConical, Menu, MapPin, Phone, Mail, Cog, Gauge, Microscope, Scale, ScanEye } from "lucide-react";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function About() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const coreValues = [
    {
      icon: Leaf,
      title: "친환경 (Eco-friendly)",
      description: "단순한 재활용을 넘어, 탄소 배출 저감과 지속가능한 순환경제를 실현하는 차세대 공정 모델을 연구합니다."
    },
    {
      icon: BarChart3,
      title: "품질 검증 (Data-driven)",
      description: "철저한 데이터와 자체 연구실의 교차 검증을 통해 제품의 물성을 보증합니다."
    },
    {
      icon: Settings,
      title: "고객 맞춤 (Customization)",
      description: "자동차 부품, 가전 등 고객사의 산업군과 요구 사양에 부합하는 정밀 컴파운딩 솔루션을 제공합니다."
    }
  ];

  const timeline = [
    {
      period: "2021 ~ 현재",
      title: "기술 혁신 및 탄소중립",
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

  const facilities = [
    { name: "배합기 (8t)", count: "2대", icon: Cog },
    { name: "정밀배합기 (600kg)", count: "2대", icon: Settings },
    { name: "시편제작용 사출기 (150kg)", count: "1대", icon: Factory },
    { name: "Twin Screw (70mm)", count: "2대", icon: Cog },
  ];

  const labEquipment = [
    { name: "Izod 충격측정기", icon: Gauge },
    { name: "인장 및 굴곡시험기", icon: Gauge },
    { name: "MI (용융지수) 측정기", icon: FlaskConical },
    { name: "Notch기", icon: Settings },
    { name: "색차기", icon: ScanEye },
    { name: "비중측정기", icon: Scale },
    { name: "중금속측정기", icon: Microscope },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SEO 
        title="회사소개" 
        description="(주)창맥의 기업 소개, CEO 인사말, 연혁 및 핵심 가치를 소개합니다. 16년 업력의 기술력으로 완벽한 품질을 약속합니다." 
      />
      
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="container px-4 mx-auto max-w-7xl flex items-center justify-between h-20">
          <a href="/" className="flex items-center">
            <div className="text-2xl font-extrabold text-slate-900 tracking-tight">(주)창맥</div>
          </a>
          
          <div className="hidden md:flex gap-8 items-center">
            <a href="/about" className="text-sm font-bold text-slate-900 transition-colors">회사소개</a>
            <a href="/products" className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors">사업소개</a>
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
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="container px-4 mx-auto max-w-7xl relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white tracking-tight">
            재생 플라스틱의 <span className="text-slate-400">새로운 기준</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-medium">
            16년의 축적된 데이터로 완벽한 품질을 증명합니다.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container px-4 mx-auto max-w-3xl text-center">
          <span className="text-slate-500 font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
            CEO Message
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-slate-900 leading-tight">
            "멈추지 않는 혁신으로<br />고객의 성공을 지원합니다"
          </h2>
          <div className="space-y-6 text-slate-600 leading-relaxed font-medium">
            <p>안녕하십니까. (주)창맥 대표이사 이재구입니다.</p>
            <p>
              오늘날의 산업 현장은 그 어느 때보다 빠르고 정교한 변화를 요구하고 있습니다. (주)창맥은 이러한 변화의 흐름에 발맞춰 독자적인 기술력 확보와 공정의 효율화를 통해 독보적인 경쟁력을 쌓아왔습니다.
            </p>
            <p>
              저희의 목표는 명확합니다. 가장 까다로운 기준도 만족시킬 수 있는 '완벽한 품질'을 실현하는 것입니다. 이를 위해 (주)창맥은 R&D 투자 확대와 전문 인재 양성에 힘쓰며, 현장의 작은 디테일 하나 놓치지 않는 장인정신으로 임하고 있습니다.
            </p>
            <p>
              현재에 안주하지 않고, 기술의 한계를 넘어 글로벌 시장에서도 인정받는 기술 혁신 기업으로 도약하겠습니다. 저희의 열정과 노력이 고객 여러분의 성공으로 이어질 수 있도록 최선을 다하겠습니다.
            </p>
            <div className="pt-10 border-t border-slate-100 mt-12 inline-block mx-auto">
              <p className="font-extrabold text-slate-900 text-xl tracking-wide">
                (주)창맥 대표이사 이 재 구
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-slate-500 font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
              Core Values
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">핵심 가치</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <Card key={idx} className="p-10 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white group">
                  <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center mb-8 group-hover:bg-slate-900 transition-colors">
                    <Icon className="w-8 h-8 text-slate-700 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-slate-500 font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
              Facilities & R&D
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">생산 설비 및 연구 장비</h2>
            <p className="mt-4 text-slate-600 font-medium">체계적인 생산 라인과 정밀한 분석 장비가 완벽한 품질을 만듭니다.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
              <div className="flex items-center mb-10">
                <div className="p-3 bg-white rounded-xl shadow-sm mr-5 border border-slate-200">
                  <Factory className="w-8 h-8 text-slate-800" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">생산 설비 <span className="text-slate-400 font-medium text-lg ml-2">Factory</span></h3>
              </div>
              <div className="grid gap-4">
                {facilities.map((item, idx) => {
                  const FacIcon = item.icon;
                  return (
                    <div key={idx} className="flex items-center justify-between p-5 bg-white rounded-2xl border border-slate-200/60 shadow-sm hover:border-slate-400 transition-all">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-slate-50 rounded-lg text-slate-400"><FacIcon className="w-5 h-5" /></div>
                        <span className="font-bold text-slate-800">{item.name}</span>
                      </div>
                      <span className="text-slate-500 font-bold bg-slate-50 px-4 py-1.5 rounded-full text-sm">{item.count}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
              <div className="flex items-center mb-10">
                <div className="p-3 bg-white rounded-xl shadow-sm mr-5 border border-slate-200">
                  <FlaskConical className="w-8 h-8 text-slate-800" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">연구/실험 장비 <span className="text-slate-400 font-medium text-lg ml-2">Lab</span></h3>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {labEquipment.map((item, idx) => {
                  const LabIcon = item.icon;
                  return (
                    <div key={idx} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-200/60 shadow-sm hover:border-slate-400 transition-all">
                      <div className="p-2 bg-slate-50 rounded-lg text-slate-400">
                        <LabIcon className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-slate-800">{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container px-4 mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-slate-500 font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
              History
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">회사 연혁</h2>
          </div>
          
          <div className="space-y-12">
            {timeline.map((period, idx) => (
              <div key={idx} className="relative group">
                <div className="flex gap-6 md:gap-10">
                  <div className="flex flex-col items-center">
                    <div className="w-5 h-5 bg-slate-800 rounded-full mt-2 ring-4 ring-slate-200"></div>
                    {idx < timeline.length - 1 && (
                      <div className="w-0.5 bg-slate-200 flex-grow mt-4 min-h-[150px]"></div>
                    )}
                  </div>
                  
                  <div className="pb-8 flex-grow">
                    <div className="inline-block bg-slate-900 text-white px-5 py-1.5 rounded-full text-sm font-bold mb-4 tracking-wider">
                      {period.period}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">
                      {period.title}
                    </h3>
                    <ul className="space-y-3">
                      {period.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex gap-4 text-slate-600 font-medium">
                          <span className="text-slate-400 mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-slate-500 font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
              Location
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">오시는 길</h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 h-[400px] bg-slate-100 rounded-3xl overflow-hidden relative border border-slate-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3232.0287737295674!2d128.38456637633215!3d35.89547591823908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35661640a3770387%3A0xc34a6272580c8008!2z6rK97IOB67aB64-EIOyEseq8vOq1sCDshKDrgqjrqbQg7ISg64W466GcIDU1LTM2!5e0!3m2!1sko!2skr!4v1708842400000!5m2!1sko!2skr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="창맥 본사 위치"
                className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
            
            <div className="space-y-8 flex flex-col justify-center">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center flex-shrink-0 mr-4 border border-slate-100">
                  <MapPin className="w-6 h-6 text-slate-700" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">본사 및 공장</h4>
                  <p className="text-slate-600 font-medium">경상북도 성주군 선남면 선노로 55-36</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center flex-shrink-0 mr-4 border border-slate-100">
                  <Phone className="w-6 h-6 text-slate-700" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">연락처</h4>
                  <p className="text-slate-600 font-medium">Tel: 054-931-0718</p>
                  <p className="text-slate-600 font-medium">Fax: 054-931-0719</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center flex-shrink-0 mr-4 border border-slate-100">
                  <Mail className="w-6 h-6 text-slate-700" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">이메일</h4>
                  <p className="text-slate-600 font-medium">changmaec1@naver.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white text-center">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">
            창맥의 기술력으로 귀사의 제품을 혁신하십시오
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto font-medium">
            최적의 소재 배합부터 납품까지, 철저한 데이터 기반 솔루션을 약속합니다.
          </p>
          <a href="mailto:changmaec1@naver.com">
            <Button className="bg-white text-slate-900 hover:bg-slate-200 font-bold text-lg px-10 h-16 rounded-2xl transition-all shadow-xl hover:-translate-y-1">
              지금 문의하기
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
