// Header bar mobile
  var toggleButton = document.getElementsByClassName("header__bottom-icon")[0];
  var menuList = document.getElementsByClassName("header__bottom-list")[0];

  toggleButton.addEventListener('click', () => {
    menuList.classList.toggle("active");
  })



//tab
let tabSlide = () => {
  let tab = document.querySelectorAll(".tab-collection");
  tab.forEach(t => {
    t.addEventListener("click", e => {
      tab.forEach(t => t.classList.remove("selected"));
      e.target && e.target.classList.add("selected");
      let activeTab = document.querySelectorAll(".gallery-product.active");
      activeTab.length &&
        activeTab.forEach(slide => slide.classList.remove("active"));
      let selectedTab = document.getElementById(e.target.dataset.target);
      console.log(e.target.dataset.target);
      console.log(selectedTab);
      selectedTab != null && selectedTab.classList.add("active");
    });
  });
};
tabSlide();


// add to cart
document.querySelectorAll(".form__submit").forEach(element => {
  element.addEventListener('click', function(e){
    e.preventDefault();
    console.log(this);
    const variantId = this.querySelector("[name='id']").value
    const quantity = this.querySelector("[name='quantity']").value
    const handle = this.querySelector("[name='handle']").value

    addToCart(variantId, quantity);
    getProduct(handle);
  })
});



async function addToCart(variant_id, quantity) {
  fetch("/cart/add.js", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: variant_id,
      quantity: quantity
    })
  })
    .then(response => {
      return response.json();
    })
    .then(data => showPopupQuickAddToCart(data))
    .then(async function() {
      document.querySelectorAll("#cart__count")[0].innerHTML = (
        await getCart()
      ).item_count;
    })
    .catch(error => {
      console.log("Error:", error);
    });
}


async function getCart() {
  return fetch("/cart.js")
    .then(response => response.json())
    .then(data => data);
}


async function getProduct(handle) {
  return fetch('/products/'+handle+'.js')
    .then(response => response.json())
    .then(data => console.log("Get Product",data));
}





//show Popup
async function showPopupQuickAddToCart(data){
  console.log("show",data);

  const {
    image,
    product_title,
    final_line_price,
    price
  } = data;

  const popup = document.querySelector("#custom-model-main");

  let productTitle = popup.querySelector("[data-popup-title]"),
      productimage = popup.querySelector("[data-popup-product-image]"),
      productPriceNew = popup.querySelector("[data-popup-price__new]"),
      productPriceOld = popup.querySelector("[data-popup-price__old]");

  productimage.src = image;
  productTitle.innerHTML = product_title;
  productPriceNew.innerHTML = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
  
  productPriceOld.innerHTML = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(final_line_price);
}





//Popup
  $(".Click-here").on('click', function() {
    $(".custom-model-main").addClass('model-open');
  }); 
  $(".close-btn, .bg-overlay, .continue").click(function(){
    $(".custom-model-main").removeClass('model-open');
  });

