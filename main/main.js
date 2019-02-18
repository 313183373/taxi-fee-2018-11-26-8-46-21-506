const MILE_PRICE = 0.8;
const WAITING_TIME_PRICE = 0.25;
const START_MILES_LIMIT = 2;
const START_PRICE = 6;

module.exports = function main(miles = 0, waitingTime = 0) {
    return Math.round((miles <= START_MILES_LIMIT ? START_PRICE : START_PRICE + (miles - START_MILES_LIMIT) * MILE_PRICE) + waitingTime * WAITING_TIME_PRICE);
};