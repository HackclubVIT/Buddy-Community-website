const firebaseConfig = {
    apiKey: "AIzaSyAwk_a5_WqIkeTJwnDMIr0L1nuC8DBni6Y",
    authDomain: "buddy-community-7d95b.firebaseapp.com",
    databaseURL: "https://buddy-community-7d95b-default-rtdb.firebaseio.com",
    projectId: "buddy-community-7d95b",
    storageBucket: "buddy-community-7d95b.appspot.com",
    messagingSenderId: "135788365725",
    appId: "1:135788365725:web:b11542b8e75179e3319174",
    measurementId: "G-YGET6LFW6E"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref('hack-invites');

document.getElementById("contactForm").addEventListener('submit', (e) => {
    e.preventDefault();
    const emailid = document.getElementById("emailid").value;
    const name = document.getElementById("name").value;     
    const phone = document.getElementById("phone").value;
    const regno = document.getElementById("regno").value;

    if (!emailid || !name || !phone || !regno) {
        alert("Please fill in all the fields.");
        return; // Prevent form submission
    }

    if (!validateRegistrationNumber(regno)) {
        document.getElementById("regnoError").style.visibility = "visible";
        return; // Prevent form submission
    }else {
        document.getElementById("regnoError").style.visibility = "hidden";
    }

    if (!validatePhoneNumber(phone)) {
        // Display error message on the page
        document.getElementById("phoneError").style.visibility = "visible";
        return; // Prevent form submission
    } else {
        // Clear the error message if phone number is valid
        document.getElementById("phoneError").style.visibility = "hidden";
    }

    saveMessages(emailid, name, phone, regno);
});


const saveMessages = (emailid, name, phone, regno) => {
    var newContactForm = contactFormDB.push();
    newContactForm.set({
        name: name,
        emailid: emailid,
        phone: phone,
        regno: regno,
    })
    .then(() => {
        window.location.replace("/success.html");
    })
    .catch((error) => {
        window.location.replace("/success.html");
    });
};

function validateRegistrationNumber(regno) {
    // Regular expression to match the desired format
    const regex = /^\d{2}[A-Za-z]{1,5}\d{4,5}$/;
    return regex.test(regno);
}

function validatePhoneNumber(phone) {
    // Regular expression to match exactly 10 digits
    const regex = /^\d{10}$/;
    return regex.test(phone);
}

