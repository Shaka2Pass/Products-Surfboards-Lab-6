export function findById(fubarItems, fubarID) {
    for (let i = 0; i < fubarItems.length; i++) {

        const singleFubarItem = fubarItems[i];

        if (singleFubarItem.fubarID === fubarID) {

            return singleFubarItem; 
        }
    }
}

//TDD test in /test/utils.js for a function that lives in /common/utils.js called findById. This function takes an array and an id, and returns the first item found that has an .id property that matches the passed in id. It can return null if no match is found.