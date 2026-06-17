const demoForm = document.getElementById("demoForm");
const formMessage = document.getElementById("formMessage");

demoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  formMessage.textContent = "درخواست با موفقیت ثبت شد. در نسخه نهایی، اطلاعات به ایمیل یا پیامک متصل می‌شود.";
  demoForm.reset();
});
