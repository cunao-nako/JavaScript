const hoursPlace = document.getElementById('hours'),
      minutesPlace = document.getElementById('minutes'),
      secondsPlace = document.getElementById('seconds'),
      semicolumns = document.querySelectorAll('.semicolumn'),

      getTime = () => ({  hours: new Date().getHours(),
                          minutes: new Date().getMinutes(),
                          seconds: new Date().getSeconds()  }),

      checkTime = time => Object.keys(time).map( item => ({ value: time[item] < 10 ? `0${time[item]}` : `${time[item]}`,
                                                            item, })),

      putter = array => {
        array.forEach( note => {
          if (note.item === 'hours') { hoursPlace.textContent = note.value; }
          else if (note.item === 'minutes') {  minutesPlace.textContent = note.value; }
          else {  secondsPlace.textContent = note.value; }
        });
      },
      
      semicolumnsIndication = targets => {
        targets.forEach(target => {
          intervalIds.push( setInterval( () => {
            if (target.getAttribute('style')) { target.removeAttribute('style'); }
            else { target.style.opacity = 0; }
          }), 3500)});
      },

      cleanIntervalIds = array => array.forEach(id => clearInterval(id));

      main = () => {
        putter(checkTime(getTime()));
        cleanIntervalIds(intervalIds);
        semicolumnsIndication(semicolumns);
      };

let intervalIds = [];



setInterval(main, 1000);