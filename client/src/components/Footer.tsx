import { MapPin, Phone, Printer, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-900">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-slate-800/60 pb-12">
          
          {/* Company Info */}
            <img 
              src="/창맥.png" 
              alt="CHANGMAEC Logo" 
              className="h-10 w-auto object-contain brightness-0 invert opacity-90"
            />
            <p className="text-slate-400 leading-relaxed text-sm font-medium">
              16년의 업력,고품질 재생수지 전문 제조 기업
            </p>
          </div>

          {/* Contact Us */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg tracking-wide">Contact Us</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-400">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-slate-500 flex-shrink-0" />
                <span>경상북도 성주군 선남면 선노로 55-36</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-slate-500 flex-shrink-0" />
                <span>054-931-0718</span>
              </li>
              <li className="flex items-center">
                <Printer className="w-5 h-5 mr-3 text-slate-500 flex-shrink-0" />
                <span>054-931-0719</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-slate-500 flex-shrink-0" />
                <a href="mailto:changmaec1@naver.com" className="hover:text-slate-200 transition-colors">
                  changmaec1@naver.com
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg tracking-wide">Quick Links</h4>
            <div className="grid grid-cols-2 gap-4 text-sm font-medium text-slate-400">
              <a href="/about" className="hover:text-slate-200 transition-colors">회사소개</a>
              <a href="/products" className="hover:text-slate-200 transition-colors">사업소개</a>
              <a href="/sustainability" className="hover:text-slate-200 transition-colors">지속가능경영</a>
              <a href="/ir" className="hover:text-slate-200 transition-colors">IR</a>
              <a href="#careers" className="hover:text-slate-200 transition-colors">채용공고</a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center text-sm font-medium text-slate-500">
          © 2026 (주)창맥. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
