// 配置左侧导航栏 菜单  引入必要的图标 
import {
    PieChartOutlined,
    InsertRowBelowOutlined,
    AppstoreAddOutlined,
    BarsOutlined,
    TagOutlined,
    LineChartOutlined,
    UserOutlined,
    UsergroupAddOutlined,
    SlidersOutlined,
    HomeOutlined
  } from '@ant-design/icons';
const menuList = [{
        title: '首页', // 菜单标题名称
        key: '/home', // 对应的 path
        icon: <HomeOutlined/>, // 图标名称
    },
    {
        title: '商品',
        key: '/products',
        icon: <AppstoreAddOutlined />,
        children: [ // 子菜单列表
            {
                title: '品类管理',
                key: '/category',
                icon: <BarsOutlined />
            },
            {
                title: '商品管理',
                key: '/product',
                icon: <TagOutlined />
            },
        ]
    },
    {
        title: '用户管理',
        key: '/users',
        icon: <UserOutlined />
    },
    {
        title: '角色管理',
        key: '/rule',
        icon: <UsergroupAddOutlined />,
    },
    {
        title: '图形图表',
        key: '/charts',
        icon: <InsertRowBelowOutlined />,
        children: [{
                title: '柱形图',
                key: '/charts/bar',
                icon: <SlidersOutlined />
            },
            {
                title: '折线图',
                key: '/charts/line',
                icon: <LineChartOutlined />
            },
            {
                title: '饼图',
                key: '/charts/pie',
                icon:<PieChartOutlined />
            },
        ]
    },
]
export default menuList