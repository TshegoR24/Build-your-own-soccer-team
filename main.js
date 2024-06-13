const playersContainer = document.querySelector('.players__container');
const totalPlayers = document.querySelector('#selected');
const moneyLeft = document.querySelector('#money'); 
const playersLeft = document.querySelector('#left'); 
const totalCost = document.querySelector('#cost');
const moneyError = document.querySelector('#money__error')
const playersError = document.querySelector('#players__error');

// click player event
playersContainer.addEventListener('click', (e)=>{
    if(e.target.classList.contains('player')){
        e.target.classList.toggle('selected')
    }

    updatePlayersCount();
})

// update count of players
function updatePlayersCount(){
    const selectedPlayers = document.querySelectorAll('.player.selected');
    // turn the node list into a number
    const playersCount = selectedPlayers.length
    // display the number of players selected
    totalPlayers.innerText = playersCount
    // salary of players selected
    const salarySelected = document.querySelectorAll('.player.selected .salary');
    // return array with salaries as a number
    const salaryCount = [...salarySelected].map(item => +item.value);
    // sum numbers inside the array
    const salarySum = salaryCount.reduce(function(a,b){
        return a+b
    }, 0)
    // display the total salary
    totalCost.innerText = formatNumber(salarySum);
    // players left to select
    const playersLeftPick = 11 - playersCount;
    // display players left to pick
    playersLeft.innerText = playersLeftPick;
    // money left to spend
    const moneyLeftSpend = 80000000 - salarySum;
    // display money left to spend
    moneyLeft.innerText = formatNumber(moneyLeftSpend)
    // money error message
    if(moneyLeftSpend < 0){
        moneyError.style.visibility = 'visible'
    } else {
        moneyError.style.visibility = 'hidden'
    }
    // players error message
    if(playersLeftPick < 0){
        playersError.style.visibility = 'visible'
    } else {
        playersError.style.visibility = 'hidden'
    }

}

// format number
function formatNumber(num){
    return '€'+ (num).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}