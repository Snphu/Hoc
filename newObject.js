var value1 = document.getElementById("user_name").val();
var value2 = document.getElementById("password").val();

let myComputer = {
  username: value1,
  password: value2,
};
// 1 object

// public class User
//{
  //public string username {get;set;}
  //public string password {get;set;}
//}


// backed xử lý gọi tới sql sever, xong check ở sql, xong bắn lỗi về code backend, backned trả kết quả về giao diện