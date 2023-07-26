import * as utils from "./utils.js"

async function connect() {
    const OFFLINE = "127.0.0.1"

    document.getElementById("mc-status").style.color = "yellow";
    document.getElementById("mc-status").innerHTML = "Loading....";
    let connection = await utils.attemptConnection();

    if (connection === "FAIL") {
        document.getElementById("mc-status").innerHTML = "Error - Check console"
    } else if (connection.ip != OFFLINE) {
        document.getElementById("mc-status").style.color = "green";
        document.getElementById("mc-status").innerHTML = `Online - ${connection.players.online}/${connection.players.max} - ${connection.protocol_name}`
    }
}

document.getElementById('mc-card').onclick = function(e){
    utils.copyText("mcis.turningfrogs.gay")
    alert("Copied IP!")
}

connect()

