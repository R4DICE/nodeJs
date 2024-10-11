 // รับองค์ประกอบปุ่มและเนื้อหาที่จะซ่อน/แสดง
 const knowMoreBtn = document.getElementById('knowMoreBtn');
 const moreContent = document.getElementById('moreContent');
 const closeBtn = document.getElementById('closeBtn');

 // เมื่อกดปุ่ม "Know more"
 knowMoreBtn.addEventListener('click', function () {
     moreContent.style.display = 'block';  // แสดงเนื้อหาที่ซ่อนอยู่
     knowMoreBtn.style.display = 'none';   // ซ่อนปุ่ม "Know more"
 });

 // เมื่อกดปุ่ม "Close"
 closeBtn.addEventListener('click', function () {
     moreContent.style.display = 'none';  // ซ่อนเนื้อหา
     knowMoreBtn.style.display = 'inline-block';  // แสดงปุ่ม "Know more" อีกครั้ง
 });