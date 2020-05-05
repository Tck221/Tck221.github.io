
//  让字和背景平滑变色（有啥用？）
var streamer = (function(){
    var bStyle = document.body.style;
    var switcher = false;
    var ci = 0;
    var color = 0;
    function turnS(){
        if(switcher)
            switcher = false;
        else
            switcher = true;
        return switcher;
    }
    function runrgb(){
        //  一次变化 一次更新
        color = color + 197125;
        if(color > 16777215) color = color % 16777216;
        bStyle.color = "#" + fmtColor(color);
        bStyle.backgroundColor = "#" + fmtColor(16777215 - color);
    }
    function fmtColor(color){
        var a = color.toString(16);
        var b = 0;
        var c = 6 - a.length;
        for(b = 0 ; b < c ; b++)
            a = "0" + a;
        return a;
    }
    return function(classname){
        if(turnS())
            ci = setInterval(runrgb,16);
        else
            clearInterval(ci);
    }
})();