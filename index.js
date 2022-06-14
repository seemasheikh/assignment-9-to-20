// chapter# 9
// q-n0-1
// var city="karachi";
// var userCity=prompt("enter a city name,like city of lights");
// if(userCity===city){
// alert("wellcome to the city of lights")
// }

// q-no-2

// var gender="male";
// var gender2="female";
// var userGender=prompt("what is your gender?")
// if(userGender===gender){
//     alert("good morning sir")
// }else{
//     alert("good morning ma'am")
// }


// q-no-3

// var color1="green";
// var color2="red";
// var color3="yellow"
// var signalColors=prompt("enter a color of signal");
// if(signalColors===color2){
//     alert("warning !!! Must sop!!")
// }
// if(signalColors===color1){
//     alert("now move")
// }
// if(signalColors===color3){
//     alert("Ready to move")
// }

// q-no-4

// var remainingFuel=0.25+"litres";
// var userCar=prompt("how much fuel in your car")
// if(remainingFuel===userCar){
//     alert("please fill the fuel in your car")
// }
// if(remainingFuel!==userCar){
//     alert("please see your fuel tanker")
// }
// q-no-5

// var a=4;
// if(++a===5){
//     alert("given condition of variable is a true")
// }
// alert would display

// var b=82;
// if(b++==83){
//     alert("given condition for variable b is  true true")
// }
// alert would be not display

// var c=12;
// if(c++===13){
//     alert("condition 1 is true")
// }
// if(c===13){
//     alert("condition2 is true")
// }
// if(++c<14){
//     alert ("condition 3 is true")
// }
// if (c===14){
//     alert("condition 4 is true")
// }
//answer= alert would be diplay in condition 2,4

//  var materialCost=20000;
//  var labourCost=2000;
//  var totalCoct=materialCost+labourCost;
//  if(totalCoct===labourCost+materialCost){
//      alert("The cost equals")
//  }
//  if(true){
//      alert("True")
//  }
//  if(False)
//  { alert("False")
// }
    // answr:Alert would be display because The cost is equals and the condition is true:

    // if("car"<"cat"){
    //     alert("the car is smaller than cat")
    // }
    // ans alert would be display

//   q-no-6

// var totalMarks=300;
// var marksObtained=219;
// var percentage=marksObtained*100/totalMarks;
// console.log("Marks  sheet")
// console.log("Total marks : 300");
// console.log("Marks obtained: 219");
// console.log("percentage : 73%");
// console.log("Grade: B");
// console.log("Remarks :you need to improve");

// q-no-7
// var number=3;
// var guess=prompt("Press any number from 1 to 10");

// if(guess>3||number===guess){
//     alert("close enough to the correct answer")
//  }
//     else{ alert("Bingo! correct answer")

//     }
    // q-no-8

// var a=3;
// var b=prompt("enter a number from 1 to 3")
// var c=a/b;
// console.log(c)
// if(a>=b){
//     alert("your no is divisible by "+a)
// }
// else{
//     alert("try again")
// }

// q-no-9

// var number=prompt("Enter a number");
// if(number % 2==0){
//     console.log("The number is even.")
// }
// else{
//     console.log("The number is odd.")
// }
// q-no-10
// var a=40;
// var userInput=prompt("guess what is the temperature today");
// if(userInput>40){
//      alert("Its too hot outside")

// }
// var b=30;
//  if(userInput>30){
//      alert("The weather today is normal")

//   }
// var c=20;
// if(userInput>20){
//     alert("todays weather is cool!")
// }
// var d=10;
// if(userInput>10){
//     alert("OMG  todays weather is cool!")
// }
// q-no-11

// var num1=10;
// var num2=12;
// var opr="+";
// if(opr==="+"){
//     console.log(num1+num2)
// }
// var num1=20;
// var num2=15;
// var opr="-";
// if(opr==="-"){
//     console.log(num1-num2)
// }
// var num1=10;
// var num2=12;
// var opr="*";
// if(opr==="*"){
//     console.log(num1*num2)
// }
// var num1=10;
// var num2=12;
// var opr="/";
// if(opr==="/"){
//     console.log(num1/num2)
// }
// var num1=10;
// var num2=12;
// var opr="%";
// if(opr==="%"){
//     console.log(num1%num2)
// }
// SECOND METHOD WITH USING FUNCTION CREATE A CALCULATOR

