var student1 = {id: 18701035, name: "Roky Das", dept: "CSE", university: "CU"};
var student2 = {id: 18701031, name: "Prithibi", dept: "CSE", university: "CU"};
var student3 = {id: 17345, name: "Dost", dept: "EEE", university: "CUET"};

console.log(student1);
console.log(student2);
console.log(student3);

// Method 1 to access the value of a object
student1ID = student1.id;
console.log(student1ID);

// Method 2 to access the value of a object
student2ID = student2["id"];
console.log(student2ID);

// Method 3 to access the value of a object
var variableName = "name";
student3Name = student3[variableName];
console.log(student3Name);

// Add a property to a object: 
student1.dream = "Web Developing";
console.log(student1);