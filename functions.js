'use strict';

// 1. isHometown
function hometown(town) {
    if (town == "San Francisco"){
        console.log(true);
    }else {
        console.log(false);
    }
}

// 2. getFullName

function getFullName(first, second){
    return(`${first} ${second}`)
}



// 3. calculateTotal

function calculateTotal(base_price, state, tax=0.05) {

    let subtotal = base_price * (1 + tax)
    let fee = 0

    if (state === "CA") {
        fee = 0.03 * subtotal;
    }
    else if (state === "PA"){
        fee = 2;
    }
    else if (state === "MA") {
        if (base_price <= 100) {
            fee = 1;
        }
        else {
            fee = 3;
        }
    }
    
    return subtotal + fee
}
