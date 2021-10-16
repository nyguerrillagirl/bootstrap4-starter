$(document).ready(function() {
    $("#reserveTableModal").on('show.bs.modal', function() {
        // Trigger button click on smoking component
        if (document.getElementById("nonsmoking").checked == true) {
            console.log("non-smoking is set!");
        }
        return true;
    });
    $('#mycarousel').carousel({ interval: 2000});
    $('#carouselButton').click(function() {
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
             $('#mycarousel').carousel('pause');
             $('#carouselButton').children('span').removeClass('fa-pause');
             $('#carouselButton').children('span').addClass('fa-play');
         } else {
             $('#mycarousel').carousel('cycle');
             $('#carouselButton').children('span').removeClass('fa-play');
             $('#carouselButton').children('span').addClass('fa-pause');
        }
        
    });

    // Handles Login modal display on click
    $('#login_btn').click(function() {
        console.log('login modal clicked - open model...');
        $('#loginModal').modal('show');
        return false;
    });

    // Handles Reserve Table modal display on button click
    $('#reserve_table_btn').click(function() {
     console.log('reserve table modal clicked - open model...');
        $('#reserveTableModal').modal('show');
   });

}) ;
