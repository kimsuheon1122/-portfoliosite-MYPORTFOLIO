const main_cover = document.getElementsByClassName("main_cover");
const main_cover_h3 = document.querySelectorAll(".main_cover h3");
const main_cover_p = document.querySelector(".main_cover p");


var index= 0;

let interval =
    setInterval(function(){
        main_cover_h3[index++].classList.remove("display_hidden");
        if(index === main_cover_h3.length){
            clearInterval(interval);
            index = 0;
        }
    },1500)
setTimeout(function(){
    for(let i = 0; i<main_cover_h3.length; i++){
        main_cover_h3[i].classList.add("display_hidden");
    }
},5500)

setTimeout(function(){
    for(let i = 0; i<main_cover_h3.length; i++){
        main_cover_h3[i].classList.add("display_none");
    }
    main_cover_p.classList.remove("display_hidden");

},5800)

setTimeout(function(){
    main_cover[0].style["justify-content"] = 'flex-start'
},8000)

