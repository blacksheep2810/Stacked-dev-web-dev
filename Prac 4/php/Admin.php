<?php
session_start();
if ($_SESSION['role'] !== 'admin') {
    header("Location: SignIn.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin Dashboard - Visit Jeffrey’s Bay</title>
  <link rel="stylesheet" href="../CSS/Jeff.css">
    <link rel="stylesheet" href="../CSS/Admin.css">
</head>

<body>

<!-- Navigation -->
<div id="NavBarBlock">
  <nav id="NavBar">
    <a href="Home.html">Home</a>
    <a href="Culture.html">Culture</a>
    <a href="History.html">History</a>
    <a href="Landscape.html">Landscape</a>
    <a href="Suggestions.html">Suggestions</a>
    <a href="About us.html">About us</a>
    <a href="SignIn.html">Sign In</a>
    <a href="Admin.html">Admin</a>
  </nav>
</div>

<div class="admin-container">
  <div class="admin-header">
    <h1>Admin Dashboard</h1>
    <p>Manage and monitor user activity on the Visit Jeffrey’s Bay website.</p>
  </div>

  <div class="admin-grid">
    <!-- Monitor Comments -->
    <div class="admin-card">
      <h2>Recent Comments</h2>
      <table class="admin-table">
        <thead>
          <tr>
            <th>User</th>
            <th>Comment</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody id="commentsTable">
          <tr><td>Hazel</td><td>Beautiful sunsets at the beach!</td><td>2025-10-08</td></tr>
          <tr><td>Tumi</td><td>Loved the dolphin watching trip!</td><td>2025-10-07</td></tr>
        </tbody>
      </table>
      <button class="btn-refresh">Refresh Comments</button>
    </div>

    <!-- Monitor Logged-In Users -->
    <div class="admin-card">
      <h2>Logged-In Users</h2>
      <table class="admin-table">
        <thead>
          <tr>
            <th>User</th>
            <th>Email</th>
            <th>Last Active</th>
          </tr>
        </thead>
        <tbody id="usersTable">
          <tr><td>Kopano</td><td>kopano@example.com</td><td>10:15 AM</td></tr>
          <tr><td>Thomas</td><td>thomas@example.com</td><td>09:42 AM</td></tr>
        </tbody>
      </table>
      <button class="btn-refresh">Refresh Users</button>
    </div>

    <!-- Database Check -->
    <div class="admin-card">
      <h2>Database Status</h2>
      <p>Connection: <span style="color:green; font-weight:bold;">Online</span></p>
      <p>Tables: <span id="db-tables-count">Users, Comments</span></p>
      <button class="btn-refresh">Check Database</button>
    </div>
  </div>
</div>

<!-- Footer -->
<footer id="FootBar">
  <div class="social-icons">
    <a href="https://www.facebook.com/groups/jeffreysbayonline/" target="_blank" class="social-link">
      <img src="../svg/facebook.svg" alt="Facebook" class="social-icon">
    </a>
    <a href="https://www.instagram.com/jeffreysbaytourism/?hl=en" target="_blank" class="social-link">
      <img src="../svg/insta.svg" alt="Instagram" class="social-icon">
    </a>
    <a href="https://www.airbnb.com/jeffreys-bay-south-africa/stays" target="_blank" class="social-link">
      <img src="../svg/airbnb.svg" alt="Airbnb" class="social-icon">
    </a>
    <a href="https://www.kouga.gov.za/" target="_blank">Municipality</a>
  </div>
  <small>thestackeddevelopers@gmail.com</small>
</footer>

</body>
</html>