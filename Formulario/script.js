
const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.elements["nome"].value;
    const email = form.elements["email"].value;
    const tel = form.elements["tel"].value;

    if (name.length === 0) {
        alert("Campo Nome é obrigatorio");
        return;
    }
    alert("Obrigado!")    

});