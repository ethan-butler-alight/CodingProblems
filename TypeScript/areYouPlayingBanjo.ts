// Link: https://www.codewars.com/kata/53af2b8861023f1d88000832/train/typescript
// Instructions:
/*
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

    name + " plays banjo"
    name + " does not play banjo"

Names given are always valid strings.
*/

// Concepts to Note: String.startsWith(), String.charAt(0), String.toUpperCase(), ternary operators

// My Solution
export function areYouPlayingBanjo(name: string): string {
    if (name.startsWith('r') || name.startsWith('R')) {
        return name + ' plays banjo';
    }
    return name + ' does not play banjo';
}

/*
Top Solution
export function areYouPlayingBanjo(name: string): string {
    return name.charAt(0).toUpperCase() === "R"
        ? `${name} plays banjo`
        : `${name} does not play banjo`;
}
*/