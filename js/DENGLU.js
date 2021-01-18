// JavaScript Document
var index=0;
  var box = my$("box");
  var inner = box.children[0];
  var imgWidth = inner.offsetWidth;
  var ulObj = inner.children[0];
  var list = ulObj.children;
  var olObj = inner.children[1];
  var arr = my$("arr");
 

  for (var i = 0; i < list.length; i++) {
    var liObjs = document.createElement("li");
    olObj.appendChild(liObjs);
    liObjs.innerHTML = (i + 1);
  
    liObjs.setAttribute("index", i);
  
    liObjs.onmouseover = function () {
   
      for (var j = 0; j < olObj.children.length; j++) {
        olObj.children[j].removeAttribute("class");
      }
    
      this.className = "current";
   
       index = this.getAttribute("index");
 
      animate(ulObj, -index * imgWidth); 
    };
  }

  olObj.children[0].className = "current";

  ulObj.appendChild(ulObj.children[0].cloneNode(true));
 
 
  var timeId=setInterval(clickHandle,3000);
 
  my$("box").onmouseover=function(){
   arr.style.display="block";
   clearInterval(timeId);
  };
  
    my$("right").onclick=clickHandle;
    function clickHandle() {
      if (index==ulObj.children.length-1){
        ulObj.style.left=0+"px";
        index=0;
      }
      index++;
      animate(ulObj,-index*imgWidth);
      if (index==list.length-1){
        olObj.children[0].className="current";
        olObj.children[olObj.children.length-1].className="";
      }else {
        for (var i=0;i<olObj.children.length;i++){
          olObj.children[i].className="";
        }
        olObj.children[index].className="current";
      }
    };

    my$("left").onclick=function () {
      if (index==0){
        index=list.length-1;
        ulObj.style.left=-index*imgWidth+"px";
      }
      index--;
      animate(ulObj,-index*imgWidth);
      for (var i=0;i<olObj.children.length;i++){
        olObj.children[i].className="";
      }
      olObj.children[index].className="current";
    };
 
  my$("box").onmouseout=function(){
    arr.style.display="none";
    timeId=setInterval(clickHandle,3000);
  };
 
 
 
  function animate(element, target) {
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
      var current = element.offsetLeft;
      var step = 9;
      step = current > target ? -step : step;
      current += step;
      if (Math.abs(target - current) > Math.abs(step)) {
        element.style.left = current + "px";
      } else {
        clearInterval(element.timeId);
        element.style.left = target + "px";
      }
    }, 10);
  }
　　function my$(id) {
  　　 return document.getElementById(id);
　　　　}
/*登录*/


