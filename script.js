const cardContainer = document.getElementById("cardContainer");

async function fetchProducts() {
    try {
        const response = await fetch(
            "https://fakestoreapi.com/products"
        );

        const products = await response.json();

        cardContainer.innerHTML = "";

        products.slice(0, 8).forEach(product => {
            const card = document.createElement("div");

            card.classList.add("product-card");

            card.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                
                <div class="product-content">
                    <h3>${product.title}</h3>
                    
                    <p>
                        ${product.description.substring(0, 90)}...
                    </p>
                    
                    <p class="price">$${product.price}</p>
                </div>
            `;

            cardContainer.appendChild(card);
        });

    } catch (error) {
        cardContainer.innerHTML = `
            <h2>Failed To Load Products</h2>
        `;

        console.error(error);
    }
}

fetchProducts();