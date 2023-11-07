
// Question No. 1. 

    "Installation of Softwares Done"

// Question No. 2.
    console.log('Asalamoalikum Arsalan Jehangir, Would you like to learn some TypeScript today?');

// Question No. 3.

    let sentence:string ='Liban  is a very Good Boy';

    console.log(sentence.toUpperCase());
    console.log(sentence.toLowerCase());

    function titleCase(str: string) {
    let newTitle = str.split(" ");
    let updatedTitle: any[] = [];
    for(let st in newTitle){
       updatedTitle[st] = newTitle[st][0].toUpperCase() +
    newTitle[st].slice(1).toLowerCase();
    }
      return updatedTitle.join(" ");
    }
    console.log(titleCase(sentence));

// Question No. 4.

    const Quote = 'Before You Make A Decision... "Think a Hundred Times before you take".'
    const Author = 'Muhammad Ali Jinnah';

    console.log(`${Author} once said, ${Quote}`);

// Question No. 5.

    const famous_person = "Muhammad Ali Jinnah";
    const quotation = "Expect the best, prepare for the worst.";
    const message = `${famous_person} once said, "${quotation}"`;

    console.log(message);

// Question No. 6.

    const nameWithWhitespace = "\t  \n   Arsalan Jehangir  \n  \t";
    console.log("Name with whitespace:", nameWithWhitespace);

    const strippedName = nameWithWhitespace.trim();
    console.log("Stripped name:", strippedName);

// Question No. 7.

    console.log(5+3);  // Addition
    console.log(10-2);  // Subtraction
    console.log(4*2);   // Multiplication
    console.log(16/2);  // Division

// Question No. 8.

    console.log(5+3);  // Addition
    console.log(10-2);  // Subtraction
    console.log(4*2);   // Multiplication
    console.log(16/2);  // Division



// Question No. 9.

    const favouriteNumber = 9;
    console.log(`My favourite number is ${favouriteNumber}`)

// Question No. 10.
   

//*Point No. 7 is  Commented */

    // console.log(5+3);  // Addition
    // console.log(10-2);  // Subtraction
    // console.log(4*2);   // Multiplication
    // console.log(16/2);  // Division

//*Point No. 9 is Commented */

    // const favouriteNumber = 9;
    // console.log(`My favourite number is ${favouriteNumber}`)

// Question No. 11.

    const friends=["Rizwan" , "Noman" , "Shoaib" , "Hassan" , "Shayan"];
    for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]);
}

// Question No. 12.
    const friend=["Rizwan" , "Noman" , "Shoaib" , "Hassan" , "Shayan"];
    for (let i = 0; i < friend.length; i++) {
    console.log(`Asalamoalikum My Friend ${friend[i]} ,How Are You I'll Hope You all are Fine?`);
}

// Question No. 13.

    const transportationmeans=["Bike" , "Car" , "Truck" , "Train" , "Aeroplane"];
    for (let i = 0; i < transportationmeans.length; i++) {
    console.log(`I would like to own a ${transportationmeans[i]}.`);
}

