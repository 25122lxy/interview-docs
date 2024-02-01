module.exports = {
    title: '八股文突击',
    description: '八股文',
    theme: 'vuepress-theme-yilia-plus',//切换主题
    base: '/interview-docs/',
    head: [
			[
				"meta",
				{
					name:"referrer",
					content:"no-referrer"
				}
			],
			['link', {rel: 'icon', href: '/title_image.jpg'}]
    ],
    //base: '/',
    locales: {
        '/my-docs/Interview/01-Java基础': {
            lang: 'zh-CN'//时间中文格式
        }
    },
    themeConfig: {
        sidebarDepth: 4,
        // 子侧边栏
        subSidebar: true,
        nav: [
            {text: 'Index', link: '/'},
            {
                text: 'Interview-Doc',
                items: [
                
                    {text: 'Java基础', link: '/my-docs/Interview/01-Java基础'},
                    {text: 'Redis', link: '/my-docs/Interview/02-Redis'},
                    {text: 'MySQL', link: '/my-docs/Interview/03-MySQL'},
					{text: 'Java框架', link: '/my-docs/Interview/04-Java框架'},
					{text: '微服务', link: '/my-docs/Interview/05-微服务'},
					{text: '消息中间件', link: '/my-docs/Interview/06-消息中间件'},
					{text: 'Java集合', link: '/my-docs/Interview/07-Java集合'},
					{text: 'Java并发', link: '/my-docs/Interview/08-Java并发'},
					{text: 'JVM', link: '/my-docs/Interview/09-JVM'},
					{text: '数据结构与算法', link: '/my-docs/Interview/数据结构与算法'}

                ]
            }
        ],
        sidebar: [
//            'auto',//开启右侧标题栏
            {
                title: '学前必读',
                path: '/',
                collapsable: false, // 不折叠
                // children: [
                //     {title: "学前必读", path: "/"}
                // ]
            },
            {
                title: "Interview",
                // path: '/my-docs/Interview/01-Java基础',
                // collapsable: false, // 不折叠
                children: [
                    {title: "Java基础", collapsable: true,path: "/my-docs/Interview/01-Java基础"},
                    {title: 'Redis', path: "/my-docs/Interview/02-Redis"},
                    {title: 'MySQL', path: "/my-docs/Interview/03-MySQL"},
					{title: 'Java框架', path: "/my-docs/Interview/04-Java框架"},
					{title: '微服务', path: "/my-docs/Interview/05-微服务"},
					{title: '消息中间件', path: "/my-docs/Interview/06-消息中间件"},
					{title: 'Java集合', path: "/my-docs/Interview/07-Java集合"},
					{title: 'Java并发', path: "/my-docs/Interview/08-Java并发"},
					{title: 'JVM', path: "/my-docs/Interview/09-JVM"},
					{title: '数据结构与算法', path: "/my-docs/Interview/数据结构与算法"}

                ],
            },


        ],

        /* vuepress-theme-yilia-plus 配置 */
        yilia_plus: {
            // github-corner(关闭请设置为false)
//            github: {
//                url: "https://github.com/25122lxy/"
//            },
            footer: {
                // 网站成立年份(若填入年份小于当前年份，则显示为 2018-2019 类似的格式)
                since: 2023,
                // 网站作者(关闭请设置为false)
                author: 'lxy25122',
                // 访问量统计功能(不蒜子)
                busuanzi: {
                    // 是否启用(关闭请设置为false)
                    enable: false
                }
            }
        }

    },
    plugins: [
        [
            'vuepress-plugin-helper-live2d', {
            // 是否开启控制台日志打印(default: false)
            log: false,
            live2d: {
                // 是否启用(关闭请设置为false)(default: true)
                enable: true,
                // 模型名称(default: hibiki)>>>取值请参考：
                // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
//                model: 'wanko',
                model: 'haruto',
                display: {
                    position: "right", // 显示位置：left/right(default: 'right')
                    width: 135, // 模型的长度(default: 135)
                    height: 300, // 模型的高度(default: 300)
                    hOffset: 65, //  水平偏移(default: 65)
                    vOffset: 0, //  垂直偏移(default: 0)
                },
                mobile: {
                    show: false // 是否在移动设备上显示(default: false)
                },
                react: {
                    opacity: 0.8 // 模型透明度(default: 0.8)
                }
            }
        }
        ],
        ['cursor-effects']
    ]
}
