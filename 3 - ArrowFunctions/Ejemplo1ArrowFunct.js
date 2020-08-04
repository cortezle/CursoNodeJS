/**
 * 
 */


 function noArrow(){
     console.log("no arrow");
 }

 const arrow = (cb)=>{
     console.log("Arrow function")
     cb();
 };

 noArrow();
 arrow(()=>{
     console.log("arrow cb")
 });