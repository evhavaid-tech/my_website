const lastUpdated = document.querySelector("#last-updated");

function refreshTimestamp() {
  const now = new Date();
  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  lastUpdated.textContent = `Last updated ${time}`;
}

refreshTimestamp();
setInterval(refreshTimestamp, 1000);
