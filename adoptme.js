document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    const fullName = document.getElementById("fullname").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const petCountValue = document.getElementById("petcount").value.trim();
    const agreement = document.getElementById("agreement").checked;

    if (fullName === "") {
      alert("กรุณากรอกชื่อ-นามสกุลผู้ติดต่อ");
      event.preventDefault();
      return;
    }

    if (phone === "") {
      alert("กรุณากรอกเบอร์โทรศัพท์ผู้ติดต่อ");
      event.preventDefault();
      return;
    }

    if (petCountValue === "") {
      alert("กรุณากรอกจำนวนสัตว์เลี้ยงที่มีอยู่ปัจจุบัน (0 - 100)");
      event.preventDefault();
      return;
    }

    const petCount = Number(petCountValue);

    if (isNaN(petCount) || petCount < 0 || petCount > 100) {
      alert("จำนวนสัตว์เลี้ยงต้องเป็นตัวเลขระหว่าง 0 ถึง 100 เท่านั้น");
      event.preventDefault();
      return;
    }

    if (!agreement) {
      alert("กรุณารับทราบว่าการส่งแบบฟอร์มนี้เป็นการแจ้งความสนใจ โดยไม่รับรองการได้รับอุปการะสุนัข");
      event.preventDefault();
      return;
    }
  });
});