let products = [
    {
        id: Math.random(),
        model: 'air',
        name: 'mackbook',
        color: 'space grey',
        price: 1200
    },
    {
        id: Math.random(),
        model: 'aspire',
        name: 'acer',
        color: 'white',
        price: 900
    },
    {
        id: Math.random(),
        model: 'swift',
        name: 'asus',
        color: 'gold',
        price: 1600
    },
    {
        id: Math.random(),
        model: 'povilion',
        name: 'hp',
        color: 'green',
        price: 1500
    },
    {
        id: Math.random(),
        model: 'tuf',
        name: 'asus',
        color: 'black',
        price: 2000
    },
    {
        id: Math.random(),
        model: 'air',
        name: 'mackbook',
        color: 'space grey',
        price: 1300
    },
    {
        id: Math.random(),
        model: 'aspire',
        name: 'acer',
        color: 'black',
        price: 800
    },
    {
        id: Math.random(),
        model: 'swift',
        name: 'asus',
        color: 'gold',
        price: 1100
    },
    {
        id: Math.random(),
        model: 'povilion',
        name: 'hp',
        color: 'green',
        price: 1000
    },
    {
        id: Math.random(),
        model: 'tuf',
        name: 'asus',
        color: 'black',
        price: 2100
    }
]


let from = +prompt('from')
let to = +prompt('to')
if (from > to) {
    console.log('error')
}
else if (products.filter(item => item.price >= from)[0] && products.filter(item => item.price <= to)) {
    filtered = products.filter(item => item.price >= from && item.price <= to).sort((a , b) => a.price - b.price)[0]
    let conf = 
    confirm(`Вы хотите купить этот ноутбук?
    Модель: ${filtered.model}
    Название: ${filtered.name}
    Цвет: ${filtered.color}
    Цена: ${filtered.price}`
    )

    if (conf === true) {
        let sposob = prompt(`Оплата налиными или картой?`).toLowerCase().trim()

        if (sposob === `картой`) {
            let plastik = +prompt(`Введите номер карты.`).trim()

            products.splice(products.indexOf(filtered), 1)
        }
        else if (sposob === `налиными`) {
            let nalishka = +prompt(`Введите сумму.`).trim()
            if (nalishka === filtered.price) {
                products.splice(products.indexOf(filtered), 1)
            }
            else if(nalishka < filtered.price){
                alert(`Недостаточно средств`)
            }
            else{
                alert(`Введите заново`)
            }
        }
        else {
            alert(`NaN`)
        }
    } else {
        alert('Нет так нет')
    }

}
else {
    alert(`error`)
}
console.log(products)




// найти элемент по ценам
// показать клиенту и спросить хочет ли он купить этот ноут
// если да то спрашиваем наличка или карта
// если карта то номер карты
// если наличка то введи сумму
// потом из массива удаляется этот элемент 