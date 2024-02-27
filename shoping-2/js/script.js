// fixed nan
// const navEl=document.querySelector("nav")
// const setoneEl=document.querySelector("setone")
// window.addEventListener("scroll", () => {
 
//    navEl.classList.add("fixed") ;});

// end fixed nan

// مودال ایکن سرچ نوبار 
const SearchBarEl=document.querySelector("#SearchBar");
closeiconEl=document.querySelector("#closeicon");
const activeEl=document.querySelector("active");
const searchEl=document.querySelector("#search");
searchEl.addEventListener("click",()=>{ 
    SearchBarEl.classList.toggle( "active" );
})


closeiconEl.addEventListener("click",()=>{  
    SearchBarEl.classList.toggle( "active" ) ;
});

// پایان مودال سرچ نوبار
const setthree1El=document.querySelector("#setthree1");
const divnoneEl=document.querySelector( "#divnone" );
setthree1El.addEventListener("click",()=>{
    divnoneEl.classList.toggle('show')

})
const setthree21El=document.querySelector("#setthree2");
setthree21El.addEventListener("click",()=>{
    divnoneEl.classList.toggle('show')

})
// hamder modal

// سکشن منو همبرگری
const menuhamEl=document.querySelector("#menuham");
// دکمه کلوز
const hamclosEl=document.querySelector("#hamclos");
// کلاس نمایش منو همبرگری
const activemenuEl=document.querySelector("activemenu");
// ایکن منو همبرگری
const menoeEl=document.querySelector("#iconee");

menoeEl.addEventListener("click",()=>{ 
    menuhamEl.classList.add( "activemenu" );
})


hamclosEl.addEventListener("click",()=>{  
    menuhamEl.classList.remove("activemenu") ;
});


// div hover

const imagone21El=document.querySelector("#imagone2");

const imagone1El=document.querySelector("#imagone");

imagone1El.addEventListener("mouseover", () => {
    imagone21El.style.display = "block";
});
imagone1El.addEventListener("mouseout", () => { 
    imagone21El.style.display = "none" ;
});







