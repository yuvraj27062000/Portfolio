// ************ color swiching  ****************************
// ************ theam color start  ****************************


const color_change = document.querySelector(".inner-style-box");

color_change.addEventListener("click", ()=>{
    document.querySelector(".style-box").classList.toggle("open");
})

window.addEventListener("scroll", ()=>{
    if(document.querySelector(".style-box").classList.contains("open"))
    {
        document.querySelector(".style-box").classList.remove("open");
    }
})

const color_style = document.querySelectorAll(".color-style");
function setstyle(color){
    color_style.forEach((style)=>{
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }
    })
}

// ************ dark theam  ****************************

const day_night = document.querySelector(".day-night");
day_night.addEventListener("click", ()=>{
    day_night.querySelector("i").classList.toggle("fa-sun-o");
    day_night.querySelector("i").classList.toggle("fa-moon-o");
    document.body.classList.toggle("dark");
})
window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark"))
    {
        day_night.querySelector("i").classList.add("fa-sun-o");
    }
    else{
        day_night.querySelector("i").classList.add("fa-moon-o");
    }
})


var occupation  = new Typed(".occupation",{
    strings:[",","Python Developer","Web Developer","Front End Developer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})
var occupation1  = new Typed(".occupation1",{
    strings:[",","Python Developer","Web Developer","Front End Developer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})


const EmailData  = document.getElementsByTagName("input").value;
// name/ 0
// email1
// subject2
// message3
console.log(EmailData[0]);
function sendEmail() {
    Email.send({
      Host: "smtp.gmail.com",
      Username: "yuviiibanna27@gmail.com",
      Password: " ",
      To: 'yuviiibanna27@gmail.com',
      From: EmailData[1],
      Subject: EmailData[2],
      Body: EmailData[0]+","+EmailData[3],
    //   Attachments: [
    //     {
    //       name: "File_Name_with_Extension",
    //       path: "Full Path of the file"
    //     }]
    })
      .then(function (message) {
        alert("Mail has been sent successfully")
      });
  }