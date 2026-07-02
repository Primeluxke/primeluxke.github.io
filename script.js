let selectedVehicle = "";

function openBooking(vehicle){

selectedVehicle = vehicle;

document.getElementById("vehicle").value = vehicle;

document.getElementById("booking").scrollIntoView({
behavior:"smooth"
});

}

document.getElementById("bookingForm").addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value;
let phone=document.getElementById("phone").value;
let pickup=document.getElementById("pickup").value;
let returnDate=document.getElementById("returnDate").value;

let message=
`PRIMELUX BOOKING

Vehicle: ${selectedVehicle}

Name: ${name}

Phone: ${phone}

Pickup: ${pickup}

Return: ${returnDate}`;

window.open(
`https://wa.me/254792214367?text=${encodeURIComponent(message)}`
);

});
