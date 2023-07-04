const goods = [
    {id: 1, name: 'hat', description: 'green', sizes: ['L'], price: 200, available: 'true', },
    {id: 2, name: 'polo', description: 'yellow', sizes: ['S','M','L','XL','XXL'], price: 300, available: '', },
    {id: 3, name: 'shirt', description: 'white', sizes: ['S','M','L','XL'], price: 100, available: 'true', },
    {id: 4, name: 'skirt', description: 'blue spotted', sizes: ['XS'], price: 100, available: 'true', },
    {id: 5, name: 'dress', description: 'red', sizes: ['S','M','L','XL','XXL'], price: 100, available: '', },
];

basket = [
    {goodId: goods[1].id, amount: 1},
    {goodId: goods[2].id, amount: 3},
    {goodId: goods[3].id, amount: 3},
    ];

function addproduct (idAdd, quantityadd) {    
    for (let j=0; j<goods.length; j++) {
        if (goods[j].id == idAdd) {
            const add = {goodId: idAdd, amount: +quantityadd};
            basket.push(add);
            break;
        }   
    return basket;
    }
}

function deleteproduct (idDelete) {  
    for (let i=0; i<basket.length; i++) {
        if (basket[i].goodId == idDelete) {
            basket.splice(basket[i].goodId, 1); 
            break;
        }   
    return basket;
    }
}

function totals() {
    let totalValue = 0;
    let totalQuantity = 0;
    for (let i=0; i<basket.length; i++) {
        for (let j=0; j<goods.length; j++) {
            if (goods[j].id == basket[i].goodId) {
                totalValue += goods[j].price * basket[i].amount;
                break
            }    
            }
        totalQuantity += basket[i].amount;    
        }   
    const total = {totalAmount: totalQuantity, totalSumm: totalValue,};
    return total;
    }

function deletebasket() {
    basket=[];
    return basket;
}

console.log("product to add in basket: " + process.argv[2]);
console.log("Amount of product to add in basket: " + process.argv[3]);
console.log(addproduct(process.argv[2], process.argv[3]));

console.log("product to delete from basket: " + process.argv[4]);
console.log(deleteproduct(process.argv[4]));

console.log('Basket total amount of products');
console.log(totals());

console.log('Empty basket');
console.log(deletebasket());
