var viewCircle = {

    init: function (el) {
        // 定义初始的展示位置大小,没有填充默认大小
        this.initData(el);
        this.active();
    },

    initData: function (el) {
        this.width = 520;
        this.height = 280;
        this.times = 1000;
        this.exhibition = el.getElementsByClassName("img-player")[0];
        this.controlBar = el.getElementsByClassName('select-nav')[0];
        this.leftButton = el.getElementsByClassName('select-left')[0];
        this.rightButton = el.getElementsByClassName('select-right')[0];
        this.index = 0;
        this.length = this.creatHtml();
        this.li = this.controlBar.getElementsByTagName("li");
        this.li[this.index].className = 'select';
        this.autoMove(this.times);
    },

    handle: function (el) {
        // 获取元素的监听状态
        console.log(this.rightButton);
    },

    active: function () {
        self = this;
        this.exhibition.onmouseout = function (e) {
            self.autoMove(self.times);
        };
        this.exhibition.onmouseover = function (e) {
            clearInterval(self.auto);
        };
    },

    autoMove: function (time) {
        // 控制轮播图的移动，修改属性
        var self = this
        this.auto = setInterval(function () {
            let x = -1 * self.index * self.width + 'px'
            self.exhibition.style.transform = `translate3d(${x}, 0px, 0px)`;
            for (let i in self.li) {
                if (i == self.index) {
                    self.li[i].className = 'select';
                } else {
                    self.li[i].className = '';
                }
            }
            if (self.index == self.length - 1) {
                self.index = 0;
            } else {
                self.index += 1;
            }
        }, time)
    },

    creatHtml: function () {
        // 根据数据产生对应的html代码内容,修改部分样式

        var data = {
            0: {
                url: "img/img1.webp"
            },
            1: {
                url: "img/img2.jpg"
            },
            2: {
                url: "img/img3.jpg"
            },
            3: {
                url: "img/img4.jpg"
            },
            4: {
                url: "img/img5.webp"
            }
        };
        let img = "",
            but = "",
            length = 0;
        for (let i in data) {
            img += `<a href="" class="img"><img src=${data[i].url} alt=""></a>\n`
            but += `<li><a href="javascript:void(0)"></a></li>`
            length += 1;
        }
        this.exhibition.innerHTML = img;
        this.controlBar.innerHTML = but;
        this.controlBar.style.width = length * 20 + 'px';
        return length
    },
    user: function () {
        // 控制用户行为
    },


}

// viewCircle.prototype.width='520px';
// viewCircle.prototype.height="280px";

el = document.getElementById("view-circle")
viewCircle.init(el)