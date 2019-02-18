const MILE_PRICE = 0.8;
const WAITING_TIME_PRICE = 0.25;
const START_MILES_LIMIT = 2;
const START_PRICE = 6;

module.exports = function main(miles = 0, waitingTime = 0) {
    return Math.round((miles <= START_MILES_LIMIT ?
        START_PRICE : START_PRICE + (miles > 8 ?        // start price
        ((8 - START_MILES_LIMIT) * MILE_PRICE + (miles - 8) * MILE_PRICE * (1 + 0.5)) :        //miles price(miles > 8)
        ((miles - START_MILES_LIMIT) * MILE_PRICE))) +      //miles price(miles <= 8)
        waitingTime * WAITING_TIME_PRICE);          //waiting time price
};