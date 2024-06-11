// Move this JavaScript code outside of the CSS block
function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "patilniraj277@gmail.com",
    Password: "8DF41D3E9B03E6B4ADC548FB302C4879BC95",
    To: "patilniraj277@gmail.com",
    From: "patilniraj277@gmail.com",
    Subject: "New Contact Form Enquiry",
    Body:
      "Name: " +
      document.getElementById("name").value +
      "<br> Email: " +
      document.getElementById("email").value +
      "<br> Phone No.: " +
      document.getElementById("phone").value +
      "<br> Message: " +
      document.getElementById("message").value,
  }).then((message) => alert(message));
}