// Question No. 14.

    const guests=["Grand Father" , "Dad" , "Old Friend Rizwan" , "Neighbour Iftikhar" , "Cousin Zeeshan"];
    for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]}. I am inviting you to a Dinner at my Home. I request the honor of your presence.`);
}

// Question No. 15.

    const guestsList=["Grand Father" , "Dad" , "Old Friend Rizwan" , "Neighbour Iftikhar" , "Cousin Zeeshan"];
    const notComing="Neighbour Iftikhar";
    const comingGuest="Colleague Sami"

    for (let i = 0; i < guestsList.length; i++) {
    if (guestsList[i] === notComing) {
        guestsList[i] = comingGuest;
      }
    console.log(`Dear ${guestsList[i]}. I am inviting you to a Dinner at my Home. I request the honor of your presence.`);
}


// Question No. 16.


    const guestList = ["Grand Father", "Dad", "Old Friend Rizwan", "Neighbour Iftikhar", "Cousin Zeeshan"];
    guestList.push("Faizan", "Basim", "Muzaffar");

    guestList.forEach(guest => {
    console.log(`Dear ${guest}, I am inviting you to a Dinner at my Home. I request the honor of your presence.`);
});

    //A Part:

    console.log("Quick Update! I found a bigger table for Dinner.");
     
    //B Part:

    const guestLis = ["Grand Father", "Dad", "Old Friend Rizwan", "Neighbour Iftikhar", "Cousin Zeeshan"];
    guestLis.push("Faizan", "Basim", "Muzaffar");
    guestLis.unshift("Anser");

    guestLis.forEach(guest => {
    console.log(`Dear ${guest}, I am inviting you to a Dinner Party at my Home. I request the honor of your presence.`);
    });

    //C Part:
    const guestLi = ["Grand Father", "Dad", "Old Friend Rizwan", "Neighbour Iftikhar", "Cousin Zeeshan"];
    guestLi.push("Faizan", "Basim", "Muzaffar");
    guestLi.unshift("Anser");
    guestLi.splice(3, 0, "Shariq")

    guestLi.forEach(guest => {
    console.log(`Dear ${guest}, I am inviting you to a dinner at my Home. I request the honor of your presence.`);
    });

// Question No. 17.

   // A Part. 
   
    const guestsLi = ["Grand Father", "Dad", "Old Friend Rizwan", "Neighbour Iftikhar", "Cousin Zeeshan"];
    guestsLi.push("Faizan", "Basim", "Muzaffar");
    guestsLi.unshift("Anser");
    guestsLi.splice(3, 0, "Shariq")

    guestsLi.forEach(guest => {
    console.log(`Dear ${guest}, We are really sorry but for Some Emergency we have to Shrink our Guest List`);
   });

   // B Part.
    const guestsL = ["Grand Father", "Dad", "Old Friend Rizwan", "Neighbour Iftikhar", "Cousin Zeeshan", "Faizan", "Basim"];

    while (guestsL.length > 2) {
    const removedGuest = guestsL.pop();
    console.log(`Sorry ${removedGuest}, We Won't be able to Invite you to Dinner Party at my House.`);
   }

   // C Part.
    guestsL.forEach(guest => {
    console.log(`Dear ${guest}, You're still Invited to Dinner Party. See you Soon!`);
    });

    // D Part.
    guestsL.length = 0;

    console.log(guestsL);

 // Question No. 18.
 
    // A Part.
    const placesToVisit=["Saudi Arabia" , "Dubai" , "Canada" , "Germany"];

    // B Part.
    console.log(placesToVisit);

    // C Part.
    const sortedlist = placesToVisit.slice().sort();
    console.log(sortedlist);

    // D Part.
    console.log("Orinal Array " + placesToVisit);
    console.log("Arranged Array " + sortedlist);

    // E Part.
    const revList =placesToVisit.slice().reverse();
    console.log(revList);

    // F Part.
    console.log(placesToVisit);

    // G Part.
    placesToVisit.reverse();
    console.log("Reversed Array:", placesToVisit);

    // H Part.

    placesToVisit.reverse();
    console.log("Original Array:", placesToVisit);

    // I Part.
    placesToVisit.sort();
    console.log("Sorted Array: " , placesToVisit)
  
    // J Part.

    //• Sort to change your Array so it’s Stored in reverse Alphabetical Order. Print the list to show that its order has changed.

// Question No. 19.
 

    console.log(`Number of people invited to dinner: ${guestsL.length}`);

// Question No. 20.

const moviez = ["Fast & Furious", "Transporter", "Mission Impossible",];

// Qquestion No. 21

interface Movie {
    title: string;
    director: string;
    year: number;
  }
  
  const movies: Movie[] = [
    {
      title: 'Fast & Furious',
      director: 'Louis Leterrier',
      year: 2023
    },
    {
      title: 'Transporter',
      director: 'Corey Yuen',
      year: 2002
    },
    {
        title: 'Mission Impossible',
        director: 'Christopher McQuarrie',
        year: 2023
    },

  ];
  
    console.log(movies);
  

 // Question No. 22.
 
 // I am Commenting this Code. 

    var school="Senecca Academy";
 // console.log(Senecca Academy);

    // Error in the code  is due to the fact that I am trying to access a
    // variable Senecca Academy without properly referencing it as a string.

    //To fix the error, I need to enclose the string "Senecca Academy" in quotes 
    //to indicate that it is a string value.

    console.log(school);

