const coll = document.getElementsByClassName("collapsible");
let i;

const phone = document.getElementById("phone");
const name = document.getElementById("name");
const email = document.getElementById("email");

IMask(document.getElementById("phone"), {
    mask: "+{7}(000)000-00-00",
});

const formatPhone = (phone) => {
    const newPhone = phone.replace(/\D/g, "").slice(-10);
    console.log(newPhone);
    // +77774442233
    return `+7${newPhone}`;
};




// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("modal-close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

function checkUser() {
    if (name.value.length === 0 || phone.value.length === 0 || email.value.length === 0){
        alert("Заполните форму правильно!");
    } else {
        console.log(ValidateEmail(email.value))
        if (phone.value.length === 16 && name.value.length !== 0 && ValidateEmail(email.value)) {

            let payload = {
                first_name: name.value,
                email: email.value,
                phone: formatPhone(phone.value),
            };

            fetch("https://api.1fit.app/api/lead/wellness-marathon/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(payload),
            })
                .then((resp) => {

                    // When the user clicks on the button, open the modal
                    modal.style.display = "flex";
                    phone.value = "";
                    email.value = "";
                    name.value = "";
                })
                .catch((error) => {});
            console.log(payload);
        } else {
            alert("Заполните форму правильно!");
        }
    }
}

function ValidateEmail(mail)
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    {
        return true
    }
    return false
}
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

const seeMore = document.getElementsByClassName("speaker_slider-item_more");
let j;
for (j = 0; j-1 <= coll.length; j++) {
    seeMore[j].addEventListener("click", function() {
        this.classList.toggle("active");
        console.log(this.innerText)
        let panel = this.nextElementSibling;
        console.log()
        if (panel.style.display === "block") {
            panel.style.display = "none";
            this.innerText = "Подробнее"
            panel.nextElementSibling.style.top = "auto";
            panel.nextElementSibling.style.webkitMaskImage = "none";
        } else {
            panel.style.display = "block";
            panel.nextElementSibling.style.top = "110px";
            panel.nextElementSibling.style.webkitMaskImage = "-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))";
            this.innerText = "Свернуть"
        }
    });
}


const swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


