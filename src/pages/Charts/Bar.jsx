import React, { Component } from 'react'
// 按需引入
import * as echarts from 'echarts/core';
// 引入柱状图图表
import { BarChart} from 'echarts/charts';
// 引入提示框，标题，直角坐标系组件，组件后缀都为 Component
import {TitleComponent,TooltipComponent,GridComponent} from 'echarts/components';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import {CanvasRenderer} from 'echarts/renderers';
echarts.use( [TitleComponent, TooltipComponent, GridComponent, BarChart, CanvasRenderer]);

export default class Bar extends Component {
    componentDidMount() {
        // 图标一
        var myChart = echarts.init(document.getElementById('main'));
        myChart.setOption({
            title: {
                text: '每周出货量',
                subtext: '纯属虚构',
                left: 'center'
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar'
            }]
        });
        // 图标二
        var xAxisData = [];
        var data1 = [];
        var data2 = [];
        for (var i = 0; i < 100; i++) {
            xAxisData.push('类目' + i);
            data1.push((Math.sin(i / 5) * (i / 5 -10) + i / 6) * 5);
            data2.push((Math.cos(i / 5) * (i / 5 -10) + i / 6) * 5);
        }
        var myChart1 = echarts.init(document.getElementById('main1'));
        myChart1.setOption({
            title: {
                text: '柱状图动画延迟'
            },
            legend: {
                data: ['bar', 'bar2']
            },
            toolbox: {
                // y: 'bottom',
                feature: {
                    magicType: {
                        type: ['stack', 'tiled']
                    },
                    dataView: {},
                    saveAsImage: {
                        pixelRatio: 2
                    }
                }
            },
            tooltip: {},
            xAxis: {
                data: xAxisData,
                splitLine: {
                    show: false
                }
            },
            yAxis: {
            },
            series: [{
                name: 'bar',
                type: 'bar',
                data: data1,
                emphasis: {
                    focus: 'series'
                },
                animationDelay: function (idx) {
                    return idx * 10;
                }
            }, {
                name: 'bar2',
                type: 'bar',
                data: data2,
                emphasis: {
                    focus: 'series'
                },
                animationDelay: function (idx) {
                    return idx * 10 + 100;
                }
            }],
            animationEasing: 'elasticOut',
            animationDelayUpdate: function (idx) {
                return idx * 5;
            }
        });
    }
    render() {
        return (
           <div style={{display:'flex',justifyContent:'center',alignContent:"space-between"}}>
                <div id='main' style={{width:500,height:500,margin:'10px 35px  0'}}>

                </div>
                <div id='main1' style={{width:500,height:500,margin:'10px 35px  0'}}>

                </div>
           </div>
        )
    }
}