// Question No. 23.

let mobile = "samsung" ;

    console.log("mobile == samsung ? I predict it true");
    console.log(mobile == "samsung");

    console.log("mobile != samsung ?  I predict it false");
    console.log(mobile != "samsung");

    console.log("mobile <= samsung ?  I predict it true");
    console.log(mobile <= "samsung");

    console.log("mobile =< samsung ?  I predict it false");
    console.log(mobile === "samsung");

    console.log("mobile === samsung ?  I predict it false");
    console.log(mobile === "Samsung");

    console.log("mobile !== samsung ?  I predict it true");
    console.log(mobile == "Samsung");

    console.log("mobile > samsung ?  I predict it false");
    console.log(mobile > "Samsung");

    console.log("mobile <= samsung ?  I predict it true");
    console.log(mobile <= "samsung");

    console.log("mobile == samsung ?  I predict it false");
    console.log(mobile == "Samsung");

    console.log("mobile < samsung ?  I predict it true");
    console.log(mobile < "samsung");

// Question No. 24.

//Tests for equality and inequality with strings

    let starter = "Fish";
    let maincourse = "Qourma Roti";
    let dessert = "Lab-E-Shireen";

    console.log("starter is the Fish ? I predict it true");
    console.log(starter == "Fish");

    console.log("maincourse is the Lab-E-Shireen ? I predict it false");
    console.log(maincourse == "Lab-E-Shireen");

    console.log("dessert is the Qourma Roti ? I predict it true");
    console.log(dessert != "Qourma Roti");


//Tests using the lower case function

    let x = "ARSALAN" ;
    let y = "jehangir" ;

    console.log("x = ARSALAN is in upperCase ? I predict it false");
    console.log(x.toLowerCase() == "ARSALAN");

    console.log("x = ARSALAN is in upperCase ? I predict it true");
    console.log(x.toLowerCase() != "ARSALAN");

    console.log("y = jehangir is in lowerCase ? I predict it true");
    console.log(y.toLowerCase() === "jehangir");

//Numerical tests
    let a = 2;
    let b = 4;

    console.log( "a == b ?  I predict it false");
    console.log(a == b);

    console.log( "a < b ?  I predict it true");
    console.log(a < b);

    console.log( "a => b ?  I predict it false");
    console.log(a >= b);

    console.log( "a <= b ?  I predict it true");
    console.log(a <= b);

    console.log(" a+b == 6 ,  I predict it true");
    console.log(a+b == 6);

// Tests using "and" and "or" operators

    var age = 35;

    console.log("Age is 35? I predict it's true.");
    console.log(age >= 20 && age <= 50);

    console.log("Age is 35? I predict it's false.");
    console.log(age >= 50 || age <= 20);


// Test whether an item is in a array

    let buddies = ["Rizwan", "Noman", "Shoaib", "Hassan"];

    console.log(buddies.indexOf('Faizan') !== -1);
    console.log(buddies.indexOf('Shayan') !== -1);

// Test whether an item is not in a array

    console.log(buddies.indexOf('Faizan') !== -1);
    console.log(buddies.indexOf('Shayan') !== -1);



// Question No. 25.

    var alien_color = "green" ;

    if (alien_color = "green"){
    console.log("Player just earned 5 points");
}


//
    var alien_color = "yellow" ;

    if (alien_color = "green"){
    console.log("Player just earned 10 Points");
}

// Question No. 26.

    var alien_color = "yellow" ;

    if (alien_color = "green"){
    console.log("Player just earned 10 points");
}
    else(alien_color = "yellow");{
    console.log("Player just earned 15 points");
}

// Question No. 27.

