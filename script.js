const languageData = {
    ja: {
        home: "ホーム",
        shop: "ショップ",
        about: "会社情報",
        contact: "お問い合わせ",
        banner_title: "今だけセール開催中！",
        banner_desc: "最新の商品をお得にゲットしよう！",
        shop_now_btn: "今すぐ買う",
        featured_title: "おすすめ商品",
        product1_name: "商品A",
        product2_name: "商品B",
        product3_name: "商品C",
        add_to_cart: "カートに追加",
    },
    en: {
        home: "Home",
        shop: "Shop",
        about: "About",
        contact: "Contact",
        banner_title: "Limited Time Sale!",
        banner_desc: "Get the latest products at great prices!",
        shop_now_btn: "Shop Now",
        featured_title: "Featured Products",
        product1_name: "Product A",
        product2_name: "Product B",
        product3_name: "Product C",
        add_to_cart: "Add to Cart",
    },
};

const langSelect = document.getElementById("lang-select");

function updateLanguage(lang) {
    document.documentElement.lang = lang;

    const elements = document.querySelectorAll("[data-key]");
    elements.forEach((el) => {
        const key = el.getAttribute("data-key");
        if (languageData[lang] && languageData[lang][key]) {
            el.textContent = languageData[lang][key];
        }
    });
}

langSelect.addEventListener("change", (e) => {
    updateLanguage(e.target.value);
});

// 默认加载日语
updateLanguage("ja");
