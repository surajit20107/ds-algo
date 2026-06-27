/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
    let low = 0;
    let res = 0;
    let map = new Map();
    for (let high = 0; high < fruits.length; high++) {
        let right = fruits[high];
        map.set(right, (map.get(right) || 0) + 1);
        while (map.size > 2) {
            let left = fruits[low];
            map.set(left, map.get(left) - 1);
            if (map.get(left) === 0) map.delete(left);
            low++;
        }
        res = Math.max(res, high-low+1);
    }
    return res;
};