const phones = [{
    name: 'samsung', price: 20000, camera: '12mp', color: 'black'
},
{
    name: 'xoami', price: 18000,
    camera: '12mp', color: 'black'
 
},
{
 name: 'oppo', price: 30000, camera: '12mp', color: 'black'
},
{
     name: 'Iphone', price: 120000, camera: '12mp', color: 'black'
},
{
     name: 'Walton', price: 31000, camera: '12mp', color: 'black'
},
{
    name: 'HTC', price: 25000, camera: '12mp', color: 'black'
}
]


function getCheapestPhone(phones){

    let min = phones[0];
   for(const phone of phones){
    if(phone.price < min.price){
        min = phone;
    }
   }
   return min;
}

const cheap = getCheapestPhone(phones);
console.log('Cheapest phone is:', cheap);