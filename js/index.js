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
        color: `Red`,
        size: `M`
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
        size: `L`
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
    ,
    {
        id: 4,
        name: `3D Graphic Rainbow hoodie`,
        image: "img/Rainbow-hoodie.jpg",
        description: `Polyester,spandex,cotton,soft and silky feeling,never fading or shrink.High Quality and comfortable.`,
        price: 27.00,
        quantity: 1,
        category: `clothing`,
        color: `White`,
        size: `L`
    }
    ,
    {
        id: 5,
        name: `Thrasher Flame Logo Hoodie`,
        image: "img/Thrasher.jpg",
        description: `A fleece lining provides excellent comfort and warmth in a black colorway that features an iconic Thrasher flame logo graphic screen printed on the chest.`,
        price: 99.00,
        quantity: 4,
        category: `clothing`,
        color: `Black`,
        size: `XL`
    }
    ,
    {
        id: 6,
        name: `Champion Reverse Weave All Over Print Black`,
        image: "img/Champion.jpg",
        description: `Bundle up in classic athleisure style with the Champion Reverse Weave All Over Print black hoodie. This classic hoodie features a fleece lined interior for maximum comfort, while Champion logo script screen-printed throughout in white provides a prominent splash of classic branding and style.`,
        price: 95.00,
        quantity: 1,
        category: `clothing`,
        color: `Black`,
        size: `L`
    }
    ,
    {
        id: 7,
        name: `Obey Sports grey`,
        image: "img/Obey.jpg",
        description: `Add some collegiate flair to your streetwear style with the Sports grey, teal and gold hoodie from Obey. A heather grey construction is further highlighted by a teal and gold screen-printed logo across the chest`,
        price: 85.00,
        quantity: 1,
        category: `clothing`,
        color: `White`,
        size: `XL`
    }
    ,
    {
        id: 8,
        name: `FC Barcelona`,
        image: "img/FC Barcelona.jpg",
        description: `The FC Barcelona Hoodie has soft French terry fleece with team details to keep you comfortable while repping your team.`,
        price: 48.00,
        quantity: 1,
        category: `clothing`,
        color: `Red`,
        size: `L`
    }
    ,
    {
        id: 9,
        name: `Chicago Bulls`,
        image: "img/Chicago Bulls.jpg",
        description: `Connect with your team in the Chicago Bulls Nike Spotlight NBA Hoodie, a pullover hoodie inspired by what pros wear at training. It's made from mid-weight, double-knit fabric that's soft yet durable and comfortable all around.`,
        price: 84.00,
        quantity: 1,
        category: `clothing`,
        color: `Red`,
        size: `M`
    }
    ,
    {
        id: 10,
        name: `NFL Raiders`,
        image: "img/NFL Raiders.jpg",
        description: `The Nike Circuit Logo Essential (NFL Raiders) Men's Pullover Hoodie pays tribute to your team with a logo detail on warm, comfortable fabric.`,
        price: 190.00,
        quantity: 1,
        category: `clothing`,
        color: `Black`,
        size: `XL`
    }
    ,
    {
        id: 11,
        name: `The North Face`,
        image: "img/THe North Face.jpg",
        description: `Whether he’s biking to school or playing ball in the park, our new and improved midweight hoodie features a cordless hood and cozy kangaroo pocket that’s deep enough to stash small souvenirs from the trails.`,
        price: 50.00,
        quantity: 1,
        category: `clothing`,
        color: `Grey`,
        size: `M`
    }
    ,
    {
        id: 12,
        name: `H&M Hooded Sweatshirt`,
        image: "img/H&M.jpg",
        description: `Kangaroo pocket; Drawcord-adjustable hood.Long sleeves with ribbed cuffs. 100% soft feel.`,
        price: 25.00,
        quantity: 1,
        category: `clothing`,
        color: `Black`,
        size: `S`
    }
    ,
    {
        id: 13,
        name: `Nike Navy Dallas`,
        image: "img/Nike navy Dallas.jpg",
        description: `Nike's Club Fleece Logo Pullover hoodie is a classic must-have piece in every Dallas Cowboys fan's closet.`,
        price: 52.00,
        quantity: 1,
        category: `clothing`,
        color: `Blue`,
        size: `S`
    }
    ,
    {
        id: 14,
        name: `Nike Dak Prescott`,
        image: "img/Nike Dak Prescott.jpg",
        description: `Men's Nike Dak Prescott Navy Dallas Cowboys Therma Jersey`,
        price: 97.00,
        quantity: 1,
        category: `clothing`,
        color: `Blue`,
        size: `M`
    }
    ,
    {
        id: 15,
        name: `Adidas Originals Lockup Hoodie`,
        image: "img/Adidas Originals Lockup Hoodie.jpg",
        description: `Nike's Club Fleece Logo Pullover hoodie is a classic must-have piece in every Dallas Cowboys fan's closet.`,
        price: 69.99,
        quantity: 1,
        category: `clothing`,
        color: `Blue`,
        size: `M`
    }
    ,
    {
        id: 16,
        name: `Nike Grey Dallas Cowboys`,
        image: "img/Nike white dallas cowboys.jpg",
        description: `Nike's Club Fleece Logo Pullover hoodie is a classic must-have piece in every Dallas Cowboys fan's closet.`,
        price: 64.99,
        quantity: 1,
        category: `clothing`,
        color: `Grey`,
        size: `S`
    }
    ,
    {
        id: 17,
        name: `Mitchell and Ness Grey Oakland`,
        image: "img/Mitchell and Ness Grey Oakland.jpg",
        description: `Secure the look of a true die-hard Oakland Raiders fan this season with this Center Piece pullover hoodie from Mitchell & Ness!`,
        price: 44.00,
        quantity: 1,
        category: `clothing`,
        color: `Grey`,
        size: `XL`
    }
    ,
    {
        id: 18,
        name: `Nike Navy Dallas`,
        image: "img/Nike navy Dallas.jpg",
        description: `Nike's Club Fleece Logo Pullover hoodie is a classic must-have piece in every Dallas Cowboys fan's closet.`,
        price: 52.00,
        quantity: 1,
        category: `clothing`,
        color: `Blue`,
        size: `S`
    }
    ,
    {
        id: 19,
        name: `Nike Navy Dallas`,
        image: "img/Nike navy Dallas.jpg",
        description: `Nike's Club Fleece Logo Pullover hoodie is a classic must-have piece in every Dallas Cowboys fan's closet.`,
        price: 52.00,
        quantity: 1,
        category: `clothing`,
        color: `Blue`,
        size: `S`
    }
    ,
    {
        id: 20,
        name: `Nike Grey Navy Dallas`,
        image: "img/Nike navy Dallas.jpg",
        description: `Nike's Club Fleece Logo Pullover hoodie is a classic must-have piece in every Dallas Cowboys fan's closet.`,
        price: 74.99,
        quantity: 1,
        category: `clothing`,
        color: `Grey`,
        size: `L`
    }
    
];

