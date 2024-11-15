const newPro = [
    {id: 1, name: 'Iphone', price: '1000$', img: 'hinh.jpg'},
    {id: 2, name: 'Samsung', price: '700$', img: 'hinh.jpg'},
    {id: 3, name: 'Oppo', price: '400$', img: 'hinh.jpg'},
    {id: 4, name: 'Redmi', price: '300$', img: 'hinh.jpg'},

];
function loadNewPro(){
    let kq = '';
    for (let i = 0; i < newPro.length; i++) {
        kq += `
        <tr>
                <td>${newPro[i].id}</td>
                <td>${newPro[i].name}</td>
                <td>${newPro[i].price}</td>
                <td><img src="${newPro[i].img}" alt=""></td>
            </tr>
        `;     
    }
    document.getElementById('newpro').innerHTML = kq;
}

function load(){
    console.log('hello world');
}