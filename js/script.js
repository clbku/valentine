
var message1 = [
    "15 Promises for these <span style='color:red'>promise day: </span> <br> <img src='../valentine/images/heart-icon.png' alt='heart'> </p>",
    "Whenever you have any problem, I will <span style='color:red'>always be there</span> for you <br><img src='../valentine/images/Smiley-25-icon.png' alt=''>",
    "No matter what, I will <span style='color:red'>always care and keep you happy<span><br> <img src='../valentine/images/Smiley-23-icon.png' alt=''>",
    "I will <span style='color:red'>always be honest</span> and loyal to you<br> <img src='../valentine/images/smile-icon.png' alt=''>",
    "I will <span style='color:red'>love you more</span> with each passing day<br> <img src='../valentine/images/Smiley-10-icon.png' alt=''>",
    "I promise <span style='color:red'>to keep my phone</span> without password, because I have nothing to hide from you<br> <img src='../valentine/images/Smiley-23-icon.png'>",
    "I will <span style='color:red'>always reach on time</span> just to spend my day with you<br> <img src='../valentine/images/smile-icon.png' alt=''>",
    "I will <span style='color:red'>never lie to you</span> or try to hide anything from you<br> <img src='../valentine/images/Smiley-10-icon.png' alt=''>",
    "I will <span style='color:red'>never look at any other girl</span> apart from you<br> <img src='../valentine/images/Smiley-25-icon.png' alt=''>",
    "I will speak <span style='color:red'>without egos</span>, love without intentions care without expectations. <br><img src='../valentine/images/Smiley-25-icon.png' alt=''>",
    "I will <span style='color:red'>respect you</span> and your family<br> <img src='../valentine/images/Smiley-20-icon.png' alt=''>",
    "I will always <span style='color:red'>encourage you</span> in life<br> <img src='../valentine/images/Smiley-10-icon.png' alt=''>",
    "I promise <span style='color:red'>to stick by you</span> through the tough times. <br><img src='../valentine/images/Smiley-25-icon.png' alt=''>",
    "I promise <span style='color:red'>to actually listen</span> to you when you speak <br><img src='../valentine/images/Smiley-23-icon.png' alt=''>",
    "I promise <span style='color:red'>not to ignore calls</span>, text/video calls unless I'm really busy in work <br><img src='../valentine/images/Smiley-25-icon.png' alt=''>",
    "I promise <span style='color:red'>to keep all these</span> promises <br><img src='../valentine/images/Smiley-20-icon.png' alt=''>",
    "Because you <span style='color:red'>always in my mind</span>, you are my everthing <br><img src='../valentine/images/heart-icon.png' alt=''>",
    "<span style='color:red'>I LOVE YOU</span> so much <br><img src='../valentine/images/smile-icon.png' alt=''>",
    "Wish you have <span style='color:red'>happy valentine day</span> and a <span style='color:red'>lucky new year</span> <br><img src='../valentine/images/Smiley-23-icon.png' alt=''> "
]

var i = 0;
var divHeight = $(".showMessage").height();
$(".showMessage").css({"marginTop": divHeight/-2});
var interval_obj = setInterval(function(){
  // console.log('[-- message1[i] --]', message1[i]);
  $(".showMessage").html(message1[i]);
  var divHeight = $(".showMessage").height();
  $(".showMessage").css({"marginTop": divHeight/-2});
  i++;
  if (i >= message1.length ) {
    clearInterval(interval_obj);
  }
}, 8000)
