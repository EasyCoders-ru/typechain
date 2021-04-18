interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "Антон",
  age: 28,
  gender: "мужчина",
};

const sayHi = (person: Human): string =>
  `Привет, ${person.name}. Тебе ${person.age} лет и ты ${person.gender}!!!`;

console.log(sayHi(person));

export {};
