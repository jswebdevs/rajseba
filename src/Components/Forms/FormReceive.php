<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["your-name"];
    $email = $_POST["your-email"];
    $phone = $_POST["phonenumber"];
    $service = $_POST["service"];
    $thana = $_POST["thana"];
    $area = $_POST["area"];
    $date = $_POST["date"];
    $details = ["details"];
    // ... Retrieve other form fields

    $to = "service@rajseba.com"; // Your email address
    $subject = "Service order from $name";
    $message = "নাম ঃ $name\n
                ইমেইল ঃ $email\n
                ফোন-নাম্বার ঃ $phone\n
                সেবা ঃ $service\n
                থানা ঃ $thana\n
                এলাকা ঃ $area\n 
                সেবা-গ্রহণের তারিখ ঃ $date
                বিস্তারিত ঃ $details";
                
    // ... Compose the rest of the message

    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "আপনার ফর্মটি গ্রহণ করা হয়েছে। খুব শীঘ্রই রাজসেবার একজন প্রতিনিধি আপনাকে কল করবে।";
    } else {
        echo "দুঃখিত! আপনার ফর্মটি গ্রহণ করা যায়নি।";
    }
}
?>
