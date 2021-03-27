
function estimate(){
    // ALREADY 0-1 SCALE
    paymentsOnTime = document.querySelector('input[name="paymentRadioOptions"]:checked').value;
    ageOfCredit = document.querySelector('input[name="ageRadioOptions"]:checked').value;
    utilization = document.querySelector('input[name="utilizationRadioOptions"]:checked').value;

    // NEED TO SCALE
    balanceValue = document.getElementById('unpaidInput').value;
    creditLimitValue = document.getElementById('totalLimitInput').value; // 20-22k excellent
    

    // We'll follow: credit utilization? 0-20%(Excellent), 21-30%(Good), 31-50%(Average), 51-100%(Poor)
    balanceValue/creditLimitValue
}
