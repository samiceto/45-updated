







// task 1 

//console.log("All required softwares are installed properly")
//task 2

// let personName: string="Sami";
// console.log(`Hello ${personName}, would you like to learn some pythen?`);


//task 3

// let name2="samiullah";
// console.log(name2.toLocaleLowerCase());
// console.log(name2.toUpperCase());
// console.log(name2.charAt(0).toUpperCase () + name2.slice(1).toLocaleLowerCase());



//task 4


// //Albert Einstein once said, 
// //“A person who never made a mistake never tried anything new.”

// let quote: string="A person who never made a mistake never tried anything new.";
// let auther: string="Albert Einstein";
// console.log(`${auther}, once said"${quote},"`);

//task 5


// let quote: string="A person who never made a mistake never tried anything new.";
// let auther: string="Albert Einstein";
// //console.log(`${auther}, once said"${quote},"`);
// let famous_person: string=`${auther}`;
// let massege: string=`${famous_person} once said ${quote}`;
// console.log(`${massege}`);



//task 6

// let personName: string="\t\n Samiullah \n\t";
// console.log("Origenal", personName);
// console.log("Stripped",personName.trim());


//task 7,8

// console.log(5+3);
// console.log(9-1);
// console.log(4*2);
// console.log(32/4);



// // task 9

// let favorateNumber: number=1;
// console.log(`My favorate number is always ${favorateNumber}.`);



//task 10

// // this is task nine MY name is Samiullah 
// // today ime its 9.20 15feb 2024
// // the perpose of this program is to let people now about my favorate number.
// let favorateNumber: number=1;
// console.log(`My favorate number is always ${favorateNumber}.`);
// //this is task 6 to print name with white space 
// // my name is samiullah and today ime its 9.20 15feb 2024
// let personName: string="\t\n Samiullah \n\t";
// console.log("Origenal", personName);
// console.log("Stripped", personName.trim());



//task 11

// let names=["ali","ramazan","nawab"]
// for(let i=0; i<names.length; i++){
//     console.log(names[i]);
    
// }



//task 12


// let names=["ali","ramazan","nawab"]
// for(let i=0; i<names.length; i++){
//     console.log(`Hello ${names[i]} i want to invite you for a dinner tonight`);
    
// }



//task 13

// let transport:String[]=["CAR","BIKE","SYCLE","BUS"]
// transport.forEach(favorat=>{
//     console.log(`i would love to traval vi ${favorat}`);
    
// })


//task 14
// let list:String[]=["Ali","Baber","Rana","Toki"]
// list.forEach(guest=>{
//     console.log(`hi ${guest} i would like to invite to today for a dinner`);
    
// })

//task 15


// let list:String[]=["Ali","Baber","Rana","Toki"]


// let notComming="Ali"
// console.log(`${notComming}is not comming to dinner`);
// let newone="Nawaz";

// list[list.indexOf(notComming)]=newone;

// list.forEach(guest=>{
//     console.log(`hi ${guest} i would like to invite to today for a dinner`);
    
// })


//task 16


// let list:String[]=["Ali","Baber","Rana","Toki"]

// list.push("sadar")
// list.unshift("mumtaz")
// list.splice(list.length/2,0,"bakar","bakra")
// list.forEach(guest=>{
//     console.log(`hi ${guest} i would like to invite to today for a dinner`);
    
// })


//task 17

// let list:String[]=["Ali","Baber","Rana","Toki"]

// while(list.length > 2){

//     let removedguest= list.pop();
//     console.log(`sorry we cannot not invite you ${removedguest}`);
    
// }

// list.forEach(guest=>{
//     console.log(`hi ${guest} i would like to invite to today for a dinner`);
    
// })
// list.splice(0,list.length);
// console.log(list);



// task 18


// let places:string[]= ["islamabad","karachi","multan","sakhar","tobatake","rori"]
// console.log(`Origenal ${places}`);

// console.log(`Alphabarical ${places.sort()}`);

// console.log(`Reversed ${places.sort().reverse()}`);

// console.log(`Origenal ${places}`);


// places.sort()
// console.log(`Alphabarical ${places}`);

// places.reverse()
// console.log(`Reversed ${places}`);

// places.reverse()
// console.log(`Origenal ${places}`);


// places.sort()
// console.log(`sorted ${places}`);




//task 19
// let list:String[]=["Ali","Baber","Rana","Toki"]
// console.log(`i'm inviting ${list.length}people for dinner tonighttsc`);



//task 20



// let countriese=["pakistan", "india","new zeeland","barma"]
// console.log(`"i want to visit theese countrise in my lige atleat once",${countriese}`);

// task 21

// let book:{ title: string; author:string; yearofpublish:number}=

