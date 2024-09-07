/**
 * chair ---> 3 cft 
 * table ---> 10 cft
 * bed ---> 50 cft
 */

function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const ChairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBedWood;

    const totalWood = ChairTotalWood + tableTotalWood + bedTotalWood;
    return totalWood;
}

const wood = woodQuantity(0,0,1);
console.log('wood needed:', wood);


/**
 * shirt price ---> 5000
 * pant price ---> 3000
 * shoe price ---> 9000
 */