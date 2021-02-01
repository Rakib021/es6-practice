const ages = [12,23,34,13,25];
const ages2 = [15,16,13,23];
const ages3 = [53,19,35,28];

const allAges = ages.concat(ages2).concat([4]).concat(ages3);
const allAges2 =[...ages,...ages2,4,...ages3];
//console.log(allAges2);

const business = 650;
const minister = 450;
const shochib =250;
const maximum = Math.max(business,minister,shochib);
console.log(maximum);
