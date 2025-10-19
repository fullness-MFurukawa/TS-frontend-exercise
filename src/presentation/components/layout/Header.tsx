"use client";

export default function Header() {
  return (
    <header className="bg-white border-b shadow-sm">
      <nav className="container mx-auto flex items-center justify-between py-3 px-4">
        <div className="text-lg font-bold text-gray-800">演習プロジェクト</div>
        <ul className="flex space-x-6 text-gray-700">
          <li>
            <a href="#" className="hover:text-blue-600 transition-colors">
              演習-09
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600 transition-colors">
              オプション演習-04
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
