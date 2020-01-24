export function findById(fubarItems, fubarID) {
    
    for (let i = 0; i < fubarItems.length; i++) {

        const singleFubarItem = fubarItems[i];
        console.log(singleFubarItem.id);
        console.log(fubarID);
        if (singleFubarItem.id === fubarID) {

            return singleFubarItem; 
        }
    }
    return null;
}

export function toUSD(number) {
    return number.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
}

export function calcLineTotal(quantity, price) {
    const amount = quantity * price;
    return roundCurrency(amount);
} 


function roundCurrency(junk) {
    return Math.round(junk * 100) / 100;

}



//TDD test in /test/utils.js for a function that lives in /common/utils.js called findById. This function takes an array and an id, and returns the first item found that has an .id property that matches the passed in id. It can return null if no match is found.