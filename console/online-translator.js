// https://www.online-translator.com/Default.aspx/Text

var enl = {
  "category":{
    "key1":"Translation Text"
  }
}

var deln={};
function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }
(async ()=>{
    await sleep(50);
    var parts = Object.keys(enl);
    for(var i=0;i<parts.length;i++){
        var lk = Object.keys(enl[parts[i]]);
        if(!(parts[i] in deln)) deln[parts[i]] = {};
        for(var j=0;j<lk.length;j++){
            if(!(lk[j] in deln[parts[i]])) deln[parts[i]][lk[j]] = {};
            $("#sourceText").val(enl[parts[i]][lk[j]]).trigger("input");
            await sleep(3000);
            var txt = $("#editResult_test").val();
            deln[parts[i]][lk[j]] = txt;
        }
    }
})();
