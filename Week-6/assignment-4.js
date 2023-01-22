function maxProfit(prices) {
    // initializing two variables minPrice to the maximum safe integer and maxProfit to 0
    let minPrice = Number.MAX_SAFE_INTEGER;
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) { // loop that iterates through the prices array.
        if (prices[i] < minPrice) { 
            //In each iteration, it checks if the current price is less than the minimum price seen so far. 
            // If it is, it updates the minPrice variable with the current price.
            minPrice = prices[i];
        }
//If the current price is not less than the minimum price, it calculates the profit that can be achieved by buying at the minimum price and selling at the current price, and compares it to the current maxProfit.
        //  If it is greater, it updates the maxProfit variable with the calculated profit.
        else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
    return maxProfit; //return value
}
console.log(maxProfit([22,98,11]));
// The time complexity of this algorithm is O(n) 
// and space complexity is O(1) because it only uses a constant amount of extra space to store the minPrice and maxProfit variables.