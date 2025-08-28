
// Heart Icons Click functionality
let count = 0;
const hearts = document.getElementsByClassName('heart-icon-btn');

for(const heart of hearts){
    heart.addEventListener('click', function(){
        count++;
        document.getElementById('heart-count').textContent = count;
    })
}




