const alphabet = {
    2: ['A','B','C'],
    3: ['D','E','F'],
    4: ['G','H','I'],
    5: ['J','K','L'],
    6: ['M','N','O'],
    7: ['P','Q','R','S'],
    8: ['T','U','V'],
    9: ['W','X','Y','Z']
};

const typed = process.argv[2];
const words = typed.split(' ');
const phrase = words.map(word => {
    return word.split('-').map(l => {
        const times = l.length-1;
        const key = l[0];
        return alphabet[key][times];
    }).join('');
});
console.log(phrase.join(' '));
