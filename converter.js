document.getElementById('convert').addEventListener('click', () => {
    const amountINR = parseFloat(document.getElementById('amount').value);
    
    // You can use the current exchange rate or a fixed rate, depending on your needs.
    const exchangeRate = 0.014; // 1 INR to USD (Sample exchange rate)

    const amountUSD = (amountINR * exchangeRate).toFixed(2);
    document.getElementById('result').textContent = `${amountINR} INR is equal to ${amountUSD} USD`;
});
