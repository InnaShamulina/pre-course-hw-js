let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

 let clonePassportWithAddress = {...passportWithAddress,address:{...passportWithAddress.address}};
 clonePassportWithAddress.address.city = "Bobryisk"

console.log(passportWithAddress.address.city);
console.log(clonePassportWithAddress.address.city);