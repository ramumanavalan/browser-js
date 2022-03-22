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
    const transl = async (inpw, kl = [])=>{
        $("#sText").val(inpw).trigger("input");
        $("#btnTranslate").trigger('click');
        await sleep(6000);
        var txt = $("#tText").val();
        if(lstv==txt || txt==""){ 
            await sleep(10000); 
            txt = $("#tText").val();
        }
        if(lstv==txt || txt=="") smet[smet.length] = {keys:kl, t:txt};            
        lstv = txt;  
        return txt;
    }
    for(var i=0;i<parts.length;i++){
        var lk = Object.keys(enl[parts[i]]);
        if(!(parts[i] in deln)) deln[parts[i]] = {};
        for(var j=0;j<lk.length;j++){
            let txttransf = enl[parts[i]][lk[j]];
            if(typeof txttransf === 'string' || txttransf instanceof String){
                if(!(lk[j] in deln[parts[i]])) deln[parts[i]][lk[j]] = {};
                var txt = await transl(txttransf, [parts[i], lk[j]]);
                deln[parts[i]][lk[j]] = txt;    
            }else{
                var lk2 = Object.keys(enl[parts[i]][lk[j]]);
                if(!(lk[j] in deln[parts[i]])) deln[parts[i]][lk[j]] = {};
                for(var n=0;n<lk2.length;n++){
                    let txttransf2 = enl[parts[i]][lk[j]][lk2[n]];
                    if(typeof txttransf2 === 'string' || txttransf2 instanceof String){
                        if(!(lk2[n] in deln[parts[i]][lk[j]])) deln[parts[i]][lk[j]][lk2[n]] = {};
                        var txt = await transl(txttransf2, [parts[i], lk[j], lk2[n]]);
                        deln[parts[i]][lk[j]][lk2[n]] = txt;    
                    }else{
                        var lk3 = Object.keys(enl[parts[i]][lk[j]][lk2[n]]);
                        if(!(lk2[j] in deln[parts[i]][lk[j]])) deln[parts[i]][lk[j]][lk2[j]] = {};
                        for(var m=0;m<lk3.length;m++){
                            let txttransf3 = enl[parts[i]][lk[j]][lk2[n]][lk3[m]];
                            if(typeof txttransf3 === 'string' || txttransf3 instanceof String){
                                if(!(lk3[m] in deln[parts[i]][lk[j]][lk2[n]])) deln[parts[i]][lk[j]][lk2[n]][lk3[m]] = {};
                                var txt = await transl(txttransf3, [parts[i], lk[j], lk2[n], lk3[m]]);
                                deln[parts[i]][lk[j]][lk2[n]][lk3[m]] = txt;    
                            }
                        }
                    }
                }
            }
        }
    }
})();
