var typed = new Typed(".typing",{
strings:["Frontend Web Developer","Web Designer","Freelancer","Portfolio Maker"],
typeSpeed:100,
BackSpeed:60,
loop:true 
})

const nav = document.querySelector(".nav"),
navList = document.querySelectorAll("li"),
totalNavList = navList.length;
allsection = document.querySelectorAll(".section")
totalsection = allsection.length
for(let i=0; i<totalNavList; i++)
{
   const A = navList[i].querySelector("a");
   A.addEventListener("click",function()
   {
     removeBackSection();
  
    for(let j=0;j<totalNavList;j++)
   {
   if(navList[j].querySelector("a").classList.contains("active"))
   {
      addBackSection(j);
   //   allsection[j].classList.add("back-section");   
   }
    navList[j].querySelector("a").classList.remove("active");
   }
   this.classList.add("active")
   showsection(this);
   if(window.innerWidth <1200){

      asideSectionTogglerBtn();
   }
   })
}

function removeBackSection(){
   for(let i = 0 ;i<totalsection; i++){
      allsection[i].classList.remove("back-section");
}
}

function addBackSection(num){
   allsection[num].classList.add("back-section");
}

function showsection(element){
   for(let i = 0 ;i<totalsection; i++){
   allsection[i].classList.remove("active");
   }
const target = element.getAttribute("href").split("#")[1];
   document.querySelector("#"+ target).classList.add("active")         
}

function updateNav(element){
for(let i=0; i<totalNavList; i++){
navList[1].querySelector("a").classList.remove("active")
const target = element.getAttribute("href").split("#")[1];
if(target===navList[i].querySelector("a").getAttribute("href").split("#")[1])
{

navList[i].querySelector("a").classList.add("active")



}
}}

document.querySelector(".hire-me").addEventListener(("click"),function(){
const sectionIndex = this.getAttribute("data-section-index");
//console.log(sectionIndex)
showsection(this);
updateNav(this);
removeBackSection();
addBackSection(sectionIndex);
})
 const navTogglerBtn = document.querySelector(".nav-toggler"),                                
 aside = document.querySelector(".aside")                                                                                                        
navTogglerBtn.addEventListener("click",()=>
{
asideSectionTogglerBtn();

})                                                               
function asideSectionTogglerBtn()
{
   aside.classList.toggle("open");
   navTogglerBtn.classList.toggle("open");
 for(let i=0; i<totalsection; i++){

allsection[i].classList.toggle("open");


}








}