// function calc(num1,opr,num2){
// if(opr==="+"){
//     return num1+num2
// }
// else if(opr==="-"){
//     return num1-num2
// }
// else if(opr==="*"){
//     return num1*num2
// }
// else if(opr==="/"){
//     return num1/num2
// }
// else if(opr==="%"){
//     return num1%num2
// }
// var result=calc(5,"+",5);
// var result1=calc(4,"-",2);
// var result2=calc(5,"*",5);
// var result3=calc(5,"/",5);
// var result4=calc(5,"%",5);

// console.log(result)
// console.log(result1)
// console.log(result2)
// console.log(result3)
// console.log(result4)

// }
// calc()

// CHAPTER# 12 ,13
// Q-NO-1

// var char=Number(prompt("enter any character"));
// if(char>=65 && char<=90){
//     alert("The character is uppercase letter");
// }
// else if(char>=97 && char<=122){
//     alert("The character is lowerCase letter");
// }else if(char>=48 && char<=57){
//     alert("The character is NUMBER")
// }
// q-no-2

// var integer1="122";
// var integer2="122";
// integer1=parseInt(Number)
// integer2=parseInt(Number)
// if(integer1===integer2){
//     alert("both integers are equal")
// }
// console.log(typeof integer1)
// console.log(typeof integer2)

// q-n0-3

// var number=prompt("enter a number");
// if(number %1==0){
//     alert("its neg.")
// }
// else if(number %2==0){
//     alert("pos.")
// }
// else{
//     alert("zero.")
// }
// // q-no-4
// var arr=["a","e.i","o","j","k","l"];
// console.log(arr.slice(1,2));
// alert("true")

// q-no-5
// var sec="seema"+22;
// var ask=prompt("enter your password");
// if(ask===sec){
//     alert("correct")
    
// }
// else if(ask>sec){
//     alert("please enter corrct password")
// }
// else{
//     alert("incorrect")
// }
// q-n0-6
// var greeting;
// var hour=13;
// if(hour<18){
//     greeting="good day";
// }
// else{
//     greeting="good evening";
// }
// alert(greeting);

// q-no-7


// var time=prompt("enter a current time in 24 hours clock format like 1800=6pm");
// if(time>=0000 &&time<1200){
//     alert("good morning!")
// }else if(time>=1200 && time<1700){
//     alert("good afternoon")
// }
// else if(time>=1700 &&time<2100){
//     alert("good evening")
// }else if(time>=2100 && time<=2359){
//     alert("good night")
// }
// chapter#13to 15

// q-no-3
// var strArr=["karachi","lahore","multan","peshawar","sialkot"];
// console.log(strArr);

// q-no-5

// var numArr=[1,2,3,4,5,6,7,8,9];
// console.log(numArr)

// q-no-6

// var boolArr=[true,false];
// console.log(boolArr);

// Q-NO-7

// var mixArr=[1,"sana",true,["sialkot","hydrabad","multan"]]
// console.log(mixArr)

// q-no-8
// console.log("qualification")
// var education=["1)Ssc","2)Hsc","3)Bsc","4)Bs","5)B.com","6)Ms","7)M.phil","8)phD"];
// console.log(education)

// q-no-9


// var student=['micheal','john','tony']
// var score=['320','230','480']
// var totalMarks=500;
// var marksObtained=320;
// var percentage=marksObtained*100/totalMarks;

// console.log("the score of "+student.slice(0,1)+" is "+score.slice(0,1)+" percentage "+percentage+" %")

// var totalMarks=500;
// var marksObtained=230;
// var percentage=marksObtained*100/totalMarks;

// console.log("the score of "+student.slice(1,2)+" is "+score.slice(1,2)+" percentage "+percentage+" %")
// var totalMarks=500;
// var marksObtained=480;
// var percentage=marksObtained*100/totalMarks;

// console.log("the score of "+student.slice(2,2)+" is "+score.slice(2,2)+" percentage "+percentage+" %")

// q-no-9

// var color=["red","black","golden","silver","hot pink","blue","yellow"];
// console.log(color)
// var user=prompt("what color you want to add to the bieginning?")
// var user=color.unshift("green")
// console.log(color)
// var user2=prompt("what color you want to add to the end")
// var user=color.push("white")
// console.log(color)
// var user=color.unshift("gray","brown")
// console.log(color)
// var user=color.shift("")
// console.log(color)
// var user=color.pop("")
// console.log(color)
// var user=prompt("whatcolor you want to add and which index?")
// var user=color.unshift("majenta")
// console.log(color)
// var user=prompt("which index color you want to delete")
// var user=color.pop(10,0)
// console.log(color)


