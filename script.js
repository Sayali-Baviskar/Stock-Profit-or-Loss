const buyprice = document.querySelector("#buyprice");
const quantity = document.querySelector("#quantity");
const stockprice = document.querySelector("#stockPrice");
const btnSubmit = document.querySelector("#btnSubmit");
const displayMessage = document.querySelector(".outputArea");
const container1 = document.querySelector(".container1");

function calculateStock()
{
   let initialPrice = Number(buyprice.value) * Number(quantity.value);
   let finalPrice = Number(quantity.value) * Number(stockprice.value);

   let profit = finalPrice - initialPrice;
   let profitPercent = ((finalPrice-initialPrice)/100 )*100;

   if(finalPrice > initialPrice)
   {
      if(profitPercent >=50)
      {
         displayMessage.innerHTML= "Yayy you have profit of "+ profitPercent+"%";
         container1.style.background ="green";

      }
   }
   else
   {
      displayMessage.innerHTML= "Ohhh ! You are in Loss";
      container1.style.background= "red";
   }
   
   
}

btnSubmit.addEventListener("click", calculateStock);
