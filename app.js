const firebaseConfig = {
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const contactFormDB = firebase.database().ref('hack-invites');


document.getElementById("contactForm").addEventListener('submit', submitForm)

function submitForm(e) {
    e.preventDefault();
    location.replace("/Users/rudreshpandey/Desktop/WebD/hack-invites/success.html");
    const emailid = document.getElementById("emailid").value;
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const regno = document.getElementById("regno").value;
    saveMessages(emailid, name, phone, regno);
}
const saveMessages = (emailid, name, phone, regno) => {
    var newContactForm = contactFormDB.push();
    newContactForm.set({
        name: name,
        emailid: emailid,
        phone: phone,
        regno: regno,
    })
}

const getElementVal = (id) => {
    return document.getElementById(id).ariaValueMax;
}