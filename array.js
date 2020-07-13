var friendsArray = [12, 15, 20, 50, 60];
console.log(friendsArray);

console.log(friendsArray[2]);

friendsArray[2] = 120;
console.log(friendsArray[2]);

var position = friendsArray.indexOf(15);
console.log(position);

var position = friendsArray.indexOf(150);
console.log(position);

console.log(friendsArray);
friendsArray.push(100);
console.log(friendsArray);

console.log(friendsArray.length);
friendsArray.push(100);
console.log(friendsArray.length);

console.log(friendsArray);
friendsArray.pop();
console.log(friendsArray);

friendsArray.unshift(89);
console.log(friendsArray);

friendsArray.shift(89);
console.log(friendsArray);

newArray = friendsArray.slice(3); // slice function er vitor je index lekha hobe, se soho tar porer sob element show korbe. 
console.log(newArray);

newArray = friendsArray.slice(2, 5) // index 2 theke suru hoye 5 er ag porjonto asbe. That means, index 2, 3 ar 4 print hobe. 
console.log(newArray);