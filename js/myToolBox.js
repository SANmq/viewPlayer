var myToolBox = {

    // 兼容性方法
    // 给元素添加监听事件
    addEvent: function (elem, type, handle) {
        if (elem.addEventListener) {
            elem.addEventListener(type, handle, false);
        } else if (elem.attachEvent) {
            elem.attachEvent('on' + type, function () {
                handle.call(elem);
            })
        } else {
            elem['on' + type] = handle;
        }
    },

    // 停止元素事件冒泡
    stopBubble: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },

    // 清除元素（浏览器）默认事件
    cancelHandler(event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnVlaue = false;
        }
    },

    loadScript(url, callback) {
        let script = document.createElement('script');
        script.type = "text/javascript";
        if (script.readyState) {
            script.onreadystatechange = function () {
                if (script.readyState == "complete" || script.readyState == "loaded") {
                    callback();
                }
            }
        } else {
            script.onload = function () {
                callback();
            }
        }
        script.src = url;
        document.head.appendChild(script);
    }
}