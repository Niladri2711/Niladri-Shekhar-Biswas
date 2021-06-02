//let user_name = sessionStorage.getItem("name");
let user_points = sessionStorage.getItem("points");
let correct = sessionStorage.getItem("points") / 10;
let user_time = sessionStorage.getItem("time");
//document.querySelector(".name").innerHTML = user_name;
document.querySelector("span.points").innerHTML = user_points;
document.querySelector("span.time_taken").innerHTML = user_time;
document.querySelector(".canswers").innerHTML = correct;

if (user_points < 30) {
  document.querySelector(".message").innerHTML = "Oops! You failed the quiz";
} else {
  document.querySelector(".message").innerHTML =
    "Congratulations! You have passed the quiz";
}
