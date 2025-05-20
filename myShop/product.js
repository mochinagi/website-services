const products = {
    1: {
        ja: {
            name: "商品A",
            price: "¥3,000",
            desc: "商品Aの詳細な説明です。高品質で人気の商品です。",
        },
        en: {
            name: "Product A",
            price: "$30",
            desc: "Detailed description of Product A. High quality and popular item.",
        },
        img: "https://via.placeholder.com/400?text=Product+A"
    },
    2: {
        ja: {
            name: "商品B",
            price: "¥4,500",
            desc: "商品Bの詳細説明。使いやすくてコスパ抜群です。",
        },
        en: {
            name: "Product B",
            price: "$45",
            desc: "Detailed description of Product B. Easy to use and great value.",
        },
        img: "https://via.placeholder.com/400?text=Product+B"
    },
    3: {
        ja: {
            name: "商品C",
            price: "¥2,000",
            desc: "商品Cの説明。シンプルでスタイリッシュなデザインです。",
        },
        en: {
            name: "Product C",
            price: "$20",
            desc: "Description of Product C. Simple and stylish design.",
        },
        img: "https://via.placeholder.com/400?text=Product+C"
    }
};

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const langSelect = document.getElementById("lang-select");
const productNameEl = document.getElementById("product-name");
const productPriceEl = document.getElementById("product-price");
const productDescEl = document.getElementById("product-desc");
const productImgEl = document.getElementById("product-img");
const buyBtn = document.getElementById("buy-btn");

let currentLang = "ja";

function loadProduct(productId, lang) {
    const product = products[productId];
    if (!product) {
        productNameEl.textContent = "商品が見つかりません";
        productPriceEl.textContent = "";
        productDescEl.textContent = "";
        productImgEl.src = "";
        buyBtn.style.display = "none";
        return;
    }
    productNameEl.textContent = product[lang].name;
    productPriceEl.textContent = product[lang].price;
    productDescEl.textContent = product[lang].desc;
    productImgEl.src = product.img;
    buyBtn.style.display = "inline-block";
}

langSelect.addEventListener("change", (e) => {
    currentLang = e.target.value;
    const productId = getQueryParam("id");
    loadProduct(productId, currentLang);
});

buyBtn.addEventListener("click", () => {
    alert(currentLang === "ja" ? "購入ありがとうございます！" : "Thank you for your purchase!");
});

const productId = getQueryParam("id") || "1";
loadProduct(productId, currentLang);
