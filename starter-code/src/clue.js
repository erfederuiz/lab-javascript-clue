// Characters
/*
mrGreen
first_name:   Jacob
last_name:    Green
color:        green
description:  He has a lot of connections
age:          45
image:        https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg
occupation:   Entrepreneur

drOrchid
first_name:   Doctor
last_name:    Orchid
color:        white
description:  PhD in plant toxicology. Adopted daughter of Mr. Boddy
age:          26
image:        http://www.radiotimes.com/uploads/images/Original/111967.jpg
ocupation:   Scientist

profPlum
first_name:   Victor
last_name:    Plum
color:        purple
description:  Billionare video game designer
age:          22
image:        https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg
occupation:   Designer

missScarlet
first_name:   Kasandra
last_name:    Scarlet
color:        red
description:  She is an A-list movie star with a dark past
age:          31
image:        https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg
occupation:   Actor

mrsPeacock
first_name:   Eleanor
last_name:    Peacock
color:        blue
description:  She is from a wealthy family and uses her status and money to earn popularity
age:          36
image:        https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg
occupation:   Socialité

mrMustard
first_name:   Jack
last_name:    Mustard
color:        yellow
description:  He is a former football player who tries to get by on his former glory
age:          62
image:        https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg
occupation:   Retired Football player

// Weapons

name: rope        ---   weight: 10
name: knife       ---   weight: 8
name: candlestick ---   weight: 2
name: dumbbell    ---   weight: 30
name: poison      ---   weight: 2
name: axe         ---   weight: 15
name: bat         ---   weight: 13
name: trophy      ---   weight: 25
name: pistol      ---   weight: 20

// Rooms
name: Dinning Room
name: Conservatory
name: Kitchen
name: Study
name: Library
name: Billiard Room
name: Lounge
name: Ballroom
name: Hall
name: Spa
name: Living Room
name: Observatory
name: Theater
name: Guest House
name: Patio
*/


// Characters Collection
var charactersArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard] ;

// Rooms' Collection
var roomsArray = [rope, knife, candlestick, dumbbell, dumbbell, poison, axe, bat, trophy, pistol ];

// Weapons Collection
var weaponsArray = [dinningRoom, conservatory, kitchen, study, library, billiardroom, lounge, ballroom, hall, spa, livingRoom, observatory, theater, guestHouse, patio];


//Characters
var mrGreen = {
    first_name:   "Jacob",
    last_name:    "Green",
    color:        "green",
    description:  "He has a lot of connections",
    age:          45,
    image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation:   "Entrepreneur"
}

var drOrchid = {
    first_name:   "Doctor",
    last_name:    "Orchid",
    color:        "white",
    description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age:          26,
    image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    ocupation:   "Scientist"
}

var profPlum = {
    first_name:   "Victor",
    last_name:    "Plum",
    color:        "purple",
    description:  "Billionare video game designer",
    age:          22,
    image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation:   "Designer"
}

var missScarlet = {
    first_name:   "Kasandra",
    last_name:    "Scarlet",
    color:        "red",
    description:  "She is an A-list movie star with a dark past",
    age:          31,
    image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation:   "Actor"
}

var mrMustard = {
    first_name:   "Jack",
    last_name:    "Mustard",
    color:        "yellow",
    description:  "He is a former football player who tries to get by on his former glory",
    age:          62,
    image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation:   "Retired Football player",
   }
   
   
var mrsPeacock = {
   first_name:   "Eleanor",
   last_name:    "Peacock",
   color:        "blue",
   description:  "She is from a wealthy family and uses her status and money to earn popularity",
   age:          36,
   image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
   occupation:   "Socialité",
   }

//Weapons
var rope = {
    name: "rope",
    weight: 10
}

var knife = {
    name: "knife", 
    weight: 8
}

var candlestick= {
    name: candlestick,
    weight: 2}

var dumbbell = {
    name: dumbbell,
    weight: 30}

  var poison =  {
    name: poison,
    weight: 2}

 var axe = {
    name: axe,
    weight: 15}

 var bat = {
     name: bat,
    weight: 13}

 var trophy = {
     name: trophy,
    weight: 25}

 var pistol = {
     name: pistol,
    weight: 20}  

//Rooms



var dinningRoom = {
    name: "Dinning Room",
   }
   
   var conservatory = {
    name: "Conservatory",
   }

   var kitchen = {
    name: "Kitchen",
   }

   var study = {
    name: "tudy",
   }

   var library = {
    name: "Library",
   }

   var billiardroom = {
    name: "Billiard Room",
   }

   var lounge = {
    name: "Lounge",
   }

   var ballroom = {
    name: "Ballroom",
   }

   var hall = {
    name: "Hall",
   }

   var spa = {
    name: "Spa",
   }

   var livingRoom = {
    name: "Living Room",
   }
   
   var observatory = {
    name: "Observatory",
   }

   var theater = {
    name: "Theater",
   }

   var guestHouse = {
    name: "Guest House",
   }

   var patio = {
    name: "Patio",
   }

// Iteration 2

function randomSelector(arrayToProcess){
    if (arrayToProcess.length > 0){
        return arrayToProcess[ Math.floor(Math.random() * arrayToProcess.length) ];
    }
}

function pickMistery(){
    var returnArray = [];
    returnArray.push(randomSelector(charactersArray));    
    returnArray.push(randomSelector(weaponsArray));
    returnArray.push(randomSelector(roomsArray));
    return returnArray;
}


var mysteryEnvelope = pickMistery();

//Iteration 3

function revealMistery(documentsArray){
    var misteryResolved = "";
    var guiltyPerson = documentsArray[0]["first_name"] + " " + documentsArray[0]["last_name"];
    var weaponUsed = documentsArray[1]["name"];
    var placeOfCrime = documentsArray[2]["name"];
    misteryResolved = `${guiltyPerson} killed Mr.Boddy using the ${weaponUsed} in the ${placeOfCrime}!!!!`;
    return misteryResolved;
}