function trackComplaint(){

const complaintID =
document.getElementById("complaintID").value;

if(complaintID === ""){
    alert("Please enter a Complaint ID");
    return;
}

document
.getElementById("result")
.classList.remove("hidden");

document
.getElementById("displayID")
.textContent = complaintID;

}