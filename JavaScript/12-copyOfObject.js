let person = {
  name: "Pavan",
  age: 24,
  address: {
    city: "Mysuru",
    state: "Karnataka"
  }
};

let person2 = {
  name: "kumar",
  age: 25,
  address: {
    city: "chennai",
    state: "Tamilnadu"
  }
};


let spread = { ...person };

// spread.name = "paulu";
spread.address.city = "Bengalore";
console.log(spread.name);
console.log(person.name);

console.log(spread.address);
console.log(person.address)

let ass = Object.assign({}, person);
console.log(ass);
ass.address.city = "Anantapur";
console.log(ass);
console.log(spread);
console.log(spread === person);

console.log(ass === person);

Object.assign(person2, person);
console.log(person2);
console.log(person);
console.log(spread);
console.log(ass);

let employee={
  name:"john",
  age:30,
  role:'.netDeveloper',
  address:{
    city:'newyork'
  }
};

console.log(employee);

let deepCopy=JSON.parse(JSON.stringify(employee));
console.log(deepCopy);

employee.name="nick";
console.log(employee.name);
console.log(deepCopy.name);
deepCopy.address.city="America"
console.log(employee);
console.log(deepCopy);
console.log(employee!==deepCopy);


//---assignment
const student = {
  name: "Pavan",
  marks: {
    java: 90,
    python: 95
  }
};

const deepCopyStudent=JSON.parse(JSON.stringify(student));

deepCopyStudent.marks.java=100;
console.log(student);
console.log(deepCopyStudent);


const employee = {
  name: "Rahul",
  skills: ["Java", "SQL"]
};

const deepCopyEmployee=structuredClone(employee);
deepCopyEmployee.skills.push("JavaScript");
console.log(employee);
console.log(deepCopyEmployee);

console.log(employee.skills !== deepCopyEmployee);


const products = [
  {
    name: "Laptop",
    details: {
      price: 50000
    }
  }
];

const deepCopyProduct=JSON.parse(JSON.stringify(products));
 deepCopyProduct[0].details.price=60000;
 console.log(deepCopyProduct[0].details.price);
console.log(products[0].details.price);


const person = {
  name: "Pavan",
  address: {
    city: "Mysuru"
  }
};

const deepCopyPerson=structuredClone(person);

console.log(deepCopyPerson===person);
console.log(deepCopyEmployee.address===person.address);






const user = {
  name: "Pavan",
  hobbies: ["Coding", "Reading"]

};

// const user2 = Object.create(user);
// user2.greet();

const shallow = {...user};
const deep = structuredClone(user);

shallow.hobbies.push("Gaming");
deep.hobbies.push("Cricket");

console.log(user.hobbies);
console.log(shallow.hobbies);
console.log(deep.hobbies);

console.log(Object.keys(deep));

console.log(Object.entries(user));