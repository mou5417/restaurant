import { menuArray } from "./data.js";
const menu = document.querySelector("main");
let totalprice =0 
document.addEventListener("click",function(e){
  
     let orderItem=e.target.dataset.item
     let totalPrice = document.querySelector("#total-price")
     let perItemPrice = menuArray[orderItem].price
    if (e.target.className==="ordericon")
    {
      menuArray.forEach(function(item)
      {
       
        if(item.id ==orderItem){
          let orderName=menuArray[orderItem].name.toLowerCase()
        document.getElementById(orderName).textContent>=0?document.getElementById(orderName).textContent ++ : document.getElementById(orderName).textContent =0
        let orderAmount = document.getElementById(orderName).textContent
       totalprice +=orderAmount*perItemPrice
        totalPrice.textContent=(totalprice)
        }
    })
    } else if (e.target.className==="cancel-ordericon"){
    menuArray.forEach(function(item){
      if (item.id ==orderItem){
        let orderName=menuArray[orderItem].name.toLowerCase()
        let orderAmount = document.getElementById(orderName).textContent
        document.getElementById(orderName).textContent >0 ? document.getElementById(orderName).textContent--: document.getElementById(orderName).textContent =0
        totalprice -=orderAmount*perItemPrice 
   
        
         totalPrice.textContent=(totalprice)
      
      }
    })
      }
    }
    )
function render() {
  let itemtext = "";
  menuArray.forEach(function (item) {
    let nametolower = item.name.toLowerCase();
    let id=item.id
    itemtext += ` <div class="item-outer"> 
<div class="item"> 
 <img class="item-img" src="./img/${nametolower}.png" alt="">
 <div class="item-detail">
    <div class="item-name"id="item-name">
        ${item.name}
    </div>
    <div class="ingredient" id="ingredient">
    ${item.ingredients}
    </div>
    <div class="price" id="price">
    $${item.price}
    </div> 
</div> 
</div>
<div class="order-detail">
<div class="cancel-ordericon" data-item="${id}">
      
</div>
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
