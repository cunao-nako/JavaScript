// Special Offer Timer

function timer() {
  let specialFinishDate = new Date(2021, 4, 15),
  days = document.querySelector('#days'),
  hours = document.querySelector('#hours'),
  minutes = document.querySelector('#minutes'),
  seconds = document.querySelector('#seconds'),
  startCountDown = setInterval(changeTimer, 100);

  changeTimer();

  function changeTimer() {
    let currentDate = new Date(),
        countDownDate = specialFinishDate - currentDate;
    if (countDownDate >= 0) {
      let daysLeft = Math.floor(countDownDate / 864e5),
          hoursLeft = Math.floor((countDownDate - daysLeft * 864e5) / 36e5),
          minutesLeft = Math.floor((countDownDate - daysLeft * 864e5 - hoursLeft * 36e5) / 6e4),
          secondsLeft = Math.floor((countDownDate - daysLeft * 864e5 - hoursLeft * 36e5 - minutesLeft * 6e4) / 1000);
      days.innerText = timeChecker(daysLeft);
      hours.innerText = timeChecker(hoursLeft);
      minutes.innerText = timeChecker(minutesLeft);
      seconds.innerText = timeChecker(secondsLeft);
    } else { clearInterval(startCountDown); }

    function timeChecker(number) {
      if ( number < 10 ) { return '0' + number; }
      else { return number; }
    }
  }
}

module.exports = timer;