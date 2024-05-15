const getAge = function (birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };
  
  const findTheOldest = function (people) {
    return people.reduce((oldest, currentPerson) => {
      const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
      const currentAge = getAge(
        currentPerson.yearOfBirth,
        currentPerson.yearOfDeath
      );
      return oldestAge < currentAge ? currentPerson : oldest;
    });
  };

// This is my code that doesn't seem to work.

// const findTheOldest = function(people) {
//     
//     if (people.yearOfDeath === 'undefined') {
//         people.yearOfDeath = new Date.getFullYear();
//     }
// 
//     people.forEach(person => person.age = person.yearOfDeath - person.yearOfBirth)
//     console.table(people);
//     
//     const ages = [];
//     people.forEach((person) => ages.push(person.age));
//     ages.sort((a,b) => {return a-b});
//     console.log(ages);
//     const oldestAge = ages[ages.length - 1];
//     console.log(oldestAge);
//     console.log(people);
// 
//     const oldestPerson = people.filter((person) => person.age === oldestAge);
//     console.log(oldestPerson[0].name);
//     return oldestPerson[0].name
// };

// Do not edit below this line
module.exports = findTheOldest;
