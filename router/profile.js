$(document).ready(function() {
  $('#circle').click(function() {
    $('#button_page').animate({left: "20vw"}, 300);
    $('#title').css('opacity', 0.5);
    $('#intro').css('opacity', 0.5);
    $('#switch').css('opacity', 0.5);
    $('#more_question').css('opacity', 0.5);
    $('#more_answer').css('opacity', 0.5);
    $('#save').css('opacity', 0.5);
    $('#down').css('opacity', 0.5);
  })
  $('#return').click(function() {
    $('#button_page').animate({left: "100vw"}, 300);
    $('#title').css('opacity', 1);
    $('#intro').css('opacity', 1);
    $('#switch').css('opacity', 1);
    $('#more_question').css('opacity', 1);
    $('#more_answer').css('opacity', 1);
    $('#save').css('opacity', 1);
    $('#down').css('opacity', 1);
  })
  var height = $("#more_question").offset().top;
  $('#more_answer').css('top', height);
  $('#save').css('top', height);
  $('#a').click(function() {
    var scrollval = $(window).scrollTop();
    $('#more_question').css('position', 'fixed');
    $('#save').css('position', 'fixed');
    if($('#q').css('background-color', '#ddd')) {
      $('#more_question').animate({left: "-100vw"}, 200);
      $('#more_answer').animate({left: 0}, 200, function(){
        $('#more_answer').css('position', 'absolute');
        var scrollval2 = $(window).scrollTop();
        if(scrollval <= scrollval2){
          $(window).scrollTop(scrollval);
        }
        
      });
      $('#save').animate({left: "100vw"}, 200);
      $('#q').css('background-color', 'white');
      $('#s').css('background-color', 'white');
      $('#a').css('background-color', '#ddd');
    }
    else if($('#s').css('background-color', '#ddd')) {
      $('#save').animate({left: "100vw"}, 200);
      $('#more_answer').animate({left: 0}, 200, function(){
        $('#more_answer').css('position', 'absolute');
        var scrollval2 = $(window).scrollTop();
        if(scrollval <= scrollval2){
          $(window).scrollTop(scrollval);
        }
      });
      $('#more_question').animate({left: "-100vw"}, 200);
      $('#q').css('background-color', 'white');
      $('#s').css('background-color', 'white');
      $('#a').css('background-color', '#ddd');
    }
  })
  $('#q').click(function() {
    var scrollval = $(window).scrollTop();
    $('#more_answer').css('position', 'fixed');
    $('#save').css('position', 'fixed');
    if($('#a').css('background-color', '#ddd')) {
      $('#save').animate({left: "100vw"}, 200);
      $('#more_answer').animate({left: "100vw"}, 200);
      $('#more_question').animate({left: 0}, 200,function(){
        $('#more_question').css('position', 'absolute');
        var scrollval2 = $(window).scrollTop();
        if(scrollval <= scrollval2){
          $(window).scrollTop(scrollval);
        }
      });
      $('#a').css('background-color', 'white');
      $('#s').css('background-color', 'white');
      $('#q').css('background-color', '#ddd');
    }
    else if($('#s').css('background-color', '#ddd')) {
      $('#save').animate({left: "100vw"}, 200);
      $('#more_answer').animate({left: "100vw"}, 200);
      $('#more_question').animate({left: 0}, 200,function(){
        $('#more_question').css('position', 'absolute');
        var scrollval2 = $(window).scrollTop();
        if(scrollval <= scrollval2){
          $(window).scrollTop(scrollval);
        }
      });
      $('#s').css('background-color', 'white');
      $('#a').css('background-color', 'white');
      $('#q').css('background-color', '#ddd');
    }
    
 
    
  })
  $('#s').click(function() {
   
    var scrollval = $(window).scrollTop();
    
    $('#more_answer').css('position', 'fixed');
    $('#more_question').css('position', 'fixed');
    if($('#q').css('background-color', '#ddd')) {
      $('#more_question').animate({left: "-100vw"}, 200);
      $('#more_answer').animate({left: "-100vw"}, 200);
      $('#save').animate({left: 0}, 200,function(){
        $('#save').css('position', 'absolute');
        var scrollval2 = $(window).scrollTop();
        if(scrollval <= scrollval2){
          $(window).scrollTop(scrollval);
        }
      });
      $('#q').css('background-color', 'white');
      $('#a').css('background-color', 'white');
      $('#s').css('background-color', '#ddd');
    }
    else if($('#a').css('background-color', '#ddd')) {
      $('#more_answer').animate({left: "-100vw"}, 200);
      $('#more_question').animate({left: "-100vw"}, 200);
      $('#save').animate({left: 0}, 200, function(){
        $('#save').css('position', 'absolute');
        $(window).animate({scrollTop:scrollval});
        var scrollval2 = $(window).scrollTop();
        if(scrollval <= scrollval2){
          $(window).scrollTop(scrollval);
        }
      });
      $('#a').css('background-color', 'white');
      $('#q').css('background-color', 'white');
      $('#s').css('background-color', '#ddd');
    }
  })
  $('#more_question').on('swipeleft', function(){
    var scrollval = $(window).scrollTop();
    $('#more_question').css('position', 'fixed');
    $('#save').css('position', 'fixed');
    $('#more_question').animate({left: "-100vw"}, 200);
    $('#more_answer').animate({left: 0}, 200);
    $('#save').animate({left: "100vw"}, 200,function(){
      $('#more_answer').css('position', 'absolute');
      var scrollval2 = $(window).scrollTop();
        if(scrollval <= scrollval2){
          $(window).scrollTop(scrollval);
        }
    });
    $('#q').css('background-color', 'white');
    $('#s').css('background-color', 'white');
    $('#a').css('background-color', '#ddd');
  })
  $('#more_answer').on('swipeleft', function(){
    var scrollval = $(window).scrollTop();
    $('#more_answer').css('position', 'fixed');
    $('#more_question').css('position', 'fixed');
    $('#more_answer').animate({left: "-100vw"}, 200);
    $('#more_question').animate({left: "-100vw"}, 200);
    $('#save').animate({left: 0}, 200,function(){
      $('#save').css('position', 'absolute');
      var scrollval2 = $(window).scrollTop();
        if(scrollval <= scrollval2){
          $(window).scrollTop(scrollval);
        }
    });
   
    $('#a').css('background-color', 'white');
    $('#q').css('background-color', 'white');
    $('#s').css('background-color', '#ddd');

  })
  $('#more_answer').on('swiperight', function(){
    var scrollval = $(window).scrollTop();
    $('#more_question').css('position', 'absolute');
    $('#more_answer').css('position', 'fixed');
    $('#save').css('position', 'fixed');
    $('#save').animate({left: "100vw"}, 200);
    $('#more_answer').animate({left: "100vw"}, 200);
    $('#more_question').animate({left: 0}, 200, function(){
      var scrollval2 = $(window).scrollTop();
        if(scrollval <= scrollval2){
          $(window).scrollTop(scrollval);
        }
    });
    $('#a').css('background-color', 'white');
    $('#s').css('background-color', 'white');
    $('#q').css('background-color', '#ddd');
  })
  $('#save').on('swiperight', function(){
    var scrollval = $(window).scrollTop();
    $('#more_answer').css('position', 'absolute');
    $('#more_question').css('position', 'fixed');
    $('#save').css('position', 'fixed');
    $('#save').animate({left: "100vw"}, 200);
    $('#more_answer').animate({left: 0}, 200, function(){
      var scrollval2 = $(window).scrollTop();
        if(scrollval <= scrollval2){
          $(window).scrollTop(scrollval);
        }
    });
    $('#more_question').animate({left: "-100vw"}, 200);
    $('#q').css('background-color', 'white');
    $('#s').css('background-color', 'white');
    $('#a').css('background-color', '#ddd');

  })
  

});


