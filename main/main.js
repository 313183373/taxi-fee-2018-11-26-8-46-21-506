const MILE_PRICE = 0.8;

module.exports = function main(miles = 0, waitingTime = 0) {
    return miles * MILE_PRICE + waitingTime * 0.25;
};