// Heart React Functionality
const heartCountElement = document.getElementById("heart-count");
const allHeartIcons = document.querySelectorAll(".heart-icon");

function handleHeartClick(event) {
  const clickedIcon = event.target;
  let currentHeartCount = parseInt(heartCountElement.innerText);

  currentHeartCount = currentHeartCount + 1;
  heartCountElement.innerText = currentHeartCount;

  clickedIcon.classList.add("fa-solid", "text-red-500");
  clickedIcon.classList.remove("fa-regular", "text-gray-400");
}

for (let i = 0; i < allHeartIcons.length; i++) {
  const currentIcon = allHeartIcons[i];
  currentIcon.addEventListener("click", handleHeartClick);
}
