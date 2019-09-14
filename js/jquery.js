$(document).ready(function() {
    AOS.init();
    $(window).scroll(function() {
      if($(this).scrollTop() > 500) { 
          $('.navbar').addClass('solid');
      } else {
          $('.navbar').removeClass('solid');
      }
    });

    $(function(){
        $('.chart').easyPieChart({
            size: 150,
            barColor: '#A47CBD',
            scaleColor: false,
            lineWidth: 10,
            lineCap: 'circle',
            animate: 7000
        });
    });
});