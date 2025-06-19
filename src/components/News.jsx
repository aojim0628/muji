// import {ArrowRightOutlined} from '@ant-design/icons'

// function News() {
//     return (
//         <>
//             <div>
//                 <p className="font-bold text-2xl text-gray-900 text-left mb-3">最新消息</p>
//             </div>
//             <div className="grid grid-rows-4 gap-5 text-gray-900 text-left bg-gray-100 text-sm p-4 font-bold">
//                 <p className="">2025.06.09 MUJI無印良品寵物用品全新上市，與毛小孩共享舒適生活 松高與大立門市、MUJI無印良品官網及momo購物網限量販售中</p>
//                 <p>2025.06.05 「台北松高、高雄大立旗艦店展出「無印良品的原來如此」特展 邀您共享商品背後的設計初心與品牌哲學</p>
//                 <p>2025.06.02 MUJI無印良品響應「世界環境日」推出豆奶新口味與回收獎勵活動 即日起至6/18，參與活動即可獲限量玻璃徽章乙枚</p>
//                 <p className="gap-x-2 flex justify-end">查看更多<ArrowRightOutlined /></p>
//             </div>
//         </>
//     );
// }

// export default News;

import { ArrowRightOutlined } from '@ant-design/icons';
import Slider from "react-slick";

import image1 from '../images/banner1.jpg';
import image2 from '../images/banner2.jpg';
import image3 from '../images/banner3.jpg';

function News() {
  return (
    <>
      <div>
        <p className="font-bold text-2xl text-gray-900 text-left mb-3">最新消息</p>
      </div>
      <div className="grid grid-rows-4 gap-5 text-gray-900 text-left bg-gray-100 text-sm p-4 font-bold">
        <p>2025.06.09 MUJI無印良品寵物用品全新上市，與毛小孩共享舒適生活 松高與大立門市、MUJI無印良品官網及momo購物網限量販售中</p>
        <p>2025.06.05 「台北松高、高雄大立旗艦店展出「無印良品的原來如此」特展 邀您共享商品背後的設計初心與品牌哲學</p>
        <p>2025.06.02 MUJI無印良品響應「世界環境日」推出豆奶新口味與回收獎勵活動 即日起至6/18，參與活動即可獲限量玻璃徽章乙枚</p>
        <div className="flex justify-end pr-2">
          <span className="flex items-center gap-x-2 whitespace-nowrap cursor-pointer">
            查看更多 <ArrowRightOutlined />
          </span>
        </div>
      </div>
    </>
  );
}

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="mt-2">
      <Slider {...settings}>
        <div>
          <img src={image1} alt="Image 1" className="w-full h-20 object-cover shadow-lg" />
        </div>
        <div>
          <img src={image2} alt="Image 2" className="w-full h-20 object-cover shadow-lg" />
        </div>
        <div>
          <img src={image3} alt="Image 3" className="w-full h-20 object-cover shadow-lg" />
        </div>
      </Slider>
    </div>
  );
}

export default function Home() {
  return (
    <div className="mx-auto">
      <News />
      <SimpleSlider />
    </div>
  );
}
