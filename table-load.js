
$('.main-app').mouseover(()=>{
            $('.search-bar').css("width", "50%")
            $('.search-bar').css("padding" ,"20px")
            $('.submit').css("font-size", "3vw")
            $('.submit').css( "color", "rgba(81, 0, 160, 0.64)")
         })
         $('.main-app').mouseout(()=>{
            $('.search-bar').css("width", "0%", "padding" ,"0px")
            $('.submit').css("font-size", "5vw")
            $('.search-bar').css("padding" ,"0px")
            $('.submit').css( "color", "rgba(81, 0, 160, 0.64)")
         })