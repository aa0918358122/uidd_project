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
  $('#a').click(function() {
    if($('#q').css('background-color', '#f5f5f5')) {
      $('.more').css('transform', 'translate(-100vw, 0)');
      $('#q').css('background-color', 'white');
      $('#s').css('background-color', 'white');
      $('#a').css('background-color', '#f5f5f5');
      $('#q').css('border', 'none');
      $('#q').css('border-bottom', '0.5vh dashed #7874CD');
      $('#s').css('border', 'none');
      $('#s').css('border-bottom', '0.5vh dashed #7874CD');
      $('#a').css('border', '0.5vh dashed #F2692C');
    }
    else if($('#s').css('background-color', '#f5f5f5')) {
      $('.more').css('transform', 'translate(-100vw, 0)');
      $('#q').css('background-color', 'white');
      $('#s').css('background-color', 'white');
      $('#a').css('background-color', '#f5f5f5');
      $('#q').css('border', 'none');
      $('#q').css('border-bottom', '0.5vh dashed #7874CD');
      $('#s').css('border', 'none');
      $('#s').css('border-bottom', '0.5vh dashed #7874CD');
      $('#a').css('border', '0.5vh dashed #F2692C');
    }
  })
  $('#q').click(function() {
    if($('#a').css('background-color', '#f5f5f5')) {
      $('.more').css('transform', 'translate(0, 0)');
      $('#a').css('background-color', 'white');
      $('#s').css('background-color', 'white');
      $('#q').css('background-color', '#f5f5f5');
      $('#a').css('border', 'none');
      $('#a').css('border-bottom', '0.5vh dashed #7874CD');
      $('#s').css('border', 'none');
      $('#s').css('border-bottom', '0.5vh dashed #7874CD');
      $('#q').css('border', '0.5vh dashed #F2692C');
    }
    else if($('#s').css('background-color', '#f5f5f5')) {
      $('.more').css('transform', 'translate(0, 0)');
      $('#s').css('background-color', 'white');
      $('#a').css('background-color', 'white');
      $('#q').css('background-color', '#f5f5f5');
      $('#a').css('border', 'none');
      $('#a').css('border-bottom', '0.5vh dashed #7874CD');
      $('#s').css('border', 'none');
      $('#s').css('border-bottom', '0.5vh dashed #7874CD');
      $('#q').css('border', '0.5vh dashed #F2692C');
    }
  })
  $('#s').click(function() {
    if($('#q').css('background-color', '#f5f5f5')) {
      $('.more').css('transform', 'translate(-200vw, 0)');
      $('#q').css('background-color', 'white');
      $('#a').css('background-color', 'white');
      $('#s').css('background-color', '#f5f5f5');
      $('#a').css('border', 'none');
      $('#a').css('border-bottom', '0.5vh dashed #7874CD');
      $('#q').css('border', 'none');
      $('#q').css('border-bottom', '0.5vh dashed #7874CD');
      $('#s').css('border', '0.5vh dashed #F2692C');
    }
    else if($('#a').css('background-color', '#ddd')) {
      $('.more').css('transform', 'translate(-200vw, 0)');
      $('#a').css('background-color', 'white');
      $('#q').css('background-color', 'white');
      $('#s').css('background-color', '#f5f5f5');
      $('#a').css('border', 'none');
      $('#a').css('border-bottom', '0.5vh dashed #7874CD');
      $('#q').css('border', 'none');
      $('#q').css('border-bottom', '0.5vh dashed #7874CD');
      $('#s').css('border', '0.5vh dashed #F2692C');
    }
  })

  $('#more_question').on('swipeleft', function(){
    $('.more').css('transform', 'translate(-100vw, 0)');
    $('#q').css('background-color', 'white');
    $('#s').css('background-color', 'white');
    $('#a').css('background-color', '#f5f5f5');
    $('#q').css('border', 'none');
    $('#q').css('border-bottom', '0.5vh dashed #7874CD');
    $('#s').css('border', 'none');
    $('#s').css('border-bottom', '0.5vh dashed #7874CD');
    $('#a').css('border', '0.5vh dashed #F2692C');
  })
  $('#more_answer').on('swipeleft', function(){
    $('.more').css('transform', 'translate(-200vw, 0)');
    $('#q').css('background-color', 'white');
    $('#a').css('background-color', 'white');
    $('#s').css('background-color', '#f5f5f5');
    $('#q').css('border', 'none');
    $('#q').css('border-bottom', '0.5vh dashed #7874CD');
    $('#a').css('border', 'none');
    $('#a').css('border-bottom', '0.5vh dashed #7874CD');
    $('#s').css('border', '0.5vh dashed #F2692C');
  })
  $('#more_answer').on('swiperight', function(){
    $('.more').css('transform', 'translate(0, 0)');
    $('#a').css('background-color', 'white');
    $('#s').css('background-color', 'white');
    $('#q').css('background-color', '#f5f5f5');
    $('#a').css('border', 'none');
    $('#a').css('border-bottom', '0.5vh dashed #7874CD');
    $('#s').css('border', 'none');
    $('#s').css('border-bottom', '0.5vh dashed #7874CD');
    $('#q').css('border', '0.5vh dashed #F2692C');
  })
  $('#save').on('swiperight', function(){
    $('.more').css('transform', 'translate(-100vw, 0)');
    $('#q').css('background-color', 'white');
    $('#s').css('background-color', 'white');
    $('#a').css('background-color', '#f5f5f5');
    $('#q').css('border', 'none');
    $('#q').css('border-bottom', '0.5vh dashed #7874CD');
    $('#s').css('border', 'none');
    $('#s').css('border-bottom', '0.5vh dashed #7874CD');
    $('#a').css('border', '0.5vh dashed #F2692C');
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

