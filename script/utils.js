export async function attemptConnection(){
    try {
        const request = await fetch('https://mcapi.us/server/status?ip='+"mcis.turningfrogs.gay");
        const jason = await request.json()
        if (jason.status) {
            return jason;
        }
    } catch (e) {
        return "FAIL";
    }
}

export default attemptConnection;