var diamond = {
    init: function () {  //初始化函数
        this.initData();
        this.moveStart();
        this.handle();
    },

    initData: function () {  //初始化数据函数
        this.app = document.getElementById("view-circle");
        this.img = this.app.getElementsByClassName('img-player')[0]
        this.position = 0;
        // this.img.style.left = 520 + "px";
    },

    handle: function () { //事件监听函数
        this.handleOnmouseover()
    },
    handleOnmouseover (){
        self = this;
        this.img.onmouseover = function(e){
            console.log('我被悬浮了')
            console.log(e)
            clearInterval(self.a1)
        }
        this.img.onmouseout = function(e){
            console.log('我移开了')
            console.log(e)
            self.moveStart()
        }
    },

    moveStart: function(){
        var self = this
        this.a1 = setInterval(function () {
            self.position += -520;
            self.img.style.left = self.position + 'px';
            if (self.position <= -520 * 4) {
                self.position = 520;
            }
        }, 5000)
    },
}