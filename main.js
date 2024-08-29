const mirror = document.querySelector(".cal_mirr");
const shadow = document.querySelector(".cal_mirr_shad");
mirror.innerHTML = "0";
shadow.innerHTML = "";
let previousNumber = 0;
window.addEventListener("click", (e) => {
  let target = e.target.innerHTML;
  if (
    target == 1 ||
    target == 2 ||
    target == 3 ||
    target == 4 ||
    target == 5 ||
    target == 6 ||
    target == 7 ||
    target == 8 ||
    target == 9 ||
    target == 0 ||
    target == "." ||
    target == "+/-"
  ) {
    if (mirror.innerHTML == "0" && target != ".") {
      mirror.innerHTML = target;
    } else if (target == "+/-") {
      if (mirror.innerHTML.charAt(0) != "-") {
        mirror.innerHTML = "-" + mirror.innerHTML;
      } else {
        mirror.innerHTML = mirror.innerHTML.slice(1);
      }
    } else {
      mirror.innerHTML = mirror.innerHTML + target;
    }
  } else if (target == "+" || target == "-" || target == "*" || target == "/") {
    if (shadow.innerHTML == "") {
      previousNumber = parseFloat(mirror.innerHTML);
      shadow.innerHTML = previousNumber + " " + target;
      mirror.innerHTML = 0;
    }
    if (shadow.innerHTML.includes("+")) {
      shadow.innerHTML = shadow.innerHTML.replace("+", target);
    } else if (
      shadow.innerHTML.includes("-") &&
      shadow.innerHTML.slice(-1) == "-"
    ) {
      shadow.innerHTML = shadow.innerHTML.slice(0, -1) + target;
    } else if (shadow.innerHTML.includes("*")) {
      shadow.innerHTML = shadow.innerHTML.replace("*", target);
    } else if (shadow.innerHTML.includes("/")) {
      shadow.innerHTML = shadow.innerHTML.replace("/", target);
    }
  } else if (target == "=" && shadow.innerHTML != "") {
    if (shadow.innerHTML.includes("+")) {
      mirror.innerHTML = previousNumber + parseFloat(mirror.innerHTML);
    } else if (shadow.innerHTML.slice(-1) == "-") {
      mirror.innerHTML = previousNumber - parseFloat(mirror.innerHTML);
    } else if (shadow.innerHTML.includes("*")) {
      console.log(parseFloat(mirror.innerHTML));
      mirror.innerHTML = previousNumber * parseFloat(mirror.innerHTML);
      console.log(previousNumber);
      console.log(mirror.innerHTML);
      
      
    } else if (shadow.innerHTML.includes("/")) {
      if (mirror.innerHTML == "0") {
        alert("Cannot divide to 0");
        mirror.innerHTML = "0";
        shadow.innerHTML = "";
        previousNumber = 0;
      } else {
        mirror.innerHTML =
          Math.round(
            (10 ** 15 * previousNumber) / parseFloat(mirror.innerHTML)
          ) /
          10 ** 15;
      }
    }
    shadow.innerHTML = "";
    previousNumber = parseFloat(mirror.innerHTML);
  }
  if (target == "C") {
    mirror.innerHTML = "0";
    shadow.innerHTML = "";
    previousNumber = 0;
  }
  if (target == "CE") {
    mirror.innerHTML = "0";
  }
  if (target == "Back") {
    if (mirror.innerHTML.length > 1) {
      mirror.innerHTML = mirror.innerHTML.slice(
        0,
        mirror.innerHTML.split("").length - 1
      );
    } else {
      mirror.innerHTML = 0;
    }
  }
  // else if (target == "+") {
  //   previousNumber = parseInt(mirror.innerHTML) + previousNumber;
  //   mirror.innerHTML = "";
  //   shadow.innerHTML = previousNumber + " +";
  // }

  // else if (target == "-") {
  //   if (shadow.innerHTML == "") {
  //     shadow.innerHTML = mirror.innerHTML + " -";
  //     previousNumber = parseInt(mirror.innerHTML);
  //     mirror.innerHTML = "";
  //   } else {
  //     previousNumber = previousNumber - parseInt(mirror.innerHTML);
  //     mirror.innerHTML = "";
  //     shadow.innerHTML = previousNumber + " -";
  //   }
  // }

  // else if (target == "*") {
  //   if (mirror.innerHTML != "") {
  //     previousNumber = previousNumber * parseInt(mirror.innerHTML);
  //     mirror.innerHTML = "";
  //     shadow.innerHTML = previousNumber + " *";
  //   } else {
  //     shadow.innerHTML = previousNumber + " *";
  //   }
  // } else if (target == "/") {
  //   if (mirror.innerHTML != "") {
  //     previousNumber = previousNumber / parseInt(mirror.innerHTML);
  //     mirror.innerHTML = "";
  //     shadow.innerHTML = previousNumber + " /";
  //   } else {
  //     shadow.innerHTML = previousNumber + " /";
  //   }
  // } else if (target == "=") {
  //   if (shadow.innerHTML.includes("+")) {
  //     mirror.innerHTML = previousNumber + parseInt(mirror.innerHTML);
  //     shadow.innerHTML = "";
  //   }
  //   if (shadow.innerHTML.includes("*")) {
  //     mirror.innerHTML = previousNumber * parseInt(mirror.innerHTML);
  //     shadow.innerHTML = "";
  //   }
  //   if (shadow.innerHTML.includes("/") && mirror.innerHTML != 0) {
  //     mirror.innerHTML = previousNumber / parseInt(mirror.innerHTML);
  //     shadow.innerHTML = "";
  //   }
  //   if (shadow.innerHTML.includes("/") && mirror.innerHTML == 0) {
  //     mirror.innerHTML = "";
  //     shadow.innerHTML = " Cannot devide to 0";
  //   }
  //   if (shadow.innerHTML.includes("-")) {
  //     mirror.innerHTML = previousNumber - parseInt(mirror.innerHTML);
  //     shadow.innerHTML = "";
  //   }
});
