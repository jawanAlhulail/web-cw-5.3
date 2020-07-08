let counter = document.querySelector(".counter");
const decreaseCount = document.querySelector("#countButton");
const resetCount = document.querySelector("#resetButton");

// أكمل
const athkar =[
 {thekr: "سبحان الله و بحمده"},
 { thekr: "رضينا بالله ربا و بالاسلام دينا و بمحمد نبيا رسولا "},
 {thekr: "لا الله الا الله"},
];
const randomThekr = document.querySelector("#thekr");
randomThekr.addEventListener("click", changeDisplayedThekr);

let count = 10;
decreaseCount.addEventListener("click", decrementCounter);
resetCount.addEventListener("click", resetCounter);

function decrementCounter() {
  if(count > "0"){
    count -- ;
  }
counter.innerHTML = count;

counter.animate([{opacity:"0.2"},{opacity:"1.0"}],
{
  duration: 500,
fill:"forwords",
});
}



  // أكمل
  // counter.innerHTML = count;
  // أضف خواص للقيمة داخل زر العداد حتى لا تظهر فجأة ولكن بالتدريج




  















// count عرف متغير
 


// Hide
function resetCounter() {
count = 10;

counter.innerHTML= count;
}







  // أكمل


// Hide
function changeDisplayedThekr() {

let number = Math.floor(Math.random()*athkar.length);
thekr.innerHTML = athkar[number].thekr;




console.log(number);
  // أكمل
}