// q-n0-10

// var scoreOfStudent=[320,230,480,120];
// var accending=[120,230,320,480];
// console.log("scoreOfStudent"+":"+scoreOfStudent)
// console.log("accending"+":"+accending)

// q-no-11

// console.log("cities list:")
// var cityList=["karachi","lahore","islamabad","queeta","peshawar"]
// console.log(cityList)
// var selectedCityList=cityList.slice(1,3);
// console.log("selected city list:")
// console.log(selectedCityList)

// q-no-12

// var arr=["this","is","my","cat"]
// alert("this "+" is "+" my "+" cat")

// q-no-13
// console.log("Devices")
// var fifo=["Key-board","mouse","printer","monitor"]
// console.log("Out:")
// console.log(fifo)
// console.log(fifo=fifo.shift())
// console.log("Out:")
// var ifo=["Mouse","printer","monitor"]
// console.log(ifo=ifo.shift())
// console.log("out:")
// var fo=["Printer","monitor"]
// console.log(fo=fo.shift())
// console.log("Out:")
// var o=["Monitor"]
// console.log(o=o.shift())

// q-no-14

// console.log("Devices")
// var Lala=["Key-board","mouse","printer","monitor"]
// console.log("Out:")
// console.log(Lala)
// console.log(Lala=Lala.pop())

// console.log("Out:")
// var ala=["Key-board","mouse","printer"]
// console.log(ala=ala.pop())
// console.log("out:")
// var la=["Key-board","mouse"]
// console.log(la=la.pop())

// console.log("Out:")
// var a=["key-board"]
// console.log(a=a.pop())

// q-no-15



// chapter 17 to 20
// q-no-1
// var multi=[[],[],[],[]]
// console.log(multi)

// q-no-2
// var matrix=[['0123'],[1012],[2101]]

// console.log(matrix)
 
// q-no-3

// var a=[1,2,3,4,5,6,7,8,9,10]
// for(var i=0;i<=3;i++){
// }
// console.log(a)

// q-no-4


// var tCheck=prompt("enter a number to show its multiplication table");
// var num=prompt("enter a table length");
// if(num==4){
// var table1=4;
// console.log("4*1="+table1)
// var table2=8;
// console.log("4*2="+table2)
// var table3=12;
// console.log("4*3="+table3)
// var table4=16;
// console.log("4*4="+table4)
// var table5=20;
// console.log("4*5="+table5)
// var table6=24;
// console.log("4*6="+table6)
// var table7=28;
// console.log("4*7="+table7)
// var table8=32;
// console.log("4*8="+table8)
// var table9=36;
// console.log("4*9="+table9)
// var table10=40;
// console.log("4*10="+table10)
// }

// q-no-5

// var a=["apple","banana","mango","orange","strawberry"]
// var user=prompt("enter your fav fruit name","apple")
// for(var i=0;i<a.length;i++){
// if(user===a[i]){
//     var matchFound="true";
//     alert("right")
//     break;
// }
// if(matchFound!==a){
//     alert("sorry wrong ans")
//     break;
// }

// }

// q-no=6

// a
// document.write("<h4>counting :</h4>");
// for (var i=1;i<=15;i++){
//     document.write(i + ",")
// }
// b
// document.write("<h4>reverse counting :</h4>");
//  for (var i=10;i>=1;i--){
//      document.write(i + ",")
//  }

// C

//  document.write("<h4>Even:</h4>");
//  for (var i=0;i<=20;i++){
//     if(i%2===0){
//      document.write(i + ",")
//  }
//     }

// D

document.write("<h4>odd:</h4>");
 for (var i=19;i<=19;i--){
    if(i%2===1){
     document.write(i + ",")
 }
    }
// E


record=[10,4,30,45,90,5]
max=-Infinity;
last=record.length-1;
for(i=0;i<=last;i++){
    if(record[i]>max){
        max=record[i]
    }
}
console.log(max)






// q-no-8
var arr=[24,53,78,91,12]
var a=prompt("largest no ")
for (var i=0;i<91;i++){
    if(arr===a[i]){
        alert("true")
        break;
    }
}

