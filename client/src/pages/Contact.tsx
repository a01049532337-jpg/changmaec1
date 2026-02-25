import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Menu } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `[홈페이지 문의] ${name}님 문의입니다.`;
    const body = `이름: ${name}\n연락처: ${phone}\n\n문의 내용:\n${message}`;
    window.location.href = `mailto:changmaec1@naver.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <SEO title="문의하기" description="(주)창맥에 궁금한 점이 있으신가요? 전문가가 신속하게 답변해 드립니다." />
      
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container px-4 mx-auto max-w-7xl flex items-center justify-between h-20">
          <a href="/" className="flex items-center">
            <div className="text-2xl font-extrabold text-slate-900 tracking-tight">(주)창맥</div>
          </a>
          <div className="hidden md:flex gap-8 items-center font-bold text-sm text-slate-500">
            <a href="/about" className="hover:text-slate-900 transition-colors">회사소개</a>
            <a href="/products" className="hover:text-slate-900 transition-colors">사업소개</a>
            <a href="/sustainability" className="hover:text-slate-900 transition-colors">지속가능경영</a>
            <a href="/ir" className="hover:text-slate-900 transition-colors">IR</a>
            <a href="#careers" className="hover:text-slate-900 transition-colors">채용공고</a>
          </div>
          <button onClick={() => setSidebarOpen(true)} className="md:hidden p-2 text-slate-600">
            <Menu className="w-6 h-6" />
          </button>
          <a href="mailto:changmaec1@naver.com" className="hidden md:block">
            <Button className="bg-slate-900 text-white font-bold px-6 rounded-xl">문의하기</Button>
          </a>
        </div>
      </nav>

      {/* Hero Section with Company Image */}
      <section className="relative h-[75vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/창맥전경.jpg" 
            alt="창맥 전경" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/50" />
        </div>
        <div className="container px-4 mx-auto max-w-7xl relative z-10 text-center pt-20">
          <span className="text-lime-400 font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Get in Touch</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            고객사의 ESG 가치를 실현하는 파트너
          </h1>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto font-medium">
            (주)창맥의 전문가들이 귀사의 요구사항에 최적화된 배합 솔루션을 제안합니다.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            {/* Contact Info (2 columns) */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Contact Info</h2>
                <p className="text-slate-500 font-medium leading-relaxed">
                  직접 내방하시거나 유선 문의를 주시면 더욱 상세한 상담이 가능합니다. 16년의 업력으로 쌓아온 신뢰로 보답하겠습니다.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 group-hover:bg-slate-900 transition-all">
                    <Phone className="w-5 h-5 text-slate-700 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">전화 / 팩스</h4>
                    <p className="text-sm text-slate-500 font-medium">Tel: 054-931-0718</p>
                    <p className="text-sm text-slate-500 font-medium">Fax: 054-931-0719</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 group-hover:bg-slate-900 transition-all">
                    <Mail className="w-5 h-5 text-slate-700 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">이메일 문의</h4>
                    <p className="text-sm text-slate-500 font-medium">changmaec1@naver.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 group-hover:bg-slate-900 transition-all">
                    <MapPin className="w-5 h-5 text-slate-700 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">본사 주소</h4>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">
                      경상북도 성주군 선남면 선노로 55-36
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form (3 columns) */}
            <div className="lg:col-span-3">
              <Card className="p-8 md:p-12 border-none shadow-2xl rounded-[2.5rem] bg-white ring-1 ring-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">문의 양식 작성</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">이름 / 업체명</label>
                      <Input
                        id="name"
                        placeholder="이름 또는 회사명을 입력하세요"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="h-14 rounded-xl border-slate-200 focus:ring-slate-900 font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">연락처</label>
                      <Input
                        id="phone"
                        placeholder="010-1234-5678"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="h-14 rounded-xl border-slate-200 focus:ring-slate-900 font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">문의 내용</label>
                    <Textarea
                      id="message"
                      placeholder="프로젝트의 용도, 필요한 소재의 사양 등을 자유롭게 적어주세요."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      className="min-h-[180px] rounded-2xl border-slate-200 focus:ring-slate-900 font-medium p-6 resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full h-16 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl text-lg font-black shadow-xl hover:-translate-y-1 transition-all">
                    <Send className="w-5 h-5 mr-3" />
                    문의 보내기
                  </Button>
                  <p className="text-[11px] text-slate-400 text-center font-medium">
                    * '문의 보내기'를 누르면 시스템 기본 메일 프로그램이 실행됩니다.
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
