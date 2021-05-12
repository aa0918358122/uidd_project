$(document).ready(function() {
  $('#add_in').click(function() {
    $('#question_box').animate({bottom: 0}, 500);
  })
  $('.return').click(function() {
    $('#question_box').animate({bottom: '-35vh'}, 500);
  })
  $('.add_detail').click(function() {
    $('#question_box').animate({bottom: '-35vh'}, 500);
    $('#detail_box').animate({bottom: 0}, 500);
  })
  $('.dropdown').click(function() {
    $('.dropdown_content').css('display', 'block');
  })
  $('#question .more').click(function() {
    $('#question .more').hide();
    $('#question .content').toggleClass('content_back', false);
    $('#question .content').toggleClass('content_transform', true);
    $('#question .close').show();
  })
  $('#question').on('click', '.close', function() {
    $(this).hide();
    $('#question .content').toggleClass('content_transform', false);
    $('#question .content').toggleClass('content_back', true);
    $('#question .more').show();
  })

  $('#select')
    .dropdown()
  $('#select_two')
    .dropdown()

  $.post('./list_physics', {}, (data) => {
    data.forEach((element) => {
      $('#more_answer').append('<div class="ans borderbox">' + element + '<span class="open"> open </span> </div>')
    })
  })

  $('#select').on('change', function() {
    var value = $(this).val();
    if (value == "physics") {
      $('#more_answer').empty()
      $.post('./list_physics', {}, (data) => {
        data.forEach((element) => {
          $('#more_answer').append('<div class="ans borderbox">' + element + '<span class="open"> open </span> </div>')
        })
        $('#more_answer').append('<div style="height: 7vh"></div>')
      })
    }
    else if (value == "calculus") {
      $('#more_answer').empty()
      $.post('./list_calculus', {}, (data) => {
        data.forEach((element) => {
          $('#more_answer').append('<div class="ans borderbox">' + element + '<span class="open"> open </span> </div>')
        })
        $('#more_answer').append('<div style="height: 7vh"></div>')
      })
    }
    else if (value == "linear_algebra") {
      $('#more_answer').empty()
      $.post('./list_linear', {}, (data) => {
        data.forEach((element) => {
          $('#more_answer').append('<div class="ans borderbox">' + element + '<span class="open"> open </span> </div>')
        })
        $('#more_answer').append('<div style="height: 7vh"></div>')
      })
    }
    else if (value == "electronics") {
      $('#more_answer').empty()
      $.post('./list_electronics', {}, (data) => {
        data.forEach((element) => {
          $('#more_answer').append('<div class="ans borderbox">' + element + '<span class="open"> open </span> </div>')
        })
        $('#more_answer').append('<div style="height: 7vh"></div>')
      })
    }
    else {
      $('#more_answer').empty()
      $.post('./list_electromagnetics', {}, (data) => {
        data.forEach((element) => {
          $('#more_answer').append('<div class="ans borderbox">' + element + '<span class="open"> open </span> </div>')
        })
        $('#more_answer').append('<div style="height: 7vh"></div>')
      })
    }
  });

  $('#select_two').on('change', function() {
    var value = $(this).val();
    $('#detail_form button[type="submit"]').click((event) => {
      $('#detail_box').animate({bottom: '-45vh'}, 500);
      var title = $('#title_form input').val();
      var detail = $('#detail_form input').val();

      if (value == "physics") {
        event.preventDefault()
        $.post('./add_physics', {
          mark: $('#title_form input[name=mark]').val(),
          detail: $('#detail_form input[name=detail]').val()
        })
      }
      else if (value == "calculus") {
        event.preventDefault()
        $.post('./add_calculus', {
          mark: $('#title_form input[name=mark]').val(),
          detail: $('#detail_form input[name=detail]').val()
        })
      }
      else if (value == "linear_algebra") {
        event.preventDefault()
        $.post('./add_linear', {
          mark: $('#title_form input[name=mark]').val(),
          detail: $('#detail_form input[name=detail]').val()
        })
      }
      else if (value == "electronics") {
        event.preventDefault()
        $.post('./add_electronics', {
          mark: $('#title_form input[name=mark]').val(),
          detail: $('#detail_form input[name=detail]').val()
        })
      }
      else if (value == "electromagnetics") {
        event.preventDefault()
        $.post('./add_electromagnetics', {
          mark: $('#title_form input[name=mark]').val(),
          detail: $('#detail_form input[name=detail]').val()
        })
      }
    })
  })
  $('#question, #button').hide()
  $('#more_answer').on('click', '.ans', function() {
    $('#dropdown, #search, #more_answer').hide()
    $('#question, #button').show()
    var ansElement = $(this).text()
    ansElement = ansElement.substr(0, ansElement.length - 7)
    $.post('./search_physics', {
      mark: ansElement,
    }, (data) => {
        $('.topic, .content').empty()
        $('.topic').append(ansElement)
        $('.content').append(data + `<span class="close bold"> close </span>`)
        $('#question .more').show()
        $('#question .close').show()
    })
  })
  $('#select').on('change', function() {
    var value = $(this).val();
    if (value == "physics") {
      $('#more_answer').on('click', '.ans', function() {
        $('#dropdown, #search, #more_answer').hide()
        $('#question, #button').show()
        var ansElement = $(this).text()
        ansElement = ansElement.substr(0, ansElement.length - 7)
        $.post('./search_physics', {
          mark: ansElement,
        }, (data) => {
            $('.topic, .content').empty()
            $('.topic').append(ansElement)
            $('.content').append(data + `<span class="close bold"> close </span>`)
            $('#question .more').show()
            $('#question .close').show()
        })
      })
    }
    else if (value == "calculus") {
      $('#more_answer').on('click', '.ans', function() {
        $('#dropdown, #search, #more_answer').hide()
        $('#question, #button').show()
        var ansElement = $(this).text()
        ansElement = ansElement.substr(0, ansElement.length - 7)
        $.post('./search_calculus', {
          mark: ansElement,
        }, (data) => {
            $('.topic, .content').empty()
            $('.topic').append(ansElement)
            $('.content').append(data + `<span class="close bold"> close </span>`)
            $('#question .more').show()
            $('#question .close').show()
        })
      })
    }
    else if (value == "linear_algebra") {
      $('#more_answer').on('click', '.ans', function() {
        $('#dropdown, #search, #more_answer').hide()
        $('#question, #button').show()
        var ansElement = $(this).text()
        ansElement = ansElement.substr(0, ansElement.length - 7)
        $.post('./search_linear', {
          mark: ansElement,
        }, (data) => {
            $('.topic, .content').empty()
            $('.topic').append(ansElement)
            $('.content').append(data + `<span class="close bold"> close </span>`)
            $('#question .more').show()
            $('#question .close').show()
        })
      })
    }
    else if (value == "electronics") {
      $('#more_answer').on('click', '.ans', function() {
        $('#dropdown, #search, #more_answer').hide()
        $('#question, #button').show()
        var ansElement = $(this).text()
        ansElement = ansElement.substr(0, ansElement.length - 7)
        $.post('./search_electronics', {
          mark: ansElement,
        }, (data) => {
            $('.topic, .content').empty()
            $('.topic').append(ansElement)
            $('.content').append(data + `<span class="close bold"> close </span>`)
            $('#question .more').show()
            $('#question .close').show()
        })
      })
    }
    else if (value == "electromagnetics") {
      $('#more_answer').on('click', '.ans', function() {
        $('#dropdown, #search, #more_answer').hide()
        $('#question, #button').show()
        var ansElement = $(this).text()
        ansElement = ansElement.substr(0, ansElement.length - 7)
        $.post('./search_electromagnetics', {
          mark: ansElement,
        }, (data) => {
            $('.topic, .content').empty()
            $('.topic').append(ansElement)
            $('.content').append(data + `<span class="close bold"> close </span>`)
            $('#question .more').show()
            $('#question .close').show()
        })
      })
    }
  })
  $('.cap').click(function() {
    $('#question').hide()
    $('#dropdown, #search, #more_answer').show()
  })

});

var octopus = document.getElementById('octopus');
var animItem = bodymovin.loadAnimation({
  wrapper: octopus,
  animType: 'svg',
  loop: true,
  path: 'https://assets3.lottiefiles.com/packages/lf20_zezidsfk.json'
});

var dog = document.getElementById('dog');
var animItem = bodymovin.loadAnimation({
  wrapper: dog,
  animType: 'svg',
  loop: true,
  path: 'https://assets3.lottiefiles.com/packages/lf20_v7nRH3.json'
});

