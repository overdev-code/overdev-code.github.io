const API_URL = "https://smtp.maileroo.com/send";
const API_KEY = "ca2fac0a812be354968adca8d935edc2dcb32ba3b5ba401847729a047e520410";
const form = new FormData();
form.append("from", "overdev-code@gmail.com");
form.append("to", "overdev-code@gmail.com");
form.append("subject", "Contact Form");
form.append("html", "Hello, this is a test email");

