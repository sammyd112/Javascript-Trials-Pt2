'use strict';

// 1. printIndices

function printIndices(items) {
  let i=0
  for (let item of items) {
    i += 1;
    console.log(`${item} ${i}`)
  }
}

// 2. everyOtherItem
function everyOtherItem(items) {
  let result = []
  for(let i = 0; i <= items.length; i++){
    if (items[i] % 2 == 0){
      result.push(items[i])
    }
  }
  return result
}


// 3. smallestNItems
function smallestNItems(items, n) {
  const sorted_items = items.sort((a, b) => a - b);
  console.log(sorted_items)
 // sorted_items.reverse()
  const sorted_n_items = sorted_items.slice(0, n);

  
  // const sortedItems = items.sort((a, b) => a - b).slice(0, n);
  // sortedItems.reverse();

  console.log(sorted_n_items);
}
