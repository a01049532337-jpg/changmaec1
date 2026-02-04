import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Footer from "@/components/Footer";
import { useLocation } from "wouter";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [, setLocation] = useLocation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `[홈페이지 문의] ${name}님 문의입니다.`;
    const body = `이름: ${name}\n연락처: ${phone}\n\n문의 내용:\n${message}`;
    
    window.location.href = `mailto:changmaec1@naver.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

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
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">문의하기</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            (주)창맥에 궁금한 점이 있으신가요? 언제든 편하게 문의해주세요.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Info</h2>
                <p className="text-gray-600 mb-8">
                  아래 연락처로 직접 연락주시거나, 옆의 양식을 통해 문의 내용을 남겨주시면 
                  담당자가 확인 후 신속하게 답변 드리겠습니다.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6 flex items-start gap-4 hover:shadow-md transition">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">전화 / 팩스</h3>
                    <p className="text-gray-600">Tel: 054-931-0718</p>
                    <p className="text-gray-600">Fax: 054-931-0719</p>
                  </div>
                </Card>

                <Card className="p-6 flex items-start gap-4 hover:shadow-md transition">
                  <div className="w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-lime-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">이메일</h3>
                    <p className="text-gray-600">changmaec1@naver.com</p>
                  </div>
                </Card>

                <Card className="p-6 flex items-start gap-4 hover:shadow-md transition">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">주소</h3>
                    <p className="text-gray-600">경상북도 성주군 선남면 선노로 55-36</p>
                  </div>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">문의 내용 작성</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">이름</label>
                  <Input
                    id="name"
                    placeholder="홍길동"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="bg-white"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">연락처</label>
                  <Input
                    id="phone"
                    placeholder="010-1234-5678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">문의 내용</label>
                  <Textarea
                    id="message"
                    placeholder="문의하실 내용을 자유롭게 적어주세요."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="min-h-[150px] bg-white resize-none"
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white py-6 text-lg font-bold shadow-lg hover:shadow-xl transition-all">
                  <Send className="w-5 h-5 mr-2" />
                  메일 보내기
                </Button>
                <p className="text-xs text-gray-500 text-center mt-4">
                  * '메일 보내기' 버튼을 누르면 사용 중인 메일 프로그램이 실행됩니다.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
