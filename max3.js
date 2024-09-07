const jim = 56;
const tim = 89;
const kim = 68;

if(jim > tim && jim > kim){
    console.log('Jim is the ultimate boss');
}
else if(tim > jim && tim > kim){
    console.log('Tim is the boss');
}
else{
    console.log('Kim is the boss');
}

function maxOf3(num1, num2, num3){
    // do it yourself

    if(num1 > num2 && num1 > num3){
        return num1;
    }
    else if(num2 > num1 && num2 > num3){
        return num2;
    }
    else{
        return num3;
    }
}

const num = maxOf3(34, 54,23);
console.log('max num is:', num);


const max = Math.max(12,1,56);
console.log('max isuing Math.max', max);