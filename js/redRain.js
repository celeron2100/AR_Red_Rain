 function createRain(opt){
    return this.init(opt);
 }

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
};


 createRain.prototype.init=function(opt){
        var options=$.extend({
            size          : 2, 
            content       : '', 
            className     : 'redPack', 
            redClassName  : 'rain-hb', 
            topRange      : 100, 
            leftRange     : 80, 
            duration      : 300, 
            creatCallBack : function(){}, 
            clickCallBack : function(){}, 
            overCallBack  : function(){} 

        },opt||{});
        var rainHtml='',
            o=options,
            rainTimers=setInterval(function(){
                rainHtml='';
                for(var i=0;i<o.size;i++){
                    var top=-Math.floor(Math.random()*o.topRange+20)+"%",  
                        left=Math.floor((Math.random()+0.1)*o.leftRange)+"%"; 
                    var size = (getRandom(5,10) * 10) + "px";
                    var rotateY = (Math.random() * 100) + "deg";
                    // TODO 紅包+上 ID

                    rainHtml+= '<a class="'+o.redClassName+' hb-anim" style="width:'+ size + ';height:' + size +  '; top:'+top+';left:'+left+';cursor:pointer;background-size:cover;"  onclick="showmemoney(this.style.top,this.style.left);">'+o.content+'</a>';
                }
                $("."+o.className).append(rainHtml);
                
            },1000);
            $("."+o.className).on('click',"."+o.redClassName,function(e){
                e.preventDefault();
                $(this).hide();
                if(o.clickCallBack){
                    o.clickCallBack();
                }
            });
            if(o.creatCallBack){
                o.creatCallBack();
            }
            var durationTimer=setTimeout(function(){
                clearInterval(rainTimers);
                clearTimeout(durationTimer);
                if(o.overCallBack){
                    o.overCallBack();
                    
                }
            },o.duration*1000);
  
    }