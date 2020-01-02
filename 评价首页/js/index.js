// 基于准备好的dom，初始化echarts实例
// 路径配置

var myChart = echarts.init(document.getElementById('main'))

var option = {
  title: {
    text: '评价统计本周评价一共评价130分',
    // 设置标题
    x: 'center',
    y: '12px',
    // 定位标题位置
    fontSize: '14px'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    // orient: 'vertical',(垂直)
    orient: 'horizontal',
    // 设置布局方式，horizontal（水平）
    x: '20px',
    y: '260px',
    itemWidth: 16,
    itemHeight: 10,
    // 左侧图标的宽高
    data: ['学习态度', '学习能力', '合作交流', '运动健康']
  },

  series: [{
      name: '正面负面',
      type: 'pie',
      selectedMode: 'single',
      radius: [0, '30%'],

      label: {
        normal: {
          show: false,
          position: 'inner'
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data: [{
          value: 150,
          name: '正面',
          // selected: true选择这个可以突出你想要体现的那个
          itemStyle: {
            color: '#b9fdef'
          }
        },
        {
          value: 50,
          name: '负面',
          itemStyle: {
            color: '#ffb895'
          }
        }
      ]
    },
    {
      name: '综合评估',
      type: 'pie',
      radius: ['45%', '60%'],
      // 设置环形饼状图， 第一个百分数设置内圈大小，第二个百分数设置外圈大小
      center: ['50%', '50%'],
      // 设置饼状图位置，第一个百分数调水平位置，第二个百分数调垂直位置
      label: {
        normal: {
          show: false,
          position: 'center'
          // formatter: ' {c} 人'

          //  position: 'inner',  // 设置标签位置，默认在饼状图外 可选值：'outer' ¦ 'inner（饼状图上）'
          //           // formatter: '{a} {b} : {c}个 ({d}%)'   设置标签显示内容 ，默认显示{b}
          //           // {a}指series.name  {b}指series.data的name
          //           // {c}指series.data的value  {d}%指这一部分占总数的百分比
          //           formatter: '{c}'
        },
        emphasis: {
          show: false,
          textStyle: {
            fontSize: '90%'
            // fontWeight: 'bold'
          }
        }
      },

      // itemStyle 设置饼状图扇形区域样式
      //   itemStyle: {
      //     // emphasis：英文意思是 强调;着重;（轮廓、图形等的）鲜明;突出，重读
      //     // emphasis：设置鼠标放到哪一块扇形上面的时候，扇形样式、阴影
      //     emphasis: {
      //       shadowBlur: 10,
      //       shadowOffsetX: 0,
      //       shadowColor: 'rgba(30, 144, 255，0.5)'
      //     }
      //   },

      labelLine: {
        normal: {
          show: false
        }
      },
      data: [{
          name: '',
          value: 25,
          itemStyle: {
            color: '#c58ffd'
          }
        },
        {
          name: '合作交流',
          value: 25,
          itemStyle: {
            color: '#8aefab'
          }
        },
        {
          name: '学习能力',
          value: 50,
          itemStyle: {
            color: '#ff8f7f'
          }
        },
        {
          name: '学习态度',
          value: 50,
          itemStyle: {
            color: '#fdb55f'
          }
        },

        {
          name: '运动健康',
          value: 50,
          itemStyle: {
            color: '#5eb6fc'
          }
        }
      ],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}

myChart.setOption(option)

// 年级轮播
// var oNext = document.getElementById('next');
// var oBox = document.getElementById('box');
// //再通过标签拿到oBox下面的span
// var aSpan = oBox.getElementsByTagName('#box span');

// //信号量
// var n = -250;
// //点击事件
// oNext.onclick = function () {
// var n = -250

// $('#next').click(function() {
//   // 信号量
//   console.log(n)
//   $('.box').css('left', n + 'px')
//   n = n - 200
//   //   $('#next').unbind() //解绑点击事件
// })

// 年级轮播
$(document).ready(function () {

  var oNext = document.getElementById('next')
  var oPre = document.getElementById('pre')
  var oBox = document.getElementById('box')
  var oSpan = document.querySelectorAll('#box span')

  var a = 0
  var n = 0
  // 信号量

  var x = oSpan.length / 16
  console.log("x:" + x)
  var m = oSpan.length / 4 - 1;
  console.log("m:" + m)
  oNext.onclick = function () {
    // var w = $(window).width(); //获取屏幕大小
    // console.log(w)
    // var x = w - w * 0.85
    // console.log(x)
    // console.log(w - x)
    // 判断oPan有多少个
    if (n >= m) {
      return 0
    } else {
      n++
      a = a - 340
      oBox.style.left = a + 'px' //每点击一次，向右移动200px
      console.log(n)
    }

  }
  oPre.onclick = function () {
    // var w = $(window).width(); //获取屏幕大小
    // console.log(w)
    // var x = w - w * 0.85
    // console.log(x)
    // console.log(w - x)
    if (n <= 0) {
      //判断前面时候还有内容
      return 0
    } else {
      n--
      a = a + 340
      oBox.style.left = a + 'px' //每点击一次，向左移动200px
      console.log(n)
    }
  }
});

// // 1秒后模拟点击
// setTimeout(function () {
//   // IE
//   if (document.all) {
//     document.getElementById("zidong").click();
//     alert("run")
//   }
//   // 其它浏览器
//   else {
//     var e = document.createEvent("MouseEvents");
//     e.initEvent("click", true, true);
//     document.getElementById("zidong").dispatchEvent(e);
//     alert("run2")

//   }
// }, 1000);

// window.onload = function () {
//   var osel = document.getElementById("first"); //得到select的ID
//   var opts = osel.getElementsByTagName("option"); //得到数组option
//   var obt = document.getElementById("zidong");
//   console.log(obt)
//   // alert("run")
//   // osel.onclick = function () {
//   //   opts[1].selected = true; //设置option第4个元素，即value="一年级"为默认选中
//   //   alert("run2")
//   // }
// }

// 根据first选择的年级联动该年级的班次
function setSecond(obj) {
  var val = obj.value
  // var sec = document.getElementById('second').innerHTML = "<option>一年级一班</option>";
  // alert("run1");

  // $("#zidong").val('一年级');
  if (val == '一年级') {
    var sec = document.getElementById('second')
    sec.innerHTML =
      '<option selected>一年级一班</option><option>一年级二班</option><option>一年级三班</option><option>一年级四班</option>'
  } else if (val == '二年级') {
    var sec = document.getElementById('second')
    sec.innerHTML =
      '<option>二年级一班</option><option>二年级二班</option><option>二年级三班</option><option>二年级四班</option>'
  } else if (val == '三年级') {
    var sec = document.getElementById('second')
    sec.innerHTML =
      '<option>三年级一班</option><option>三年级二班</option><option>三年级三班</option><option>三年级四班</option>'
  } else if (val == '四年级') {
    var sec = document.getElementById('second')
    sec.innerHTML =
      '<option>四年级一班</option><option>四年级二班</option><option>四年级三班</option><option>四年级四班</option>'
  } else {
    var sec = document.getElementById('second')
    sec.innerHTML =
      '<option>五年级一班</option><option>五年级二班</option><option>五年级三班</option><option>五年级四班</option>'
  }
}

// document.getElementById('xx').innerHTML = "html代码"
// 假设xx是div的id
// 表示将 html代码 替换到id为xx的div标签中去 <div id="xx">此处</div>
// // 这样就在不刷新页面的情况下更改页面的部分内容.

// 首页tab切换
var li = document.querySelectorAll('.layui-nav-tree li'), //css选择器，querySelectorAll获取所有#tab span元素
  Div = document.querySelectorAll('.content-1')
for (var i = 0; i < li.length; i++) {
  //循环li标签
  li[i].idx = i
  //给li一个自定义的idx属性，将I赋值进去，因为下边的循环不能直接拿到这个循环的i
  li[i].onclick = function () {
    for (var j = 0; j < Div.length; j++) {
      //循环Div标签
      Div[j].style.display = 'none' //每次点击都先隐藏掉Div，并移除class
      li[j].classList.remove('layui-nav-tree-first')
    }
    Div[this.idx].style.display = 'block' //给当前Div显示出来
    this.classList.add('layui-nav-tree-first') //增加class
  }
}

$('.layui-nav-tree li').click(function () {
  $(this)
    .siblings('.layui-nav-tree li')
    .removeClass('layui-nav-tree-first') // 删除其他兄弟元素的样式

  $(this).addClass('layui-nav-tree-first') // 添加当前元素的样式
})

// 年级tab切换
var span = document.querySelectorAll('#tab span'), //css选择器，querySelectorAll获取所有#tab span元素
  div = document.querySelectorAll('.ct-user'),
  span1 = document.querySelectorAll('#tab1 span'),
  div1 = document.querySelectorAll('.week')

for (var i = 0; i < span.length; i++) {
  //循环span标签
  span[i].idx = i
  //给span一个自定义的idx属性，将I赋值进去，因为下边的循环不能直接拿到这个循环的i
  span[i].onclick = function () {
    for (var j = 0; j < div.length; j++) {
      //循环div标签
      div[j].style.display = 'none' //每次点击都先隐藏掉div，并移除class
      span[j].classList.remove('active')
    }
    div[this.idx].style.display = 'block' //给当前div显示出来
    this.classList.add('active') //增加class
  }
}

for (var i = 0; i < span1.length; i++) {
  //循环span1标签
  span1[i].idx = i
  //给span1一个自定义的idx属性，将I赋值进去，因为下边的循环不能直接拿到这个循环的i
  span1[i].onclick = function () {
    for (var j = 0; j < div1.length; j++) {
      //循环div1标签
      div1[j].style.display = 'none' //每次点击都先隐藏掉div1，并移除class
      span1[j].classList.remove('active')
    }
    div1[this.idx].style.display = 'block' //给当前div1显示出来
    this.classList.add('active') //增加class
  }
}

$('.ct-nav-center span').click(function () {
  $(this)
    .siblings('.ct-nav-center span')
    .removeClass('active') // 删除其他兄弟元素的样式

  $(this).addClass('active') // 添加当前元素的样式
})

$('.layui-layout-left a').onmouseover(function () {
  // $(this)
  //   .siblings('.layui-layout-left a')
  //   .removeClass('active2') // 删除其他兄弟元素的样式

  // $(this).addClass('active2') // 添加当前元素的样式

  // $(this).addClass("active2").siblings().removeClass("active2");
  // $(this).remove("active2")
})