const URL = "https://github.com/RitobrotoMukherjee";
const windowFeatures = "left=250,top=100,width=320,height=320,scrollbars=0,titlebar=0";

setInterval(() => {
    const openRef = window.open( URL, "mozillaWindow",  windowFeatures);
    if(openRef) {
        setTimeout(() => {
            openRef.close();
        }, 2000)
    } else {
        console.log("Error");
        openRef.close();
    }
}, 5000);
