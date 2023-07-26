export async function attemptConnection(){
    try {
        const request = await fetch("https://api.mcsrvstat.us/2/mcis.turningfrogs.gay");
        const jason = await request.json()

        return jason;
    } catch (e) {
        console.log(e);
        return "FAIL";
    }
}
export function fallbackCopy(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
  
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
  
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }
  
    document.body.removeChild(textArea);
}
export function copyText(text) {
    if (!navigator.clipboard) {
      fallbackCopy(text);
      return;
    }
    navigator.clipboard.writeText(text).then(function() {
      // lol
    }, function(err) {
      console.error(err);
      prompt("oopsie! you caught an error :'(, copy this text to join! :3", "mcis.turningfrogs.gay")
    });
}


export default attemptConnection;