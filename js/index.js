 $(function(){

    var baseline=-100;
    var box1=$("#page1").offset().top;
    var box2=$("#page2").offset().top;
    var box3=$("#page3").offset().top+baseline;
    var box4=$("#page4").offset().top+baseline;
    var box5=$("#page5").offset().top+baseline;

    $(window).on("scroll",function(){
        var s=$(this).scrollTop();
        $("#page4>ul>li>div>div").removeClass("on")

        $("#index").css({"display":"none"})

        if(s>=box2&&s<box3){
    
            $("#index").css({"display":"block"})
            $("#index>li").removeClass("on")
            $("#index>li").eq(0).addClass("on")
        }
       
        if(s>=box3&&s<box4){
            
            $("#index").css({"display":"block"})
            $("#index>li").removeClass("on")
            $("#index>li").eq(1).addClass("on")
            
    
        }
            
        
        if(s>=box4&&s<box5){
           
            $("#index").css({"display":"block"})
            $("#index>li").removeClass("on")
            $("#index>li").eq(2).addClass("on")
            $("#page4>ul>li>div>div").removeClass("on")
            $("#page4>ul>li>div>div").addClass("on")
            
    
        }
        
        
    
        if(s>=box5){
            
            $("#index").css({"display":"block"})
            $("#index>li").removeClass("on")
            $("#index>li").eq(3).addClass("on")
            
        }
    
    })

    $("#index>li").on("click",function(){
        
        target=$(this).children("a").attr("href")
        t=$(target).offset().top;

        movescroll(t);
    
    })

    function movescroll(t){

        $("html, body").stop().animate({"scrollTop":t},1000)

    }

    /*로고클릭탑으로가기*/
    
    $("#index>a").on("click",function(){
        $("html,body").animate({"scrollTop":"0"},1000)
    })
   
    

     var i = 0;
        setInterval(function(){

            if(i<2){
                i++;
            } else {
                i = 0;
            }
            $(".pg2_right>div").fadeOut()
            $(".pg2_right").children("div").eq(i).fadeIn()
        },3000);

        $(function(){

            var total=$(".page3_wrap>div").length;
            var mm=0;
            /*
            start();
        
            function start(){
        
                time2 = setInterval(function(){
                    if(mm==total-1){
                        mm=0;
                    }
                    else{
                        mm++
                    }
            
                    $(".page3_wrap>div").fadeOut()
                    $(".page3_wrap>div").eq(mm).fadeIn()
                },3000)
        
            }

            */
    
            $(".right").on("click",function(){
                
                if(mm==total-1){
                    mm=0;
                }
                else{
                    mm++
                }
                
                $(".page3_wrap>div").fadeOut()
                $(".page3_wrap>div").eq(mm).fadeIn()
                
                })
    
            $(".left").on("click",function(){
                
                if(mm==0){
                    mm=total-1;
                }
                else{
                    mm--
                }
                    
                $(".page3_wrap>div").fadeOut()
                $(".page3_wrap>div").eq(mm).fadeIn()
              
                })


    })


    
});

