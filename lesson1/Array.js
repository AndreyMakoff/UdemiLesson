const family = ['vfr', 'fgfg'];

function showFamily(arr) {
  let str = '';
  family.length === 0 ? (str = 'семья пуста') : (str = 'Семья состоит из: ');
  arr.forEach((members) => {
    str += `${members}`;
  });
  console.log(str);
}
showFamily(family);

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
  arr.forEach((element) => {
    console.log(element.toLowerCase());
  });
}

standardizeStrings(favoriteCities);
