import { DownOutlined, UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import logo from '../images/logo.jpeg';

function Navigation() {
  return (
    <div className="flex items-center justify-between py-4 fixed top-0 z-50 bg-white w-full sm:px-8">
      {/* Logo區塊 */}
      <div className="flex items-center pl-30">
        <img
          src={logo}
          alt="logo"
          className="max-w-[140px] sm:max-w-[180px] md:max-w-[220px] h-auto"
        />
      </div>

      {/* 選單 */}
      <div className="hidden lg:block flex-1">
        <ul className="flex gap-8 text-gray-900 text-sm font-bold justify-center">
          {/* 商品分類 */}
          <li className="relative group">
            <a href="#" className="flex items-center hover:underline cursor-pointer">
              商品分類 <DownOutlined className="ml-1" />
            </a>
            <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-opacity duration-200">
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">家居生活</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">服飾配件</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">食品雜貨</a></li>
            </ul>
          </li>

          {/* 店鋪情報 */}
          <li className="relative group">
            <a href="#" className="flex items-center hover:underline cursor-pointer">
              店鋪情報 <DownOutlined className="ml-1" />
            </a>
            <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-opacity duration-200">
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">門市服務</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">活動講座</a></li>
            </ul>
          </li>

          {/* 最新消息 */}
          <li className="relative group">
            <a href="#" className="flex items-center hover:underline cursor-pointer">
              最新消息 <DownOutlined className="ml-1" />
            </a>
            <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-opacity duration-200">
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">公司公告</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">媒體報導</a></li>
            </ul>
          </li>

          {/* 顧客服務 */}
          <li className="relative group">
            <a href="#" className="flex items-center hover:underline cursor-pointer">
              顧客服務 <DownOutlined className="ml-1" />
            </a>
            <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-opacity duration-200">
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">聯繫我們</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">常見問題</a></li>
            </ul>
          </li>

          {/* 加入我們 */}
          <li className="relative group">
            <a href="#" className="flex items-center hover:underline cursor-pointer">
              加入我們 <DownOutlined className="ml-1" />
            </a>
            <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-opacity duration-200">
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">職缺列表</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">實習機會</a></li>
            </ul>
          </li>

          {/* 企業情報 */}
          <li className="relative group">
            <a href="#" className="flex items-center hover:underline cursor-pointer">
              企業情報 <DownOutlined className="ml-1" />
            </a>
            <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-opacity duration-200">
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">公司簡介</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">永續經營</a></li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Icon區塊 */}
      <div className="flex-shrink-0 flex gap-4 ml-2 pr-30">
        <UserOutlined style={{ fontSize: 24, color: 'black' }} />
        <ShoppingCartOutlined style={{ fontSize: 24, color: 'black' }} />
      </div>
    </div>
  );
}

export default Navigation;
