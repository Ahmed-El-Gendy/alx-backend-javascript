export default function cleanSet(s, str) {
    if (!str || !s || !(s instanceof Set) || !(typeof str === 'string')) {
        return '';
    }
    const ch = [];
    for (const c of s) {
        if (c.startsWith(str) && typeof c === 'string') {
            ch.push(c.substring(str.length));
        }
    }
    return ch.join('-');
}