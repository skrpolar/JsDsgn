var catNum = 5;
    catNum_arr = [],
    catListOl = document.getElementById("catListOl"),
    catTitle = document.getElementById("catTitle"),
    catClickNum = document.getElementById("catClickNum"),
    juageBox = document.getElementById("juageBox");

for(var k = 1; k <= catNum; k ++) {
    window["catClickNum" + k] = 0;
}
for(var m = 1; m <= catNum; m ++) {
    window["catLi" + m] = 0;
}
for(var i = 1; i <= catNum; i ++) {
    window["catLi" + i] = document.createElement("li");
    window["catLi" + i].id = "catList" + i;
    window["catLi" + i].innerText = "cat" + i;
    window["catLi" + i].addEventListener("click",(function(c){
            return function(){
                window["catImg" + c] = document.createElement("img");
                window["catImg" + c].src = "cat" + c + ".jpg";
                window["catImg" + c].addEventListener("click",function() {
                    window["catClickNum" + c] ++;
                    catClickNum.innerText = window["catClickNum" + c];
                },false);
                catTitle.innerText = "Cat" + c;
                catClickNum.innerText = window["catClickNum" + c];
                if(!juageBox.hasChildNodes()) {
                    juageBox.appendChild(window["catImg" + c]);
                }else{
                    while(juageBox.hasChildNodes()) {
                        juageBox.removeChild(juageBox.firstChild);
                    }
                    juageBox.appendChild(window["catImg" + c]);
                }
    }
})(i),false);
    catListOl.appendChild(window["catLi" + i]);
}