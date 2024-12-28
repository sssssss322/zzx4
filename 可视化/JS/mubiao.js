(function(){
var myChart =echarts.init(document.querySelector(".bar .chart"));
 var option = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  legend: {
    data: [
      'Direct',
      'Marketing',
      'Search Engine',
      'Email',
      'Union Ads',
      'Video Ads',
      'Baidu',
      'Google',
      'Bing',
      'Others'
    ]
  },
  series: [
    {
      name: '来自于',
      type: 'pie',
      selectedMode: 'single',
      radius: [0, '30%'],
      label: {
        position: 'inner',
        fontSize: 14
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1548, name: '硕士研究生' },
        { value: 348, name: '博士研究生' },
        { value: 775, name: '推免硕士研究生' },
        { value: 679, name: '推免博士研究生', selected: true }
      ]
    },
    {
      name: '来自于',
      type: 'pie',
      radius: ['45%', '60%'],
      labelLine: {
        length: 30
      },
      label: {
        formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
        backgroundColor: '#F6F8FC',
        borderColor: '#8C8D8E',
        borderWidth: 1,
        borderRadius: 4,
        rich: {
          a: {
            color: '#6E7079',
            lineHeight: 22,
            align: 'center'
          },
          hr: {
            borderColor: '#8C8D8E',
            width: '100%',
            borderWidth: 1,
            height: 0
          },
          b: {
            color: '#4C5058',
            fontSize: 14,
            fontWeight: 'bold',
            lineHeight: 33
          },
          per: {
            color: '#fff',
            backgroundColor: '#4C5058',
            padding: [3, 4],
            borderRadius: 4
          }
        }
      },
      data: [
        { value: 1048, name: '南华大学' },
        { value: 335, name: '长沙理工大学' },
        { value: 310, name: '中南林业科技大学' },
        { value: 251, name: '衡阳师范学院' },
        { value: 234, name: '湖南大学' },
        { value: 147, name: '中南大学' },
        { value: 135, name: '湖南师范大学' },
        { value: 102, name: '其他' }
      ]
    }
  ]
};
   
   
   
   

