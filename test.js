//*/let num = "(208)-208-2082";
let num = "2082082082"
console.log(num.length)
num = num.replace("-","");
num = num.replace("-","");
num = num.replace("(","");
num = num.replace(")","");
console.log(num)
console.log(num.length)
if ((parseInt(num)!=NaN)&&(num.length==10)) {console.log("yes")}
//*//*
let email = "mail@gmail.com";
if (/@/.test(email)&&/./.test(email)) {console.log(email)}/*//*
let phone = "208-208-2082";
let num = phone;
num = num.replace("-",""); num = num.replace("-",""); num = num.replace("(",""); num = num.replace(")","");
if ((parseInt(num)!=NaN)&&(num.length==10)) {
    document.getElementById("2").innerHTML = "The Phone Number you have entered is " + phone;
} else {
    document.getElementById("2").innerHTML = phone + "is not a valid Phone Number.";
}//*/