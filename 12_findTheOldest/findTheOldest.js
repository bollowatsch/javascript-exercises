const findTheOldest = function (people) {
  peopleWithAge = people.map(p => {
    return p.yearOfDeath ? { name: p.name, age: p.yearOfDeath - p.yearOfBirth } : { name: p.name, age: new Date().getFullYear() - p.yearOfBirth };
  })
  return peopleWithAge.reduce(maxAge);

};

function maxAge(personA, personB) {
  return personA.age > personB.age ? personA : personB;
}

// Do not edit below this line
module.exports = findTheOldest;
