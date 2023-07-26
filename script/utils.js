export async function attemptConnection(){
    try {
        const request = await fetch('https://mcapi.us/server/status?ip='+"mcis.turningfrogs.gay");
        const jason = await request.json()

        // if rate limit or some shit idk
        if (jason.status) {
            return jason;
        } else {
            return "FAIL";
        }
    } catch (e) {
        return "FAIL";
    }
}

export default attemptConnection;