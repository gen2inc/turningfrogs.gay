import * as utils from "./utils.js"

async function connect() {
    let connection = await utils.attemptConnection();

    if (connection === "FAIL") {
        document.getElementById("mc-status").innerHTML = "Error - Check console"
    } else if (connection.status === "success") {
        document.getElementById("mc-status").style.color = "green";
        document.getElementById("mc-status").innerHTML = `Online - ${connection.players.now}/${connection.players.max} - ${connection.server.name.replace("Paper", "")}`
    }
}
connect()

