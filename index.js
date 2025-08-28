
// Heart Icons Click functionality
let count = 0;
const hearts = document.getElementsByClassName('heart-icon-btn');

for(const heart of hearts){
    heart.addEventListener('click', function(){
        count++;
        document.getElementById('heart-count').textContent = count;
    })
}

// call button click functionality
let setCoin = 100;
const callBtns = document.getElementsByClassName('call-btn');

for (const callBtn of callBtns) {
    callBtn.addEventListener('click', function () {
        if (setCoin < 20) {
            alert("You don't have enough coins, calling requires a minimum of 20 coins");
            return;
        }

        const serviceCard = callBtn.closest('.service_card');
        const serviceTitle = serviceCard.querySelector('.service-title').textContent;
        const emerjencyNumber = serviceCard.querySelector('.emerjency-number').textContent;

        if (confirm(`📞 Calling ${serviceTitle} ${emerjencyNumber}?`)) {
            const historyContainer = document.querySelector('.history-card-wrapper');
            const newHistoryCard = document.createElement('div');

            newHistoryCard.className = 'p-4 bg-[#FAFAFA] rounded-lg grid grid-cols-12 items-center history-card';
            newHistoryCard.innerHTML = `
            <div class="col-span-8">
                <h3 class="font-bold text-lg capitalize">${serviceTitle}</h3>
                <h5 class="text-[#5C5C5C] text-lg">${emerjencyNumber}</h5>
            </div>
            <div class="text-right col-span-4">
                <h4 class="text-[#111111] text-lg">${new Date().toLocaleTimeString()}</h4>
            </div>
            `;

            historyContainer.appendChild(newHistoryCard);

            setCoin -= 20;
            document.getElementById('coin-count').textContent = setCoin;
        }
    });
}




