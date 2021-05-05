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