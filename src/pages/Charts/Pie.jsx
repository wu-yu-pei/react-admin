import React, { Component } from 'react'
// 按需引入
import * as echarts from 'echarts/core';
// 引入柱状图图表
import { PieChart} from 'echarts/charts';
// 引入提示框，标题，直角坐标系组件，组件后缀都为 Component
import {TitleComponent,TooltipComponent,GridComponent,LegendComponent,ToolboxComponent} from 'echarts/components';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import {CanvasRenderer} from 'echarts/renderers';
echarts.use( [TitleComponent, TooltipComponent, GridComponent, CanvasRenderer,LegendComponent,ToolboxComponent,PieChart]);
export default class Pie extends Component {
    
    componentDidMount() {
        var myChart = echarts.init(document.getElementById('main'));
        myChart.setOption({
            legend: {
                top: 'bottom'
            },
            toolbox: {
                show: true,
                feature: {
                    mark: {show: true},
                    dataView: {show: true, readOnly: false},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            series: [
                {
                    name: '面积模式',
                    type: 'pie',
                    radius: [50, 250],
                    center: ['50%', '50%'],
                    roseType: 'area',
                    itemStyle: {
                        borderRadius: 8
                    },
                    data: [
                        {value: 40, name: 'rose 1'},
                        {value: 38, name: 'rose 2'},
                        {value: 32, name: 'rose 3'},
                        {value: 30, name: 'rose 4'},
                        {value: 28, name: 'rose 5'},
                        {value: 26, name: 'rose 6'},
                        {value: 22, name: 'rose 7'},
                        {value: 18, name: 'rose 8'}
                    ]
                }
            ]
        });
        var myChart1 = echarts.init(document.getElementById('main1'));
        myChart1.setOption({
            tooltip: {
                trigger: 'item'
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '40',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        {value: 1048, name: '搜索引擎'},
                        {value: 735, name: '直接访问'},
                        {value: 580, name: '邮件营销'},
                        {value: 484, name: '联盟广告'},
                        {value: 300, name: '视频广告'}
                    ]
                }
            ]
        });
    }
    render() {
        return (
            <div style={{display:'flex',justifyContent:'center',alignContent:"space-between"}}>
                <div id='main' style={{width:700,height:530,margin:'10px 35px  0'}}>

                </div>
                <div id='main1' style={{width:500,height:530,margin:'10px 35px  0'}}>
            
                </div>
           </div>
        )
    }
}
