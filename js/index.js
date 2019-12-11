/******* GLOABL VARIABLES/DATA ********/
let button = document.getElementById("view-products");

const products = [
    {
        id: 1,
        name: `Hanes pullover`,
        image: "img/Hanes Men's pullover.jpg",
        description: "Fabric Content: 50% cotton/50% polyester, with up to 5% polyester created from recycled plastic",
        price: 15.99,
        quantity: 10,
        rating: 4.2,
        color: [`Red`],
        size: `M`
    }
    ,
    {
        id: 2,
        name: `Adidas Athletics`,
        image: "img/adidas athletics.jpg",
        description: "Fabric Content: Long sleeves with ribbed cuffs. 70% cotton / 30% recycled polyester French terry",
        price: 85.00,
        quantity: 9,
        rating: 4.1,
        color: [`Gray`],
        size: `L`
    },
    {
        id: 3,
        name: `Adidas Originals`,
        image: "img/adidas originals.jpg",
        description: `Fabric Content: Long sleeves with ribbed cuffs. 90% cotton / 10% recycled polyester French terry`,
        price: 54.00,
        quantity: 8,
        rating: 4.0,
        color: [`White`],
        size: `XL`
    }
    ,
    {
        id: 4,
        name: `3D Graphic Rainbow hoodie`,
        image: "img/Rainbow-hoodie.jpg",
        description: `Fabric Content: Polyester,spandex,cotton,soft and silky feeling,never fading or shrink.`,
        price: 27.00,
        quantity: 7,
        rating: 3.0,
        color: [`White`],
        size: `L`
    }
    ,
    {
        id: 5,
        name: `Thrasher Flame Logo Hoodie`,
        image: "img/Thrasher.jpg",
        description: ` A fleece lining provides excellent comfort and warmth in a black colorway.`,
        price: 99.00,
        quantity: 6,
        rating: 4,
        color: [`Black`],
        size: `XL`
    }
    ,
    {
        id: 6,
        name: `Champion All Over Black`,
        image: "img/Champion.jpg",
        description: `Fabric Content: Polyester,spandex,cotton,soft and silky feeling,never fading or shrink.`,
        price: 95.00,
        quantity: 5,
        rating: 3.5,
        color: [`Black`, `Red`],
        size: `L`
    }
    ,
    {
        id: 7,
        name: `Obey Sports grey`,
        image: "img/Obey.jpg",
        description: `A heather grey construction is highlighted by a teal and gold screen-printed logo across the chest`,
        price: 85.00,
        quantity: 4,
        rating: 3.5,
        color: [`White`],
        size: `XL`
    }
    ,
    {
        id: 8,
        name: `FC Barcelona`,
        image: "img/FC Barcelona.jpg",
        description: `The FC Barcelona Hoodie has soft French terry fleece with team details to keep you comfortable while repping your team.`,
        price: 48.00,
        quantity: 3,
        rating: 2.7,
        color: [`Red`],
        size: `L`
    }
    ,
    {
        id: 9,
        name: `Chicago Bulls`,
        image: "img/Chicago Bulls.jpg",
        description: `A pullover hoodie inspired by what pros wear at training made from mid-weight, double-knit fabric that's soft yet durable and comfortable all around.`,
        price: 84.00,
        quantity: 2,
        rating: 3.5,
        color: [`Red`],
        size: `M`
    }
    ,
    {
        id: 10,
        name: `NFL Raiders`,
        image: "img/NFL Raiders.jpg",
        description: `A pullover hoodie inspired by what pros wear at training made from mid-weight, double-knit fabric that's soft yet durable and comfortable all around.`,
        price: 190.00,
        quantity: 2,
        rating: 4.5,
        color: [`Black`],
        size: `XL`
    }
    ,
    {
        id: 11,
        name: `The North Face`,
        image: "img/TNF.jpg",
        description: `Kangaroo pocket; Drawcord-adjustable hood.Long sleeves with ribbed cuffs. 100% soft feel.`,
        price: 50.00,
        quantity: 3,
        rating: 5,
        color: [`Grey`],
        size: `M`
    }
    ,
    {
        id: 12,
        name: `H&M Hooded `,
        image: "img/H&M.jpg",
        description: `Kangaroo pocket; Drawcord-adjustable hood.Long sleeves with ribbed cuffs. 100% soft feel.`,
        price: 25.00,
        quantity: 4,
        rating: 1.5,
        color: [`Black`],
        size: `S`
    }
    ,
    {
        id: 13,
        name: `Nike Navy Dallas`,
        image: "img/Nike Navy Dallas.jpg",
        description: `Nike's Club Fleece Logo Pullover hoodie is a classic must-have piece in every Dallas Cowboys fan's closet.`,
        price: 52.00,
        quantity: 5,
        rating: 4.2,
        color: [`Blue`],
        size: `S`
    }
    ,
    {
        id: 14,
        name: `Nike Dak Prescott`,
        image: "img/Nike Dak Prescott.jpg",
        description: `Nike's Club Fleece Logo Pullover hoodie is a classic must-have piece in every Dallas Cowboys fan's closet.`,
        price: 97.00,
        quantity: 6,
        rating: 3.5,
        color: [`Blue`],
        size: `M`
    }
    ,
    {
        id: 15,
        name: `Adidas Orig Lockup Hoodie`,
        image: "img/Adidas Originals Lockup Hoodie.jpg",
        description: `Nike's Club Fleece Logo Pullover hoodie is a classic must-have piece in every Dallas Cowboys fan's closet.`,
        price: 69.99,
        quantity: 7,
        rating: 4.5,
        color: [`Blue`],
        size: `M`
    }
    ,
    {
        id: 16,
        name: `Nike Grey Dallas Cowboys`,
        image: "img/Nike white dallas cowboys.jpg",
        description: `Nike's Club Fleece Logo Pullover hoodie is a classic must-have piece in every Dallas Cowboys fan's closet.`,
        price: 64.99,
        quantity: 8,
        rating: 4.0,
        color: [`Grey`],
        size: `XS`
    }
    ,
    {
        id: 17,
        name: `Mitchell and Ness Oakland`,
        image: "img/Mitchell and Ness Grey Oakland.jpg",
        description: `Secure the look of a true die-hard Oakland Raiders fan this season with this Center Piece pullover hoodie from Mitchell & Ness!`,
        price: 44.00,
        quantity: 9,
        rating: 3.5,
        color: [`Grey`],
        size: `XL`
    }
    ,
    {
        id: 18,
        name: `Nike Navy Dallas`,
        image: "img/Nike Navy Dallas.jpg",
        description: `Nike's Club Fleece Logo Pullover hoodie is a classic must-have piece in every Dallas Cowboys fan's closet.`,
        price: 52.00,
        quantity: 10,
        rating: 3.0,
        color: [`Blue`],
        size: `S`
    }
    ,
    {
        id: 19,
        name: `Nike Navy Dallas`,
        image: "img/Nike Navy Dallas.jpg",
        description: `Nike's Club Fleece Logo Pullover hoodie is a classic must-have piece in every Dallas Cowboys fan's closet.`,
        price: 52.00,
        quantity: 11,
        rating: 2.5,
        color: [`Blue`],
        size: `S`
    }
    ,
    {
        id: 20,
        name: `Nike Grey Navy Dallas`,
        image: "img/Nike Navy Dallas.jpg",
        description: `Nike's Club Fleece Logo Pullover hoodie is a classic must-have piece in every Dallas Cowboys fan's closet.`,
        price: 74.99,
        quantity: 12,
        rating: 3.0,
        color: [`Grey`],
        size: `L`
    }
    
];

