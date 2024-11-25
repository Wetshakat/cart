// document.addEventListener("DOMContentLoaded", () => {
//     const cartSummary = document.querySelector(".cart-summary");
//     const totalCartValue = document.querySelector(".total-cart-value");
//     let cart = []; 
//     let totalValue = 10; 

    
//     document.querySelectorAll(".add-to-cart").forEach((button) => {
//         button.addEventListener("click", () => {
//             const product = button.parentElement;
//             const productName = product.querySelector("p:nth-child(2)").innerText;
//             const productPrice = parseInt(product.querySelector("p span").innerText);

            
//             cart.push({ name: productName, price: productPrice });
//             totalValue += productPrice; 

            
//             const cartItem = document.createElement("p");
//             cartItem.innerText = `${productName} - N${productPrice}`;
//             cartSummary.appendChild(cartItem);

            
//             totalCartValue.innerText = `Total: N${totalValue}`;
//         });
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
    const cartSummary = document.querySelector(".cart-summary");
    const totalCartValue = document.querySelector(".total-cart-value");
    let cart = [];
    let totalValue = 0;

    document.querySelectorAll(".add-to-cart").forEach((button) => {
        button.addEventListener("click", () => {
            const product = button.parentElement;
            const productName = product.querySelector("p:nth-child(2)").innerText;
            const productPrice = parseInt(product.querySelector("p span").innerText);

            
            const cartItemObj = { name: productName, price: productPrice };
            cart.push(cartItemObj);
            totalValue += productPrice;

            
            const cartItem = document.createElement("p");
            cartItem.innerText = `${productName}`;

            
            const deleteButton = document.createElement("button");
            deleteButton.innerText = "delete";
            deleteButton.style.marginLeft = "10px";
            deleteButton.style.border="5px"
            cartItem.appendChild(deleteButton);

            
            cartSummary.appendChild(cartItem);

            
            totalCartValue.innerText = `Total: N${totalValue}`;

            
            deleteButton.addEventListener("click", () => {
                
                const index = cart.indexOf(cartItemObj);
                if (index > -1) {
                    cart.splice(index, 1);
                }

                
                totalValue -= productPrice;

                
                cartSummary.removeChild(cartItem);

            
                totalCartValue.innerText = `Total: N${totalValue}`;
            });
        });
    });
});
