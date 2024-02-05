function login() {
  // メールアドレスとパスワードを取得する
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // メールアドレスとパスワードのバリデーションを行う
  if (email == "" || password == "") {
      alert("メールアドレスとパスワードを入力してください。");
      return;
  }

  // WEBアプリのサーバーにログインリクエストを送る
  // ここでは仮に成功したとする
  var success = true;

  // ログインの結果に応じて処理を分岐する
  if (success) {
      // ログインに成功した場合は、メイン画面に遷移する
      window.location.href = "main.html";
  } else {
      // ログインに失敗した場合は、エラーメッセージを表示する
      alert("メールアドレスまたはパスワードが間違っています。");
  }
}