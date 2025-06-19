import logo from '../images/logo.png'
import line from '../images/line.png'
import FooterLinks from './FooterLinks';

function Footer() {
  return (
    <div className="bg-gray-200 m-auto min-h-60 flex flex-col justify-center items-center px-4 overflow-x-hidden">
      {/* 上方 Logo + 圖片群組 + FooterLinks，響應式排列 */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-5xl mb-4 gap-4">
        <div className="flex flex-col justify-center items-center mb-4 md:mb-0">
          <img src={logo} alt="" className="h-16 mb-4" />
          <div className="flex gap-2">
            <img src={line} alt="" className="h-6" />
            <img src={line} alt="" className="h-6" />
            <img src={line} alt="" className="h-6" />
            <img src={line} alt="" className="h-6" />
          </div>
        </div>
        <div>
          <FooterLinks />
        </div>
      </div>

      {/* 版權文字，響應式排列 */}
      <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs w-full max-w-5xl mt-4 gap-2 text-center md:text-left">
        <p className="">
          台灣
        </p>
        <p>
          Copyright©Ryohin Keikaku Co., Ltd. ©MUJI (Taiwan) Co., Ltd. All rights reserved.擁有及保留本網站所有權利。
        </p>
      </div>
    </div>
  );
}

export default Footer;
