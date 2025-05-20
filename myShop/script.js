const languageData = {
    ja: {
        home: "ホーム",
        shop: "商品一覧",
        about: "会社情報",
        contact: "お問い合わせ",
        banner_title: "期間限定セール開催中！",
        banner_desc: "人気商品をお得にゲットしよう！",
        featured_title: "おすすめ商品",
        add_to_cart: "カートに追加",
        shop_now_btn: "今すぐ買う"
    },
    en: {
        home: "Home",
        shop: "Shop",
        about: "About",
        contact: "Contact",
        banner_title: "Limited Time Sale!",
        banner_desc: "Get popular products at great prices!",
        featured_title: "Featured Products",
        add_to_cart: "Add to Cart",
        shop_now_btn: "Shop Now"
    }
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

// “今すぐ買う”按钮跳转商品详情页(默认商品id=1)
document.getElementById("shop-now-btn").addEventListener("click", () => {
    window.location.href = "product.html?id=1";
});

// 商品卡片“カートに追加”按钮模拟跳转该商品详情页
document.querySelectorAll(".buy-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-product-id");
        window.location.href = `product.html?id=${id}`;
    });
});
