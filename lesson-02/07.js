let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

let clonePassportMarried = {married:true,...passportMarried,address:{...passportMarried.address}, };

console.log(passportMarried);
console.log(clonePassportMarried);