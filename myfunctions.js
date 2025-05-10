{
/*Credit to a Stackoverflow contributer for the original fadein and fadeout functions. 
https://stackoverflow.com/questions/6121203/how-to-do-fade-in-and-fade-out-with-javascript-and-css */
    function fade(element) {
        var op = 1;  // initial opacity
        var timer = setInterval(function () {
            if (op <= 0.01){
                clearInterval(timer);
//                element.style.display = 'none';
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, 50);
    };
    function unfade(element) {
        var op = 0.01;  // initial opacity
//        element.style.display = 'block';//When placed here this makes the transition jarring.
        var timer = setInterval(function () {
            if (op >= 1){
                clearInterval(timer);
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += op * 0.1;
            element.style.display = 'block';
//            element.style.visibility = 'visible'
        }, 50);
    };
};
{
    function hoverfade(element) {
        if(!element.ishover) {
            element.ishover=true;
            var op = 1;
            var timer = setInterval(function () {
                element.style.opacity = op;
                element.style.filter = 'alpha(opacity=' + op * 100 + ")";
                if (element.matches(':hover')&&op >= 0.01) {
                    op -= op * 0.1;
                } else if (op <= 1) {
                    op += op * 0.1;
                }
                if (op >= 1){
//                    clearInterval(timer);
                }
            }, 50);
            element.ishover=false;
        }
    }
}
function MWget(str) {//Wrote a shorter function for this because I was using it so much.
    element = document.getElementById(str);
    return element;
}
