// ========== Heart React Functionality ==========
const heartCountElement = document.getElementById("heart-count");
const allHeartIcons = document.querySelectorAll(".heart-icon");

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
const copyCountElement = document.getElementById("copy-count");
const allCopyButtons = document.querySelectorAll(".copy-button");

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
const coinCountElement = document.getElementById("coin-count");
const allCallButtons = document.querySelectorAll(".call-button");

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
}

for (let i = 0; i < allCallButtons.length; i++) {
  const currentButton = allCallButtons[i];
  currentButton.addEventListener("click", handleCallClick);
}
