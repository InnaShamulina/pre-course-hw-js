let passport = {
    name: "Petr",
    surname: "Petrov",
};

let clonePasport = {...passport};
clonePasport.name = "Ivan";

console.log(passport.name);
console.log(clonePasport.name);