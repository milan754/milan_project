function calculateAge() {
    const birthdate = document.getElementById('birthdate').value;
    if (!birthdate) {
        document.getElementById('result').textContent = 'Please select a birthdate.';
        return;
    }

    const birthDateObj = new Date(birthdate);
    const today = new Date();

    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = today.getMonth() - birthDateObj.getMonth();
    const dayDifference = today.getDate() - birthDateObj.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    document.getElementById('result').textContent = `Your age is ${age} years.`;
}
