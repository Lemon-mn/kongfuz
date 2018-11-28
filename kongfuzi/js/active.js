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

function Pagination(){};
       $.extend(Pagination.prototype,{
           init:function(){
               //容器
               this.main = $(".search-wrap-box-content ul");
                //页码
                this.page = 1;
                //一页显示的数量
                this.pageNum = 20;
               this.loadJson()
               .done(function(res){
                //console.log(res);
                // this.data储存数据的;
                this.data = res;
                this.total = this.data.subjects.length;
                this.renderPage();
                this.usePagination();
               })
           },
           loadJson:function(){
               var opt = {
                   url:"http://localhost/phpnowfile/kongfuzi/data/douban.php",
                   dataType:"jsonp",
                   context:this
               };
               return $.ajax(opt);
           },
           renderPage:function(){
               var json = this.data.subjects;
               console.log(json);
               var html="";
               for(var i =(this.page-1)*20;i < (this.page*20)-1 ; i++){
                   html += `<li class="item">
                    <img class="imgbox" src="${json[i].images.small}" alt="">
                    <div class="text">
                    <p>${json[i].title}
                    <i>${json[i].year}</i>
                    <i>${json[i].genres}</i>
                   
                    </p>
                    <span>${json[i].casts[0].name}
                          ${json[i].casts[1].name}
                          ${json[i].casts[2].name}
                    </span>
                    </div>
                   </li> `
               }
            this.main.html(html);
           },
           usePagination:function(){
            $("#pagination").pagination({
                coping: true,
                homePage: '首页',
                endPage: '末页',
                prevContent: '上页',
                nextContent: '下页',
                totalData: 100,
                showData:20,
                pageCount: 5,
                callback:function(api){
                    this.page = api.getCurrent();
                    this.renderPage();
                }.bind(this)
            });
           }
       })
       var page = new Pagination();
       page.init();
