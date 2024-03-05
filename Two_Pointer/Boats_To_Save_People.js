/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    let left = 0;
    let right = people.length - 1;
    let numOfBoats = 0;

    people.sort((a, b) => a - b);

    while (left <= right) {
        if (people[left] + people[right] <= limit) {
            left++
        }

        right--;
        numOfBoats++;
    }

    return numOfBoats;
};