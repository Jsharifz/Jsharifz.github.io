<?php
    if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $emailFrom = $_POST['email'];
    $company = $_POST['company'];
    $title = $_POST['title'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

        $mailTo = "jsharifz@outlook.com";
        $headers = "From: ".$emailFrom;
        $txt = "You have received an email from ".$name.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.php?mailsend");

}