
//  用ajax返回文本数据并包装。
var activedShowing = (function(){
    var xajax,
        textDiv,
        input;
    xajax   = new XMLHttpRequest();
    textDiv = document.getElementById("ajaxxx");
    input   = document.getElementById("hrefff");
    xajax.onreadystatechange = function(){
        console.log(this.readyState+"  "+this.status+"   "+this.statusText);
        var loadingflag = false;
        if (this.readyState == 4 && this.status == 200) {
            var arrText = xajax.responseText.split("\n");
            var arrText2 = arrText.map(fmtTxt);
            textDiv.innerHTML = arrText2.join("");
            console.log("Sucessed");
        }
        else if(this.status == 404){
            textDiv.innerHTML = "404";
        }
        else if(this.status == 403){
            //  现在大概不会出现
            textDiv.innerHTML = "403";
        }
        else if(this.status == 0 && this.readyState == 4){
            textDiv.innerHTML = "000";
        }
        else if(!loadingflag){
            textDiv.innerHTML = "201";
            loadingflag = true;
        }
    }
    function fmtTxt(value,index){
        if(index==0)
            return "<h2>"+value+"</h2>";
        else
            return "<p>"+value+"</p>";
    }
    return function(){
        var numHref = input.value;
        textDiv.innerHTML = "  ";
        if(isNaN(numHref) || numHref < 1 || numHref > 7 || numHref === "")
            input.value = "Not Good";
        else{
            var addr = "/blog/"+numHref+".txt";
            xajax.open("GET",addr,true);
            xajax.send();
            //textDiv.innerHTML = xajax.responseText;
            //  这个返回也太丑了，，，，
            //textDic.innerHTML = formatText(responseText);
            //var arrText = xajax.responseText.split("\n");
            //var arrText2 = arrText.map(fmtTxt);
            //textDic.innerHTML = arrText2.join("");
        }
    }
})();