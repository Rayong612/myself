// 基于准备好的dom，初始化echarts实例
// 路径配置

var myChart = echarts.init(document.getElementById('main'))
var myChart2 = echarts.init(document.getElementById('main2'))
var myChart3 = echarts.init(document.getElementById('main3'))
var option = {
  title: {
    text: '学生在线',
    // 设置标题
    x: '12px',
    y: '12px'
    // 定位标题位置
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    // 设置布局方式，horizontal（水平）
    x: '10px',
    y: '42px',
    itemWidth: 12,
    itemHeight: 12,
    // 左侧图标的宽高
    data: ['在线人数', '下线人数']
  },

  series: [
    {
      name: '在线状况',
      type: 'pie',
      radius: ['40%', '60%'],
      // 设置环形饼状图， 第一个百分数设置内圈大小，第二个百分数设置外圈大小
      center: ['67%', '60%'],
      // 设置饼状图位置，第一个百分数调水平位置，第二个百分数调垂直位置
      label: {
        normal: {
          show: true,
          position: 'center',
          formatter: ' {c} 人'

          //  position: 'inner',  // 设置标签位置，默认在饼状图外 可选值：'outer' ¦ 'inner（饼状图上）'
          //           // formatter: '{a} {b} : {c}个 ({d}%)'   设置标签显示内容 ，默认显示{b}
          //           // {a}指series.name  {b}指series.data的name
          //           // {c}指series.data的value  {d}%指这一部分占总数的百分比
          //           formatter: '{c}'
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: '90%',
            fontWeight: 'bold'
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
      data: [
        {
          name: '在线人数',
          value: 335,
          itemStyle: {
            color: '#5fca01'
          }
        },

        {
          name: '下线人数',
          value: 948,
          itemStyle: {
            color: '#a9a9a9'
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

var option2 = {
  title: {
    text: '作业',
    // 设置标题
    x: '12px',
    y: '12px'
    // 定位标题位置
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    // 设置布局方式，horizontal（水平）
    x: '10px',
    y: '42px',
    itemWidth: 12,
    itemHeight: 12,
    // 左侧图标的宽高
    data: ['已完成', '待批阅', '待发布']
  },

  series: [
    {
      name: '在线状况',
      type: 'pie',
      radius: ['40%', '60%'],
      // 设置环形饼状图， 第一个百分数设置内圈大小，第二个百分数设置外圈大小
      center: ['67%', '60%'],
      // 设置饼状图位置，第一个百分数调水平位置，第二个百分数调垂直位置
      label: {
        normal: {
          show: true,
          position: 'center',
          formatter: ' {c} 个'

          //  position: 'inner',  // 设置标签位置，默认在饼状图外 可选值：'outer' ¦ 'inner（饼状图上）'
          //           // formatter: '{a} {b} : {c}个 ({d}%)'   设置标签显示内容 ，默认显示{b}
          //           // {a}指series.name  {b}指series.data的name
          //           // {c}指series.data的value  {d}%指这一部分占总数的百分比
          //           formatter: '{c}'
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: '90%',
            fontWeight: 'bold'
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
      data: [
        {
          name: '待批阅',
          value: 428,
          itemStyle: {
            color: '#ffba00'
          }
        },
        {
          name: '待发布',
          value: 428,
          itemStyle: {
            color: '#51b1f8'
          }
        },
        {
          name: '已完成',
          value: 945,
          itemStyle: {
            color: '#5fca01'
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

var option3 = {
  title: {
    text: '问答',
    // 设置标题
    x: '12px',
    y: '12px'
    // 定位标题位置
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    // 设置布局方式，horizontal（水平）
    x: '10px',
    y: '42px',
    itemWidth: 12,
    itemHeight: 12,
    // 左侧图标的宽高
    data: ['已回答', '待回答']
  },

  series: [
    {
      name: '在线状况',
      type: 'pie',
      radius: ['40%', '60%'],
      // 设置环形饼状图， 第一个百分数设置内圈大小，第二个百分数设置外圈大小
      center: ['67%', '60%'],
      // 设置饼状图位置，第一个百分数调水平位置，第二个百分数调垂直位置
      label: {
        normal: {
          show: true,
          position: 'center',
          formatter: ' {c} 人'

          //  position: 'inner',  // 设置标签位置，默认在饼状图外 可选值：'outer' ¦ 'inner（饼状图上）'
          //           // formatter: '{a} {b} : {c}个 ({d}%)'   设置标签显示内容 ，默认显示{b}
          //           // {a}指series.name  {b}指series.data的name
          //           // {c}指series.data的value  {d}%指这一部分占总数的百分比
          //           formatter: '{c}'
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: '90%',
            fontWeight: 'bold'
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
      data: [
        {
          name: '待回答',
          value: 335,
          itemStyle: {
            color: '#ffba00'
          }
        },

        {
          name: '已回答',
          value: 948,
          itemStyle: {
            color: '#5fca01'
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
myChart2.setOption(option2)
myChart3.setOption(option3)

var myChart4 = echarts.init(document.getElementById('main4'))
var option4 = {
  title: {
    text: '语文学科各班级错题统计',
    subtext: '共有错题2342道',
    x: 'center'
  },
  color: ['#3398DB'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['小1班', '小2班', '小3班', '小4班', '小5班', '小6班'],
      axisTick: {
        alignWithLabel: true
      }
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: '错题',
      type: 'bar',
      barWidth: '35px',
      itemStyle: {
        normal: {
          // 随机显示
          //color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);}

          // 定制显示（按顺序）
          color: function(params) {
            var colorList = [
              '#51b2f9',
              '#f9c051',
              '#17d9ea',
              '#51b2f9',
              '#f9c051',
              '#17d9ea'
            ]
            return colorList[params.dataIndex]
          }
        }
      },
      data: [130, 200, 130, 200, 130, 130]
    }
  ]
}
myChart4.setOption(option4)

// $(function() {
//   $('.teach_text2').onmouseover(function() {
//     $('.operate').show()
//   })
//   $('.teach_text2').onmouseout(function() {
//     $('.operate').hide()
//   })
// })

$(function() {
  // 鼠标移入移出事件
  $('.teach_text2').hover(
    function() {
      // 鼠标移入时添加hover类
      $('.operate2').show()
    },
    function() {
      // 鼠标移出时移出hover类
      $('.operate2').hide()
    }
  )
  $('.teach_text').hover(
    function() {
      // 鼠标移入时添加hover类
      $('.operate').show()
    },
    function() {
      // 鼠标移出时移出hover类
      $('.operate').hide()
    }
  )

  // 鼠标移入移出事件
  $('.teach_text3').hover(
    function() {
      // 鼠标移入时添加hover类
      $('.operate3').show()
    },
    function() {
      // 鼠标移出时移出hover类
      $('.operate3').hide()
    }
  )
  $('.teach_text4').hover(
    function() {
      // 鼠标移入时添加hover类
      $('.operate4').show()
    },
    function() {
      // 鼠标移出时移出hover类
      $('.operate4').hide()
    }
  )

  // 弹出界面
  $('.pictrue_1').hover(
    function() {
      // 鼠标移入时添加hover类
      $('.pictrue_11').show()
    },
    function() {
      // 鼠标移出时移出hover类
      $('.pictrue_11').hide()
    }
  )

  $('.pictrue_2').hover(
    function() {
      // 鼠标移入时添加hover类
      $('.pictrue_22').show()
    },
    function() {
      // 鼠标移出时移出hover类
      $('.pictrue_22').hide()
    }
  )
  $('.pictrue_3').hover(
    function() {
      // 鼠标移入时添加hover类
      $('.pictrue_33').show()
    },
    function() {
      // 鼠标移出时移出hover类
      $('.pictrue_33').hide()
    }
  )
  $('.pictrue_4').hover(
    function() {
      // 鼠标移入时添加hover类
      $('.pictrue_44').show()
    },
    function() {
      // 鼠标移出时移出hover类
      $('.pictrue_44').hide()
    }
  )

  // 点击按钮后，页面向上滑动
  $(document).ready(function() {
    $('#but').click(function() {
      $('html,body').animate({ scrollTop: '20px' }, 3000)
    })
  })
})