// A Part.
    var alien_color = "yellow" ;

    if (alien_color = "green"){
    console.log("Player just earned 10 points");
}
    else if (alien_color = "red"){
    console.log("Player just earned 15 points");
}
    else(alien_color = "yellow");{
    console.log("Player just earned 20 points");
}

// B part.
    var alien_color = "green" ;

    if (alien_color = "green"){
    console.log("Player just earned 10 points");
}
    else if (alien_color = "red"){
    console.log("Player just earned 15 points");
}
    else(alien_color = "yellow");{
    console.log("Player just earned 20 points");
}

// C Part.
    var alien_color = "red" ;

    if (alien_color = "green"){
    console.log("Player just earned 10 points");
}
    else if (alien_color = "red"){
    console.log("Player just earned 15 points");
}
    else(alien_color = "yellow");{
    console.log("Player just earned 20 points");
}

// Question No. 28.

var age= 35

if (age >= 0 && age < 2) {
  console.log("The person is a baby");
} else if (age >= 2 && age < 4) {
  console.log("The person is a toddler");
} else if (age >= 4 && age < 13) {
  console.log("The person is a  kid");
} else if (age >= 13 && age < 20) {
  console.log("The person is a  teenager");
} else if (age >= 20 && age < 65) {
  console.log("The person is a  adult");
} else {
  console.log("The person is a  elder");
}

// Question No. 29.

let fruits = ['Mango', 'Banana', 'Dates'];

if (fruits.indexOf('Apple') !== -1) {
  console.log("I like Apples!");
}

if (fruits.indexOf('Dates') !== -1) {
  console.log("I  love Dates!");
}

if (fruits.indexOf('Mango') !== -1) {
  console.log("I always eat Mangoes!");
}

if (fruits.indexOf('Dates') !== -1) {
  console.log("I  like Dates!");
}

if (fruits.indexOf('Strawberry') !== -1) {
  console.log("I can eat Strawberry!");
}

// Question No. 30.

let users = ["Vin  Diesel", "Paul Walker", "Jason Statham", "Tom Cruise" ,"Justin Bieber"];

for (let i = 0; i < users.length; i++) {
  let username = users[i];
  console.log(`Hello ${username} , thank you for logging in again.`);

  if (username === "Jason") {
    console.log("Hello Jason, welcome back! Would you like to see a status report?");
  }
}

// Question No. 31.

let userss = ["Jason Statham", "Vin Diesel", "Paul Walker", "Tom Cruise", "Justin Bieber"];

if (userss.length === 0) {
  console.log("We need to find some Users!");
}
 //

 let userz = [ ];

if (userz.length === 0) {
  console.log("We need to find some Users!");
}

// Question No. 32

let currentUsers = ["Jason", "Paul", "Tom", "Justin", "Tom" ,];
let newUsers = ["Adam", "Ana", "Samuel", "Peter", "Winston"];

for (let i = 0; i < newUsers.length; i++) {
  let newUsername = newUsers[i];
  
  if (currentUsers.indexOf(newUsername) !==-1) {
    console.log(`Oops, the username '${newUsername}' is already taken. Try a new username.`);
  } else {
    console.log(`Congratz The username '${newUsername}' is available.`);
  }
}

// Question No. 33.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
  let number = numbers[i];
  let ordinal;

  if (number === 1) {
    ordinal = 'st';
  } else if (number === 2) {
    ordinal = 'nd';
  } else if (number === 3) {
    ordinal = 'rd';
  } else {
    ordinal = 'th';
  }

  console.log(`${number}${ordinal}`);
}


// Question No. 34.

let favBurgers=["Chicken" , "Beef" , "Zinger"]
for (let i = 0; i < favBurgers.length; i++){
  let burgers = favBurgers[i];

  console.log(burgers);
  console.log(`I like ${burgers}  Burger`)
}

console.log("I really likes Burgers. It is like One of My favourite Snacks. and i am always ready for having a Burgers");

// Question No.35.

let farmanimals = ["Horse", "Goat", "Cow"];

