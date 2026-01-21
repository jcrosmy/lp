// 年号
document.getElementById("year").textContent = new Date().getFullYear();

// フォーム送信（デモ）
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // ここで実運用は fetch() でAPI送信などに差し替え可能
  const name = form.name.value.trim();

  msg.textContent = name
    ? `${name} さん、送信ありがとうございます！（デモ）`
    : "送信ありがとうございます！（デモ）";

  form.reset();
});
