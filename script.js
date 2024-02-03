function calculateCGPA() {
    const C = parseFloat(document.getElementById("C").value);
    const C_lab = parseFloat(document.getElementById("C_lab").value);
    const DM = parseFloat(document.getElementById("DM").value);
    const EEE = parseFloat(document.getElementById("EEE").value);
    const EEE_lab = parseFloat(document.getElementById("EEE_lab").value);
    const ENG = parseFloat(document.getElementById("ENG").value);
    const ENG_lab = parseFloat(document.getElementById("ENG_lab").value);
    const LA = parseFloat(document.getElementById("LA").value);
    const SSS = parseFloat(document.getElementById("SSS").value);

    const resultElement = document.getElementById("result");
    const errorElement = document.getElementById("error");

    // Check if inputs are valid
    if (isNaN(C) || isNaN(C_lab) || isNaN(DM) || isNaN(EEE) ||
        isNaN(EEE_lab) || isNaN(ENG) || isNaN(ENG_lab) || isNaN(LA) || isNaN(SSS)
        || C < 0 || C > 4
        || C_lab < 0 || C_lab > 4
        || DM < 0 || DM > 4
        || EEE < 0 || EEE > 4
        || EEE_lab < 0 || EEE_lab > 4
        || ENG < 0 || ENG > 4
        || ENG_lab < 0 || ENG_lab > 4
        || LA < 0 || LA > 4
        || SSS < 0 || SSS > 4) {
        errorElement.innerHTML = "Please enter valid values.";
        resultElement.innerHTML = "";
    } else {
        errorElement.innerHTML = "";
        const result = (((C * 3.0) + (C_lab * 3.0) + (DM * 3.0) + (EEE * 3.0) + (EEE_lab * 1.5)
                         +  (ENG * 2.0) + (ENG_lab * 1.0) + (LA * 3.0) + (SSS * 3.0)) / 22.5 ).toFixed(2);
        resultElement.innerHTML = `Yooo!🔥 Your CGPA is: ${result}`;
    }
}