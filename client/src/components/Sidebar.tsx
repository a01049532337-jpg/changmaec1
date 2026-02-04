import { X } from "lucide-react";
import { useEffect } from "react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const menuItems = [
    { label: "회사소개", href: "/about" },
    { label: "사업소개", href: "/products" },
    { label: "지속가능경영", href: "/sustainability" },
    { label: "IR", href: "/ir" },
    { label: "채용공고", href: "#careers" },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-blue-700">창맥</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-lg transition"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="p-6 space-y-4">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => {
                onClose();
                window.scrollTo(0, 0);
              }}
              className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Contact Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-gray-50">
          <p className="text-sm text-gray-600 mb-2">
            <strong>전화:</strong> 054-931-0718
          </p>
          <p className="text-sm text-gray-600">
            <strong>이메일:</strong> changmaec1@naver.com
          </p>
        </div>
      </div>
    </>
  );
}
