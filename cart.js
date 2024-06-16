const CART_BTN = document.querySelector(".cart_btn");
const MAIN_PAGE = document.querySelector(".mainPage");
const CART_PAGE = document.querySelector(".cartPage");
const EMPTY_PAGE = document.querySelector(".emptyPage");
const RETURN_PAGE = document.querySelector(".returnMain");
const CART_ITEMS= document.querySelector(".cart_items");

CART_BTN.addEventListener("click", ()=>{
    CART_PAGE.classList.remove('none');
    MAIN_PAGE.classList.add('none');

    const pizzasCart=displayPizzaCardinCart(PIZZAS);
CART_ITEMS.innerHTML=pizzas1.join('');
});

RETURN_PAGE.addEventListener("click", ()=>{
    CART_PAGE.classList.add('none');
    MAIN_PAGE.classList.remove('none');
});

function displayPizzaCardinCart(array){
    let items = [];
    let res = array.filter(pizza=>pizza.isCart===true);
    console.log(res);
    for (let i = 0; i < array.length; i++) {
        
        items.push(`
        <div class="cart_item">
          <div class="cart_wrapper">
              <div class="item_info">
                  <img src="./assets/pizzas/${id_image}.jpg" alt="" />
                  <div class="item_info_description">
                      <h1>${array[i].name}</h1>
                      <p>${array[i].type} тесто</p>
                  </div>
              </div>
              <div class="item_count">
                  <button onclick='calcPizzaInCart("-", "${array[i].id}")'>
                      <p>-</p>
                  </button>
                  <p>${array[i].count}</p>
                  <button onclick='calcPizzaInCart("+", "${array[i].id}")'>
                      <p>+</p>
                  </button>
              </div>
          </div>
          <div class="cart_wrapper">
              <h1 class="item_price">${
                array[i].count * Number(array[i].price)
              } &#8376;</h1>
              <button class="remove" onclick='removeTypePizzas("${
                array[i].id
              }")'>
                  <img src="./assets/icons/remove.png" alt="remove" />
              </button>
          </div>
      </div>`);
}

return items;
}
const pizzas = displayPizzaCardinCart(PIZZA_CART);
CART_ITEMS.innerHTML=pizzas.join("");