var tiger = document.getElementById('tiger');
var animItem = bodymovin.loadAnimation({
  wrapper: tiger,
  animType: 'svg',
  loop: true,
  path: 'https://assets10.lottiefiles.com/packages/lf20_1frvu8qg.json'
});

var panda = document.getElementById('panda');
var animItem = bodymovin.loadAnimation({
  wrapper: panda,
  animType: 'svg',
  loop: true,
  path: 'https://assets3.lottiefiles.com/packages/lf20_4fewfamh.json'
});

var monkey = document.getElementById('monkey');
var animItem = bodymovin.loadAnimation({
  wrapper: monkey,
  animType: 'svg',
  loop: true,
  path: 'https://assets8.lottiefiles.com/packages/lf20_gvxqafpw.json'
});

var dog = document.getElementById('dog');
var animItem = bodymovin.loadAnimation({
  wrapper: dog,
  animType: 'svg',
  loop: true,
  path: 'https://assets3.lottiefiles.com/packages/lf20_v7nRH3.json'
});

var platypus = document.getElementById('platypus');
var animItem = bodymovin.loadAnimation({
  wrapper: platypus,
  animType: 'svg',
  loop: true,
  path: 'https://assets1.lottiefiles.com/datafiles/EPFktofivDOgrpm/data.json'
});

var otter = document.getElementById('otter');
var animItem = bodymovin.loadAnimation({
  wrapper: otter,
  animType: 'svg',
  loop: true,
  path: 'https://assets2.lottiefiles.com/animated_stickers/lf_tgs_LjTcrc.json'
});

var octopus = document.getElementById('octopus');
var animItem = bodymovin.loadAnimation({
  wrapper: octopus,
  animType: 'svg',
  loop: true,
  path: 'https://assets3.lottiefiles.com/packages/lf20_zezidsfk.json'
});

var cat = document.getElementById('cat');
var animItem = bodymovin.loadAnimation({
  wrapper: cat,
  animType: 'svg',
  loop: true,
  path: 'https://assets7.lottiefiles.com/packages/lf20_z9ed2jna.json'
});

$("#Tiger").hover(function() {
  $("#tiger").css("opacity", "0.5");
  $("#Tiger span").show();
}, function() {
  $("#tiger").css("opacity", "1.0");
  $("#Tiger span").hide();
});

$("#Panda").hover(function() {
  $("#panda").css("opacity", "0.5");
  $("#Panda span").show();
}, function() {
  $("#panda").css("opacity", "1.0");
  $("#Panda span").hide();
});

$("#Monkey").hover(function() {
  $("#monkey").css("opacity", "0.5");
  $("#Monkey span").show();
}, function() {
  $("#monkey").css("opacity", "1.0");
  $("#Monkey span").hide();
});

$("#Dog").hover(function() {
  $("#dog").css("opacity", "0.5");
  $("#Dog span").show();
}, function() {
  $("#dog").css("opacity", "1.0");
  $("#Dog span").hide();
});

$("#Platypus").hover(function() {
  $("#platypus").css("opacity", "0.5");
  $("#Platypus span").show();
}, function() {
  $("#platypus").css("opacity", "1.0");
  $("#Platypus span").hide();
});

$("#Otter").hover(function() {
  $("#otter").css("opacity", "0.5");
  $("#Otter span").show();
}, function() {
  $("#otter").css("opacity", "1.0");
  $("#Otter span").hide();
});