myChart.setOption(option);
window.addEventListener('resize',function(){
    myChart.resize();
})

})();
(function(){
    var myChart =echarts.init(document.querySelector(".bar2 .chart"));
    var series = [
      {
        data: [35, 35, 41, 44, ],
        
        type: 'bar',
        stack: 'a',
        name: '常规计划',
        emphasis: {
          focus: 'series'
        },
        barCategoryGap:50,
        barWidth:23,
        label: {
          show: true,
          position: 'insideRight'
        }
      },
      {
        data: [32, 32, 26,  19],
        type: 'bar',
        stack: 'a',
        name: '储才计划专项',
        barWidth: '50%',
        emphasis: {
          focus: 'series'
        },
        label: {
          show: true,
          position: 'insideRight'
        }
      },
      {
        data: [29, 25, 20, ],
        type: 'bar',
        stack: 'a',
        name: '科研项目专项',
        barWidth: '50%',
        emphasis: {
          focus: 'series'
        },
        label: {
          show: true,
          position: 'insideRight'
        }
      },
      {
        data: [10,10],
        type: 'bar',
        stack: 'a',
        name: '先进技术专项',
        barWidth: '50%',
        emphasis: {
          focus: 'series'
        },
        label: {
          show: true,
          position: 'insideRight'
        }
      },
      {
        data: [15, ],
        type: 'bar',
        stack: 'a',
        name: '核工业联合研究生专项',
        barWidth: '50%',
        emphasis: {
          focus: 'series'
        },
        label: {
          show: true,
          position: 'insideRight'
        }
      },
      {
        data: [4, ],
        type: 'bar',
        stack: 'a',
        name: '国际产学研用专硕',
        barWidth: '50%',
        emphasis: {
          focus: 'series'
        },
        label: {
          show: true,
          position: 'insideRight'
        }
      },
      {
        data: [4, ],
        type: 'bar',
        stack: 'a',
        name: '高等研究院专项',
        barWidth: '50%',
        emphasis: {
          focus: 'series'
        },
        label: {
          show: true,
          position: 'insideRight'
        }
      },
    ];
    
    const stackInfo = {};
    for (let i = 0; i < series[0].data.length; ++i) {
      for (let j = 0; j < series.length; ++j) {
        const stackName = series[j].stack;
        if (!stackName) {
          continue;
        }
        if (!stackInfo[stackName]) {
          stackInfo[stackName] = {
            stackStart: [],
            stackEnd: []
          };
        }
        const info = stackInfo[stackName];
        const data = series[j].data[i];
        if (data && data !== '-') {
          if (info.stackStart[i] == null) {
            info.stackStart[i] = j;
          }
          info.stackEnd[i] = j;
        }
      }
    }
    for (let i = 0; i < series.length; ++i) {
      const data = series[i].data;
      const info = stackInfo[series[i].stack];
      for (let j = 0; j < series[i].data.length; ++j) {
        const isEnd = info.stackEnd[j] === i;
        const leftBorder = isEnd ? 5 : 0;
        const rightBorder = 0;
        data[j] = {
          value: data[j],
          itemStyle: {
            borderRadius: [0, leftBorder, leftBorder, 0]
          }
        };
      }
    }
    
    option = {
      legend: {
        top:"0",
        itemWidth:10,
        itemHeight:10,
        textStyle:{
            color: "rgba(255,255,255,.5)",
           fontSize: "12"
        }
      },
       grid: {
        left: '3%',
        right: '4%',
        bottom: '0%',
       containLabel: true
         },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: {
        show:true,
        axisTick: {
          alignWithLabel: true
        },
        axisLabel:{
          color:"rgba(255,255,255,6)",
          fontSize:"12",
          interval:0,
      },
      splitLine:{
          lineStyle:{
            color:'#666',

          }
      },
    
      axisLine:{
        show:false
    },
      },
      yAxis: {
        type: 'category',
        data: ['2024', '2023', '2022', '2021', ],
        inverse:true, 
        axisLine:{
          show:false,
          },
        axisTick:{
          show:false
          },
        axisLabel:{
            color:"#fff"
           }, 
      },
      series: series
    };
    

      myChart.setOption(option);
      window.addEventListener('resize',function(){
        myChart.resize();
    })

})();
(function(){
  var yearData = [
    {
      year: '2023',  // 年份
      data: [  // 两个数组是因为有两条线
           [590, 1011, 1207, 1419, 1484, 1528, ],
           [814, 64, 191, 324, 290, 330, ]
        ]
    },
    {
      year: '2024',  // 年份
      data: [  // 两个数组是因为有两条线
           [814, 872, 860, 777, 779,778 ],
       [814, 131, 165, 123, 178, ]
        ]
    }
   ];
  var myChart =echarts.init(document.querySelector(".line .chart"));
    
     var option = {
      color:['#00f2f1', '#ed3f35'], 
      tooltip: {
          trigger: 'axis'
    
        },
        legend: {
          right:'0',
          itemWidth:10,
          itemHeight:10,
          textStyle:{
              color: "rgba(255,255,255,.5)",
             fontSize: "12"
          }
        },
        label: {
          show: true,
          formatter: (params) => params.value
        },
        grid: {
          top:'20%',
          left: '3%',
          right: '4%',
          bottom: '3%',
          show:true,
          borderColor:'#012f4a',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          axisTick:{
            show:false
          },
          axisLabel:{
            color:'#4c9bfd',
            interval:0,
          },
          axisLine:{
            show:false
          },
          boundaryGap: true,
          data: ['2019年', '2020年', '2021年', '2022年', '2023年', '2024年', ],
        },
        yAxis: {
          type: 'value',
          axisLine:{
            show:false
          },
          
          axisTick:{
            show:false
          },
          axisLabel:{
            color:'#4c9bfd'
          },
          splitLine:{
            lineStyle:{
              color:"#012f4a"
            }
          }
        },
        series: [
          {
            name: '就业',
            type: 'bar',
            data: yearData[0].data[0],
            stack: 'Ad',
            smooth:true,
            barWidth: '35%',
            emphasis: {
              focus: 'series'
            }, 
          },
          {
          
            name: '升学',
            type: 'bar',
            stack: 'Ad',
            data: yearData[1].data[0],    
            smooth:true,
            itemStyle:{
              barBorderRadius:[5, 5, 0,0]
          },
          },
        
        ]
      };
      myChart.setOption(option)
      window.addEventListener('resize',function(){
        myChart.resize();
    })
     $(".line h2").on("click", "a", function(){
         var obj = yearData[$(this).index()];
         option.series[0].data = obj.data[0]; 
         option.series[1].data = obj.data[1]; 
         myChart.setOption(option)
     });
})();
(function(){
  var myChart =echarts.init(document.querySelector('.line2 .chart' ));
  var option = {
    tooltip: {
      trigger: 'axis',
      color:["#2f89cf"],
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '0%',
      top:'10',
      right: '0%',
      bottom: '-10',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['湖南师范大学', '湘潭大学', '南华大学', '湖南科技大学', '中南林业大学', '长沙理工大学','湖南农业大学','湖南中医药大学' ,'吉首大学'],
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          color:"rgba(255,255,255,6)", // 修改字体颜色
          fontSize: '10',
          fontStyle: 'italic', // 设置斜体
          interval: 0,
          rotate: 55, 
        },
           axisLine:{
           show:true
        },
      },
      
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel:{
            color:"rgba(255,255,255,6)",
            fontSize:"12",
        },
        axisLine:{
           lineStyle:{
            color:"rgba(255,255,255,.1)",
            width:1
           },
           show:true
        },
        splitLine:{
            lineStyle:{
                color:"rgba(255,255,255,.1)",
            }
      }
      }
    ],
   
    series: [
     
      {
        name: '指标增量',
        type: 'bar',
        stack: 'Ad',
        barWidth: '50%',
        emphasis: {
          focus: 'series'
        },
        itemStyle:{
          barBorderRadius:[5, 5, 0,0]
      },
        data: [883,791,330,311,290,280,260,203,148]
      },
     
    ]
  };
  myChart.setOption(option); 
  window.addEventListener('resize',function(){
    myChart.resize();})
})();
(function(){
  var myChart =echarts.init(document.querySelector(".pie .chart"));
  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    grid: {
      left: '0%',
      top:"35px",
    right: '0%',
    bottom: '4%',
    containLabel: true
  },
  legend: {
    left:'left',
    itemWidth:10,
    itemHeight:10,
    textStyle:{
        color: "rgba(255,255,255,.5)",
       fontSize: "12"
    }
    
  },
    xAxis: [
      {
        type: 'category',
        data: ['2022年', '2023年', '2024年', '2025年'],
        axisPointer: {
          type: 'shadow'
        },
        axisTick: {
          alignWithLabel: true
        },
        axisLabel:{
          color:"rgba(255,255,255,6)",
          fontSize:"12",
          interval:0,
      },
      axisLine:{
        show:false
    },
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '人数',
        position: 'left',
        axisLabel: {
          formatter: '{value}',
          color:"rgba(255,255,255,6)",
          fontSize:"12",
          splitLine:{
            lineStyle:{
                color:"rgba(255,255,255,.1)",
            }
      },
        },
        axisLine:{
          lineStyle:{
           color:"rgba(255,255,255,.1)",
           width:1
          },
          show:true,
          splitLine:{
            lineStyle:{
                color:"rgba(255,255,255,.1)",
            }
           },
       },
      },
     {
  type: 'value',
  name: '推免率 (%)',
  position: 'right',
  axisLabel: {
    formatter: '{value}%',
    color: 'rgba(255,255,255,0.6)', // 修改轴标签的颜色
    fontSize: '12'
  },
  axisLine: {
    lineStyle: {
      color: 'rgba(255,255,255,0.1)',
      width: 1
    },
    show: true
  },
  nameTextStyle: {
    color: '#FFFFFF' // 修改轴名称的颜色
  }
}
    ],
    series: [
      {
        name: '本科毕业生人数',
        type: 'line',
        data: [6944, 7305, 6900, 6569],
        color: '#5470C6',
        smooth: true
      },
      {
        name: '推免生人数',
        type: 'line',
        data: [197, 239, 290, 330],
        color: '#91CC75',
        smooth: true
      },
      {
        name: '推免率',
        type: 'line',
        yAxisIndex: 1,
        data: [2.83, 3.27, 4.2, 5.02],
        color: '#FAC858',
        smooth: true
      }
    ]
  };
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  }); 
 })();
 (function(){
  var myChart =echarts.init(document.querySelector(".pie2 .chart"));

  var javascript
  option = {
    title: {
      text: '培养情况：',
      left: '0',
      top: '0',    
      textStyle: {
        fontSize: 12,
        fontWeight: 'bold',
        color:  "rgba(255,255,255,6)"
      },
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      type: 'scroll',
      orient: 'vertical',
      right: -15,
      top: 0,
      bottom: '0',
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: "rgba(255,255,255,0.5)",
        fontSize: 12
      },
      data: [
        '北京大学', '清华大学', '复旦大学', '上海交通大学', '浙江大学', 
        '中国科学技术大学', '南京大学', '哈尔滨工业大学', '西安交通大学', 
        '武汉大学', '中南大学', '重庆大学', '四川大学', '天津大学', 
        '北京航空航天大学', '北京理工大学', '同济大学', '东南大学', 
        '西北工业大学', '山东大学'
      ]
    },
    series: [
      {
        name: '985大学',
        type: 'pie',
        radius: '55%',
        center: ['35%', '50%'],
        labelLine:{
          length:3,
          length2:6,
        },
        data: [
          { name: '北京大学', value: 1 },
          { name: '清华大学', value: 1 },
          { name: '复旦大学', value: 1 },
          { name: '上海交通大学', value: 1 },
          { name: '浙江大学', value: 1 },
          { name: '中国科学技术大学', value: 1 },
          { name: '南京大学', value: 1 },
          { name: '哈尔滨工业大学', value: 1 },
          { name: '西安交通大学', value: 1 },
          { name: '武汉大学', value: 1 },
          { name: '中南大学', value: 1 },
          { name: '重庆大学', value: 1 },
          { name: '四川大学', value: 1 },
          { name: '天津大学', value: 1 },
          { name: '北京航空航天大学', value: 1 },
          { name: '北京理工大学', value: 1 },
          { name: '同济大学', value: 1 },
          { name: '东南大学', value: 1 },
          { name: '西北工业大学', value: 1 },
          { name: '山东大学', value: 1 }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

 
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
 })();




 
 (function(){
  var myChart =echarts.init(document.querySelector(".map .chart"));
  setTimeout(function () {
    option = {
      legend: {},
      tooltip: {
        trigger: 'axis',
        showContent: false
      },
      dataset: {
        source: [
          ['product', '2019', '2020', '2021', '2022', '2023', '2024'],
          ['硕士研究生', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
          ['博士研究生', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
          ['推免博士研究生', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
          ['推免硕士研究生', 25.2, 37.1, 41.2, 18, 33.9, 49.1]
        ]
      },
      xAxis: { type: 'category' },
      yAxis: { gridIndex: 0 },
      grid: { top: '55%' },
      series: [
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' }
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' }
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' }
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' }
        },
        {
          type: 'pie',
          id: 'pie',
          radius: '30%',
          center: ['50%', '25%'],
          emphasis: {
            focus: 'self'
          },
          label: {
            formatter: '{b}: {@2012} ({d}%)'
          },
          encode: {
            itemName: 'product',
            value: '2012',
            tooltip: '2012'
          }
        }
      ]
    };
    myChart.on('updateAxisPointer', function (event) {
      const xAxisInfo = event.axesInfo[0];
      if (xAxisInfo) {
        const dimension = xAxisInfo.value + 1;
        myChart.setOption({
          series: {
            id: 'pie',
            label: {
              formatter: '{b}: {@[' + dimension + ']} ({d}%)'
            },
            encode: {
              value: dimension,
              tooltip: dimension
            }
          }
        });
      }
    });
    myChart.setOption(option);
  });
  myChart.setOption(option);
 })();