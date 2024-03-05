/**
 * @param {string[]} strs
 * @return {string[][]}
 */
let groupAnagrams = (strs) => {
    let result = [];
    let anagramMap = {};

    strs.forEach(s => {
        let sorted = s.split("").sort().join();
        anagramMap[sorted] ? anagramMap[sorted].push(s) : anagramMap[sorted] = [s];
    });

    return Object.values(anagramMap);
}