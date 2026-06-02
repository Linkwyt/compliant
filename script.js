// Track Complaint Button
const trackBtn = document.getElementById("trackBtn");

if (trackBtn) {
    trackBtn.addEventListener("click", function () {
        alert("Redirecting to Complaint Tracking...");
    });
}

// Character Counter
const details = document.getElementById("details");
const counter = document.getElementById("counter");

if (details && counter) {
    details.addEventListener("input", () => {
        counter.textContent = details.value.length;
    });
}

// Complaint Form Submission
const complaintForm = document.getElementById("complaintForm");

if (complaintForm) {
    complaintForm.addEventListener("submit", function (e) {

        e.preventDefault();

        document.getElementById("successMessage")
            .style.display = "block";

        this.reset();

        if (counter) {
            counter.textContent = 0;
        }
    });
}
const counters =
document.querySelectorAll(".counter");

counters.forEach(counter=>{

let start = 0;

const end =
parseInt(counter.dataset.target);

const update = ()=>{

start += Math.ceil(end/100);

if(start < end){

counter.textContent = start;

requestAnimationFrame(update);

}else{

counter.textContent = end;

}

};

update();

});