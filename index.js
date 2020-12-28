$(".addTodo").on("keyup", function(e) {
  if (e.keyCode == 13 && $(".addTodo").val() != "") {
    var inputText = $(".addTodo").val();

    if ($("ul").hasClass("lightBackground")) {
      var li = $("<li class='activeTask blackText'><p>" + inputText + "</p></li>");
    } else {
      var li = $("<li class='activeTask'><p>" + inputText + "</p></li>");
    }
    var lastLi = $("<li class='lastLi'></li>")

    var circle = $("<span class='circleHidden'><img class='checkIcon checkIconHide' src='images/icon-check.svg'></span>").click(function() {
      var parentLi = $(this).parent();
      parentLi.toggleClass("activeTask");
      parentLi.toggleClass("completedTask");
      var circleToColor = $(this)
      circleToColor.toggleClass("circleColored");
      var textCross = $(this).siblings("p");
      textCross.toggleClass("crossText");
      var check = $(this).children();
      check.toggleClass("checkIconHide");
    });

    var cross = $("<span class='crossIconSpan'><img src='images/icon-cross.svg'></span></li>").click(function() {
      var par = $(this).parent();
      par.fadeOut(function() {
        par.remove();
        if ($(".all").hasClass("inUse")) {
          $(".all").trigger("click");
        } else if ($(".active").hasClass("inUse")) {
          $(".active").trigger("click");
        } else if ($(".completed").hasClass("inUse")) {
          $(".completed").trigger("click");
        }
      });

    });

    var counter = $("<span class='counter'></span>");


    var allButton = $("<button id='all' class='all inUse' type='button' name='button'>All</button>").click(function () {
      $(".completedTask").fadeIn();
      $(".activeTask").fadeIn();
      counter.text($("li").length - 1 + " itmes left");
    });
    allButton.click(colorButton);
    var activeButton = $("<button id='active' class='active' type='button' name='button'>Active</button>").click(function () {
      $(".completedTask").fadeOut();
      $(".activeTask").fadeIn();
      counter.text($(".activeTask").length + " itmes left");
    });
    activeButton.click(colorButton);
    var completedButton = $("<button id='completed' class='completed' type='button' name='button'>Completed</button>").click(function () {
      $(".completedTask").fadeIn();
      $(".activeTask").fadeOut();
      counter.text($(".completedTask").length + " itmes left");
    });
    completedButton.click(colorButton);
    var clearCompletedButton = $("<button class='clearCompleted' type='button' name='button'>Clear Completed</button>").click(function () {
      $(".completedTask").remove();
      $(".all").trigger("click");
    });

    function colorButton () {
      $("button").removeClass("inUse");
      $(this).addClass("inUse");

    }



    li.prepend(circle);
    li.append(cross);
    $("ul").prepend(li);
    $(".addTodo").val("");

    if($("ul").children().length == 1) {
      $("ul").append(lastLi);
      lastLi.append(counter);
      lastLi.append(allButton);
      lastLi.append(activeButton);
      lastLi.append(completedButton);
      lastLi.append(clearCompletedButton);
    }

    $(".all").trigger("click");




    // window.setInterval(function(){
    //   counter.text($("li").length - 1 + " itmes left");
    // }, 10);
  }
});

$(".themeToggler").click(function (){
  $("body").toggleClass("light");
  $(".moon").toggleClass("moonHide");
  $(".sun").toggleClass("sunHide");
  $(".circleDiv").toggleClass("lightBackground");
  $(".addTodoDiv").toggleClass("lightBackground");
  $("ul").toggleClass("lightBackground");
  $("li").toggleClass("blackText");
  $("button").toggleClass("ligthButton");
});

function sort () {
  $("ul").sortable();
}
