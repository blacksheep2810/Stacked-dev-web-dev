<?php
session_start();

// DB connection
$conn = new mysqli('localhost', 'root', '', 'jbay_db');
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// When form is submitted
if (isset($_POST['login'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Fetch user
    $stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 1) {
        $user = $result->fetch_assoc();

        // Verify password
        if (password_verify($password, $user['password_hash'])) {
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['role'] = $user['role'];

            // Redirect based on role
            if ($user['role'] === 'admin') {
                header("Location: Admin.html"); // later convert Admin.html → Admin.php
                exit();
            } else {
                header("Location: Home.html");
                exit();
            }
        } else {
            $error = "Invalid password.";
        }
    } else {
        $error = "No account found with that email.";
    }
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sign In - Visit Jeffrey's Bay</title>
  <link rel="stylesheet" href="../CSS/Jeff.css">
</head>
<body>

<div id="NavBarBlock">
  <nav id="NavBar">
    <a href="Home.html">Home</a>
    <a href="Culture.html">Culture</a>
    <a href="History.html">History</a>
    <a href="Landscape.html">Landscape</a>
    <a href="About us.html">About us</a>
    <a href="SignIn.php">Sign In</a>
  </nav>
</div>

<div class="Container">
  <h1>Sign In</h1>

  <!-- Login Form -->
  <form action="SignIn.php" method="post">
      <label for="email">Email:</label><br>
      <input type="email" name="email" id="email" required><br><br>

      <label for="password">Password:</label><br>
      <input type="password" name="password" id="password" required><br><br>

      <input type="submit" name="login" value="Sign In">
  </form>

  <!-- Display error if login fails -->
  <?php if (isset($error)) echo "<p style='color:red;'>$error</p>"; ?>

  <p>Don't have an account? <a href="register.php">Register here</a></p>
</div>

</body>
</html>
