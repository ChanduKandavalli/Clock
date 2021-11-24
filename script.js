function displayTime() {
  var date = new Date();
  var H = date.getHours();
  var M = date.getMinutes();
  var S = date.getSeconds();
  var ses = "AM";
  if (H == 0) {
    H = 12;
  }
  if (H > 12) {
    H = H - 2;
    ses = "PM";
  }
  H = H < 10 ? "0" + H : H;
  M = M < 10 ? "0" + M : M;
  S = S < 10 ? "0" + S : S;
  var time = H + ":" + M + ":" + S + ses;
  document.getElementById("Digital").innerText = time;
  setInterval(displayTime, 1000);
}
displayTime();