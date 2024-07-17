let r = document.querySelector(':root');

let palettes = [
    { // default blue
        'background': '#def1ff',
        'header-links': '#e3f7ff',
        'header-links-visited': '#bcd3ff',
        'links': '#00a3ff',
        'links-visited': '#00669f',
        'tab-hover': '#2e79a5',
        'text-group-outline': '#00a3ff40',
    },
    { // green
        'background': '#defff3',
        'header-links': '#d8fff1',
        'header-links-visited': '#bcffe6',
        'links': '#00ffa3',
        'links-visited': '#009f65',
        'tab-hover': '#2ea579',
        'text-group-outline': '#00ffa340',
    },
    { // purple
        'background': '#f3deff',
        'header-links': '#f1d8ff',
        'header-links-visited': '#e6bcff',
        'links': '#a300ff',
        'links-visited': '#65009f',
        'tab-hover': '#792ea5',
        'text-group-outline': '#a300ff40',
    },
    { // pink
        'background': '#ffdef3',
        'header-links': '#ffd8f1',
        'header-links-visited': '#ffbce6',
        'links': '#ff00a3',
        'links-visited': '#9f0065',
        'tab-hover': '#a52e79',
        'text-group-outline': '#ff00a340',
    },
]

function applyPalette(id) {
    let palette = palettes[id];

    for(const property in palette) {
        r.style.setProperty('--' + property, palette[property]);
    }
}

// palette selection based on day
let date = new Date();
console.log(date.getFullYear(), date.getMonth(), date.getDate());
let dateSum = date.getFullYear() + date.getMonth() + date.getDate();
console.log(dateSum);
console.log(dateSum%palettes.length);

let doRandomPalette = Math.random();
console.log(doRandomPalette);
console.log(doRandomPalette <= 0.1);
if(doRandomPalette <= 0.1) {
    let palette = Math.round(Math.random()*palettes.length);
    while(palette === dateSum%palettes.length) palette = Math.round(Math.random()*palettes.length)
    applyPalette(palette);
} else {
    applyPalette(dateSum%palettes.length);
}