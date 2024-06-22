function calculateConsumption() {
    // Getting input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const bill1 = parseFloat(document.getElementById('bill1').value);
    const bill2 = parseFloat(document.getElementById('bill2').value);
    const bill3 = parseFloat(document.getElementById('bill3').value);
    const costPerUnit = parseFloat(document.getElementById('costPerUnit').value);

    // Calculating units consumed
    const units1 = bill1 / costPerUnit;
    const units2 = bill2 / costPerUnit;
    const units3 = bill3 / costPerUnit;

    // Calculating average units consumed
    const averageUnits = (units1 + units2 + units3) / 3;

    // Generating a random number within the range
    const min = averageUnits - averageUnits / 2;
    const max = averageUnits + averageUnits / 2;
    const randomNumber = Math.random() * (max - min) + min;

    // Displaying the result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Result</h2>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Units consumed in Month 1: ${units1.toFixed(2)} units</p>
        <p>Units consumed in Month 2: ${units2.toFixed(2)} units</p>
        <p>Units consumed in Month 3: ${units3.toFixed(2)} units</p>
        <p>Average units consumed: ${averageUnits.toFixed(2)} units</p>
        <p>Random number within +/- 50% of average units: ${randomNumber.toFixed(2)}</p>
    `;

    // Determine which Python function to call based on the random number
    let endpoint = '';
    let amessage = '';
    if (randomNumber >= averageUnits * 0.9 && randomNumber < averageUnits * 1) {
        endpoint = 'almost';
        amessage = 'You are about to cross your average limit of energy consumption. Proceed with caution, while using any electrical applicances.';

    } else if (randomNumber >= averageUnits * 1 && randomNumber <= averageUnits * 1.15) {
        endpoint = 'crossed';
        amessage = 'You have crossed your average limit of energy consumption. Proceed with caution, while using any electrical applicances.';

    } else if (randomNumber > averageUnits * 1.15) {
        endpoint = 'over';
        amessage = 'You have severely crossed your average limit of energy consumption. Proceed with caution, while using any electrical applicances.';

    }

    if (endpoint!=''||amessage!=''){
    emailjs.init("rqFtOLQ8G0_IpyKvB"); // Account Public Key


    var params ={
        name: name,
        message: amessage,
        subject: "Your Electricity Bill",
        to: email,
    };

    var serviceID = "service_w6uukdr";
    var templateID = "template_b8wwvjf";

    emailjs.send(serviceID, templateID, params);
}
}