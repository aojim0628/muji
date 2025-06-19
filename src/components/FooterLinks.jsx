

function FooterLinks() {

  const itemsList = [
    ["店舖情報", "門市服務", "門市活動講座", "活動特集"],
    ["Café&MealMUJI", "空間改造企劃服務", "大宗採購", "隱私權及網站使用條款"],
    ["最新消息", "企業情報", "會員服務", "人才招募"],
    ["顧客服務", "購物說明", "聯繫我們", "網站地圖"]
  ];

  return (
    <div className=" pt-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-14 gap-y-6">
        {itemsList.map((items, idx) => (
          <div key={idx} className="flex flex-col space-y-3 text-xs font-bold text-left">
            {items.map((item, i) => (
              <a key={i} href="#" className="text-gray-700">
                {item}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FooterLinks;
