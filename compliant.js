// Character Counter
const details = document.getElementById("details");
const counter = document.getElementById("counter");

if (details && counter) {
    details.addEventListener("input", () => {
        counter.textContent = details.value.length;
    });
}

// Form Submission
const complaintForm = document.getElementById("complaintForm");

if (complaintForm) {
    complaintForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const successMessage =
            document.getElementById("successMessage");

        successMessage.style.display = "block";

        successMessage.innerHTML =
            "✅ Complaint submitted successfully. Your complaint has been received.";

        this.reset();

        if (counter) {
            counter.textContent = "0";
        }

        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });
    });
}