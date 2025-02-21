import {defineConfig} from 'vitepress'


export default defineConfig({
    title: "ToBulma",
    description: "Telegram 双向机器人 私聊机器人",
    lastUpdated: true,
    sitemap: {
        hostname: 'https://www.tobulma.com',
        lastmodDateOnly: false
    },
    head: [
        // 通用信息
        ['meta', {name: 'author', content: 'tobulma'}],
        ['meta', {name: 'keywords', content: '双向机器人'}],

        // 网站图标
        ['link', {rel: 'icon', href: '/logo.png'}],

        // Open Graph 信息
        ['meta', {property: 'og:title', content: 'ToBulma中文社区'}],
        ['meta', {property: 'og:description', content: '我们一起重新定义“内群”'}],
        ['meta', {property: 'og:image', content: 'https://www.tobulma.com/logo_x.png'}],
        ['meta', {property: 'og:url', content: 'https://www.tobulma.com/logo_x.png'}],
        ['meta', {property: 'og:type', content: 'website'}],
        ['meta', {property: 'og:site_name', content: 'ToBulma'}],

        // Twitter 信息
        ['meta', {name: 'twitter:card', content: 'summary'}],
        ['meta', {name: 'twitter:title', content: 'ToBulma中文社区'}],
        ['meta', {name: 'twitter:description', content: '我们一起重新定义“内群”'}],
        ['meta', {name: 'twitter:image', content: 'https://www.tobulma.com/logo_x.png'}],
    ],
    locales: {
        root: {
            label: '简体中文',
            lang: 'zh',
            title: 'ToBulma',
            description: 'Telegram 双向机器人 私聊机器人',
            themeConfig: {
                nav: [
                    {text: '电报群组无法打开', link: 'https://t.me/XBulma/51'},
                    {text: '电报中文语言包', link: 'https://t.me/XBulma/52'},
                    {text: '双向机器人文档', link: '/zh/brief/bot_introduce'},
                    {text: '售货机教程', link: '/zh/vending_machine/brief/what_is'},
                ],
                sidebar: {
                    '/zh': [
                        {
                            text: '简介',
                            items: [
                                {
                                    text: '🤖 什么是双向机器人？', link: '/zh/brief/bot_introduce'
                                },
                                {
                                    text: '❗️ 我无法发送消息', link: '/zh/brief/unable_send_message'
                                },
                                {
                                    text: '🤔 怎么解决', link: '/zh/brief/solve'
                                },
                                {
                                    text: '➕ 创建机器人', link: '/zh/brief/create_bot'
                                },
                            ],
                        },
                        {
                            text: '双向机器人',
                            items: [
                                {
                                    text: '🗣️ 怎么回复用户', link: '/zh/private_chat_bot/reply'
                                },
                                // {
                                //     text: '🗣️ 测试', link: '/zh/api-examples'
                                // },
                            ]
                        },
                        {
                            text: 'ToBulma 功能介绍',
                            items: [
                                {
                                    text: '用户管理', link: '/zh/user/user_management',
                                    items: [
                                        {text: '👤 封禁/解禁', link: '/zh/user/ban_or_release'},
                                        {text: '👤 编辑备注', link: '/zh/user/edit_notes'},
                                        {text: '👤 编辑说明', link: '/zh/user/edit_describe'},
                                        {text: '👤 显示备注', link: '/zh/user/display_notes'},
                                        {text: '👤 删除聊天记录', link: '/zh/user/delete_chat_history'}
                                    ]
                                },
                                {
                                    text: 'TG会员管理', link: '/zh/telegram_premium/telegram_premium',
                                    items: [
                                        {
                                            text: '👑 设置会员价格', link: '/zh/telegram_premium/set_telegram_premium'
                                        }
                                    ]
                                },
                                {
                                    text: '键盘管理', link: '/zh/keyboard/keyboard_management', items: [
                                        {
                                            text: '⌨️ 键盘', link: '/zh/keyboard/keyboard'
                                        },
                                        {
                                            text: '⌨️ 响应内容', link: '/zh/keyboard/keyboard_content'
                                        },
                                        {
                                            text: '⌨️ 按钮管理', link: '/zh/keyboard/keyboard_button'
                                        }
                                    ]
                                },
                                {
                                    text: '命令管理', link: '/zh/command/command_management', items: [
                                        {
                                            text: '💾 命令', link: '/zh/command/command'
                                        },
                                        {
                                            text: '💾 响应内容', link: '/zh/command/command_content'
                                        },
                                        {
                                            text: '💾 按钮管理', link: '/zh/command/command_button'
                                        }
                                    ]
                                },
                                {
                                    text: '欢迎词', link: '/zh/bot_welcome/bot_welcome', items: [
                                        {
                                            text: "👏 启用/禁用", link: '/zh/bot_welcome/enable_or_disable'
                                        },
                                        {
                                            text: "👏 编辑欢迎词", link: '/zh/bot_welcome/edit'
                                        },
                                        {
                                            text: "👏 新增按钮", link: '/zh/bot_welcome/add_button'
                                        }
                                    ]
                                },
                                {
                                    text: '广播', link: '/zh/bot_broadcast/bot_broadcast', items: [
                                        {
                                            text: "📡 发送广播", link: '/zh/bot_broadcast/send_bot_broadcast'
                                        }
                                    ]
                                },
                                {
                                    text: '自动回复', link: '/zh/bot_auto_reply/bot_auto_reply', items: [
                                        {
                                            text: '💬 匹配方式', link: '/zh/bot_auto_reply/matching_method'
                                        },
                                        {
                                            text: '💬 使用范围', link: '/zh/bot_auto_reply/use_range'
                                        },
                                        {
                                            text: '💬 回复词组', link: '/zh/bot_auto_reply/reply_group'
                                        },
                                    ]
                                },
                                {
                                    text: '付费聊天(专业版专享)', link: '/zh/paid/paid_chat', items: [
                                        {text: '💰 订单', link: '/zh/paid/order'},
                                        {text: '💰 编辑收款地址', link: '/zh/paid/edit_payment_address'},
                                        {text: '💰 编辑付费金额', link: '/zh/paid/edit_amount'},
                                        {text: '💰 口令: x字符', link: '/zh/paid/chat_command_str_num'},
                                    ]
                                },
                                {
                                    text: '设置', link: '/zh/settings/settings', items: [
                                        {text: '⚙️ 聊天模式', link: '/zh/settings/chat_model'},
                                    ]
                                },
                            ],
                        }
                    ],
                    '/zh/vending_machine/': [
                        {
                            text: '简介',
                            items: [
                                {
                                    text: '🤖 什么是布尔玛自动售卖机？', link: '/zh/vending_machine/brief/what_is'
                                },
                                {
                                    text: '➕ 创建机器人(店铺)', link: '/zh/vending_machine/brief/create_bot'
                                },
                            ],
                        },
                        {
                            text: '入驻必看',
                            items: [
                                // {text: '💰 收款费率', link: '/zh/paid/order'},
                                {text: '💳 收款方式', link: '/zh/vending_machine/must_see/payment_method'},
                            ]
                        },
                        {
                            text: '商品',
                            items: [
                                {
                                    text: '👥 付费群', link: '/zh/vending_machine/product/grop',
                                    items: [
                                        {
                                            text: '👥 上架付费群', link: '/zh/vending_machine/product/listing_products'
                                        },
                                        {
                                            text: '👥 设置价格', link: '/zh/vending_machine/product/grop_set_price'
                                        },
                                        {
                                            text: '👥 加入/群/频道(会员群)',
                                            link: '/zh/vending_machine/product/grop_join'
                                        }
                                    ]
                                },
                                {
                                    text: '🎬 付费素材',
                                    link: '/zh/vending_machine/product/file',
                                    items: [
                                        {
                                            text: '🎬 上架付费素材', link: '/zh/vending_machine/product/file_listing',
                                        },
                                        {
                                            text: '🎬 素材管理', link: '/zh/vending_machine/product/file_manage',
                                        }
                                    ]
                                },
                            ]
                        },
                        // {
                        //     text: '功能',
                        //     items: [
                        //         {text: '📢 管理频道/群', link: '/zh/paid/order'},
                        //         {text: '👏 欢迎词', link: '/zh/paid/order'},
                        //         {text: '📡 广播', link: '/zh/paid/order'},
                        //     ]
                        // },
                    ]
                }
            }
        },
    },
    themeConfig: {
        logo: '/logo.png',
        search: {
            provider: 'local',
        },
        socialLinks: [
            {icon: 'telegram', link: 'https://t.me/ToBulmaLivebot'},
            {icon: 'twitter', link: 'https://x.com/kawasawasen'}
        ],
        footer: {
            message: 'Unlimited communication, efficient interaction anytime, anywhere!',
            copyright: `Copyright © ${new Date().getFullYear()}.ToBulma.All rights reserved.`
        },
        // carbonAds: {
        //     code: 'your-carbon-code',
        //     placement: 'your-carbon-placement'
        // }
    },
    srcDir: 'docs',
})
