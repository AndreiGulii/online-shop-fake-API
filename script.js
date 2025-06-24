// API https://fakestoreapi.com/docs
const gridContainer = document.querySelector(".grid-container");
const loader = document.querySelector(".loader")


// ! реализация на async / await

 /*async function getProducts() {
   // * если все будет хорошо мы останемся в блоке try
   try {

     const res = await fetch("https://fakestoreapi.com/products");
     if (!res.ok) {
       // передаем информацию об ошибке если мы попадаем в нее (проверка на res.ok)
       throw new Error(`ОШИБКА: status: ${res.status} ${res.statusText ? res.statusText : ''}`)
     }

     loader.classList.toggle('none')

     const data = await res.json();
     data.map((el) => {
       const card = document.createElement("div");
       const h2 = document.createElement("h2");
       h2.textContent = el.title;
       const img = document.createElement("img");
       img.src = el.image;
       const p = document.createElement("p");
       p.textContent = el.description;
       const price = document.createElement("p");
       price.textContent = "Price: " + el.price + "€";
       card.append(h2, price, img, p);
       gridContainer.append(card);
     });
   // ! если случится ошибка мы попадем в блок catch
   } catch (error) {
     console.error(error.message)
     const message = document.createElement('h3')
     message.textContent = error.message
     message.style.color = 'red'
     document.body.append(message)/   }
 }

 setTimeout(()=> {
   getProducts();
 }, 3000)*/



// ! реализация на .then
function getProducts() {
  fetch("https://fakestoreapi.com/products")
    .then((res) => {
      // здесь идет проверка на ошибку
      if (!res.ok) {
        throw new Error(`ОШИБКА: status: ${res.status} ${res.statusText ? res.statusText : ""}`);
      }
      loader.classList.toggle('none')
      return res.json();
    })
    .then((data) => {
      data.map((el) => {
      const card = document.createElement("div");
      const h2 = document.createElement("h2");
      h2.textContent = el.title;
      const img = document.createElement("img");
      img.src = el.image;
      const p = document.createElement("p");
      p.textContent = el.description;
      const price = document.createElement("p");
      price.textContent = "Price: " + el.price + "€";
      card.append(h2, price, img, p);
      gridContainer.append(card);
    });
    })
    .catch((error) => {
      console.error(error.message);
      const message = document.createElement("h3");
      message.textContent = error.message;
      message.style.color = "red";
      document.body.append(message);
    });
}

setTimeout(()=> {
  getProducts();
}, 1500)
