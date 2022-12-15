// for( let i = 20; i >= 0; i -= 2 ) {
//     console.log(i);
// }

// let i = null; 
// let b = 20;
// let nameOne = "zdzichu"
// let surname = "pazdzierzak"

// console.log(b && i);


// const truthy =  b === b  ? console.log(nameOne) : console.log(surname);

// function hello () {
//     console.log("siema świecie")
//     console.log("to życie na grzbiecie")
// }

// hello ()

// function cheer(whoToCheer) {
//     console.log("cześć" + whoToCheer + "!")
// }

// cheer(" czytelniku")
// cheer( " whoToCheer")


// function cheer(howToCheer, whoToCheer ) {
//     console.log(howToCheer + whoToCheer + "!")
// }

// cheer("cześć", " czytelniku")

// function cheer(whoToCheer) {
//     console.log("cześć" + whoToCheer + "!")
// }

// cheer(" czytelniku")

// function print(a, b){
//     console.log(a + "," + b);
// }

// print("a" , "b", "c")
// print("a" , "b")
// print("a")
// print()

// let a = 1;
// let b = 2;

// function sum (){
//     console.log(a * b)
// }

// sum(a, b);

// function print(a, b) {
//     for (let i = 10; i <= 20; i++){
//         console.log(i);
//     }
// }

// print();

// function print(num){
//     let stars = "*";
//     for (let i = 0; i < num; i++){
//         stars += "*";
//     }

//     console.log(stars);
// }

// print(100);



// function printStars (num){
//     let stars = "";
//     for(let i = 0; i <= num; i++){
//         stars += "*";
//     }

//     console.log(stars)
// }

// printStars(100);

// function print(num){
//     let stars = "";
//     for(let i = 0; i <= 2; i++){
//         stars += "*";
//     }
//     console.log(stars);
//     console.log(stars);
    
    
// }

// print(2);


// function printStars(num){
//     let stars = "";
//     for (let i = 0; i < num; i++){
//         stars += "*";
//     }
//     console.log(stars);
// }

// printStars(10);

// function printSquare(size){
//     for (let i = 0; i < size; i++){
//         printStars(size);
//     } 
// }

// printSquare(2);


// function printTriangle(size){
//     for(let i = 1; i <= size; i++){
//         printStars(i);
//     }
// }

// printTriangle(10);


// function printDownTriangle(size){
//     for(let i = 10; i >= size; i--){
//         printStars(i);
//     }
// }

// printDownTriangle(1);


// function printStars (num){
//     let stars = "";
//     for(let i = 0; i < num; i++){
//         stars += "*";
//     }
//     console.log(stars);
// }


// printStars(10);


// function printTriangle(size){
//     for(let i = 1; i <= size; i++){
//         printStars(i);
//     }
// }

// printTriangle(4);

// function printDownTriangle(size){
//     for(let i = 10; i <= size; i--){
//         printStars(i);
//     }
// }

// printDownTriangle(10);

// function factorial(num){
//     if(num <=1){
//         return 1;
//     }

//     let acc = 1;
//     for(let i = 2; i <= num; i++){
//         acc *= i;
//     }

//     return acc;
// }

// console.log(factorial(2));

// function miliSeconds (num){
//     let day = 86400000;
//     for(let i = 1; i <= num; i++){
//         day *= i;
//     }
//      return day;
// }

// console.log(miliSeconds(3));

// function miliSeconds(num){
//     return num * 24 * 60 * 60 * 1000; 
// }

// console.log(miliSeconds(2));

// function triangleArea (a , b){
//     return a * b / 2; 
// }

// console.log(triangleArea(10, 20));

// function biggest (a, b, c){
//     if(a > b && a > c){
//         return a;     
//     } else if (b > a && b > c ){
//         return b;
//     } else {
//         return c;
//     }
// }

// console.log(biggest(1, 2, 5))

// function medium (a, b, c){
//         if(a >= b && a <= c){
//             return a;     
//         } else if (b >= a && b <= c ){
//             return b;
//         } else {
//             return c;
//         }
//     }
    

// console.log(medium(130, 110, 120))

// OBIEKTY

// const user = {
//     name: "Paweł",
//     surname: "Markowicz",
//     useMagic: true,
// };

// console.log(user.name);
// console.log(user.surname);
// console.log(user);

// user.name = "nieulękły";
// console.log(user.name);
// console.log(user.name);
// console.log(user)

// const users = {
//     name: "Zdzichu",
//     address: {
//         street: "Pazdzierzaki 13",
//         city: "Zdzichowo" 
//     }
// };

// console.log(users.name);
// console.log(users)

// console.log(users.address.city);

// const user = {
//     userName: {
//         name: "Pablo",
//     },

//     userSurname :{
//         surname: "Markovic",
//     },

//     address: {
//         postal: {
//             userAdressPostal: "66-666",
//         }
//     }
// }


// console.log(user.address.postal.userAdressPostal);


// const user = {
//     userName: "Paweł",
//     userSurname: "Markowicz",

//     address: {
//         userAddressName: null,
//         userAddressNumber: "2/54",
//         userAddressCountry: "Poland",
//         userAddressCity: "Stalowa wola",
//         userAddressPostal: "37-450",
//     }
// };

// console.log(user.userName)

// console.log(user);

// let user1 = {
//     name: "Rafał"
// };

// const user2 = user1;

// console.log(user1.name);
// console.log(user2.name);

// user1 = {name: "Bartek"};

// console.log(user1.name);
// console.log(user2.name);

// const user = {
//     name: "Samuel"
// };

// console.log(user.surname);


// function printUserSurname(user){
//     if(user.surname !== undefined){
//         console.log(user.surname); 
//     } else {
//         console.log("nieznane")
//     }
// };


// printUserSurname({name: "Samuel"});
// printUserSurname({name: "Samuel", surname: "vimes"})



// function printUserSurname(user){

//     if(user.surname){
//         console.log(user.surname);
//     } else {
//         console.log("nieznane")
//     }
// };

// printUserSurname({name: "Samuel"});
// printUserSurname({name: "Samuel", surname: null});
// printUserSurname({name: "Samuel", surname: "vimes"})


// let obj = {};
// const obj2 = obj;
// obj.name = "alek";
// console.log(obj.name);
// console.log(obj2.name);

// const obj3 = { name: obj.name};
// console.log(obj3);

// obj = { size: "S"};
// obj.name = "2"; 
// console.log(obj.name);
// console.log(obj.size);
// console.log(obj2.name);


let obj = {};
const obj2 = obj;
obj.name = "Paweł";
console.log(obj.name);
console.log(obj2.name);
obj2.name = "zdzichu";
console.log(obj.name)