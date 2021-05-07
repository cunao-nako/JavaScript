document.body.style.backgroundColor = 'white';

// setInterval(changeColor, 1000);

let form = document.querySelector('form'),
    btnChanger = document.querySelector('.bg-changer'),
    btnCleaner = document.querySelector('.messages-cleaner'),
    messages = document.querySelector('.messages'),
    colors = ['white', 'purple', 'lightgreen', 'pink', 'lightblue'],
    messageLeft = true;

btnChanger.addEventListener('click', () => {
  let index = colors.indexOf(document.body.style.backgroundColor);
  if (index === colors.length - 1) { index = 0; }
  else { index++; }
  document.body.style.backgroundColor = colors[index];
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let data = Object.fromEntries(new FormData(event.target).entries()),
      newMessage = document.createElement('div');
  newMessage.classList.add('message');
  newMessage.textContent = data.message;
  if (messageLeft) { newMessage.style.textAlign = 'left'; }
  else { newMessage.style.textAlign = 'right'; }
  messages.append(newMessage);
  event.target.reset();
  messageLeft = !messageLeft;
});

btnCleaner.addEventListener('click', () => {
  let allMessages = messages.querySelectorAll('.message');
  allMessages.forEach(message => message.remove());
});