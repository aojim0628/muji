import { useState } from "react";
import { DownOutlined, UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import logo from '../images/logo.jpeg';

function Nav() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="flex items-center justify-between py-4 fixed top-0 z-50 bg-white w-full px-4 sm:px-8">
      {/* Logo區塊 */}
      <div className="flex items-center pl-6">
        <img
          src={logo}
          alt="logo"
          className="max-w-[140px] sm:max-w-[180px] md:max-w-[220px] h-auto"
        />
      </div>

      {/* 選單 */}
      <div className="hidden lg:block flex-1">
        <ul className="flex gap-8 text-gray-900 text-sm font-bold justify-center">
          {/* 商品分類下拉選單 */}
          <li className="relative">
            <button
              className="flex items-center hover:underline focus:outline-none"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onBlur={() => setDropdownOpen(false)}
            >
              商品分類 <DownOutlined className="ml-1" />
            </button>
            <ul
              className={`absolute left-0 mt-2 w-40 bg-white shadow-lg rounded transition-all duration-200 ${
                dropdownOpen ? "block" : "hidden"
              }`}
              onMouseDown={e => e.preventDefault()} // 防止點擊時失焦導致收合
            >
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">家居生活</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">服飾配件</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">食品雜貨</a>
              </li>
            </ul>
          </li>

          {/* 其他選單項目 */}
          <li><a className="hover:underline" href="#">店鋪情報 <DownOutlined /></a></li>
          <li><a className="hover:underline" href="#">最新消息 <DownOutlined /></a></li>
          <li><a className="hover:underline" href="#">顧客服務 <DownOutlined /></a></li>
          <li><a className="hover:underline" href="#">加入我們 <DownOutlined /></a></li>
          <li><a className="hover:underline" href="#">企業情報 <DownOutlined /></a></li>
        </ul>
      </div>

      {/* Icon區塊 */}
      <div className="flex-shrink-0 flex gap-4 ml-2 pr-6">
        <UserOutlined style={{ fontSize: 24, color: 'black' }} />
        <ShoppingCartOutlined style={{ fontSize: 24, color: 'black' }} />
      </div>
    </div>
  );
}

export default Nav;
