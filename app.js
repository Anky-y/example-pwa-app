let counter = 0;

const counterElement = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");

window.addEventListener("load", () => {
  registerSW();
});

incrementButton.addEventListener("click", () => {
  counter++;
  counterElement.textContent = counter;
});

decrementButton.addEventListener("click", () => {
  counter--;
  counterElement.textContent = counter;
});

// Register the Service Worker
async function registerSW() {
  if ("serviceWorker" in navigator) {
    try {
      await navigator.serviceWorker.register("service-worker.js", {
        scope: "./",
      });
    } catch (e) {
      console.log("SW registration failed");
    }
  }
}
