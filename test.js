var powerOn = document.querySelectorAll(".clickBox");
var giveScroll = document.getElementById("bod");
var hideSocial = document.getElementById("socialStack");
// On click
for (let i = 0; i < powerOn.length; i++) {


        powerOn[i].addEventListener("click", function () {
                addVisibility();
                giveScroll.classList.remove("hideScroll");
                socialStack.classList.add("hideMe");



        });
};


var letters = document.querySelectorAll(".st0, .st1");
var powerIcon = document.querySelectorAll(".clickBox, .st2");
var courseCon = document.querySelectorAll(".courseContent");

var addVisibility = function () {
        for (var i = 0; i < letters.length; i++) {
                letters[i].classList.toggle("hideMe");

        }
        for (var j = 0; j < powerIcon.length; j++) {
                powerIcon[j].classList.toggle("moveAcross");
        }
        for (let k = 0; k < courseCon.length; k++){
                courseCon[k].classList.add("hideMe");
        }



        document.getElementById("logIn").classList.toggle("slide");
        document.getElementById("scroll1").classList.toggle("hideMe");
        document.getElementById("scroll2").classList.toggle("hideMe");


};






// ----------------------- code to reset css animations below ------------------------------------
// Using for loops for each section - letters, power icon, {C and N} to remove old animations and re-add new.

"use strict";

// retrieve the elements
var letters2 = document.querySelectorAll(".st3");
var scroller = document.getElementById("scroll1");
var bracketC = document.querySelectorAll(".st5");
var nBracket = document.querySelectorAll(".st6");
var scroller2 = document.getElementById("scroll2");


// reset the transition by...
window.addEventListener("scroll", function (e) {

        for (let i = 0; i < letters2.length; i++) {
                e.preventDefault;

                // -> removing the previous animation classes
                letters2[i].classList.remove("animated");
                letters2[i].classList.remove("fadeInRight");
                letters2[i].classList.remove("fadeInLeft");
                letters2[i].classList.remove("fadeInLeftBig");
                letters2[i].classList.remove("fadeInRightBig");
                letters2[i].classList.remove("fadeIn");

                // -> and re-adding the class
                letters2[i].classList.add("hidethis");
        }

        for (var j = 0; j < powerIcon.length; j++) {
                powerIcon[j].classList.remove("animate-flicker");
                powerIcon[j].classList.remove("move");

                powerIcon[j].classList.add("hidethis");
        }

        for (var k = 0; k < bracketC.length; k++) {
                bracketC[k].classList.remove("animated");
                bracketC[k].classList.remove("fadeInLeft");
                bracketC[k].classList.remove("fadeInLeftBig");

                bracketC[k].classList.add("moveTogetherR");
        }

        for (var n = 0; n < nBracket.length; n++) {
                nBracket[n].classList.remove("animated");
                nBracket[n].classList.remove("fadeInRight");
                nBracket[n].classList.remove("fadeInRightBig");

                nBracket[n].classList.add("moveTogetherL");
        }


}, false);



var handler = function (e) {
        let shape = document.getElementsByTagName("svg")[0];
        let sticky = document.getElementById("svgCon");
        let wrap = document.getElementById("wrapMe");
        let main = document.getElementById("bod");
        let jumbo = document.getElementById("information");
        let title = document.getElementById("mastCc");
        var menu = document.getElementById("hamburgerMenu");
        let topping = () => {
                window.addEventListener("scroll", topFunc);
        }

        if (window.pageYOffset < 320) {
                sticky.style.position = "absolute";


        } else {
                sticky.style.position = "absolute";
                sticky.style.top = "0";
                shape.setAttribute("viewBox", "240 270 800 375");
                wrap.style.marginTop = "0";
                wrap.style.height = "100px";
                svG.style.height = "200px";
                /*svG.style.marginTop = "-220px";*/
                svgCon.style.zIndex = "2";
                svgCon.style.height = "600px";
                svgCon.style.marginTop = "-100px";
                jumbo.classList.remove("hideMe");
                title.classList.add("hideMe");
                sticky.style.backgroundColor = "transparent";
                topping();
                document.getElementById("scroll1").classList.toggle("hideMe");
                document.getElementById("scroll2").classList.toggle("hideMe");
                main.style.backgroundColor = "#FFFFFF !important";
                menu.classList.remove("hideMe");
                setTimeout(cancelTop, 500);
                removeEventListener("scroll", handler, false);
                


        };

};

addEventListener("scroll", handler, false);

var topFunc = function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
};

var cancelTop = () => {
        removeEventListener("scroll", topFunc, false);
}

var hamMenu = document.getElementById("hamburgerMenu");
var tagLine1 = document.getElementById("intro1");
var tagLine2 = document.getElementById("intro2");
var tagLine3 = document.getElementById("intro3");

hamMenu.addEventListener("click", function(){
        hamMenu.classList.toggle("is-active");

        // animated out (and back in) the tagline text

        tagLine1.classList.toggle("bounceInLeft");
        tagLine1.classList.toggle("slideOutLeft");

        setTimeout(function(){tagLine2.classList.toggle("bounceInLeft");
        tagLine2.classList.toggle("slideOutLeft");}, 100);

        setTimeout(function(){tagLine3.classList.toggle("bounceInLeft");
        tagLine3.classList.toggle("slideOutLeft");}, 300);

       
});