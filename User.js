// Search Function

const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener("keyup", function(){

const filter =
this.value.toLowerCase();

const rows =
document.querySelectorAll("#userTable tbody tr");

rows.forEach(row => {

const text =
row.textContent.toLowerCase();

row.style.display =
text.includes(filter)
? ""
: "none";

});

});

// Delete User

const deleteButtons =
document.querySelectorAll(".delete-btn");

deleteButtons.forEach(button => {

button.addEventListener("click", function(){

const confirmDelete =
confirm("Delete this user?");

if(confirmDelete){

this.closest("tr").remove();

updateUserCount();

}

});

});

// Update Count

function updateUserCount(){

const rows =
document.querySelectorAll(
"#userTable tbody tr"
);

document.getElementById(
"totalUsers"
).textContent = rows.length;

}