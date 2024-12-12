<?php
// Database credentials
$host = 'localhost';
$dbname = 'feedback_db';
$username = 'root';
$password = '';

// Create a connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
}

// Check if form was submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get and sanitize user inputs
    $name = $conn->real_escape_string($_POST['name']);
    $email = $conn->real_escape_string($_POST['email']);
    $message = $conn->real_escape_string($_POST['message']);

    // Insert the feedback into the database
    $sql = "INSERT INTO feedback (name, email, message) VALUES ('$name', '$email', '$message')";

    if ($conn->query($sql) === TRUE) {
        // Redirect to the form with a success message
        header('Location: index.html?success=1');
        exit;
    } else {
        // Redirect to the form with an error message
        header('Location: index.html?error=' . urlencode($conn->error));
        exit;
    }
}

$conn->close();