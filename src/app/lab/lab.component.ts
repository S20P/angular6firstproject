import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.scss']
})
export class LabComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //JavaScript Program to Check Odd Even Number

  odd_even(no) {

    console.log("you have enter no", no);
    if (no % 2 == 0) {
      alert("Number is Even"); //ex :0, 2,4,6,8 are even no
    }
    else {
      alert("Number is Odd");  //ex :1,3,5,7,9 are odd no
    }
  }
  //-----------------------------------------------------------------------------------

  //Find Sum of Two Numbers
  add(no1, no2) {
    let c = parseInt(no1) + parseInt(no2);
    alert("sum is " + c);
  }


  //-----------------------------------------------------------------------------------

  //Factorial of any number
  Factorial(no) {

    // Example : geven number is 5 
    //         : slive this 5*4*3*2*1 = 120



    var fact;
    fact = 1;

    for (let i = 1; i <= no; i++) {
      fact = fact * i;
    }

    alert("Factorial is " + fact);


  }


  //-----------------------------------------------------------------------------------

  //Prime Number
  CheckPrimeNumber(num) {

    let m = num / 2;
    console.log("m", m);


    let flag = 0;

    for (let i = 2; i <= m; i++) {
      if (num % i == 0) {
        flag = 1;
        break;
      }
    }
    if (flag == 0) {
      console.log("prime number is", num);
      alert("prime number is" + num);
    }
    else {
      console.log("not prime number is ", num);
      alert("not prime number is " + num);
    }
    return 0;

  }

  //-----------------------------------------------------------------------------------

  //Reverse a Number Program
  Reverse(num) {
    var n = num;
    var rev = 0, rem;
    while (n > 0) {
      rem = n % 10;

      console.log("rem", rem);
      rev = rev * 10 + rem;
      console.log("rev", rev);

      n = Math.floor(n / 10);

      console.log("Math.floor", n);
    }
    alert("The given number is : " + num + " The reversed number is : " + rev + "\n");
    console.log("The given number is : " + num + " <br/> The reversed number is : " + rev + "\n");
  }

  //-----------------------------------------------------------------------------------
  //Armstrong  Number Program

  armstr(num) {
    var flag, number, remainder, addition = 0;
    number = Number(num);

    flag = number;
    while (number > 0) {
      remainder = number % 10;
      console.log("remainder", remainder);
      addition = addition + remainder * remainder * remainder;
      console.log("addition", addition);
      number = Math.floor(number / 10);
      console.log("number", number);
    }

    if (addition == flag) {
      alert("-The inputed number is Armstrong");
    }
    else {
      alert("-The inputed number is not Armstrong");
    }


  }
  
  //-----------------------------------------------------------------------------------
  //Palindrome  Number Program

  Palindrome(num){
    var number, remainder, addition = 0;
    number = Number(num);
    
    while (number > 0) {
      remainder = number % 10;
      console.log("remainder", remainder);
      addition = addition  * 10 + remainder;
      console.log("addition", addition);
      number = Math.floor(number / 10);
      console.log("number", number);
    }

    if (addition == num) {
      alert("-The inputed number is Palindrome");
    }
    else {
      alert("-The inputed number is not Palindrome");
    }
  }

    //-----------------------------------------------------------------------------------
     //Palindrome  Number Program
  
   //----Output:
   // *
   // **
   // ***
   // ****


  TriangleStr(){
     var i,j;
       for(i=0;i<4;i++){

          for(j=0;j<=i;j++){
            console.log("*");
            document.write('*');
          }
          document.write('<br/>');
          console.log('<br/>');
          
       }
  }

}
