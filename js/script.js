// ========== Selecting Elements ==========

// Navbar Stats Elements
const heartCountElement = document.getElementById("heart-count");
const coinCountElement = document.getElementById("coin-count");
const copyCountElement = document.getElementById("copy-count");

// Buttons and Icons
const allHeartIcons = document.querySelectorAll(".heart-icon");
const allCopyButtons = document.querySelectorAll(".copy-button");
const allCallButtons = document.querySelectorAll(".call-button");
const clearHistoryButton = document.getElementById("clear-history-button");

// Call History Section
const callHistoryList = document.getElementById("call-history-list");
const emptyHistoryMessage = document.getElementById("empty-history-msg");

// ========== Heart React Functionality ==========
function handleHeartClick(event) {
  const clickedIcon = event.target;
  let currentHeartCount = parseInt(heartCountElement.innerText);

  currentHeartCount += 1;
  heartCountElement.innerText = currentHeartCount;

  clickedIcon.classList.add("fa-solid", "text-red-500");
  clickedIcon.classList.remove("fa-regular", "text-gray-400");
}

for (let i = 0; i < allHeartIcons.length; i++) {
  const currentIcon = allHeartIcons[i];
  currentIcon.addEventListener("click", handleHeartClick);
}

//========== Copy Functionality ==========
function handleCopyClick(event) {
  const parentCard = event.target.closest(".bg-white");
  const numberToCopy = parentCard.querySelector(".hotline-number").innerText;

  navigator.clipboard.writeText(numberToCopy).then(function () {
    alert("নম্বর কপি হয়েছে: " + numberToCopy);

    let currentCopyCount = parseInt(copyCountElement.innerText);
    currentCopyCount += 1;

    copyCountElement.innerText = currentCopyCount;
  });
}

for (let i = 0; i < allCopyButtons.length; i++) {
  const currentButton = allCopyButtons[i];
  currentButton.addEventListener("click", handleCopyClick);
}

//========== Call Functionality ==========
function handleCallClick(event) {
  let currentCoinCount = parseInt(coinCountElement.innerText);

  if (currentCoinCount < 20) {
    alert("আপনার পর্যাপ্ত পরিমান কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
    return;
  }

  currentCoinCount -= 20;
  coinCountElement.innerText = currentCoinCount;

  const parentCard = event.target.closest(".bg-white");
  const serviceName = parentCard.querySelector("h3").innerText;
  const serviceNumber = parentCard.querySelector(".hotline-number").innerText;

  alert("Calling " + serviceName + " (" + serviceNumber + ")...");

  addCallToHistory(serviceName, serviceNumber);
}

for (let i = 0; i < allCallButtons.length; i++) {
  const currentButton = allCallButtons[i];
  currentButton.addEventListener("click", handleCallClick);
}

//========== Call History Functionality ==========
function addCallToHistory(name, number) {
  emptyHistoryMessage.style.display = "none";

  const now = new Date();
  const callTime = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  const newHistoryItem = document.createElement("div");
  newHistoryItem.className =
    "bg-gray-50 rounded-lg p-3 flex justify-between items-center";

  newHistoryItem.innerHTML = `
      <div>
        <p class="font-bold text-gray-800">${name}</p>
        <p class="text-sm text-gray-500">${number}</p>
      </div>
      <span class="text-sm text-gray-600">${callTime}</span>
  `;

  callHistoryList.prepend(newHistoryItem);
}

//========== Clear History Functionality ==========
function handleClearHistoryClick() {
  callHistoryList.innerHTML = "";
  callHistoryList.appendChild(emptyHistoryMessage);
  emptyHistoryMessage.style.display = "block";
}

clearHistoryButton.addEventListener("click", handleClearHistoryClick);