//     {
//         title:"Aincetine",
//         author: "harry",
//         yearofpublish: 1992
//     }
//     console.log(`the book ${book.title} is by ${book.author} in ${book.yearofpublish} was published`);
    
//task 22
// let myfriends=["majid","chohdri","bakhtawar"]
// console.log(myfriends[3]);///error
// console.log(myfriends[2]);//resolved




//task 23


// let car="subaro";
// console.log("is car === 'subaro'? ipredect true.");
// console.log(car==="subaro");

// console.log("is car === 'toyota'? ipredect false.");
// console.log(car==="toyota");


// console.log("is car !== 'subaro'? ipredect false.");
// console.log(car !=="subaro");

// console.log("apple"=="apple");
// console.log("apple"=="Aplle");

// console.log("apple".toLocaleLowerCase()=="Apple".toLocaleLowerCase());

// console.log(5<7);
// console.log(7>5);
// console.log(5==5);

// task 24

// // More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// // • Tests for equality and inequality with strings
// // • Tests using the lower case function
// // • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// //• Tests using "and" and "or" operators
// //• Test whether an item is in a array
// //• Test whether an item is not in a array

// let string1: string="apple";
// let string2: string="mango";
// console.log(string1===string2)
// console.log(string1!== string2)

// // • Tests using the lower case function
// const mixedcaseStrng: string="Helloworld";
// console.log(mixedcaseStrng.toLowerCase()==="helloworld")




// const num1: number= 10
// const num2: number=5

// console.log(num1===num2)
// console.log(num1!==num2)
// console.log(num1<num2)
// console.log(num1>num2)
// console.log(num1<=num2)
// console.log(num1 >= num2)



// // • Tests using "and" and "or" operators
// const condition1: string="true";
// const conditon2: string="false";
// console.log(condition1 && conditon2)
// console.log(condition1 || conditon2)


// //• Test whether an item is in a array
// //• Test whether an item is not in a array

// const Fruits: string[] = ["Apple", "Mango", "Aaam"];
// console.log(Fruits.includes("Apple"));
// console.log(Fruits.includes("apple"));


//task 25

// // Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// // • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

// // • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)




// let alianColor="red"

// if(alianColor=="black"){
//     console.log("you winn congragulation");
    
// }
// else if (alianColor=="yellow"){
//     console.log("you lose");
    
// }
// else{
//     console.log("please select anycolor");
    
// }


//task 26

// // Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// // • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// // • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// // • Write one version of this program that runs the if block and another that runs the else block.


// let alianColor: string="green";
// alianColor= "red"
// if (alianColor=== "green"){
//    console.log(`the player got 5 points`)
// }

// else{
//     console.log(`the player got 10 points`)
// }


//task 27

// // Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// // • If the alien is green, print a message that the player earned 5 points.
// // • If the alien is yellow, print a message that the player earned 10 points.
// // • If the alien is red, print a message that the player earned 15 points.
// // • Write three versions of this program, making sure each message is printed for the appropriate color alien.


// let alianColor1: string="green";
// if (alianColor1=== "green"){
//    console.log(`the player got 5 points`)
// }

// else if(alianColor1==="yellow"){
//     console.log(`the player got 10 points`)
// }
// else if(alianColor1==="red"){
//     console.log(`the player got 15 points`)
// }





// let alianColor2: string="yellow";
// if (alianColor2=== "green"){
//    console.log(`the player got 5 points`)
// }

// else if(alianColor2==="yellow"){
//     console.log(`the player got 10 points`)
// }
// else if(alianColor2==="red"){
//     console.log(`the player got 15 points`)
// }






// let alianColor: string="red";
// if (alianColor=== "green"){
//    console.log(`the player got 5 points`)
// }

// else if(alianColor==="yellow"){
//     console.log(`the player got 10 points`)
// }
// else if(alianColor==="red"){
//     console.log(`the player got 15 points`)
// }


//task 28

// let age:number=25;
// if(age<2){
//     console.log("the person is baby");
    
// }
// else if(age<4){
//     console.log("the person is todler");
    
// }
// else if(age<13){
//     console.log("the person is kid");
    
// }
// else if(age<20){
//     console.log("the person is teen");
    
// }
// else if(age<65){
//     console.log("the person is adult");
    
// }
// else{
//     console.log("the person is elder");
    
// }




//task 29''

// // Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// // • Make a array of your three favorite fruits and call it favorite_fruits.
// // • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!



// let fruits=["banana","apple","orange"]


// if (fruits.includes("banana")){
//     console.log("you really like banana");
    
// }
// if(fruits.includes("apple")){
//     console.log("you really like apple");
    
// }
// if(fruits.includes("orange")){
//     console.log("you really like orange");
    
// }


//task 30

// // Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// // • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// // • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