function getProductsasHtml(product)
 {
 return `
    <article class="product">
    <h3 id="name">${product.name}</h3>
        <ul class="course-info">
            <li><img src="${product.image}" style="height:20em; width:20em;" alt="${product.name}"> </strong></li>
            <li><strong>  ${product.description} </strong></li>
            <li>Price: <strong>${product.price}$</strong>
            <li>In-stock: <strong>${product.quantity}</strong></li>
            <li><strong>Rating ${product.rating} </strong> </li>
            <li>Color: ${product.color}</li>
            <li>Size: ${product.size}</li>
            <li><button class="addtocart"> Add To Cart </button></li>
        </ul>
        </article>`
 }

/***************SEARCH BOX DYNAMIC/************/

function displaySearchBar(){ 
    return `
        <div class="search-box"> 
        <input class="search-txt" id="search-box" type="text" placeholder="Type to search">
        <button class="search-btn" href=#> <i class="fas fa-search"> </i>
        </button>
        </div>`
}

/**********Filters for Colors *********/

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

/**********Filters for size *********/

const filterForXS = () =>{
    const extraSmallProducts = products.filter(c =>c.size =="XS");
    renderProductsFromArray(extraSmallProducts)
}

const filterForS = () =>{
    const extraSmallProducts = products.filter(c =>c.size =="S");
    renderProductsFromArray(extraSmallProducts)
}

