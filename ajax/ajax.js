//原生请求封装

var data = {
    type:'GET',
    url:baseUrl + '/doctor/adoptTransferPatient.do',
    data:
}

function ajax(args){
    var xhr = new XMLHttpRequest();
    xhr.open(args.type,args.url);
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4) {
            if (xhr.status === 4) {
                console.log('你好');
            }
        }
    }
    xhr.send();
}