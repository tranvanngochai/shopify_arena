
//tab
let tabSlide = () => {
  let tab = document.querySelectorAll(".tab-collection");
  tab.forEach((t)=>{
      t.addEventListener("click", (e)=>{
          tab.forEach(t=> t.classList.remove("selected"));
              e.target && e.target.classList.add("selected");
          let activeTab = document.querySelectorAll('.gallery-product.active');
              activeTab.length && activeTab.forEach(slide=>slide.classList.remove('active'));
          let selectedTab = document.getElementById(e.target.dataset.target);
              console.log(e.target.dataset.target)
              console.log(selectedTab)
              selectedTab != null && selectedTab.classList.add('active');
      })
  })
}
tabSlide();


// add to cart
// let addcarts = document.querySelectorAll(".addCart")[0].addEventListener("click", addToCart);

async function addToCart(variant_id, quantity){
    fetch('/cart/add.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id:variant_id,
            quantity:quantity
        })
      })
      .then(response => {
        return response.json();        
      }).then(function() {
         getComputedStyle(document.querySelectorAll('.cart')[0], ':before').getPropertyValue('content') = updateCartCount().toString();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
}



var getCart = fetch('/cart.js')
  .then(response => response.json())
  .then(data => { return data });

console.log(getCart);