// let employee: string[]=["Admin", "Shayan","Asif"]
// for (let i=0; i<employee.length; i++){
//     if (employee[i] =="Admin"){
//         console.log("Hello admin, would you like to see a status report?")
//     }
//     else {
//         console.log(`Hello ${employee[i]}`)
//     }
// }



//task 31

// let username:number[]=[]
// if (username.length===0){
//     console.log("please enter a username")

// }
// else{
//     console.log("welcome")
// }


//task 32


// let username:string[]=["user1","user2","user3","user4"]
// let currentUser:string[]=["user1","user5","user6","user7"]

// currentUser.forEach(newuser=>{
//     if(username.some(older=>newuser.toLocaleLowerCase()===older.toLocaleLowerCase())){
//         console.log(`${newuser}"user already exists"`)
//     }
//     else{
//         console.log(`${newuser}is abailable`);
//     }
// });


// task 33

// let number:number[]=[1,2,3,4,5,6,7,8,9,10]

// number.forEach(number=>{
//     let suffix="th"
//     if(number===1){
//         suffix="st"
//     }
//     else if(number===2){
//         suffix="nd"
//     }
//     else if(number===3){
//         suffix="rd"
//     }
//     console.log(`${number}${suffix}`);
    
// })

//task34

// let pizza=["margharita","zinger","poka"]
// pizza.forEach(thispizza=>{
//     console.log(`${thispizza} is my favorate one`);
    
// });


//task 35



// let animal=["lion","tiger","bear"]
// animal.forEach(thisanimal=>{
//     console.log(`${thisanimal} can be the pet if yo want to be dead early`);
// });


//task 36



// function T_shirt(size:string,message:string){
//     console.log(`size of the shirt is ${size} and the message is ${message}`);
// }
// T_shirt("mediam","code is life");


//task 37
// function T_shirt(size:string="large",messge:string="i love typescript"){
//     console.log(`${size} T shirt is my size and the messageis ${messge}`);
    
// }
// T_shirt();
// T_shirt("medium");
// T_shirt("small","Dive into codding");


//task 38


// function desireable_country_city(city:string,country:string="pakistan"){
//     console.log(`${city} is in ${country}`);
    

// }
// desireable_country_city("karachi");
// desireable_country_city("lahore");
// desireable_country_city("dehli","india");

//task 39

// function city_contry(city:string,contry:string):string{
//     return `${city} ${contry}`
// }
// console.log(city_contry("karachi", "pakistan"));
// console.log(city_contry("lahore","pakistan"));
// console.log(city_contry("tokiyo", "japan"));



// task40

// function make_album(artist:string, title:string, track?:number){
//     let album={artist,title}
//     if(track){
//         album['track']=track
//     }
//     return album;
// }

// console.log(make_album("artist","the firtst album",12));
// console.log(make_album("artist","the firtst album"));

//task 41

// let magitions:string[]=["albirt","borito","nana","bhutto"]

// function show_magitions(magitions:string[]){
//     magitions.forEach(magition=>{
//         console.log(magition);
        
//     })
// }
// show_magitions(magitions);

//task 42

// let magitions:string[]=["albirt","borito","nana","bhutto"]

// function make_them_great(magitions:string[]){
//     for (let i =0; i<magitions.length; i++){
//         console.log(magitions[i] = magitions[i] +" the great");
          
//     }
// }
// make_them_great(magitions);


// task 43
// let magitions:string[]=["albirt","borito","nana","bhutto"]


// // let magitions:string[]=["albirt","borito","nana","bhutto"]

// function make_them_great(magitions:string[]){
//     for (let i =0; i<magitions.length; i++){
//         magitions[i] = magitions[i] +" the great";
          
//     }
// }

// function make_magitions(magitions:string[]){
//     magitions.forEach(magition=>{
//         console.log(magition);
        
//     })
// }





// // let magicians:string[]=["noman","ajaz","taha","salman"]
// function make_great(magitions:string[]){
//     let greatMagician = [];
//     magitions.forEach(magician=>{
//         greatMagician.push(`${magician} the greatt`);
//     });
//     return greatMagician;
// }
// let greatMagician= make_great(magitions.slice());

// make_magitions(greatMagician);

// // make_them_great(magitions);
// make_magitions(magitions);



//task44


// function make_sandwich(...item:string[]){
//     console.log(`making a sandwich with: ${item.join(", ")}`);
// }
// make_sandwich("bread","cheese","tomato");
// make_sandwich("bread", "cheese");
// make_sandwich("bread");

// task 45


// function make_car(manufacturer:string, model:string, ...optionas:[string,any][]):Object {
//     let car={
//         manufacturer,
//         model,
//     };
//     optionas.forEach(([key,value])=>car[key]=value);
//     return car;

// }
// let answer1=make_car("toyota","corola",["color","red"]);
// let answer2=make_car("ford","botan",["sunroof",true])
// console.log(answer1);
// console.log(answer2);
