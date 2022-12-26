// PĘTLA IF ELSE

// tweetType = "blablabla";

// if(tweetType === "" ){
//     console.log("inny");
// } else if ( tweetType === "followed") {
//     console.log("zwykły")
// } else if (tweetType === "promotional"){
//     console.log("promocyjny")
// } else {
//     console.log("blablabla ")
// }

// FUNKCJA X = 5 + A

// function addFive(a){
//     let result = 5 + a;
//     console.log(result);
//     return result; 
// }

// addFive(10)



// FUNKCJA DRUKUJĄCA GWIAZDKI W RZĘDZIE ORAZ TRÓJKĄT
// function printStars(a){
//     let stars = "";
//     for(let i = 1; i <= a; i++){
//     stars += "*";}

//     console.log(stars);   
// }

// printStars(1);

// function triangleStars(b){
//     for(let i = 1; i <= b; i++) {
//     printStars(i);}

// }

// console.log(triangleStars(10));



// WYPISZ NAJMNIEJSZĄ LICZBĘ
// function min(a, b, c) {
//     if(a >= b && c >= b ){
//         return b;
//     }
//     else if(b >= a && c >= a ){
//         return a;
//     }
//     else{
//         return c;
//     }
// }

// console.log (min(-110, 2, 3));

//  WYPISZ 10 - 5
// for (let i = 10; i >= 5; i-- ) {
//     console.log(i);
// }


// WYDRUKUJ PĘTLE OD 5 DO 30 BEZ 30
// for(i = 5; i < 30; i++){
//     console.log(i);
// }

// WYPISZ CO DRUGĄ LICZBĘ OD 20 DO 0

// for(i = 20; i >= 0; i--, i--){
//     console.log(i);
// }



// FUNKCJA DODAWANIA A + B
// function add(a, b){
//     console.log( a + b);
// }

// add(1, 2)


// DRUKUJE OD NAJMNIEJSZEJ DO NAJWIĘKSZEJ
// function next(a, b){
//     for(i = a; i <= b; i++)
//     {
//         console.log(i);
//     }
// }

// next(1, 4)


// WYDRUKUJ GWIAZDKI W LINII

// function stars(a){
//     let star = "";
//     for(i = 0; i <= a; i++){
//         star += "*";
//     }
//     console.log(star);
// }

// stars(0)

// function square(a){
//     for(i = 0; i <= a ; i++){
//         stars(a);
//     }
// }

// square(5)

// TRÓJKĄT Z GWIAZDEK

// function triangle(c){
//     for(i = 0; i <= c; i++){
//         i -= 1;
//         stars(i);
//     }

// }

// triangle(10)

// ZAMIENIA DNI NA SEKUNDY

// function mili(a){
//     return a * 24 * 60 * 60 * 1000;
// }

// console.log(mili(1))

// POLE TRÓJKĄTA

// function triangle(a, b){
//     return a * b / 2;
// }

// console.log(triangle(1, 2));


// WYBIERA NAJWIĘKSZĄ WARTOŚĆ

// function max(a, b, c){
//     if(a >= b && a >= c){
//         return a;
//     } else if ( b >= a && b >= c) { 
//         return b
//     } else {
//         return c;
//     }
// }

// console.log(max(1, 2, 13));

// FUNKCJE MATEMATYCZNE

// console.log(Math.pow(4, 2) * Math.PI )

// console.log(Math.log10(20 * 30 + 40))

// console.log(Math.log2(Math.pow(10, -5)))

// console.log(Math.abs((Math.pow(-3, 7))))


// FUNKCJE CIĄG DALSZY

// function add1(a, b){
//     return a + b;
// ;}

// console.log(add1(1, 2));


// const add2 = function(a, b){
//     return a + b;
// };

// console.log(add2(1, 2));


// function callFunction(fun){
//     fun();
// };

// function printName(){
//     console.log("maciek");
// ;}

// const printSecondName = function (){
//     console.log("marta");
// };

// printName();
// printSecondName();

