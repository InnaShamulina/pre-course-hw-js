let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

let PassportMarried2 = {...passportMarried, married: true,address:{...passportMarried.address} };


console.log(passportMarried);
console.log(PassportMarried2);
