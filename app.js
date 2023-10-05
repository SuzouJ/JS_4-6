let users = {}

for(let i = 1; i <= 3;i++) {
    let name = prompt('Введите ваше имя');
    let age = +prompt('Введите свой возраст');
    users[i] = {
        name: name,
        age: age
    }
    console.log(`Пользователь ${i}`);
    console.log(`Имя ${users[i].name}`);
    console.log(`Возраст ${users[i].age}`);
}

console.log(users);

/* ////////////////////////////////////////////// */

let cart = receipt()
let menu = 'Вы заказали '
let delivery = 9000

for(let key in cart) {
    menu = menu + ' ' + key
    for(let newKey in cart[key]) {
        menu = newKey == 'info' ? menu + ` ${cart[key][newKey]}` : menu
        delivery = newKey == 'price' ? delivery + cart[key][newKey] : delivery
    }
}

console.log(`${menu} | Общая стоимость ${delivery} сумм`);
console.log(cart);