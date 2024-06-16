const pizza_items=document.querySelector(".pizza-items");
const btn_category=document.querySelectorAll(".btn");
const PRICE_HTML = document.querySelector(".price");
const COUNT_HTML = document.querySelector(".count");

let PIZZA_TEMP=PIZZAS;

const PIZZA_CART=[];

function displayPizzaCard(PIZZAS){
    let items=[];
    for (let i = 0; i < PIZZAS.length; i++) {

        let activeType=PIZZAS[i].type.find((elem)=>elem.isActive===true);
        let currentPizza = PIZZAS[i].type.find((elem) => elem.isActive === true);
        
        // const element = PIZZAS[i];
        // console.log(element);

        items.push(`
        <div class="pizza_item">
            <img src="./assets/pizzas/${PIZZAS[i].id}.jpg" alt="" />
            <p class="pizza_name">${PIZZAS[i].name}</p>
            <div class="pizza_choice">
              <button class="pizza_choice_btn ${PIZZAS[i].type[0].isActive ? 'choice_btn_active' : ''}" onclick='changeTypePizza("${PIZZAS[i].id}", "${PIZZAS[i].type[0].id}")'>тонкое</button>
              <button class="pizza_choice_btn ${PIZZAS[i].type[1].isActive ? 'choice_btn_active' : ''}" onclick='changeTypePizza("${PIZZAS[i].id}", "${PIZZAS[i].type[1].id}")'>традиционное</button>

            </div>
            <div class="pizza_buy">
              <p class="pizza_price">от <span>${activeType.price}</span> &#8376;</p>
              <button class="pizza_btn_buy" onclick='buyPizza("${
                activeType.price
              }", "${currentPizza.id}", "${currentPizza.type_name}", "${PIZZAS[i].name}")'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                    fill="#EB5A1E"
                  />
                </svg>
                Добавить
              </button>
            </div>
          </div>`);
    }
    return items;
};
const pizzas1=displayPizzaCard(PIZZAS);
pizza_items.innerHTML=pizzas1.join('');

for (let i = 0; i < btn_category.length; i++) {
    let btn = btn_category[i];

    btn.addEventListener("click", ()=>{
        btn_category.forEach((elem)=>{
            elem.classList.remove("btn_active")
        });
        btn.classList.add("btn_active");

        let items=[];

        PIZZAS.forEach((elem)=>{
            if(elem.category===btn.innerHTML){
                items.push(elem);
                console.log("ds");
            }else if(btn.innerHTML==='Все'){
                items.push(elem);
            }
        });
        PIZZA_TEMP=items;
        const pizzas1=displayPizzaCard(items);
        pizza_items.innerHTML=pizzas1.join('');
    });
};

function changeTypePizza(pizzaID, typeID){
  let items=[];

  for (let i = 0; i < PIZZA_TEMP.length; i++) {
    let pizza=PIZZA_TEMP[i];

    if(pizza.id===pizzaID){
      let newType=[];

      for (let k = 0; k < pizza.type.length; k++) {
        let type=pizza.type[k];

        if(type.id===typeID){
          newType.push({...type, isActive: true});
        }else{
          newType.push({...type, isActive: false});
        }
        
      }
      pizza.type=newType;
      items.push(pizza);
      
    }else{
      items.push(pizza);
    }
    
  }
  const pizzas1=displayPizzaCard(items);
pizza_items.innerHTML=pizzas1.join('');
}

function buyPizza(price, id, type, name){
  let priceHTML = Number(PRICE_HTML.innerHTML);
  PRICE_HTML.innerHTML = priceHTML + Number(price);

  COUNT_HTML.innerHTML = Number(COUNT_HTML.innerHTML)+1;
  
  
  const obj ={
    id: id,
    name: name,
    type: type,
    price: price,
    count: 1,
  };


  if (!PIZZA_CART.length) {
    PIZZA_CART.push(obj);
} else {
    let indexPizza = PIZZA_CART.findIndex((elem) => elem.id === obj.id);

    if (indexPizza >= 0) {
        PIZZA_CART[indexPizza].count += 1;
    } else{
      PIZZA_CART.push(obj);
    }
}

console.log(PIZZA_CART);
  
  //console.log(priceHTML);
  //console.log(price, id);
  //const pizzaID = id.split("_")[0];

  // let res = PIZZAS.map(elem=>{
  //   if(elem.id===pizzaID){
  //     let type = elem.type.map(item=>item.id === id ? {...item, in_cart: true}:item);
  //     return {...elem, isCart: true, type}
  //   }else{
  //     return elem;
  //   }
  // });

  // PIZZAS = res;
  // console.log(PIZZAS);
}

