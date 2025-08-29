// function to get innerText
function getElement(id) {
  return document.getElementById(id);
}
// function to convert string to number
function getNumber(text) {
  return parseInt(text);
}

// Increasing Heart Number Value if Heart Icon Clicked
let heartCount = 0;
const heartIcons = document.querySelectorAll(".heart-icon");
heartIcons.forEach(function (heartIcon) {
  heartIcon.addEventListener("click", function () {
    heartCount += 1;
    const heartCountEl = document.getElementById("heart-count");
    heartCountEl.innerText = heartCount;
  });
});

// showing alert on call button click with service name and number
const historyCardContainer = document.getElementById("history-card-container");
const callPrice = 20;
const callBtns = document.querySelectorAll(".call-button");
callBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const cardItems = btn.parentNode.parentNode.childNodes;
    const serviceName = cardItems[7].innerText;
    const serviceNumber = cardItems[11].innerText;
    const coinElement = getElement("coin-count");
    const totalCoin = parseInt(coinElement.innerText);
    // console.log( newTotalCoin )
    const newTotalCoin = totalCoin - callPrice;
    console.log(totalCoin);
    if (totalCoin < 20) {
      alert("❌ আপনার পর্যাপ্ত কয়েন নাই। কলটি করতে ২০টি কয়েন প্রয়োজন।");
      return;
    }
    coinElement.innerText = newTotalCoin;
    alert(`📞 Calling ${serviceName}    ${serviceNumber}...`);

    const callHistory = document.createElement("div");
    callHistory.innerHTML = `<div>
                            <p> ${serviceName} </p>
                            <p class="opacity-70"> ${serviceNumber} </p>
                        </div>
                        <div>
                            <p> ${new Date().toLocaleTimeString()} </p>
                        </div>`;

    historyCardContainer.appendChild(callHistory);
    callHistory.classList.add(
      "history-card",
      "flex",
      "justify-between",
      "items-center",
      "bg-gray-100",
      "rounded-lg",
      "p-3",
      "mb-3"
    );
  });
});

// clear history btn functionality
const clearHistoryBtn = getElement("clear-history-btn");
clearHistoryBtn.addEventListener("click", function () {
  historyCardContainer.replaceChildren();
});

// copy btn functionality
let copyCount = 2;
const copyBtns = document.querySelectorAll(".copy-btn");
copyBtns.forEach(function (copybtn) {
  copybtn.addEventListener("click", function () {
    copyCount += 1;
    console.log("copy tn clicked");
    const copyCountEl = getElement("copy-count");
    copyCountEl.innerText = copyCount;
    const copyBtnParent = copybtn.parentNode.parentNode.childNodes;
    const hotlineNumber = copyBtnParent[11];
    navigator.clipboard.writeText(hotlineNumber.innerText);
    alert(`নম্বর কপি হয়েছেঃ ${hotlineNumber.innerText}`);
  });
});
