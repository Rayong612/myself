// 导航样式
$(document).ready(function () {
    $(".nav span:eq(0)").mouseover(function () {
        $(".nav span:eq(0) div").css("display", "block");
    });
    $(".nav span:eq(0)").mouseout(function () {
        $(".nav span:eq(0) div").css("display", "none");
    });

});

$(document).ready(function () {
    $(".nav span:eq(1)").mouseover(function () {
        $(".nav span:eq(1) div").css("display", "block");
    });
    $(".nav span:eq(1)").mouseout(function () {
        $(".nav span:eq(1) div").css("display", "none");
    });

});

$(document).ready(function () {
    $(".nav span:eq(2)").mouseover(function () {
        $(".nav span:eq(2) div").css("display", "block");
    });
    $(".nav span:eq(2)").mouseout(function () {
        $(".nav span:eq(2) div").css("display", "none");
    });

});

$(document).ready(function () {
    $(".nav li:eq(0)").mouseover(function () {
        $(".nav li:eq(0) div").css("display", "block");
    });
    $(".nav li:eq(0)").mouseout(function () {
        $(".nav li:eq(0) div").css("display", "none");
    });

});
$(document).ready(function () {
    $(".nav li:eq(1)").mouseover(function () {
        $(".nav li:eq(1) div").css("display", "block");
    });
    $(".nav li:eq(1)").mouseout(function () {
        $(".nav li:eq(1) div").css("display", "none");
    });

});
$(document).ready(function () {
    $(".nav li:eq(2)").mouseover(function () {
        $(".nav li:eq(2) div").css("display", "block");
    });
    $(".nav li:eq(2)").mouseout(function () {
        $(".nav li:eq(2) div").css("display", "none");
    });

});
$(document).ready(function () {
    $(".nav li:eq(3)").mouseover(function () {
        $(".nav li:eq(3) div").css("display", "block");
    });
    $(".nav li:eq(3)").mouseout(function () {
        $(".nav li:eq(3) div").css("display", "none");
    });

});
$(document).ready(function () {
    $(".nav li:eq(4)").mouseover(function () {
        $(".nav li:eq(4) div").css("display", "block");
    });
    $(".nav li:eq(4)").mouseout(function () {
        $(".nav li:eq(4) div").css("display", "none");
    });

});
$(document).ready(function () {
    $(".nav li:eq(5)").mouseover(function () {
        $(".nav li:eq(5) div").css("display", "block");
    });
    $(".nav li:eq(5)").mouseout(function () {
        $(".nav li:eq(5) div").css("display", "none");
    });

});



$(function () {

    // $(".invest_content").hide();
    // $(".i1").show();

    $(document).ready(function () {
        $(".invest_nav li:eq(0)").click(function () {

            $(".i1").css("display", "block");
            $(".i2").css("display", "none");
            $(".i3").css("display", "none");
            $(".i4").css("display", "none");
            $(".i5").css("display", "none");
        });
    });
    $(document).ready(function () {
        $(".invest_nav li:eq(1)").click(function () {

            $(".i2").css("display", "block");
            $(".i1").css("display", "none");
            $(".i3").css("display", "none");
            $(".i4").css("display", "none");
            $(".i5").css("display", "none");
        });
    });
    $(document).ready(function () {
        $(".invest_nav li:eq(2)").click(function () {
            $(".i3").css("display", "block");
            $(".i1").css("display", "none");
            $(".i2").css("display", "none");
            $(".i4").css("display", "none");
            $(".i5").css("display", "none");
        });
    });
    $(document).ready(function () {
        $(".invest_nav li:eq(3)").click(function () {
            $(".i4").css("display", "block");
            $(".i1").css("display", "none");
            $(".i2").css("display", "none");
            $(".i3").css("display", "none");
            $(".i5").css("display", "none");
        });
    });
    $(document).ready(function () {
        $(".invest_nav li:eq(4)").click(function () {
            $(".i5").css("display", "block");
            $(".i1").css("display", "none");
            $(".i2").css("display", "none");
            $(".i3").css("display", "none");
            $(".i4").css("display", "none");
        });

    });
});

// $(function () {
//     $(".i1").show()
//     $(".i2").hide();
//     $(".i3").hide();
//     $(".i4").hide();
//     $(".i5").hide();

//     $(".invest_nav li").click(function () {
//       

//         $(".invest_content1").hide();
//         var n = $(".invest_nav li").index(this); //获取点击之后返回当前标签index的值
//         console.log(n);

//         $(".invest_content1" + n).show();
//       
//     });
// })


// });


// 轮播
//先要拿到元素（标签）
var oBanner = document.getElementById('banner');
//再通过标签拿到oBanner下面的LI
var aLi = oBanner.getElementsByTagName('li');
var oNumber = document.getElementById('number');
var aSpan = oNumber.getElementsByTagName('span');
var n = 0;
//点击小圆点   批量监听事件
for (var i = 0; i < aSpan.length; i++) { //i = 3
    //点击事件    012
    aSpan[i].haha = i;
    aSpan[i].onclick = function () {
        //点击哪个拿到哪个下标012
        console.log(this.haha);
        //连动
        n = this.haha;
        //调用函数
        play();
    };
};

function play() {
    //遍历先把所有的先隐藏
    for (var i = 0; i < aLi.length; i++) {

        aLi[i].className = '';
        //加上小圆点去掉类名
        aSpan[i].className = '';
    };
    //再把当前点击的显示
    aLi[n].className = 'active';

    aSpan[n].className = 'current';
};

$(document).ready(function () {
    $(".nav_2 li:eq(1)").mouseover(function () {
        $(".nav_2 li:eq(1)").css("background-color", "#AF0812");
        $(".nav_2 li:eq(1)>a").css("background-color", "#AF0812");
        $(".subnav").css("display", "block")
    });
    $(".nav_2 li:eq(1)").mouseout(function () {
        $(".nav_2 li:eq(1)").css("background-color", "#C8000B");
        $(".nav_2 li:eq(1)>a").css("background-color", "#C8000B");
        $(".subnav").css("display", "none")
    });

});

$(document).ready(function () {
    $(".way_content").mouseover(function () {
        $(".way_content div").css("display", "block");
    });
    $(".way_content").mouseout(function () {
        $(".way_content div").css("display", "none");
    });

});
$(document).ready(function () {
    $(".activity_info2 div:eq(0)").mouseover(function () {
        $(".activity_info2 div:eq(0) div").css("display", "block");
    });
    $(".activity_info2 div:eq(0)").mouseout(function () {
        $(".activity_info2 div:eq(0) div").css("display", "none");
    });

});