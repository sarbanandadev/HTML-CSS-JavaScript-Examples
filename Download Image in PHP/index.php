<?php
//if download button clicked
if(isset($_POST['downloadBtn'])){
    //getting the user img url from input field
    $imgURL = $_POST['file']; //storing in variable
    $regPattern = '/\.(jpe?g|png|gif|bmp)$/i'; //pattern to validataing img extension
    if(preg_match($regPattern, $imgURL)){ //if pattern matched to user img url
        $initCURL = curl_init($imgURL); //intializing curl
        curl_setopt($initCURL, CURLOPT_RETURNTRANSFER, true);
        $downloadImgLink = curl_exec($initCURL); //executing curl
        curl_close($initCURL); //closing curl
        // now we convert the base 64 format to jpg to download
        header('Content-type: image/jpg'); //in which extension you want to save img
        header('Content-Disposition: attachment;filename="image.jpg"'); //in which name you want to save img
        echo $downloadImgLink;
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Image Download in PHP | CodingNepal</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
</head>
<body>
    <div class="wrapper">
        <div class="preview-box">
            <div class="cancel-icon"><i class="fas fa-times"></i></div>
            <div class="img-preview"></div>
            <div class="content">
                <div class="img-icon"><i class="far fa-image"></i></div>
                <div class="text">Paste the image url below, <br/>to see a preview or download!</div>
            </div>
        </div>
        <form action="index.php" method="POST" class="input-data">
            <input id="field" type="text" name="file" placeholder="Paste the image url to download..." autocomplete="off">
            <input id="button" name="downloadBtn" type="submit" value="Download">
        </form>
    </div>

    <script>
        $(document).ready(function(){
            //if user focus out from the input field
            $("#field").on("focusout", function(){
                //getting user entered img URL
                var imgURL = $("#field").val();
                if(imgURL != ""){ //if input field isn't blank
                    var regPattern = /\.(jpe?g|png|gif|bmp)$/i; //pattern to validataing img extension
                    if(regPattern.test(imgURL)){ //if pattern matched to image url
                        var imgTag = '<img src="'+ imgURL +'" alt="">'; //creating a new img tag to show img
                        $(".img-preview").append(imgTag); //appending img tag with user entered img url
                        // adding new class which i've created in css
                        $(".preview-box").addClass("imgActive");
                        $("#button").addClass("active");
                        $("#field").addClass("disabled");
                        $(".cancel-icon").on("click", function(){
                            //we'll remove all new added class on cancel icon click
                            $(".preview-box").removeClass("imgActive");
                            $("#button").removeClass("active");
                            $("#field").removeClass("disabled");
                            $(".img-preview img").remove();
                            // that's all in javascript/jquery now the main part is PHP
                        });
                    }else{
                        alert("Invalid img URL - " + imgURL);
                        $("#field").val('');//if pattern not matched we'll leave the input field blank
                    }
                }
            });
        });
    </script>
    
</body>
</html>