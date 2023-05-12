const markButton = document.querySelector('.mark');
const posts = document.querySelectorAll('.post');
const redPoints = document.querySelectorAll('.red-point');
const numberOfNotifications = document.querySelector('.number-of-notifications');

markButton.addEventListener('click', markAllAsRead);

function markAllAsRead() {

  for (let i = 0; i < posts.length; i++) {
    posts[i].style.backgroundColor = 'hsl(0, 0%, 100%)';
  }

  for (let i = 0; i < redPoints.length; i++) {
    redPoints[i].style.display = 'none';
  }

  numberOfNotifications.innerText = '0';
}