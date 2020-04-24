var viewCircle = {

    init: function (el) {
        // 定义初始的展示位置大小,没有填充默认大小
        this.initData(el);
        this.active();
    },

    initData(el) {
        //  初始数据的启动及赋值
        this.elementFather = el;
        this.width = 520;
        this.height = 280;
        this.times = 2000;
        this.exhibition = el.getElementsByClassName("img-player")[0];
        this.controlBar = el.getElementsByClassName('select-nav')[0];
        this.leftButton = el.getElementsByClassName('select-left')[0];
        this.rightButton = el.getElementsByClassName('select-right')[0];
        this.index = 0;
        this.length = this.creatHtml();
        this.li = this.controlBar.getElementsByTagName("li");
        this.li[this.index].className = 'select';
        this.setIndex();
        this.autoMove();
    },

    active: function () {
        self = this;
        this.elementFather.onmouseleave = function (e) {
            self.setIndex();
            self.leftButton.style.display = 'none';
            self.rightButton.style.display = 'none';
        };
        this.elementFather.onmouseenter = function (e) {
            clearInterval(self.manual);
            self.leftButton.style.display = 'block';
            self.rightButton.style.display = 'block';
        };

        this.rightButton.onclick = function (e) {
            clearInterval(self.manual);
            self.indexChange(1);
        }
        this.leftButton.onclick = function (e) {
            clearInterval(self.manual);
            self.indexChange(-1);
        }

        for (let i in this.li) {
            this.li[i].onclick = function (e) {
                clearInterval(self.manual);
                self.index = Number(i);
            }
        }
    },

    indexChange(step) {
        // 用于按指定方向更新一步步长的方法
        if (this.index + step > this.length - 1) {
            this.index = 0;
        } else if (this.index + step < 0) {
            this.index = this.length - 1;
        } else {
            this.index += step;
        }
    },

    setIndex: function () {
        // 用于设置变动的index
        var self = this
        this.manual = setInterval(function () {
            self.indexChange(1)
        }, self.times)
    },

    autoMove: function () {
        // 根据index属性的值，不断更新轮播图的位置
        var self = this
        this.auto = setInterval(function () {
            let x = -1 * self.index * self.width + 'px'
            self.exhibition.style.transform = `translate3d(${x}, 0px, 0px)`;
            for (let i in self.li) {
                self.li[i].className = i == self.index ? 'select' : "";
            }
        }, 5)
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
}

el = document.getElementById("view-circle")
viewCircle.init(el)