for (let i = 0; i < farmanimals.length; i++) {
  let farm = farmanimals[i];
   
  if (farm === "Horse") {
    console.log(`${farm} can be used for travelling`);
  } else if (farm === "Goat") {
    console.log("Goats can be used for milk and mutton");
  } else if (farm === "Cow") {
    console.log("Cows can be used for ploughing, milking, and meat");
  } else {
    console.log(`This ${farm} is a farm animal`);
  }
}
 
console.log("All these Animals are good for Agriculture and Farming Sector")

// Question No. 36.

function make_shirt(size: number, message: string) {
  console.log(`The Shirt size is ${size} and the Message printed on it is "${message}".`);
}

make_shirt(50, "Asalamoalikum!");


// Question No. 37.

function make_shirt_v2(size: number, message: string) {
  console.log(`The shirt size is ${size} and the message printed on it is "${message}".`);
}

make_shirt_v2(50, "Hello World!");

// Question No 38.

function describe_city(city: string, country: string) {
  console.log(`${city} is in ${country}.`);
}

describe_city("Karachi", "Pakistan");
describe_city("London", "England");
describe_city("New York", "USA");


// Question No. 39.

function city_country(city: string, country: string):string{
  return `${city} is in ${country}`
}

console.log(city_country("Toronto", "Canada"));
console.log(city_country("New York", "USA")); 
console.log(city_country("London", "England"));

// Question No. 40.

interface Album {
  artist: string;
  album: string;
  tracks?: number;
}

function make_album(artist: string, album: string, tracks?: number): Album {
  let album_dict: Album = {
      "artist": artist,
      "album": album
  };
  if (tracks) {
      album_dict["tracks"] = tracks;
  }
  return album_dict;
}

let album1 = make_album("Eminem", "Revival");
let album2 = make_album("Maria Cary", "Daydream",15);
let album3 = make_album("Beyonce", "Lemonade");
let album4 = make_album("Michael Jackson", "Ben", 10);

console.log(album1);
console.log(album2);
console.log(album3);
console.log(album4);


// Question No. 41.

let magicians: string[] = ['Hamoon', 'Bangali', 'Jakota'];

function show_magicians(magicians: string[]){
    for(let i=0;i<magicians.length;i++){
        console.log(magicians[i])
    }
}

show_magicians(magicians)

// Question No. 42.

function make_great(magicianz: string[]): void {
  for (let i = 0; i < magicianz.length; i++) {
      magicianz[i] = `the Great ${magicianz[i]}`;
  }
}

function show_magicianz(magicianz: string[]): void {
  for (let magician of magicianz) {
      console.log(magician);
  }
}

let magicianz: string[] = ['Hamoon Jadugar', 'Bangali Jadugar', 'Jakota Jadugar'];
make_great(magicianz);
show_magicianz(magicianz);

//Question No. 43

const jadugar: string[] = ['Hamoon Jadugar', 'Bangali Jadugar', 'Jakota Jadugar']

function make_greater(names: string[]): string[] {
    const greatNames: string[] = names.map(name => `Great ${name}`);
    return greatNames;
}

function show_magicianss(names: string[]): void {
    names.forEach(name => console.log(name));
}

const greatMagicians: string[] = make_greater([...jadugar]);
show_magicianss(jadugar);
show_magicianss(greatMagicians);


// Question No. 44.

function sandwich(...items: string[]) {
  if (items.length === 0) {
      console.log("You ordered a Sandwich.");
      return;
  }
  console.log(`You ordered a Sandwich with ${items.join(", ")}.`);
}

sandwich("chicken", "lettuce", "onion", "tomato");
sandwich("smokey beef", " heacy cheese");
sandwich();

// Question No. 45.

interface Car {
  manufacturer: string;
  model: string;
  [key: string]: any;
}

function createCar(manufacturer: string, model: string, ...args: any[]): Car {
  const car: Car = {
      manufacturer,
      model,
  };

  for (let i = 0; i < args.length; i += 2) {
      const key = args[i];
      const value = args[i + 1];
      car[key] = value;
  }

  return car;
}

const myCar = createCar("Toyota", "Revo", "Color", "Blue", "Year", 2023);
console.log(myCar);
