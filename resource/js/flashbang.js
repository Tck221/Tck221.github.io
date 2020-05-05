
//  Flashbang  全白>慢慢变黑
var flashbang =(function(){
    var bStyle = document.body.style;
    var ci = 0;
    var colorI = 16777215;
    function reset(){
        colorI = 16777215;
        clearInterval(ci);
        bStyle.backgroundColor = "#ffffff";
        bStyle.color = "#ffffff";
    }
    function fmtColor(color){
        var a = color.toString(16);
        var b = 0;
        var c = 6 - a.length;
        for(b = 0 ; b < c ; b++)
            a = "0" + a;
        return a;
    }
    return function(){
        reset();
        ci=setInterval(function(){
            colorI = colorI - 197379;
            bStyle.backgroundColor = "#" + fmtColor(colorI);
            if(colorI <= 0)
                clearInterval(ci);
        },16);
    }
})();

export.flashbang = flashbang;