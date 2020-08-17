var enl = {
  "category":{
    "key1":"Translation Text"
  }
}

var jsElm = document.createElement("script");
jsElm.type = "application/javascript";
jsElm.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
document.body.appendChild(jsElm);
var deln={};
function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }
(async ()=>{
    await sleep(2000);
    var parts = Object.keys(enl);
    for(var i=0;i<parts.length;i++){
        var lk = Object.keys(enl[parts[i]]);
        if(!(parts[i] in deln)) deln[parts[i]] = {};
        for(var j=0;j<lk.length;j++){
            if(!(lk[j] in deln[parts[i]])) deln[parts[i]][lk[j]] = {};
            $("#source.tlid-source-text-input.goog-textarea").val(enl[parts[i]][lk[j]]);
            await sleep(3000);
            var txt = $(".tlid-translation.translation").text();
            deln[parts[i]][lk[j]] = txt;
        }
    }
})();
