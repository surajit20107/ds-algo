/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const arr = new Array(26).fill(0);

  for (let i = 0; i < magazine.length; i++) {
    arr[magazine.charCodeAt(i) - 97]++
  }

  for (let i = 0; i < ransomNote.length; i++) {
    const charCode = ransomNote.charCodeAt(i) - 97
    if (arr[charCode]) {
        arr[charCode]--
    } else {
        return false;
    }
  }

  return true;
};