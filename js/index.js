/******* GLOABL VARIABLES/DATA ********/
let button = document.getElementById("view-products");

const products = [
    {
        id: 1,
        name: `Hanes Men's pullover`,
        image: "img/Hanes Men's pullover.jpg",
        description: "Fabric Content: 50% cotton/50% polyester, with up to 5% polyester created from recycled plastic",
        price: 15.99,
        quantity: 1,
        category: `clothing`,
        color: `maroon`,
        size: `Medium`
    }
    ,
    {
        id: 2,
        name: `Adidas Athletics`,
        image: "/img/adidas athletics.jpg",
        description: "Regular fit strikes a comfortable balance between loose and snug. Long sleeves with ribbed cuffs. 70% cotton / 30% recycled polyester French terry",
        price: 85.00,
        quantity: 1,
        category: `clothing`,
        color: `Gray`,
        size: `Large`
    },
    {
        id: 3,
        name: `Adidas Originals`,
        image: "img/adidas originals.jpg",
        description: `Kangaroo pocket; Drawcord-adjustable hood.Long sleeves with ribbed cuffs. 100% soft feel.`,
        price: 54.00,
        quantity: 1,
        category: `clothing`,
        color: `White`,
        size: `XL`
    }

];

function getProductsasHtml(product)
 {
 return `
    <article class="product">
    <h3 id="name">${product.name}</h3>
        <ul class="courst-info">
            <li><img src="${product.image}" style="height:20em; width:20em;" alt="${product.name}"> </strong></li>
            <li>Product Code: <strong>${product.id}</strong></li>
            <li><strong>  ${product.description} </strong></li>
            <li>Price: <strong>${product.price}$</strong>
            <li>Quantity In-stock: <strong>${product.quantity}</strong></li>
            <li>Category: ${product.category}</li>
            <li>Color: ${product.color}</li>
            <li>Size: ${product.size}</li>
        </ul>
        </article>`
 }

function displaySearchBar(){ /***************SEARCH BOX DYNAMIC/***********  */
    return `
        <div class="search-box"> 
        <input class="search-txt" id="search-box" type="text" placeholder="Type to search">
        <button class="search-btn" href=#> <i class="fas fa-search"> </i>
        </button>
        </div>`
}

/*************SIDEBAR NAV *******************/

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

const searchForProducts=() => {
    const search = document.getElementById("search-box").value;
    console.log(search);
    const lowerVersion = search.trim().toLowerCase();
    const results = products.filter(c => c.name.toLowerCase().includes(lowerVersion));
    renderProductsFromArray(results)
} 

const renderProductsFromArray = (arr) => {
    document.getElementById("products_display").innerHTML = arr.map(getProductsasHtml).join("\n");
}

const viewAsTiles = ( ) => {
    document.getElementById("products_display").classList.toggle('grid-view');
}

/*******************EXECUTION **********************/
window.addEventListener('load', () => {

    // document.getElementById("products_display").innerHTML = products.map(getProductsasHtml).join("\n")    ;
    renderProductsFromArray(products);

    document.getElementById("search_bar").innerHTML = displaySearchBar();
    document.getElementById("search-box").addEventListener("input",searchForProducts);
    document.getElementById("courseView").addEventListener("click",viewAsTiles);
 

});