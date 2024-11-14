// Dữ liệu giả lập (thông thường sẽ kiểm tra từ cơ sở dữ liệu)
const users = {
    'admin': '1234',
    '1': '2'
  };
  
  // Xử lý khi nhấn nút login
  document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Ngừng gửi form
  
    // Lấy dữ liệu từ form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Kiểm tra thông tin đăng nhập
    if (users[username] && users[username] === password) {
      // Nếu đúng, chuyển hướng đến trang chính (trang dashboard.html)
      window.location.href = 'dashboard.html';
    } else {
      // Nếu sai, hiển thị thông báo lỗi
      document.getElementById('error-message').style.display = 'block';
    }
  });
  