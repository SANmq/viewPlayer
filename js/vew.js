var viewCircle = {

    init: function (el, width, height) {
        // 定义初始的展示位置大小,没有填充默认大小
        this.width = width || '520px';
        this.height = height || '280px';
        this.creatHtml(el)
        console.log(el.style)
        this.initData(el)
    },
    initData: function () {
        // 获取需要的初始元素或其它数据内容


    },

    handle: function () {
        // 获取元素的监听状态
    },

    autoMove: function () {
        // 控制轮播图的移动，修改属性
    },

    creatHtml: function (el) {
        // 根据数据产生对应的html代码内容
        // el.innerHTML
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

        



        let temp = `
        <div class="img-player">
            <a href="" class="img"><img src="img/img1.webp" alt=""></a>
            <a href="" class="img"><img src="img/img2.jpg" alt=""></a>
            <a href="" class="img"><img src="img/img3.jpg" alt=""></a>
            <a href="" class="img"><img src="img/img4.jpg" alt=""></a>
            <a href="" class="img"><img src="img/img5.webp" alt=""></a>
        </div>
        <a class="select-left" href="javascript:void(0)">&lt;</a>
        <a class="select-right" href="javascript:void(0)">&gt;</a>
        <ul class="select-nav justify">
            <li><a href="javascript:void(0)"></a></li>
            <li><a href="javascript:void(0)"></a></li>
            <li><a href="javascript:void(0)"></a></li>
            <li><a href="javascript:void(0)"></a></li>
            <li><a href="javascript:void(0)"></a></li>
        </ul>
        `
    },
    user: function () {
        // 控制用户行为
    },




}

// viewCircle.prototype.width='520px';
// viewCircle.prototype.height="280px";

el = document.getElementById("view-circle")
viewCircle.init(el)