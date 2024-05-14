const findTheOldest = function(people) {
    
    if (people.yearOfDeath === 'undefined') {
        people.yearOfDeath = date.getFullYear();
    }

    people.forEach(person => person.age = person.yearOfDeath - person.yearOfBirth)
    console.table(people);
    
    const ages = [];
    people.forEach((person) => ages.push(person.age));
    ages.sort((a,b) => {return a-b});
    console.log(ages);
    const oldestAge = ages[ages.length - 1];
    console.log(oldestAge);
    console.log(people);

    const oldestPerson = people.filter((person) => person.age === oldestAge);
    console.log(oldestPerson.name);
    return oldestPerson.name
};

// Do not edit below this line
module.exports = findTheOldest;
