const add = function () {
  console.log(2 + 3);
};

add();

const add2 = function (a, b) {
  console.log(a + b);
};

add2(3, 6);

function updateButton() {
  const button = document.querySelector(".button-start");

  setInterval(function () {
    button.innerHTML = "loading...";
    setInterval(function () {
      button.innerHTML = "Finished";
    }, 1000);
  }, 500);
}

let timeOutId;

function added() {
  const message = document.querySelector(".added");
  message.innerHTML = "Added";

  clearTimeout(timeOutId);

  timeOutId = setInterval(function () {
    message.innerHTML = "";
  }, 2000);
}

let message = 2;

setInterval(function () {
  if (message < 1) {
    message = 0;
    document.title = "Function";
  } else if (document.title === "Function") {
    document.title = `(${message}) New messages`;
  } else {
    document.title = "Function";
  }
}, 1000);