function getProductsasHtml(product)
 {
 return `
    <article class="product">
    <h3 id="name">${product.name}</h3>
        <ul class="courst-info">
            <li><img src="${product.image}" style="height:20em; width:20em;" alt="${product.name}"> </strong></li>
            <li><strong>  ${product.description} </strong></li>
            <li>Price: <strong>${product.price}$</strong>
            <li>Quantity In-stock: <strong>${product.quantity}</strong></li>
            <li>Category: ${product.category}</li>
            <li>Color: ${product.color}</li>
            <li>Size: ${product.size}</li>
            <li><button id="addtocart"> Add To Cart </button></li>
        </ul>
        </article>`
 }

function displaySearchBar(){ /***************SEARCH BOX DYNAMIC/************/
    return `
        <div class="search-box"> 
        <input class="search-txt" id="search-box" type="text" placeholder="Type to search">
        <button class="search-btn" href=#> <i class="fas fa-search"> </i>
        </button>
        </div>`
}

const filterForRed = () =>{
    const redProducts = products.filter(c => c.color == "Red");
    renderProductsFromArray(redProducts);

}

const filterForBlack = () => {
    const blackProducts = products.filter(c => c.color == "Black");
    renderProductsFromArray(blackProducts);

}

const filterForWhite = () => {
    const whiteProducts = products.filter(c => c.color == "White");
    renderProductsFromArray(whiteProducts);

}

const filterForGrey = () => {
    const greyProducts = products.filter(c => c.color == "Grey");
    renderProductsFromArray(greyProducts);

}

const filterForBlue = () => {
    const blueProducts = products.filter(c => c.color == "Blue");
    renderProductsFromArray(blueProducts);

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
    document.getElementById("red").addEventListener("click",filterForRed);
    document.getElementById("black").addEventListener("click",filterForBlack);
    document.getElementById("blue").addEventListener("click",filterForBlue);
    document.getElementById("grey").addEventListener("click",filterForGrey);
    document.getElementById("white").addEventListener("click",filterForWhite);

});