var change = document.querySelector("div");
var fontL = document.querySelector(".L");
var fontS = document.querySelector(".S");
function changefontL (){
change.classList.add("fontL");


}
function changefontS (){
    change.classList.add("fontS");
    

}

fontL.onclick = changefontL;
fontS.onclick = changefontS;