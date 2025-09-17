const BtnMeno=document.getElementById('btn-hamber')
const meno=document.getElementById('div-meno')
const Smeno=document.getElementById('show-meno')
const shopBox=document.getElementById('shop-box')
const shopDiv=document.querySelector('.bsk-box')
const shopShow=document.getElementById('button-show-bsk')
//  منو همبرگری
BtnMeno.addEventListener('click',()=>{
    meno.style.transform='translateX(0px)'
    Smeno.style.display='block'
})
Smeno.addEventListener('click',()=>{
    meno.style.transform='translateX(-100%)'
    Smeno.style.display='none'
})
// سبد خرید
shopBox.addEventListener('click',()=>{
    shopDiv.style.display='block'
})
shopShow.addEventListener('click',()=>{
    shopDiv.style.display='none'
})

// باکس های تخفیف
const oferBoxes=[
    {
        image:'هودی مشکی سایز لارج-پوشاکتو ارزان و با کیفیت.jpg',
        discount:'20%',
        title:'هودی مشکی',
        discroption:'هودی مشکی مدیوم ',
        oldPrice:'785,000',
        newPrice:'457,000تومن'
    },
    {
        image:'تی شرت مشکی مراسم ختم-تی شرت مشکی شیک ارزان-تی شرت دسته دوم-.jpg',
        discount:'40%',
        title:'پیراهن مشکی',
        discroption:'پیراهن مشکی سایز لارج',
        oldPrice:'435,000',
        newPrice:'359,000تومن'
    },
    {
        image:'تیشرت-تیشرت-طرح-Owl-W-حیوانات-front-91329.jpg',
        discount:'20%',
        title:'تی شرت زتاته طرح پرنده',
        discroption:'سایز های لارج و ایکس لارج',
        oldPrice:'435,000',
        newPrice:'359,000تومن'
    },
    {
        image:'تیشرت-تیشرت-طرح-Owl-W-حیوانات-front-49868.jpg',
        discount:'40%',
        title:'تی شرت زنانه طرح پرنده',
        discroption:'پیراهن ابی سایز لارج',
        oldPrice:'435,000',
        newPrice:'359,000تومن'
    }
]
const boxes=document.getElementById('div-boxes')

oferBoxes.forEach(p=>{
    const box=document.createElement("div");
    box.classList.add("box-div")

    const img=document.createElement('img');
    img.src = p.image
    img.classList.add('img-box-of')

    const discount=document.createElement("p")
    discount.classList.add('discount');
    discount.textContent=p.discount
    discount.classList.add('of')

    const title=document.createElement('h3')
    title.textContent=p.title
    title.classList.add('title')

    const desc=document.createElement("p");
    desc.textContent=p.discroption
    desc.classList.add('desc')

    const prices=document.createElement("p")
    prices.classList.add("prices")
    prices.innerHTML=`<p class="del-price">${p.oldPrice}</p>
    <p class="price">${p.newPrice}</p>`;
    
    box.appendChild(img)
    box.appendChild(discount)
    box.appendChild(title)
    box.appendChild(desc)
    box.appendChild(prices)
    
    
    // وقتی روی محصول کلیک شد
    box.onclick = () => showProduct(p);
    
    boxes.appendChild(box);
    ;
    
// تابع نمایش جزئیات
    function showProduct() {
    document.getElementById('main').style.display='none'
    
    let details = document.getElementById("product-details");
    details.style.display = "block";
    details.innerHTML = 
        `
        <button class="show-description" onclick="closeDetails()"><img src="zabdr.png" alt=""></button>
        <img id="img" src="${p.image}" width="200" alt="hghjg"><br>
        
        <h2>${p.title}</h2>
        <p>${p.discroption}</p>
        <div id="div-desk">
            <del>${p.newPrice} تومان</del> → <strong>${p.oldPrice} تومان</strong>
            <button class="add-bsk">افزودن به سبد خرید</button>
        </div>
        
        `
    }
})
function closeDetails(){
  document.getElementById("product-details").style.display = "none";
  document.getElementById('main').style.display='block'
}

// جدیدترین ها

const newKalla=document.getElementById('new-kalla')

const boxNewK=[
    {
        image:'../pictyre/1802488270_1670677338__750-5444.jpg',
        discount:'20%',
        title:'هودی مشکی',
        discroption:'هودی مشکی مدیوم ',
        oldPrice:'785,000',
        newPrice:'457,000تومن'
    }
]

boxNewK.forEach(n=>{
    const nBox=document.createElement('div')
    nBox.classList.add('box-div')

    const nImage=document.createElement('img')
    nImage.src=n.image
    nImage.classList.add('img-box-of')

    const nDiscount=document.createElement('p')
    nDiscount.textContent=n.discount
    nDiscount.classList.add('discount')
    nDiscount.classList.add('of')

    const nTitle=document.createElement('h3')
    nTitle.textContent=n.title
    nTitle.classList.add('title')

    const nDiscroption=document.createElement('p')
    nDiscroption.textContent=n.discroption
    nDiscroption.classList.add('desc')

    const nPrice=document.createElement("p")
    nPrice.classList.add("prices")
    nPrice.innerHTML=`<p class="del-price">${n.oldPrice}</p>
    <p class="price">${n.newPrice}</p>`;

    nBox.appendChild(nImage)
    nBox.appendChild(nDiscount)
    nBox.appendChild(nTitle)
    nBox.appendChild(nDiscroption)
    nBox.appendChild(nPrice)

    newKalla.appendChild(nBox)
})
