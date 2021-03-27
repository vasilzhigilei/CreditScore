
function estimate(){
    // ALREADY 0-1 SCALE
    paymentsOnTime_SCALED = document.querySelector('input[name="paymentRadioOptions"]:checked').value;
    ageOfCredit_SCALED = document.querySelector('input[name="ageRadioOptions"]:checked').value;
    utilization_SCALED = document.querySelector('input[name="utilizationRadioOptions"]:checked').value;

    // NEED TO SCALE
    balanceValue = document.getElementById('unpaidInput').value;
    creditLimitValue = document.getElementById('totalLimitInput').value; // 20-22k excellent
    
    // We'll follow: credit utilization? 0-20%(Excellent), 21-30%(Good), 31-50%(Average), 51-100%(Poor)
    balanceRatio = balanceValue/creditLimitValue;
    balanceRatio_SCALED = 0;
    if (balanceRatio <= 0.2){
        // EXCELLENT
        balanceRatio_SCALED = 1;
    }else if(balanceRatio <= 1){
        balanceRatio_SCALED = 1.2 - balanceRatio;
    }else{
        balanceRatio_SCALED = 0;
    }

    creditLimit_SCALED = min(1, creditLimitValue/22000);

    // CALCULATE CREDIT SCORE ESTIMATE RATIO BASED ON WEIGHTED IMPORTANCE
    
}
