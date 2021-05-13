var octopus = document.getElementById('octopus');
var animItem = bodymovin.loadAnimation({
  wrapper: octopus,
  animType: 'svg',
  loop: true,
  path: 'https://assets3.lottiefiles.com/packages/lf20_zezidsfk.json'
});

var panda = document.getElementById('panda');
var animItem = bodymovin.loadAnimation({
  wrapper: panda,
  animType: 'svg',
  loop: true,
  path: 'https://assets3.lottiefiles.com/packages/lf20_4fewfamh.json'
});

var cat = document.getElementById('cat');
var animItem = bodymovin.loadAnimation({
  wrapper: cat,
  animType: 'svg',
  loop: true,
  path: 'https://assets7.lottiefiles.com/packages/lf20_z9ed2jna.json'
});

var platypus = document.getElementById('platypus');
var animItem = bodymovin.loadAnimation({
  wrapper: platypus,
  animType: 'svg',
  loop: true,
  path: 'https://assets1.lottiefiles.com/datafiles/EPFktofivDOgrpm/data.json'
});

var dog = document.getElementById('dog');
var animItem = bodymovin.loadAnimation({
  wrapper: dog,
  animType: 'svg',
  loop: true,
  path: 'https://assets3.lottiefiles.com/packages/lf20_v7nRH3.json'
});

var tiger = document.getElementById('tiger');
var animItem = bodymovin.loadAnimation({
  wrapper: tiger,
  animType: 'svg',
  loop: true,
  path: 'https://assets10.lottiefiles.com/packages/lf20_1frvu8qg.json'
});

var monkey = document.getElementById('monkey');
var animItem = bodymovin.loadAnimation({
  wrapper: monkey,
  animType: 'svg',
  loop: true,
  path: ' https://assets8.lottiefiles.com/packages/lf20_gvxqafpw.json'
});

window.fbAsyncInit = function() {
  FB.init({
    appId  : myAppId,
    cookie : true,    // enable cookies to allow the server to access the session
    version: 'v10.0', // use graph api version v10.0
    xfbml  : true,    // parse social plugins on this page
  })
  FB.AppEvents.logPageView()
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response)
  })
}


;(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0]
  if (d.getElementById(id)) return
  js = d.createElement(s)
  js.id = id
  js.src = 'https://connect.facebook.net/en_US/sdk.js'
  fjs.parentNode.insertBefore(js, fjs)
}(document, 'script', 'facebook-jssdk'))

function statusChangeCallback(response) {
  console.log('statusChangeCallback')
  console.log(response)

  if (response.status === 'connected') {
    mainpage(response);
  }
  else if (response.status === 'not_authorized') {
    document.getElementById('status').innerHTML = 'Please log into this app.'

  }
  else {
    document.getElementById('status').innerHTML = 'Please log into Facebook.'
  }
}

  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response)
    })
  }
  function mainpage(response){
    alert(response.authResponse.userID);
    var ID = "1" + response.authResponse.userID +"1";
    
    console.log('Welcome!  Fetching your information.... ')
    FB.api('/me', function(response) {
      $.post('https:luffy.ee.ncku.edu.tw:6698/userInfo', {
        name:`${response.name}`,
        userid: ID
        })
      console.log(`Successful login for: ${response.name}`)
      document.getElementById('status').innerHTML = `Thanks for logging in, ${response.name}!`
      window.location = `https://luffy.ee.ncku.edu.tw~/jeffery0214/uidd_project/question.html?token=${ID}`;
     
    })
  }