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
    addToCart(variantId, quantity);
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





//Popup
  $(".Click-here").on('click', function() {
    $(".custom-model-main").addClass('model-open');
  }); 
  $(".close-btn, .bg-overlay").click(function(){
    $(".custom-model-main").removeClass('model-open');
  });

