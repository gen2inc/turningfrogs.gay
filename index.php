
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Gen2Inc</title>
    <link rel="stylesheet" href="./style/fonts.css">
    <link rel="stylesheet" href="./style/style.css">
    <link rel="icon" href="./style/icons/favicon.ico" type="image/x-icon">
  </head>
  <body>
    <div id="container">
      <div id="cloud-intro"></div>
    </div>

    <main>
      <div id="title">
        <h1>HELLO EVERYNYAN! :3</h1>
        <p>under construction!</p>
      </div>
      <div id="content">
        <div class="bc" style="order:1; flex-grow: 1;">
          <div class="bc_card">
            <img src="./style/icons/collabvm.png" alt="collabvm image" class="bc_img">
            
          </div>
          <h2>collabvm</h2>
          <p style="color:red">Not Online</p>
        </div>
        <div class="bc" style="order:2; flex-grow: 1;">
          <div class="bc_card">
          <img src="./style/icons/boykiss.jpeg" alt="collabvm image" class="bc_img">
          
        </div>
        <h2>Mc Server</h2>
        <?php
            try {
	              require_once('./lib/MinecraftServer.php');
	              $server = new MinecraftServer('hypixel.net');
            } catch (Exception $e) {
                echo "Error";
            }
        ?>
        </div>
      </div> 
    </main>
   
 
	<script src="./script/main.js"></script>
  </body>
</html>
