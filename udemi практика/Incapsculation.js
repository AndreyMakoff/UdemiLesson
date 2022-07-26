// на конструкторе

// function User(name, age) {
//   this.name = name;
//   let userAge = age;

//   this.say = function () {
//     console.log(`Имя пользователя ${this.name} возраст ${userAge}`);
//   };

//   this.getAge = function () {
//     return userAge;
//   };

//   this.setAge = function (age) {
//     if (typeof age === 'number' && age > 0 && age < 100) {
//       userAge = age;
//     } else {
//       console.log('что-то не так');
//     }
//   };
// }

// const andrey = new User('Ivan', 27);
// console.log(andrey.name);
// console.log(andrey.getAge());

// andrey.setAge(45);
// andrey.setAge(300);
// console.log(andrey.getAge());

// andrey.say();

//  на классах
class User {
  constructor(name, age) {
    this.name = name;
    this._userAge = age;
  }
  say() {
    console.log(`Имя пользователя ${this.name} возраст ${this._userAge}`);
  }

  get age() {
    this._userAge;
  }

  set age(age) {
    if (typeof age === 'number' && age > 0 && age < 100) {
      this._userAge = age;
    } else {
      console.log('что-то не так');
    }
  }
}

const andrey = new User('Andrey', 27);
console.log(andrey._age);

andrey._age = 45;
console.log(andrey._age);

andrey.say();
