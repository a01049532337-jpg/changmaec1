import { Phone, Mail, MapPin, Printer } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-lime-400">(주)창맥</h3>
            <p className="text-gray-400 mb-4">
              16년의 업력, 특허 기술 기반의 고품질 재생수지 전문 제조 기업
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-lime-400 flex-shrink-0 mt-1" />
                <p>경상북도 성주군 선남면 선노로 55-36</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-lime-400 flex-shrink-0" />
                <p>054-931-0718</p>
              </div>
              <div className="flex items-center gap-3">
                <Printer className="w-5 h-5 text-lime-400 flex-shrink-0" />
                <p>054-931-0719</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-lime-400 flex-shrink-0" />
                <a href="mailto:changmaec1@naver.com" className="hover:text-white transition">
                  changmaec1@naver.com
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 text-gray-300">
              <a href="/about" className="hover:text-lime-400 transition">회사소개</a>
              <a href="/products" className="hover:text-lime-400 transition">사업소개</a>
              <a href="/sustainability" className="hover:text-lime-400 transition">지속가능경영</a>
              <a href="/ir" className="hover:text-lime-400 transition">IR</a>
              <a href="#careers" className="hover:text-lime-400 transition">채용공고</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} (주)창맥. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
