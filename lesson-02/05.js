let passport = {
    name: "Petr",
    surname: "Petrov",
};

let clonePasport = {...passport};
clonePasport.name = "Ivan";

console.log(passport);
console.log(clonePasport);