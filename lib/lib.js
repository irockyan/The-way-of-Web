// 时间转换方法
var timeFormatting = (function () {
    function transformTimestamp(timeStamp, linkSymbol) {
        const time = new Date(timeStamp);
        let yy = time.getFullYear(),
            mm = time.getMonth() + 1,
            dd = time.getDate();
        if (linkSymbol) {
            return yy + linkSymbol + mm + linkSymbol + dd;
        } else {
            return yy + '年' + mm + '月' + dd + '日';
        }
    }

    return {
        toDate: transformTimestamp
    }
}());

var queryValue = (function () {
    function getQueryValue(href, query) {
        var pattern = new RegExp("[?&]" + name + "\=([^&]+)", "g");
        var matcher = pattern.exec(url);
        var items = null;
        if (null != matcher) {
            try {
                items = decodeURIComponent(decodeURIComponent(matcher[1]));
            } catch (e) {
                try {
                    items = decodeURIComponent(matcher[1]);
                } catch (e) {
                    items = matcher[1];
                }
            }
        }
        return items;
    }

    return {
        get: getQueryValue
    }
}());