document.addEventListener('DOMContentLoaded', function () {
   
    const tooltips = document.querySelectorAll('.tooltip');
    tooltips.forEach(function (tooltip) {
        const tooltipText = document.createElement('span');
        tooltipText.classList.add('tooltiptext');
        tooltipText.innerText = tooltip.dataset.tooltip;
        tooltip.appendChild(tooltipText);
    });

   
    const modal = document.getElementById('resultModal');
    const closeBtn = document.querySelector('.close');

    document.getElementById('taxForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const grossIncome = parseFloat(document.getElementById('grossIncome').value);
        const extraIncome = parseFloat(document.getElementById('extraIncome').value);
        const ageGroup = document.getElementById('ageGroup').value;
        const deductions = parseFloat(document.getElementById('deductions').value);

       
        const tax = calculateTax(grossIncome, extraIncome, ageGroup, deductions);

       
        document.getElementById('finalValues').innerText = `Your overall annual income after deductions: ${tax}`;
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

function calculateTax(grossIncome, extraIncome, ageGroup, deductions) {
    function calculateTax(grossIncome, extraIncome, deductions, age) {
        let overallIncome = grossIncome + extraIncome - deductions;
        if (overallIncome < 800000) {
            return 0;
        } else {
            let taxableAmount = overallIncome - 800000;
            let taxRate = 0;
            if (age < 40) {
                taxRate = 0.3;
            } else if (age >= 40 && age <= 60) {
                taxRate = 0.4;
            } else {
                taxRate = 0.1;
            }
            return taxableAmount * taxRate;
        }
    }
    
   
    
    
    return (grossIncome + extraIncome - deductions) * 0.2;
}