const filterForM = () =>{
    const extraSmallProducts = products.filter(c =>c.size =="M");
    renderProductsFromArray(extraSmallProducts)
}

const filterForL = () =>{
    const extraSmallProducts = products.filter(c =>c.size =="L");
    renderProductsFromArray(extraSmallProducts)
}

const filterForXL = () =>{
    const extraSmallProducts = products.filter(c =>c.size =="XL");
    renderProductsFromArray(extraSmallProducts)
}

/**********Filters for Rating *********/

const filterForFourandAbove = () => {
    const filtForfour = products.filter(c => c.rating >=4)
    renderProductsFromArray(filtForfour)
}

const filterForThreeandAbove = () => {
    const filtForThree = products.filter(c => c.rating >=3 && c.rating < 4)
    renderProductsFromArray(filtForThree)
}

const filterForTwoandAbove = () => {
    const filtForTwo = products.filter(c => c.rating >=2 &&  c.rating < 3)
    renderProductsFromArray(filtForTwo)
}

const filterForOneandAbove = () => {
    const filtForOne = products.filter(c => c.rating >=1  &&  c.rating < 2)
    renderProductsFromArray(filtForOne)
}

/***************SORT ****************/
const sortProductsByName =  (arrtoSort) => {
    
    arrtoSort.sort((a, b) => a.name.localeCompare(b.name));
    console.log(arrtoSort);

    renderProductsFromArray(arrtoSort);
}

const sortProductsByPriceDsc =  (arrtoSort) => {
    
        arrtoSort.sort((a, b) => b.price - a.price);
        console.log(arrtoSort);

    renderProductsFromArray(arrtoSort);
}

const sortProductsByPriceAsc =  (arrtoSort) => {
    
    arrtoSort.sort((a, b) => a.price - b.price);
    console.log(arrtoSort);

renderProductsFromArray(arrtoSort);
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

// const shoes = [
//     { name: 'air force 1',colors: ['black', 'white', 'red']},
//     { name: 'chuck tailors', colors: ['black', 'white']}
//   ];


/****************Filtering on Multiple check boxes ***************/
let colored = document.querySelectorAll('[name = "colour"]:checked');


const selectedColors = []
for (i=0 ; i<colored.length ;i++){
    if(colored[i].checked){
        selectedColors.push(colored[i].value);
        console.log(selectedColors.length);
    }
}

  const myHoodies = () =>{
    if(selectedColors.length!=0){ 
        products.filter(s =>selectedColors.filter(val => s.color.includes(val)).length > 0);
        console.log(myHoodies)}
       
    }

/*******************EXECUTION **********************/
window.addEventListener('load', () => {

    renderProductsFromArray(products);
    document.getElementById("search_bar").innerHTML = displaySearchBar();
    document.getElementById("search-box").addEventListener("input",searchForProducts);
    document.getElementById("courseView").addEventListener("click",viewAsTiles);
    
    
    /************COLOR FILTERS EXECUTION **************/

    document.getElementById("red").addEventListener("click",filterForRed);
    document.getElementById("black").addEventListener("click",filterForBlack);
    document.getElementById("blue").addEventListener("click",filterForBlue);
    document.getElementById("grey").addEventListener("click",filterForGrey);
    document.getElementById("white").addEventListener("click",filterForWhite);
    
    document.getElementById("asc").addEventListener("click",() => sortProductsByName(products));
    document.getElementById("prc_asc").addEventListener("click",() => sortProductsByPriceAsc(products));
    document.getElementById("prc_dsc").addEventListener("click",() => sortProductsByPriceDsc(products));
    
    
    /************SIZE FILERS EXECUTION ************/
    
    document.getElementById("xs").addEventListener("click",filterForXS);
    document.getElementById("sm").addEventListener("click",filterForS);
    document.getElementById("md").addEventListener("click",filterForM);
    document.getElementById("lg").addEventListener("click",filterForL);
    document.getElementById("xl").addEventListener("click",filterForXL);

    /************Rating FILERS EXECUTION ************/

    document.getElementById("aboveFour").addEventListener("click",filterForFourandAbove);
    document.getElementById("aboveThree").addEventListener("click",filterForThreeandAbove);
    document.getElementById("aboveTwo").addEventListener("click",filterForTwoandAbove);
    document.getElementById("aboveOne").addEventListener("click",filterForOneandAbove);

    /*********************Multiple CHeck Boxes execution *************/

    document.querySelectorAll('[name = "colour"]').forEach(chkbox => chkbox.addEventListener("click",myHoodies));
    // document.getElementById("black").addEventListener("click", ()=> myShoes)
});