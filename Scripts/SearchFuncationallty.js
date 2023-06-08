var accessKey = "TY4-X47vGm2G1b6x1Y-7yNeF3lBsUZg9FvtT0LsC-do";

var form = document.querySelector('.search-form')
var boxcontainer = document.querySelector('.box-container');
var searchbox = document.querySelector('#search-box')

form.addEventListener('submit', (e)=>{
    e.preventDefault()  
    page=1;
    searchImage();
    console.log("form function");

})

async function searchImage(){
    const Search = searchbox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${Search}&client_id=${accessKey}`
    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;
    if(page===1){
        boxcontainer.innerHTML = "";
    }
    
    if(Search == 'free Delivery'){
    results.map((e)=>{
        const box = document.createElement('div')
        box.classList.add('box')

        const image = document.createElement('img');
        image.src = e.urls.small;
        image.alt = e.alt_description;
        image.classList.add('img')

        const h3 = document.createElement('h3');

        const p = document.createElement('p')

        const a = document.createElement('a')
        a.href = document.links.html;
        a.target = "_blank";
        a.textContent = e.alt_description;
        a.classList.add('feature_text')

        const add_to_cart = document.createElement('button');
        add_to_cart.classList.add("add_to_cart-btn")
        add_to_cart.textContent = "Add To Cart"
        box.appendChild(image);
        box.appendChild(h3)
        box.appendChild(p)
        box.appendChild(a)
        box.appendChild(add_to_cart)
        boxcontainer.append(box)
    })
}
    page++;
    console.log('map funxtion');
}