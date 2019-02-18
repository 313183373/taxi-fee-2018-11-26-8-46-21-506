const MILE_PRICE = 0.8;
const WAITING_TIME_PRICE = 0.25;

module.exports = function main(miles = 0, waitingTime = 0) {
    return Math.round(miles * MILE_PRICE + waitingTime * WAITING_TIME_PRICE);
};