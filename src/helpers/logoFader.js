import $ from "jquery";

$(window).scroll(function() {
        var scrollTop = $(window).scrollTop() - $(window).height() / 3;
      
        $('#topNavigationLogo').css({
          opacity: function() {
            var screenHeight = $(window).height();
            var opacity;
            var calcOpacity = (scrollTop / (screenHeight / 2));
            if(calcOpacity > 1){opacity = 1}
            else if(calcOpacity < 0){opacity = 0} 
            else{opacity = calcOpacity}
            return opacity;
          },
          transition:"500ms"
        });
    
        $('#mainL').css({            
          opacity: function() {
            var screenHeight = $(window).height();
            var opacity;
            var calcOpacity = (1 - scrollTop / (screenHeight / 2));
            if(calcOpacity > 1){opacity = 1}
            else if(calcOpacity < 0){opacity = 0} 
            else{opacity = calcOpacity}
            return opacity;
          },
          transition:"500ms"});
});