/*
*判别鼠标滚动方向
*/
var scrollFunc = function (e) {  
        e = e || window.event;  
        var scrollTop = window.pageYOffset   
                || document.documentElement.scrollTop    
                || document.body.scrollTop    
                || 0; 
                e.preventDefault();
        if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件               
            if (e.wheelDelta > 0) { //当滑轮向上滚动时 
          scrollTop>361?(window.scrollTo(0,scrollTop-300)):(window.scrollTo(0,0)); 
            }  
            if (e.wheelDelta < 0) { //当滑轮向下滚动时  
             scrollTop <= 361?(window.scrollTo(0,scrollTop=362)):(window.scrollTo(0,scrollTop+300));
            }  
        } else if (e.detail) {  //Firefox滑轮事件  
            if (e.detail> 0) { //当滑轮向上滚动时  
            scrollTop>361?(window.scrollTo(0,scrollTop-300)):(window.scrollTo(0,0)); 
            }  
            if (e.detail< 0) { //当滑轮向下滚动时  
                 scrollTop <= 361?(window.scrollTo(0,scrollTop=362)):(window.scrollTo(0,scrollTop+300));
            }  
        }
        console.log(scrollTop);  
    }  

    //给页面绑定滑轮滚动事件  
    if (document.addEventListener) {//firefox  
        document.addEventListener('DOMMouseScroll', scrollFunc, false);  
    }  
    //滚动滑轮触发scrollFunc方法  //ie 谷歌  
    window.onmousewheel = document.onmousewheel = scrollFunc;
//监听结束
