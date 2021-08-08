/*
    A string s is called good if there are no two different characters in s that have the same frequency.

    Given a string s, return the minimum number of characters you need to delete to make s good.

    The frequency of a character in a string is the number of times it appears in the string. For example, in the string "aab", the frequency of 'a' is 2, while the frequency of 'b' is 1.

    Example 1:

    Input: s = "aab"
    Output: 0
    Explanation: s is already good.
    Example 2:

    Input: s = "aaabbbcc"
    Output: 2
    Explanation: You can delete two 'b's resulting in the good string "aaabcc".
    Another way it to delete one 'b' and one 'c' resulting in the good string "aaabbc".
    Example 3:

    Input: s = "ceabaacb"
    Output: 2
    Explanation: You can delete both 'c's resulting in the good string "eabaab".
    Note that we only care about characters that are still in the string at the end (i.e. frequency of 0 is ignored).

    Constraints:

    1 <= s.length <= 105
    s contains only lowercase English letters.
 */

export function minDeletions(s: string): number {
    const characters = s.split('');
    const map = new Map<String, number>();

    characters.forEach((character) => {
        const value = map.get(character);
        map.set(character, (value ?? 0) + 1);
    });

    const values = [];
    for (let [key, value] of map) {
        values.push(value);
    }

    const sorted = values.sort((a, b) => (a > b ? 1 : -1));

    let deletions = 0;

    // Iterate on the alphabet characters
    for (let i = 0; i < sorted.length; i++) {
        // keep decreasing the frequency of the current character
        // until it reaches a value that has not appeared before
        while (
            sorted[i] > 0 &&
            sorted.filter((x) => x === sorted[i]).length !== 1
        ) {
            sorted[i] -= 1;
            deletions += 1;
        }
    }

    return deletions;
}
