let person={
    name:"John",
    age:30,
    address:{   
        street:"123 Main St",   
        city:"New York",
        state:"NY",
        zipCode:"10001"
    }
}

console.log(person.name);
/* Object.seal() method is used to prevent new properties from being added to an object and marks all existing properties as non-configurable.
This means that the object cannot be extended or modified in terms of its structure, but the values of existing properties can still be changed.*/ 
Object.seal(person);
person.name="Pavan";
console.log(person.name);

/* Object.freeze() method is used to make an object immutable. It prevents any changes to the object, including adding new properties, modifying existing properties, or deleting properties.
Once an object is frozen, it cannot be unfrozen, and any attempts to modify it will fail silently in non-strict mode or throw an error in strict mode. */
Object.freeze(person);
person.age=35;
console.log(person.age);

/* Object.isSealed() method is used to check if an object is sealed or not. It returns true if the object is sealed, and false otherwise. */
console.log(Object.isSealed(person));

/* Object.isFrozen() method is used to check if an object is frozen or not. It returns true if the object is frozen, and false otherwise. */
console.log(Object.isFrozen(person));

person["course"]="JavaScript";
console.log(person.course); // undefined, because the object is frozen and cannot be modified

Object.preventExtensions(person);
delete person.name;
console.log(person); // name property is deleted, but new properties cannot be added to the object