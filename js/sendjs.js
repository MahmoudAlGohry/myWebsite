function sendMail() {
  var templateParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_abgeimx";
  const templateID = "template_wcv18c5";
  const publicKey = "fZDs_hylQxBCFmHSG";

  emailjs
  .send(serviceID, templateID, templateParams)
  .then((res)=>{
      document.getElementById("name").value = ""
      document.getElementById("email").value = ""
      document.getElementById("message").value = ""
      const status = document.getElementById("status")
      status.innerHTML = "Message Sent!";
      status.style.color = "green";
    }
  );

 
}
