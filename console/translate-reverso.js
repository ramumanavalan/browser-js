// https://www.reverso.net/text_translation.asp?lang=en

var enl = {
  "category":{
    "key1":"Translation Text"
  }
}

var deln={}, smet = [];
function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }
(async ()=>{
    await sleep(50);
    var parts = Object.keys(enl);
var lstv = "";
    for(var i=0;i<parts.length;i++){
        var lk = Object.keys(enl[parts[i]]);
        if(!(parts[i] in deln)) deln[parts[i]] = {};
        for(var j=0;j<lk.length;j++){
            if(!(lk[j] in deln[parts[i]])) deln[parts[i]][lk[j]] = {};
            $("#txtSource").val(enl[parts[i]][lk[j]]).trigger("input");
            await sleep(6000);
            var txt = $("#txtTranslation").val();
if(lstv==txt || txt==""){ await sleep(10000); 
txt = $("#txtTranslation").val();
             }
            deln[parts[i]][lk[j]] = txt;

    if(lstv==txt || txt=="") smet[smet.length] = {k:parts[i], k2:lk[j], t:txt};            
lstv = txt;        
}
    }
})();
