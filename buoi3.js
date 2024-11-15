const newPro = [
    {id: 1, name: 'Iphone', price: '1000', img: 'hinh.JPG'},
    {id: 2, name: 'Samsung', price: '700', img: 'hinh.JPG'},
    {id: 3, name: 'Oppo', price: '400', img: 'hinh.JPG'},
    {id: 4, name: 'Redmi', price: '300', img: 'hinh.JPG'},

];
function loadsp(){
    let kq = '';
    for (let i = 0; i < newPro.length; i++) {
        kq += `
        <div class="col">
            <img src="${newPro[i].img}" alt="" width="200px">
            <p>${newPro[i].name}</p>
            <p>${newPro[i].price}</p>
            <button>Mua ngay</button>
        </div>
        `;     
    }
    document.getElementById('newpro').innerHTML = kq;
}

window.onload = function (){
    loadsp();
    let btn = document.querySelectorAll('button');
    let cart = [];
    // alert(btn.length);  
    for(let i = 0; i < btn.length; i++){
        btn[i].addEventListener('click',function(){
            console.log(this.parentElement);
            let name = this.parentElement.querySelectorAll('p')[0].innerHTML;
            let price = this.parentElement.querySelectorAll('p')[1].innerHTML;
            let pro = {
                name: name,
                price: price,
                quantity: 1
            }
            let check = cart.find(i => i.name === pro.name)
            if(check){
                check.quantity++;
            }else{
                cart.push(pro);
            }
            console.log(cart);
            localStorage.setItem('cart', JSON.stringify(cart));
        })
    }
}
