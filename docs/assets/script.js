window.addEventListener("load", function () {
    // 
    document
        .querySelector("#showMenu")
        .addEventListener("click", function (event) {
            document.querySelector("#mobileNav").classList.remove("hidden");
        });

    document.querySelectorAll(".hideMenu").forEach((toggle) => {
        toggle.addEventListener("click", function (event) {
            document.querySelector("#mobileNav").classList.add("hidden");
        });
    });


    // document.querySelectorAll("[toggleElement]").forEach((toggle) => {
    //     toggle.addEventListener("click", function (event) {
    //         const answerElement = toggle.querySelector("[answer]");
    //         const caretElement = toggle.querySelector("img");
    //         if (answerElement.classList.contains("hidden")) {
    //             answerElement.classList.remove("hidden");
    //             caretElement.classList.add("rotate-90");
    //         } else {
    //             answerElement.classList.add("hidden");
    //             caretElement.classList.remove("rotate-90");
    //         }
    //     });
    // });
});
/* SmtpJS.com - v3.0.0 */
var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

function submitFormData(event) {
    event.preventDefault()
    const formData = new FormData(document.querySelector('form'))
    let data = {
        fullName: "",
        email: "",
        mobile: "",
        type: "",
    }
    for (var pair of formData.entries()) {
        data[pair[0]] = pair[1];
    }
    let bodyString = `<h3>Full name: <em>${data.fullName}</em></h3>
    <h3>Email: <em>${data.email}</em></h3>
    <h3>Phone number: <em>${data.mobile}</em></h3>
    <h3>type: <em>${data.type}</em></h3>
    <h3>Time: <em>${new Date()}</em></h3>
    `;
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "ipecon2022@nipe.org.ng",
        Password: "4DDC4E3C27430B07FF45AFD54C036BF6312F",
        To: 'info@nipe.org.ng',
        From: "tsulaimon21@yahoo.com",
        Subject: data.fullName + " " + "made a request",
        Body: bodyString,
    }).then(
        message => {
            console.log(message)
            if (message == 'OK') {
                document.querySelector("#alert").classList.remove("hidden")
                setTimeout(() => {
                    document.querySelector("#alert").classList.add("hidden")
                }, 1000);
            }
        }
    ).catch(err => {
        console.log(err)
        alert('Error occurred while submitting form')
    })
}