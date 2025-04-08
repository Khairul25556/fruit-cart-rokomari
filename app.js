class Rokomari {
    constructor(item, price) {
      this.item = item;
      this.price = price;
    }
  
    show() {
      return `Item: ${this.item}, Price: ${this.price}`;
    }
  }
  
  const data = [
    ["Apple", 90],
    ["Orange", 56],
    ["Banana", 45],
    ["Mango", 150],
    ["Grapes", 90],
    ["Pineapple", 70],
    ["Watermelon", 130],
    ["Papaya", 60],
    ["Strawberry", 300],
    ["Guava", 55],
    ["Coconut", 80],
    ["Dragon Fruit", 250],
    ["Blueberry", 400],
    ["Kiwi", 200],
    ["Lemon", 20],
    ["Tomato", 35],
    ["Cucumber", 30],
    ["Carrot", 40],
    ["Onion", 50],
    ["Potato", 25]
  ];
  
  
  let totalPrice = 0;
  let selectedItems = [];
  
  const productList = document.getElementById("product-list");
  const totalDiv = document.getElementById("total");
  
  data.forEach(([item, price]) => {
    const order = new Rokomari(item, price);
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.textContent = `${order.item} - $${order.price}`;
    productList.appendChild(productDiv); 
  
    productDiv.addEventListener("click", () => {
      totalPrice += order.price;
      selectedItems.push(order.item);
  
      if (totalPrice >= 1000) {
        let discountRate = 10;
        let discount = Math.floor(totalPrice * discountRate / 100);
        let finalTotal = totalPrice - discount;
        totalDiv.textContent = `Items: ${selectedItems.join(", ")}\n ------>Discount: ${discountRate}% applied.------> Total: $${finalTotal}`;
      } else {
        totalDiv.textContent = `Items: ${selectedItems.join(", ")}\n------>Total: $${totalPrice}`; 
      }
    });
  });
  