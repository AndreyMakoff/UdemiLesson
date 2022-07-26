const personalPlanPeter = {
  name: 'Peter',
  age: '29',
  skills: {
    languages: ['ru', 'eng'],
    programmingLangs: {
      js: '20%',
      php: '10%',
    },
    exp: '1 month',
  },
};

function showAgeAndLangs() {
  // мне 29 лет и я владею КГ и АНГЛ языками
  const age = personalPlanPeter.age;
  const skillsLang = personalPlanPeter.skills.languages;
  let str = `мне ${age} и я владею языками: `;
  skillsLang.forEach(function (lang) {
    str += lang.toUpperCase();
  });
  console.log(str);
}
showAgeAndLangs(personalPlanPeter);

function showExperience() {
  console.log(personalPlanPeter.skills.exp);
}
showExperience(personalPlanPeter);

function showProgrammingLangs() {
  const skillsProgrammingLangs = personalPlanPeter.skills.programmingLangs;
  for (let key in skillsProgrammingLangs) {
    console.log(`язык ${key} изучен на ${skillsProgrammingLangs[key]} `);
  }
}
showProgrammingLangs(personalPlanPeter);
