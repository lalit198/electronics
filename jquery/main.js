$(document).ready(function(){
    $(".second_section1_click2").click(function(){
      $(".second_section2").css("display" , "block");
      $(".second_section1").css("display" , "none");
    });

    $(".second_section1_click1").click(function(){
        $(".second_section1").css("display" , "block");
        $(".second_section2").css("display" , "none");
      });
  });