// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyDhHo08npCjlK6awp33oN1a8QSKnEjtZ58",
  authDomain: "booking-3ad77.firebaseapp.com",
  databaseURL: "https://booking-3ad77-default-rtdb.firebaseio.com",
  projectId: "booking-3ad77",
  storageBucket: "booking-3ad77.appspot.com",
  messagingSenderId: "823151162714",
  appId: "1:823151162714:web:9d0080d913940ac79def63",
  measurementId: "G-QBTRS68GS2"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('Booking');

// Listen for form submit
document.getElementById('bookingForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var from = getInputVal('from');
  var To = getInputVal('To');
  var guests = getInputVal('guests');
  var phone = getInputVal('phone');
  var adate = getInputVal('adate');
  var ldate = getInputVal('ldate');
  var pay = getInputVal('pay');

  // Save message
  saveMessage(from, To, guests, phone,adate,ldate,pay);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('bookingForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(from, To, guests, phone,adate,ldate,pay){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    where: from,
    To:To,
    Guests:guests,
    PhoneNo:phone,
    adate:adate,
    ldate:ldate,
    Payments:pay
  });
}