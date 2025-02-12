let counter = 0;

const counterElement = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");

incrementButton.addEventListener("click", () => {
  counter++;
  counterElement.textContent = counter;
});

decrementButton.addEventListener("click", () => {
  counter--;
  counterElement.textContent = counter;
});

if ('serviceWorker' in navigator) { 
    navigator.serviceWorker.register('service-worker.js').then((registration) => {
        console.log('Service Worker registered', registration);
    }).catch((error) => {
        console.log('Service Worker registration failed', error);
    })
}