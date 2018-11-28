// 头部导航 二级菜单
// 登录注册二级菜单
var aLogin=document.querySelectorAll(".login");
for(var i=0;i<aLogin.length;i++){
    //console.log(aList[i]);
    aLogin[i].onmouseover=function(){       
                this.children[1].style.display="block";
            }
            aLogin[i].onmouseout=function(){
            this.children[1].style.display="none"
        }           
}


var aList=document.querySelectorAll(".show-list");
//console.log(aList);
for(var i=0;i<aList.length;i++){
    //console.log(aList[i]);
        aList[i].onmouseover=function(){
            
                this.children[1].style.display="block";
            }
        aList[i].onmouseout=function(){
            this.children[1].style.display="none"
        }
            
}
var aLi=document.querySelectorAll(".show-common");
for(var i=0;i<aLi.length;i++){
    //console.log(aList[i]);
        aLi[i].onmouseover=function(){
            
                this.children[1].style.display="block";
                this.children[1].style.borderBottom=" 1px solid #fff"; 
            }
        aLi[i].onmouseout=function(){
            this.children[1].style.display="none"
        }           
}
// 地址二级菜单
var aArea=document.querySelector(".area");
    //console.log(aList[i]);
    aArea.onmouseover=function(){       
                this.children[1].style.display="block";
            }
            aArea.onmouseout=function(){
            this.children[1].style.display="none"
        }           
var aReaList = document.querySelectorAll(".area-item");
var aAreaAdress=document.querySelector(".area");
var aAreaAdress2=document.querySelector(".area-adress2")
    aAreaAdress.onclick=function(evt){
                var e = evt.event || window.event;
　　　　         var target = e.target || e.srcElement;
            for(var i=0;i<aReaList.length;i++){
                aReaList[i].children[0].style.background="#fff";
                aReaList[i].children[0].style.color="#666";
            }
                if(target.nodeName=="SPAN"){
                    target.style.background="#8c222c";
                    target.style.color="#fff";
                    var inner = target.innerText;
                    aAreaAdress2.innerHTML=inner;
                    console.log(target,inner);
                }
                    
                
            }

// 放大镜
var oSmall = document.querySelector(".details-box-l");
var oSmall_img = oSmall.children[1];
var oBig = document.querySelector(".big");
var oFrame = document.querySelector(".frame");
var oBig_img = oBig.children[0];
//鼠标移入small框 让隐藏掉的放大框 显示
oSmall.onmouseenter = function(){
    oBig.style.display = "block";
    oFrame.style.display = "block";
    //让图片模糊
    oSmall_img.style.opacity = "0.3";
}
//鼠标移出small框 再隐藏掉放大框 
oSmall.onmouseleave = function(){
    oBig.style.display = "none";
    oFrame.style.display = "none";
    oSmall_img.style.opacity = "1";
}
//边界检测
//设置放大镜的边界值=>small框的大小
oSmall.onmousemove = function(event){
    //解决兼容问题
    var e = event || window.event;
    //声明 左 上 的偏移值
    var nLeft = e.offsetX - size / 2;
    var nTop = e.offsetY - size / 2;
    // 最小值 左 上大于等于0
    if(nLeft <= 0){
        nLeft = 0;
    }
    if(nTop <= 0){
        nTop = 0;
    }
    //最大值 small框的宽度减去放大镜的宽度
    //左 上 小于最大值=>small框的宽度减去放大镜的宽度
    var maxLeft = oSmall.offsetWidth - oFrame.offsetWidth;
    if(nLeft >= maxLeft){
        nLeft = maxLeft
    }
    var maxTop = oSmall.offsetHeight - oFrame.offsetHeight;
    if(nTop >= maxTop){
        nTop = maxTop;
    }
    oFrame.style.left = nLeft + "px";
    oFrame.style.top = nTop + "px";  
    
    // 计算比例;
    var propX = oBig.offsetWidth / oFrame.offsetWidth;
    // 根据比例算出位移值;
    oBig_img.style.left = -nLeft * propX + "px";
    var propY = oBig.offsetHeight / oFrame.offsetHeight;
    oBig_img.style.top = -nTop * propY + "px";
    //设置背景的位置
    oFrame.style.backgroundPosition = `${-nLeft}px ${-nTop}px`
}
//滚轮事件
var size = 40;
if(document.addEventListener){
    document.addEventListener('DOMMouseScroll',handleEvent,false);
window.onmousewheel = document.onmousewheel = handleEvent;
//分辨滚轮向上还是向下
function handleEvent(event){
    var e = event || window.event;
    console.log(e);
    var falg = true;//true=>向上 false=>向下
    if(e.detail != 0){
        //说明浏览器是火狐
        if(detail > 0){
            flag = false;//向下 
        }else{
            flag = true;//向上
        }
        }else{
            if(e.deltaY > 0){
            flag = false;//向下 
            }else{
                flag = true;//向上
            }
        }
        if(flag){
                // 放大;
                size ++;	
            }else{
                // 缩小;
                size --;	
                }	
            oFrame.style.width =  size + "px";
            oFrame.style.height = size + "px";	
            //让鼠标在中点 调用onmousemove
            oSmall.onmousemove(e);
            // 大图和小图的比例计算;
            // 160 => big 的 宽高;
            var prop = 160 / size;
            // 根据比例缩放图片 ;
            oBig_img.style.width = 160 * prop + "px";
            oBig_img.style.height = 160 * prop + "px";
                    
    }
}	
    


// 查看详情
$(function(){
   
    $(".see").mouseover(function(){
        $(".see-info1").slideDown(1000);
        $(".details-box")
        .stop().animate({
            height:"600"
        })
      });
    $(".see").mouseout(function(){
        $(".see-info1").slideUp();
        $(".details-box")
        .stop().animate({
            height:"350"
        })   
        // console.log(1)
    })
    
      
})
