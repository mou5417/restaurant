import { menuArray } from "./data.js";
const menu = document.querySelector("main");
document.addEventListener("click",function(e){
  
     let test=e.target.dataset.item
    if (e.target.className==="ordericon")
    {
      menuArray.forEach(function(item)
      {
       
        if(item.id ==test){
          let orderName=menuArray[test].name.toLowerCase()
        document.getElementById(orderName).textContent++;
        }
    })
    }
    })
function render() {
  let itemtext = "";
  menuArray.forEach(function (item) {
    let nametolower = item.name.toLowerCase();
    let id=item.id
    itemtext += ` <div class="item-outer"> 
<div class="item"> 
 <img class="item-img" src="./assets/${nametolower}.png" alt="">
 <div class="item-detail">
    <div class="item-name"id="item-name">
        ${item.name}
    </div>
    <div class="ingredient" id="ingredient">
    ${item.ingredients}
    </div>
    <div class="price" id="price">
    ${item.price}
    </div> 
</div> 
</div>
<div class="order-detail">
  <div class="order-amount" id="${nametolower}" data-item="">
  0
  </div>
  <div class="ordericon" data-item="${id}">
      
  </div>
</div> 
</div>          
     
            `;
  });
  menu.innerHTML = itemtext;
}

render();
