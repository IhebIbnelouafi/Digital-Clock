function clock() {

let montsNames =["January" , "February" , "Mars" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"  ] ;
let dayNames = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"] ; 
let today = new Date()

document.getElementById("Date").innerHTML =(dayNames[today.getDay()] +" "+today.getDate() +" "+montsNames[today.getMonth()]+" " + 
today.getFullYear()  )

let hour = today.getHours() ;
let minute = today.getMinutes() ;
let second = today.getSeconds() ;
let day = hour <11?  'AM' : 'PM'


hour = hour < 10? '0' +hour : hour ;
minute = minute < 10? '0' +minute : minute ; 
second = second< 10 ? '0' + second : second ; 


document.getElementById("Hours").innerHTML = hour ;
document.getElementById("Minutes").innerHTML = minute ;
document.getElementById("Seconds").innerHTML = second ;


}
let intervall = setInterval(clock,400) ;