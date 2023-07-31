import * as utils from "./utils.js"



async function connect() {
    
    document.getElementById("mc-status").style.color = "yellow";
    document.getElementById("mc-status").innerHTML = "Loading....";
    let connection = await utils.attemptConnection();
    
    if (connection === "FAIL") {
        document.getElementById("mc-status").style.color = "red";
        document.getElementById("mc-status").innerHTML = "Error - Check console"
    } else if (connection.debug.ping != false) {
        document.getElementById("mc-status").style.color = "green";
        document.getElementById("mc-status").innerHTML = `Online - ${connection.players.online}/${connection.players.max} - ${connection.protocol_name}`
    } else {
        document.getElementById("mc-status").style.color = "red";
        document.getElementById("mc-status").innerHTML = "Not Online";
    }

   // we need to host the web socket server
   /* 
   function cleanup() {
       ws.removeEventListener("message", messageHandler);
       ws.removeEventListener("error", errorHandler);
       ws.close();
   }

   function messageHandler(event) {
       if (event.data === "error") { 
           document.getElementById("mc-status").style.color = "red";
           document.getElementById("mc-status").innerHTML = "Offline";
       } else {
           const jason = JSON.parse(event.data);
           document.getElementById("mc-status").style.color = "green";
           document.getElementById("mc-status").innerHTML = `Online - ${jason.online}/${jason.max} - ${jason.ver}`
       }
   }

   function errorHandler(event) {
       document.getElementById("mc-status").style.color = "red";
       document.getElementById("mc-status").innerHTML = "Error - Check console"
   }
   const ws = new WebSocket("ws://127.0.0.1:8080");
    ws.addEventListener("message", messageHandler);
    ws.addEventListener("error",  errorHandler)

    window.addEventListener("beforeunload", () => {
        cleanup();
    })
    */
}

document.getElementById('mc-card').onclick = function(e){
    utils.copyText("mcis.turningfrogs.gay")
    alert("Copied IP!")
}

connect()

