import { DashboardData } from '../types';

export const initialDashboardData: DashboardData = {
  theme: {
    style: "科技感 UI 大屏 / 数字化展板 / **极简商务** / **Glassmorphism (毛玻璃)** 材质",
    primary_color: "深蓝黑 (#1F2329)",
    accent_color: "科技蓝 (#1677FF)",
    background_color: "高雅灰 (#FFFFFF)",
    card_background_color: "rgba(255, 255, 255, 0.6)",
    text_color: "深蓝黑 (#1F2329)"
  },
  top_header_banner: {
    style: "采用高雅灰背景，无边框，整体呈现**毛玻璃遮罩**效果",
    top_left_decoration: {
      style: "不要使用边框，要和父容器形成一个整体",
      type: "视觉插图 / 全球 / 区域数字化地图",
      theme: "global_technology_network",
      visual_details: {
        main_subject: "由蓝色数字像素阵列构成的世界地图（北美洲与南美洲局部视角）",
        background: "**高雅灰白渐变**科技背景",
        overlay_network: "发光的蓝色点线构成的网格与节点连接网络，伴随微弱的白光粒子效果",
        color_palette: ["#E8F3FF", "#85B5FF", "#1677FF", "#003AA8"]
      }
    },
    top_center_main: {
      style: "title 使用深蓝黑，subtitle 使用科技蓝，Summary Text 清晰醒目",
      title: "土方数智化管控平台",
      subtitle: "一屏总览项目数智化成果，贯通数据、业务与管理闭环",
      summary_text: "本项目数智化成果总结为“一二三四五”：一套数据、两个系统、三人协同、四个阶段、五大应用，实现“每一方土从哪里来、到哪里去、上哪拆弄、走哪条路”全生命周期精准管控，创新土方安全智管控。"
    },
    top_right_dashboard: {
      bg_image: {
        style: "工程施工现场图（挖掘机与自卸卡车作业背景）",
        overlay: "**高斯模糊 & 半透明高雅灰遮罩**",
        mask_opacity: 0.6
      },
      metrics: {
        style: "**精致且发光的数据组件**",
        text_color: "#FFFFFF",
        items: [
          {
            label: "土方总量 (m³)",
            value: "8,632,500",
            chart_type: "蓝色折线趋势图 (精致，带发光)",
            trend: [45, 52, 60, 68, 75, 82, 88, 95]
          },
          {
            label: "今日运输 (车次)",
            value: "328",
            chart_type: "蓝色柱状图 (精致，带发光)",
            trend: [25, 40, 32, 55, 48, 62, 328]
          },
          {
            label: "合规率",
            value: "98.7%",
            chart_type: "98.7% 蓝色环形进度条 (精致，带发光)"
          }
        ]
      }
    }
  },
  middle_cards: [
    {
      code: "A",
      title: "一套数据",
      subtitle: "所有系统实现一组数据全贯通",
      style: "采用**半透明毛玻璃背景** / title 使用科技蓝 / 数据圆柱体更精致",
      data_center_feature: {
        center_element: {
          type: "3D_database_cylinder",
          description: "蓝色 3D 数据库圆柱体，周围环绕着多层浅蓝色数据流光环/轨道，带有发光的科技粒子点"
        },
        left_features: [
          { text: "统一标准", icon: "蓝色小点" },
          { text: "统一编码", icon: "蓝色小点" },
          { text: "统一口径", icon: "蓝色小点" }
        ],
        right_features: [
          { text: "全域贯通", icon: "蓝色小点" },
          { text: "实时共享", icon: "蓝色小点" },
          { text: "安全可控", icon: "蓝色小点" }
        ]
      }
    },
    {
      style: "采用**半透明毛玻璃背景**",
      code: "B",
      title: "两个系统",
      layout: "网格排版（一排）",
      items: [
        {
          name: "BIM土方调配系统",
          icon: "三维建筑信息模型立方体",
          desc: "精准空间量算与三维土方调配"
        },
        {
          name: "智慧工地系统",
          icon: "电脑监控大屏",
          desc: "全景视频巡检与现场实时智控"
        }
      ]
    },
    {
      style: "采用**半透明毛玻璃背景**",
      code: "C",
      title: "三人协同",
      layout: "网格排版（一排）",
      roles: [
        { name: "自然人", icon: "佩戴安全帽的工程人员", avatarType: "human" },
        { name: "数字人", icon: "数字粒子线框人像", avatarType: "digital" },
        { name: "机器人", icon: "AI 智能机器人", avatarType: "robot" }
      ]
    },
    {
      style: "采用**半透明毛玻璃背景** / PDCA 循环图标更精致发光",
      code: "D",
      title: "四个阶段 (PDCA循环)",
      cycle_nodes: ["计划 Plan", "执行 Do", "检查 Check", "处理 Action"],
      core_concept: "PDCA 循环改进 持续提升"
    },
    {
      style: "采用**半透明毛玻璃背景** / 应用卡片文字清晰 / 图标采用发光矢量风",
      code: "E",
      title: "五大应用",
      layout: "网格排版（上排 3 个卡片，下排 2 个卡片）",
      applications: [
        {
          name: "精准算量",
          tag: "量",
          color: "蓝色",
          layout: "字在上方，图标在下方",
          icon_description: "蓝色 3D 方块/积木堆叠图标，代表体积与算量"
        },
        {
          name: "智慧调运",
          tag: "调",
          color: "蓝色",
          layout: "字在上方，图标在下方",
          icon_description: "蓝色工程运输卡车/渣土车图标"
        },
        {
          name: "挖卡协同",
          tag: "协",
          color: "蓝色",
          layout: "字在上方，图标在下方",
          icon_description: "绿色挖掘机/机械臂作业图标"
        },
        {
          name: "油耗费控",
          tag: "油",
          color: "蓝色",
          layout: "字在上方，图标在下方",
          icon_description: "加油枪/违规监控警示图标"
        },
        {
          name: "进度纠偏",
          tag: "偏",
          color: "蓝色",
          layout: "字在上方，图标在下方",
          icon_description: "绿色的折线图与柱状图图标"
        }
      ]
    }
  ],
  bottom_footer: {
    style: "采用高雅灰背景，呈现**毛玻璃遮罩**效果，主体为唯一的手机 Mockup",
    bottom_left_flow: {
      style: "采用**半透明毛玻璃卡片背景** / 图标更精致",
      title: "每一方土：来源可溯、去向可查、车辆可知、路线可控",
      steps: [
        {
          num: "01",
          stage: "从哪里来",
          sub_tag: "来源可溯",
          icon: "挖掘机在山体开挖"
        },
        {
          num: "02",
          stage: "到哪里去",
          sub_tag: "去向可查",
          icon: "渣土运输卡车在工作"
        },
        {
          num: "03",
          stage: "上哪辆车",
          sub_tag: "车辆可知",
          icon: "正面智能卡车"
        },
        {
          num: "04",
          stage: "走哪条路",
          sub_tag: "路线可控",
          icon: "GPS定位地图轨迹"
        },
        {
          num: "05",
          stage: "全生命周期追溯",
          sub_tag: "精准管控",
          icon: "平板电脑监控终端"
        }
      ],
      bottom_features: [
        { text: "数据实时采集", icon_description: "数据库/云端数据同步图标" },
        { text: "全链路跟踪", icon_description: "链条/链路连接图标" },
        { text: "可视化监控", icon_description: "放大镜/监控分析图标" },
        { text: "智能预警", icon_description: "发光的响铃/预警提示图标" },
        { text: "合规高效", icon_description: "带有对勾的盾牌/合规认证图标" }
      ]
    },
    bottom_right_app: {
      style: "作为展板主体的唯一 APP 界面，呈现**极致 Glassmorphism (毛玻璃)** 效果",
      layout: "左右分栏布局 (左侧APP介绍文案与功能按钮 | 右侧手机界面 Mockup)",
      left_content: {
        tag: {
          text: "现场应用",
          style: "蓝色平行四边形标签（白字）",
          layout: "放在app_name左边"
        },
        app_name: "土方透视APP",
        description: "我们将不断更新的土方数据导入自主研发的“土方透视”APP，现场人员安装手机定位即可查看土方拆运的方向、设计与开挖红线信息，从而精准指导施工。",
        feature_icons: {
          layout: "单排横向4列网格",
          items: [
            { name: "手机定位", icon_description: "浅蓝底色圆角方块，内含蓝色地图定位大头针图标" },
            { name: "地图查看", icon_description: "浅蓝底色圆角方块，内含蓝色展开的折叠地图/图纸线条图标" },
            { name: "设计交底", icon_description: "浅蓝底色圆角方块，内含蓝色正方形框及内部上升折线图标" },
            { name: "开挖红线", icon_description: "浅蓝底色圆角方块，内含蓝色房屋/红线区域边界框线图标" }
          ]
        }
      },
      right_content: {
        device_mockup: {
          render_control: {
            display_mode: "single_device_only",
            screen_count: 1
          },
          device: "Android 旗舰智能手机 (如小米/华为曲面屏风格)",
          screen_content: {
            header: {
              title: "埃塞绍夫图国际机场场坪工程",
              notice: "以下数据为模型理论计算值，请以现场实际为准",
              back_button: true
            },
            sections: [
              {
                type: "geological_column_section",
                title: "定位扫描地质",
                subtitle: "当前位置附近地质柱状与交工面",
                chart: {
                  type: "地质柱状图",
                  elevation_range: "1890m - 1915m",
                  elevation_lines: [
                    { label: "航测面", value: "1912.94m", style: "绿色虚线" },
                    { label: "设计交工面", value: "1894.98m", style: "紫色虚线" }
                  ],
                  calculation_labels: [
                    { type: "挖方", value: "+17.88m", position: "左侧红色标签" },
                    { type: "航测面差", value: "+17.95m", position: "右侧红色标签" }
                  ],
                  geological_layers: [
                    { layer_code: "U1A", thickness: "3.20m", elevation: "1909.67m", color: "#D97706", description: "浅层表土与风化沙砾层" },
                    { layer_code: "U1BH", thickness: "3.32m", elevation: "1906.35m", color: "#C2410C", description: "硬质黏土与风化强硬层" },
                    { layer_code: "U1BL", thickness: "4.57m", elevation: "1901.78m", color: "#9A3412", description: "中硬凝灰岩块石夹泥层" },
                    { layer_code: "U2", thickness: "5.10m", elevation: "1896.58m", color: "#374151", description: "深层坚硬基岩（设计开挖底线）" },
                    { layer_code: "U1BL-1", thickness: "4.74m", elevation: "1891.70m", color: "#0F766E", description: "下伏玄武岩风化碎屑" },
                    { layer_code: "U1BL-2", thickness: "未标记", elevation: "1891.20m", color: "#6D28D9", description: "深部微风化母岩基底" }
                  ]
                }
              }
            ]
          }
        }
      }
    }
  }
};