// callFunction (function() {
//     console.log("figa");
// });


// callFunction(printName);
// callFunction(printSecondName);
// callFunction(function(){
//     console.log("maciek");
// });

// printName();
// printSecondName();
// const fun = function(){
//     console.log("maciek")
// };
// fun();


// ĆWICZENIE FUNCjE JAKO WARTOŚCI

// function speak(before, after){
//     if(before && typeof before === "function"){
//         before();
//     }

//     console.log("mowa...");
//     if(after && typeof after === "function"){
//         after();
//     }
// }

// function cheerKids(){
//     console.log("hej, dzieci");
// };

// function cheerAll(){
//     cheerKids();
//     console.log("witam rodziców");
// };

// function bless(){
//     console.log("zdrowia!");
// };

// speak();
// speak(cheerKids);
// speak(cheerAll);
// speak(cheerAll, bless);
// speak(bless);
// speak(undefined, bless)

// OBIEKTY 

// const user = {
//     name: "triss",
//     surname: "merigold",
//     useMagic: true
// }

// console.log(user.name)


// zmienna user pozostaje ta sama ale elementy jej środka można zmieniać 
// user.name = "ok"

// console.log(user.name)

// ĆWICZENIE OBIEKTY

// const user = {
//     userName: "Kuba",
//     userSurname: "Wędrowycz"
// };

// const address = {
//     postal: {
//         userAddressPostal: "22 - 222",
//     },

//     addressCountry: "Poland", 
//     userAddressCity: "Stalowa wola",
//     userAddressStreet: "pedofila II"

// };

// console.log(address.addressCountry);

// const book = {
//     bookTitle: "Karpe Bijem",
//     bookReleaseYear: "2019"
// }

// console.log(book.bookTitle)


// for( let i = 20; i >= 0; i -= 2 ) {
//     console.log(i);
// }

// let i = null; 
// let b = 20;
// let nameOne = "zdzichu"
// let surname = "pazdzierzak"

// console.log(b && i);


// const truthy =  b === b  ? console.log(nameOne) : console.log(surname);

// FUNKCJE

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

// KONTO BANKOWE

// function MakeAccount(){
//     this.deposit = function(amount){
//         this.balance = 0,
//         this.balance += amount;
//         return this.balance
//     }

//     this.withdraw = function(amount){
//         amount = Math.min(this.balance, amount);
//         this.balance-= amount;
//         return amount;
//     }

//     this.currentBalance = function(){
//         return this.balance
//     }
// }

// const account = new MakeAccount();
// const deposit = account.deposit(1000);
// console.log(account.currentBalance());

// const withdraw1 = account.withdraw(300);
// console.log(account.currentBalance());

// ITERACJA  PO TABLICY

// const shoppingList = ["jabłko", "banan", "sliwka"];

// for(let i = 0; i < shoppingList.length; i++){
//     const item = shoppingList[i];
//     console.log(item);
// }



// ITERACJA ALE RAZEM Z PRZECINKEIM

// const shoppingList = ["jabłko", "banan", "śliwka"];

// let shoppingListText = "";
// for(let i = 0; i < shoppingList.length; i++){
//     const item = shoppingList[i];
//     shoppingListText += item + ", ";
// }

// console.log(shoppingListText);



// ITERACJA ale na ostatniej pozycji nie ma przecinka

// const shoppingList = ["jablko", "banan", "śliwka"];

// let shoppingListText = "";
// for (let i = 0; i < shoppingList.length; i++){
//     const item = shoppingList[i];
//     shoppingListText += item;
//     if(i !== shoppingList.length - 1){
//         shoppingListText += ", "
//     }
// }

// console.log(shoppingListText)

// PĘTLA FOREACH

    // function forEach(array, operation){
    //     for(let i = 0; i < array.length; i++){
    //         const element = array[i];
    //         operation(element);
    //     }
    // }
  
    // const shoppingList = ["jabłko", "banan", "śliwka"];
    // forEach(shoppingList, function(item)
    //     {
    //         console.log(item)
    //     }
    // )