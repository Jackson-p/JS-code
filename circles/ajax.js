//手写ajax传值过程
function getJson(url){
    return new Promise(function(resolve,reject) {
        var xhr=new XMLHttpRequest();
        xhr.open("GET",url, true);
        xhr.send();
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4 && xhr.status == 200){
                try{
                    var response = JSON.parse(xhr.responseText);
                    resolve(response);
                }catch(e){
                    reject(e);
                }
            }else{
                reject(new Error(xhr.statusText));
            }
        };
    });
}
getJson("www.liao.com").then((val)=>console.log(val));