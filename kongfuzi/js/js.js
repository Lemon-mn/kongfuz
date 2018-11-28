// 广告活动部分
var oAd = document.getElementById("ad");
        var oadBtn = document.getElementById("adbtn");
        oadBtn.onclick = function(){
            oAd.style.display = "none";
        }
    //    console.log(oadBtn);

// 头部导航 二级菜单
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
        

// 左侧导航菜单 图书
//点击事件按钮
var aListBtn=document.querySelectorAll(".list-group-item");
//二级菜单列表
var aListUl=document.querySelector(".detail-item")
// 遮盖元素
var aCover=document.querySelectorAll(".cover");
for(var i=0;i<aListBtn.length-1;i++){
    // console.log(aListBtn[i]);
    aListBtn[i].index=i;
    aListBtn[i].onmouseover=function(){ 
            aListUl.style.display="block";
            this.style.border="2px solid #8c222c";
             //console.log(aListBtn[i]);
            aCover.style.display="block";        
            
            }
        aListBtn[i].onmouseout=function(){
            aListUl.style.display="none"
            this.style.border=""; 
            aCover.style.display="none"; 
            
        }
}  

// 艺术品与收藏
var aListBtn2=document.querySelectorAll(".list-group-item2");
//二级菜单列表
var aListUl2=document.querySelector(".detail-item2")
// 遮盖元素
var aCover2=document.querySelectorAll(".cover2");
for(var i=0;i<aListBtn2.length-1;i++){
    // console.log(aListBtn2[i]);
    aListBtn2[i].index=i;
    aListBtn2[i].onmouseover=function(){ 
            aListUl2.style.display="block";
            this.style.border="2px solid #8c222c";
             //console.log(aListBtn[i]);
            aCover2.style.display="block";        
            
            
            }
        aListBtn2[i].onmouseout=function(){
            aListUl2.style.display="none"
            this.style.border=""; 
            aCover2.style.display="none"; 
            
        }
} 

// 轮播图
var aButton = document.querySelectorAll(".img-button button");
var oImg=document.querySelectorAll(".img-box li");
var index=0;
 clearInterval(timer);
var timer=setInterval(function(){
    oImg[index].style.opacity="0";
   if(index==oImg.length-1){
       index=0;
   }else{
       index++;
   }          
   oImg[index].style.opacity="1";       
  },5000)

// for(var i=0;i<aButton.length;i++){
//     console.log(oImg);
//     console.log( aButton);
//     aButton[i].index=i;
//     aButton[i].onmouseover=function(){ 
//             for(var i = 0; i<aButton.length;i++){
//                 aButton[i].className = "";
//                 oImg[i].className = "";
//                 console.log(oImg[i]);
//             }
//                 this.className = "button-active";
//                 // console.log(this.index);
//                 oImg[this.index].className ="button-active";
            
//         }    
        
// }  


// 选项卡
var aTitle=document.querySelectorAll(".enter");
var aTitleUl=document.querySelectorAll(".friend-content ul")
for(var i=0;i<aTitle.length;i++){
    // console.log(aTitle);
    // console.log( aTitleUl);
    aTitle[i].index=i;
        aTitle[i].onmouseover=function(){ 
            for(var i = 0; i<aTitle.length;i++){
                aTitle[i].className = "";
                aTitleUl[i].className = "";
                // console.log(aTitle[i]);
            }
                this.className = "active";
                // console.log(this.index);
                aTitleUl[this.index].className ="active";
            
        }    
        
}  

// 瀑布流
function WaterFull(){};
    //初始化
    //1 声明对应的我属性
    //2 调用核心功能
    WaterFull.prototype.init = function(){
        this.ul = document.querySelector(".advice-wrap ul");
        this.pagenum=0;
        //设置加载开关 避免高频触发
        this.rendering = false;
        this.loadJson()
        .then(function(data){
            console.log(this.json);
            console.log(data);
            this.rendPage();
        }.bind(this))
        this.handleEvent();
    }

    WaterFull.prototype.handleEvent = function(){
        //是否加载json
        onscroll = this.ifRender.bind(this);

    }

//核心精髓~
    WaterFull.prototype.ifRender = function(){
        //如果子集元素没有创建 那么就终止判定功能执行
        var children = this.ul.children;
        //如果正在渲染，终止判定功能
        if(children.length == 0) return 0;
        if(this.rendering ) return 0;       
        //可视区域到文档顶部的距离
        var scrollTop = document.body.scrollTop ||
        document.documentElement.scrollTop;
        //可视区域
        var clientHeight = document.documentElement.clientHeight;
        //最后一个内容
        var lastChildren = children[children.length-1];
        var lastTop = lastChildren.offsetTop;
        if(clientHeight + scrollTop > lastTop){
            console.log("加载数据");
            this.rendering = true;
            this.pagenum ++;
            this.rendPage();
        }
    }
//加载路径
     WaterFull.prototype.loadJson = function(){
         return new Promise(function(success){
            var xhr = new XMLHttpRequest();
            xhr.open("GET","../data/data.json");
            xhr.send(null);
            xhr.onload = function(){
                if(xhr.status){
                    this.json = JSON.parse(xhr.response);
                    success(xhr.response);
                }
         }.bind(this);

         }.bind(this));        
    }

    WaterFull.prototype.rendPage = function(){
        var html="";
        var list = this.json.subjects;
        for(var i=this.pagenum*6;i<=this.pagenum*6+3;i++){
            html +=`<li>
                        <img src="${list[i].images.small}" alt=""/>
                        <h4>${list[i].title}</h4>
                    </li>`
            
        }
        this.ul.innerHTML += html;
        //渲染完后关闭
        this.rendering = false;
    }

    var waterFull = new WaterFull;
    waterFull.init();

  


