const getAge = function (person) {
    if (person.yearOfDeath == undefined) {
        return (new Date()).getFullYear() - person.yearOfBirth;
    } else {
        return person.yearOfDeath - person.yearOfBirth;
    }
};

const findTheOldest = function(people) {
    const years = people.sort((a, b) => {
            const aAge = getAge(a);
            const bAge = getAge(b);
            return aAge < bAge ? 1 : -1;
        });
    console.table(years);
    return years[0];
};

// Do not edit below this line
module.exports = findTheOldest;
