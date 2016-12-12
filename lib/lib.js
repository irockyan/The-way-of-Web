// 时间转换方法
var timeFormatting = (function(){
    function transformTimestamp(timeStamp,linkSymbol){
        const time = new Date(timeStamp);
        let yy = time.getFullYear(),
            mm = time.getMonth() + 1,
            dd = time.getDate();
        if (linkSymbol) {
            return yy + linkSymbol + mm + linkSymbol + dd;
        }else{
            return yy + '年' + mm + '月' + dd + '日';
        }
    }

    return{
        toDate:transformTimestamp
    }
}());