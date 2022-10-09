// variable = 17 / 5;
// console.log("a) tipo:" , typeof variable, "valor:" , variable);

//  variable = 17 / 5;
// console.log("a) tipo:" , typeof variable, "valor:" , variable);

// variable = 12 * 2;
// console.log("a) tipo:" , typeof variable, "valor:" , variable);

// variable = 35 % 8;
// console.log("a) tipo:" , typeof variable, "valor:" , variable);

// variable = 1 == 3 || 5 > 7 || 10 * 3 > 40;
// console.log("e) tipo:" , typeof variable, "valor:" , variable);

// variable = "code" + " " + "space";
// console.log("a) tipo:" , typeof variable, "valor:" , variable);

// variable = (21 / 2) % 3;
// console.log("a) tipo:" , typeof variable, "valor:" , variable);

// variable = 5 + parseInt("5");
// console.log("parseInt) tipo:" , typeof variable, "valor:" , variable);

// variable = !(1 == 1);
// console.log("a) tipo:" , typeof variable, "valor:" , variable);

// variable = !(1 == 1);
// console.log("a) tipo:" , typeof variable, "valor:" , variable);

// let isLogged = true;
// let isAdmin = true;

// let totalBet = prompt("please enter your bet");
// //console.log(totalBet);
// if (totalBet == 5000) {
//   alert("all-in!");
// } else if (totalBet < 5000) {
//   alert("passing this round!");
// } else {
//   alert("wrong bet,try again");
//   while (totalBet > 5000) {
//     totalBet = prompt("please enter your bet");
//     if (totalBet > 5000) {
//       alert("wrong bet,try again");
//     }
//   }
//

// let languajes = prompt ("please select a languaje entre en | de | pt | po)");
// let answer ;
// switch (languajes) {
//   case "en":
//    answer = " languaje is english"
//    console.log(answer);
//     break;
//   case "de":
//     answer = " languaje is aleman"
//     console.log(answer);
//     break;
//   case "pt":
//     answer = " languaje is ptem"
//     console.log(answer);
//     break;
//   case "po":
//     answer = " languaje is portuges"
//     console.log(answer);
//     break;
//   default:
//     console.log("selec your languaje please");
//     break;
// }

// console.log(languaje);

// let number = 7;

// switch (true) {
//   case number < 0:
//     console.log("The number is < 0");
//     break;
//   case number <= 0 && number <= 10:
//     console.log("The number is >= 0 and <= 10");
//     break;
//   case number > 20:
//     console.log("The number is > 20");
//     break;
//   case isNaN(number):
//     console.log("wrong type,please enter a real number");
//     break;

//   default:
//     console.log("not is a correct number");
//     break;
// }

// counting 1 by 1

// let count = 0;
// while (count < 10) {
//   console.log(count);
//   count++;
// }
// console.log(count);

// counting 2 by 2

// let number = 2;
// while (number >= 256) {
//   console.log(number);
//   number *= 2;
// }

// contador *

// let counter = 10;
// let timer = setInterval(() =>{
//   console.log(counter)
//   counter--;
//   if (counter == 0) {
//     clearInterval(timer);
//   }
// },1000);

// let limit = 10;
// for(let counter=0;counter <= limit;counter ++){
//    console.log (counter)
// }

// +multiplicacion+

// for(let number = 1; number <=10; number++){
//    console.log("tabla del: ", number);
//    console.log("-------------");

// let multi = 1;
// while ( multi <= 10) {
//   console.log(number, " x " , multi, " = " , number * multi);
//   multi++;
// }
// console.log("----------");

//  }

// +contar de 0 a 50 y de 50 a 0+

// for ( let counter = 0, limit = 100; counter <= limit;counter++,limit--) {
//    console.log(counter," - ",limit);
// }

//  OTRO EJEMPLO+

// let i,
//   j,
//   sum = 0;
// for (i = 0, j = 10; i < 10; i++, j--) {
//   sum += i * j;
//   console.log(sum);
// }

// BREAK PARA TERMINAR UN BUCLE +

// let counter = 1;
// while(counter <=100){
//    console.log(counter++);
//    if (counter ==6){
//       break;
//    }
// }



//  do while!!

// let counter = 1;
// do {
//   console.log("este bucle se ejcutará siempre al menos una vez");

//   if (counter % 2 != 0) {
//     continue;
//   }
//   console.log(counter);
// } while (counter++ <= 5);


let totalbet = 0;
do{
   totalbet = prompt ("Please enter your bet");
   if (totalbet == 5000) {
      alert("all in!");
   } else if (totalbet < 5000){
      alert("passing this round.");
   }
    if (totalbet > 5000){
      alert("bet limit 5000, please chage your bet.");
   }
   if(isNaN(totalbet)){
      alert("please ,enter a numeric value");
   }
} while (totalbet > 5000 || isNaN(totalbet));