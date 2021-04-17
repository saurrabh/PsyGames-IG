
$(document).ready(() => {

  console.log("hello");
  // $('#div1').children().off('click');
  // $("#div1").attr('disabled', 'disabled');
  // $('#div1').click(false);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  console.log(getRandomInt(3));
  // expected output: 0, 1 or 2
  let disableVar = [true, true, true, true, true, true];

  var divColor = 0;
  // eac100-yellow, 10316b-blue, 0b8457 green

  //DIV-1
  $("#div1").click(function () {
    let randNo = getRandomInt(3);

    if (randNo === 0 && disableVar[0]) {
      document.getElementById("div1").style.backgroundColor = "#eac100";
      // 
      disableVar[0] = false
      console.log("yellow");
      feedback(1);
    }
    else if (randNo === 1 && disableVar[0]) {
      document.getElementById("div1").style.backgroundColor = "#0b8457";
      feedback(0);

    }
    else if (randNo === 2 && disableVar[0]) {
      document.getElementById("div1").style.backgroundColor = "#10316b";
      feedback(0);
    }
  });

  //DIV-2
  $("#div2").click(function () {
    let randNo = getRandomInt(3);

    if (randNo === 0 && disableVar[1]) {
      document.getElementById("div2").style.backgroundColor = "#eac100";
      // 
      disableVar[1] = false
      console.log("yellow");
      feedback(1);
    }
    else if (randNo === 1 && disableVar[1]) {
      document.getElementById("div2").style.backgroundColor = "#0b8457";
      feedback(0);

    }
    else if (randNo === 2 && disableVar[1]) {
      document.getElementById("div2").style.backgroundColor = "#10316b";
      feedback(0);
    }
  });

  //DIV-3
  $("#div3").click(function () {
    let randNo = getRandomInt(3);

    if (randNo === 0 && disableVar[2]) {
      document.getElementById("div3").style.backgroundColor = "#eac100";
      // 
      disableVar[2] = false
      console.log("yellow");
      feedback(1);
    }
    else if (randNo === 1 && disableVar[2]) {
      document.getElementById("div3").style.backgroundColor = "#0b8457";
      feedback(0);

    }
    else if (randNo === 2 && disableVar[2]) {
      document.getElementById("div3").style.backgroundColor = "#10316b";
      feedback(0);
    }
  });
  //DIV-4
  $("#div4").click(function () {
    let randNo = getRandomInt(3);

    if (randNo === 0 && disableVar[3]) {
      document.getElementById("div4").style.backgroundColor = "#10316b";
      // 
      disableVar[3] = false
      console.log("yellow");
      feedback(1);
    }
    else if (randNo === 1 && disableVar[3]) {
      document.getElementById("div4").style.backgroundColor = "#0b8457";
      feedback(0);

    }
    else if (randNo === 2 && disableVar[3]) {
      document.getElementById("div4").style.backgroundColor = "#eac100";
      feedback(0);
    }
  });
  //DIV-5
  $("#div5").click(function () {
    let randNo = getRandomInt(3);

    if (randNo === 0 && disableVar[4]) {
      document.getElementById("div5").style.backgroundColor = "#0b8457";
      // 
      disableVar[4] = false
      console.log("yellow");
      feedback(1);
    }
    else if (randNo === 1 && disableVar[4]) {
      document.getElementById("div5").style.backgroundColor = "#eac100";
      feedback(0);

    }
    else if (randNo === 2 && disableVar[4]) {
      document.getElementById("div5").style.backgroundColor = "#10316b";
      feedback(0);
    }
  });
  //DIV-6
  $("#div6").click(function () {
    let randNo = getRandomInt(3);

    if (randNo === 0 && disableVar[5]) {
      document.getElementById("div6").style.backgroundColor = "#10316b";
      // 
      disableVar[5] = false
      console.log("yellow");
      feedback(1);
    }
    else if (randNo === 1 && disableVar[5]) {
      document.getElementById("div6").style.backgroundColor = "#0b8457";
      feedback(0);

    }
    else if (randNo === 2 && disableVar[5]) {
      document.getElementById("div6").style.backgroundColor = "#eac100";
      feedback(0);
    }
  });








  //////////////////////////////////
  function feedback(temp) {
    // var divId1 = '#' + divId
    // $(divId1).AddClass("notactive");
    if (temp === 1) {
      $('#feedback').append(`<div class="alert alert-success font-weight-bold text-center" role="alert">
      ${"&#10003 Correct! "}
      </div>`)
      setTimeout(removeMessage, 1500)
    }
    else {
      $('#feedback').append(`<div class="alert alert-danger font-weight-bold text-center" role="alert">
    ${"&#10006 Wrong! Please Try Again. "}
    </div>`)
      setTimeout(removeMessage, 1500)
    }
  }

  function removeMessage() {
    $('#feedback').empty()
  }

});