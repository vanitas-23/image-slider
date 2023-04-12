const nextEl=document.querySelector(".next");
const prevEl=document.querySelector(".prev");
const imageContainerEl=document.querySelector(".image-container");
let currentImg=0;
nextEl.addEventListener("click",()=>{
currentImg++;
updateImg();
})
prevEl.addEventListener("click",()=>{
    currentImg--;
    update1Img();
    })
function updateImg(){
    if(currentImg>3)
    currentImg = 0;
    console.log(currentImg);
imageContainerEl.style.transform=`translateX(-${currentImg*500}px)` ;
}
function update1Img(){
if(currentImg<1)
currentImg=4;
console.log(currentImg);
imageContainerEl.style.transform=`translateX(-${(currentImg-1)*500}px)` ;
}