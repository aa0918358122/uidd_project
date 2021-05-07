$(document).ready(function() {
  $('#circle').click(function() {
    $('#button_page').animate({left: 0}, 500);
    $('#title').css("opacity", 0.5);
    $('#question').css("opacity", 0.5);
    $('#answer').css("opacity", 0.5);
    $('#more_answer').css("opacity", 0.5);
    $('#ask_question').css("opacity", 0.5);
  })
  $('#return').click(function() {
    $('#button_page').animate({left: "-80vw"}, 500);
    $('#title').css("opacity", 1);
    $('#question').css("opacity", 1);
    $('#answer').css("opacity", 1);
    $('#more_answer').css("opacity", 1);
    $('#ask_question').css("opacity", 1);
  })
  $('#question .more').click(function() {
    $('#question .more').hide();
    $('#question .content').toggleClass('content_back', false);
    $('#question .content').toggleClass('content_transform', true);
    $('#question .close').show();
  })
  $('#question .close').click(function() {
    $('#question .close').hide();
    $('#question .content').toggleClass('content_transform', false);
    $('#question .content').toggleClass('content_back', true);
    $('#question .more').show();
  })
  $('#answer .more').click(function() {
    $('#answer .more').hide();
    $('#answer .content').toggleClass('content_back', false);
    $('#answer .content').toggleClass('content_transform', true);
    $('#answer .close').show();
  })
  $('#answer .close').click(function() {
    $('#answer .close').hide();
    $('#answer .content').toggleClass('content_transform', false);
    $('#answer .content').toggleClass('content_back', true);
    $('#answer .more').show();
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
