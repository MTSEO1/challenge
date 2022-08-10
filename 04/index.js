const dDay = document.getElementById('d-day');

function countDay() {
  const xmasDay = new Date('2022-12-25');
  const todayDay = new Date();
  const diff = xmasDay - todayDay;
  const day = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  dDay.innerText = `${day}d ${hours}h ${minutes}m ${seconds}s`;
}

countDay();
setInterval(countDay, 1000);
