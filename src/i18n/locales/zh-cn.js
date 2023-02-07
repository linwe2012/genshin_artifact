export default {
    webName: "莫娜占卜铺",
    intro: {
        opensource: "开源地址",
        opensourceMonaDescription: "- 前端<br>- 莫娜DSL<br>- DSL Book等",
        opensourceYasDescription: "- YAS导出器",

        useCase1: "伤害计算器/单人配装",
        useCase1Description: "- 通过计算机进行单人圣遗物自动搭配，以得到最高输出等内容。<br>- 响应式计算器，所见即所得。",
        useCase2: "队伍配装",
        useCase2Description: "队伍配装，圣遗物不冲突",
        useCase3: "圣遗物潜力",
        useCase3Description: "快速计算圣遗物潜力。潜力即圣遗物满级后能够获得的平均得分，能够一定程度上衡量圣遗物的价值",
        useCase4: "圣遗物导出",
        useCase4Description: "快速导出圣遗物",

        feedback: "反馈",
        fbGithubIssue: "Github Issue",
        fbIssueDescription: "在Github仓库提出Issue",
        fbQQ: "QQ群",
        fbQQDescription: "在QQ群反馈或是水群（群号：801106595）",
        fbNGA: "NGA讨论帖",
        fbNGADescription: "在NGA进行反馈"
    },
    nav: {
        nav: "导航",
        home: "首页",
        repo: "我的仓库",
        account: "账号",
        artifact: "圣遗物",
        kumi: "圣遗物套装",
        preset: "计算预设",
        compute: "计算",
        calculate: "计算器",
        teamOptimize: "多人优化",
        potential: "圣遗物潜力",
        monaDB: "莫娜数据库",
        other: "附加功能",
        playground: "Playground",
        about: "关于本站",
        help: "帮助",
        exportTool: "导出工具",
        link: "友情链接",
        setup: "设置",
        bestSet: "最佳圣遗物",
    },
    misc: {
        character: "角色",
        mainStat: "主词条",
        subStat: "副词条",
        any: "任意",
        copy: "复制",
        "import": "导入",
        "export": "导出",
        cancel: "取消",
        confirm: "确定",
        artifact: "圣遗物",
        clear: "清空",
        recommend: "推荐",
        total: "总数",
        scan: "扫描",
        artifactSet: "套装",
        hint: "提示",
        lock: "启用",
        unlock: "禁用",
        del: "删除",
        edit: "编辑",
        rename: "重命名",
        search: "搜索",
        calculator: "计算器",
        preset: "预设",
        artSet: "圣遗物套装",
        artSlot: "圣遗物位置",
        quality: "品质",
        lvl: "等级",
        random: "随机",
        cont: "继续",
        flower: "生之花",
        Flower: "生之花",
        feather: "死之羽",
        Feather: "死之羽",
        sand: "时之沙",
        Sand: "时之沙",
        cup: "空之杯",
        Goblet: "空之杯",
        head: "理之冠",
        Head: "理之冠",
        algo: "算法",
        skill: "技能",
        conste: "命之座",
        weapon: "武器",
        refine: "精炼",
        tf: "目标函数",
        code: "代码",
        charSpecific: "角色专属",
        general: "通用",
        dmg: "伤害",
        type1: "类型",
        art4: "四件套：",
        stat: "词条",
        value: "值",
        stat1: "有效词条数",
        rollCount: "强化次数",
        selected: "选中",
        panel: "面板",
        lang: "语言",
    },
    artifact: {
        "DesertPavilionChronicle": {
            "setName": "沙上楼阁史话",
            "items": [
                "众王之都的开端",
                "黄金邦国的结末",
                "失落迷途的机芯",
                "迷醉长梦的守护",
                "流沙贵嗣的遗宝",
            ],
            "effects": {
                "2": "获得15%风元素伤害加成。",
                "4": "重击命中敌人后，该角色的普通攻击速度提升10%，普通攻击、重击与下落攻击造成的伤害提升40%，持续15秒。",
            }
        },
        "FlowerOfParadiseLost": {
            "setName": "乐园遗落之花",
            "items": [
                "月女的华彩",
                "谢落的筵席",
                "凝结的时刻",
                "守秘的魔瓶",
                "紫晶的花冠",
            ],
            "effects": {
                "2": "元素精通提高80点。",
                "4": "装备者绽放、超绽放、烈绽放反应造成的伤害提升50%。此外，装备者触发绽放、超绽放、烈绽放时，上述效果带来的加成提升25%，该效果持续10秒，至多叠加4次，每1秒至多触发一次。装备者处于队伍后台时依然能触发该效果。",
            }
        },
        "DeepwoodMemories": {
            "setName": "深林的记忆",
            "items": [
                "迷宫的游人",
                "翠蔓的智者",
                "贤智的定期",
                "迷误者之灯",
                "月桂的宝冠",
            ],
            "effects": {
                "2": "获得15%草元素伤害加成。",
                "4": "元素战技或元素爆发命中敌人后，使命中目标的草元素抗性降低30%，持续8秒。装备者处于队伍后台时，依然能触发该效果。",
            }
        },
        "GildedDreams": {
            "setName": "饰金之梦",
            "items": [
                "梦中的铁花",
                "裁断的翎羽",
                "沉金的岁月",
                "如蜜的终宴",
                "沙王的投影",
            ],
            "effects": {
                "2": "元素精通提高80点。",
                "4": "触发元素反应后的8秒内，会根据队伍内其他角色的元素类型，使装备者获得强化：队伍中每存在1个和装备者同类元素的角色，攻击力提升14%；每存在1个和装备者不同元素类型的角色，元素精通提升50点。上述每类效果至多计算3个角色。该效果每8秒至多触发一次。装备者处于队伍后台时，依然能触发该效果。",
            }
        },
        "thunderSmoother": {
            "setName": "平息鸣雷的尊者",
            "items": [
                "平雷之心",
                "平雷之羽",
                "平雷之刻",
                "平雷之器",
                "平雷之冠"
            ],
            "effects": {
                "2": "雷元素抗性提高40%。",
                "4": "对处于雷元素影响下的敌人造成的伤害提升35%。"
            }
        },
        "adventurer": {
            "setName": "冒险家",
            "items": [
                "冒险家之花",
                "冒险家尾羽",
                "冒险家怀表",
                "冒险家金杯",
                "冒险家头带"
            ],
            "effects": {
                "2": "生命值上限提高1000点。",
                "4": "开启各类宝箱后的5秒内，持续恢复30%生命值。"
            }
        },
        "retracingBolide": {
            "setName": "逆飞的流星",
            "items": [
                "夏祭之花",
                "夏祭终末",
                "夏祭之刻",
                "夏祭水玉",
                "夏祭之面"
            ],
            "effects": {
                "4": "处于护盾庇护下时，额外获得40%普通攻击和重击伤害加成。",
                "2": "护盾强效提高35%。"
            }
        },
        "berserker": {
            "setName": "战狂",
            "items": [
                "战狂的蔷薇",
                "战狂的翎羽",
                "战狂的时计",
                "战狂的骨杯",
                "战狂的鬼面"
            ],
            "effects": {
                "4": "生命值低于70%时，暴击率额外提升24%。",
                "2": "暴击率提高12%。"
            }
        },
        "emblemOfSeveredFate": {
            "setName": "绝缘之旗印",
            "items": [
                "明威之镡",
                "切落之羽",
                "雷云之笼",
                "绯花之壶",
                "华饰之兜"
            ],
            "effects": {
                "2": "元素充能效率提高20%。",
                "4": "基于元素充能效率的25%，提高元素爆发造成的伤害。至多通过这种方式获得75%提升。"
            }
        },
        "blizzardStrayer": {
            "setName": "冰风迷途的勇士",
            "items": [
                "历经风雪的思念",
                "摧冰而行的执望",
                "冰雪故园的终期",
                "遍结寒霜的傲骨",
                "破冰踏雪的回音"
            ],
            "effects": {
                "4": "攻击处于冰元素影响下的敌人时，暴击率提高20%；若敌人处于冻结状态下，则暴击率额外提高20%。",
                "2": "获得15%冰元素伤害加成。"
            }
        },
        "gambler": {
            "setName": "赌徒",
            "items": [
                "赌徒的胸花",
                "赌徒的羽饰",
                "赌徒的怀表",
                "赌徒的骰盅",
                "赌徒的耳环"
            ],
            "effects": {
                "4": "击败敌人时，有100%概率清除元素战技的冷却时间。该效果每15秒至多触发一次。",
                "2": "元素战技造成的伤害提升20%。"
            }
        },
        "huskOfOpulentDreams": {
            "setName": "华馆梦醒形骸记",
            "items": [
                "荣花之期",
                "华馆之羽",
                "众生之谣",
                "梦醒之瓢",
                "形骸之笠"
            ],
            "effects": {
                "2": "防御力提高30%。",
                "4": "装备此圣遗物套装的角色在以下情况下，将获得「问答」效果：在场上用岩元素攻击命中敌人后获得一层，每0.3秒至多触发一次；在队伍后台中，每3秒获得一层。问答至多叠加4层，每层能提供6%防御力与6%岩元素伤害加成。每6秒，若未获得问答效果，将损失一层。"
            }
        },
        "bloodstainedChivalry": {
            "setName": "染血的骑士道",
            "items": [
                "染血的铁之心",
                "染血的黑之羽",
                "骑士染血之时",
                "染血骑士之杯",
                "染血的铁假面"
            ],
            "effects": {
                "2": "造成的物理伤害提高25%。",
                "4": "击败敌人后的10秒内，施放重击时不消耗体力，且重击造成的伤害提升50%。"
            }
        },
        "defenderWill": {
            "setName": "守护之心",
            "items": [
                "守护之花",
                "守护徽印",
                "守护座钟",
                "守护之皿",
                "守护束带"
            ],
            "effects": {
                "2": "防御力提高30%。",
                "4": "队伍里每有不同一种元素类型的自己的角色，自身获得30%相应的元素抗性。"
            }
        },
        "prayersForIllumination": {
            "setName": "祭火之人",
            "items": [
                "祭火礼冠"
            ],
            "effects": {
                "1": "受到的火元素附着效果的持续时间减少40%。"
            }
        },
        "travelingDoctor": {
            "setName": "游医",
            "items": [
                "游医的银莲",
                "游医的枭羽",
                "游医的怀钟",
                "游医的药壶",
                "游医的方巾"
            ],
            "effects": {
                "2": "角色受到的治疗效果提高20%。",
                "4": "施放元素爆发时，恢复20%生命值。"
            }
        },
        "wandererTroupe": {
            "setName": "流浪大地的乐团",
            "items": [
                "乐团的晨光",
                "琴师的箭羽",
                "终幕的时计",
                "吟游者之壶",
                "指挥的礼帽"
            ],
            "effects": {
                "2": "元素精通提高80点。",
                "4": "装备该圣遗物套装的角色为法器、弓箭角色时，角色重击造成的伤害提高35%。"
            }
        },
        "resolutionOfSojourner": {
            "setName": "行者之心",
            "items": [
                "故人之心",
                "归乡之羽",
                "逐光之石",
                "异国之盏",
                "感别之冠"
            ],
            "effects": {
                "4": "重击的暴击率提升30%。",
                "2": "攻击力提高18%。"
            }
        },
        "archaicPetra": {
            "setName": "悠古的磐岩",
            "items": [
                "磐陀裂生之花",
                "嵯峨群峰之翼",
                "星罗圭璧之晷",
                "巉岩琢塑之樽",
                "不动玄石之相"
            ],
            "effects": {
                "2": "获得15%岩元素伤害加成。",
                "4": "获得结晶反应形成的晶片时，队伍中所有角色获得35%对应元素伤害加成，持续10秒。同时只能通过该效果获得一种元素伤害加成。"
            }
        },
        "heartOfDepth": {
            "setName": "沉沦之心",
            "items": [
                "饰金胸花",
                "追忆之风",
                "坚铜罗盘",
                "沉波之盏",
                "酒渍船帽"
            ],
            "effects": {
                "4": "施放元素战技后的15秒内，普通攻击与重击造成的伤害提高30%。",
                "2": "获得15%水元素伤害加成。"
            }
        },
        "instructor": {
            "setName": "教官",
            "items": [
                "教官的胸花",
                "教官的羽饰",
                "教官的怀表",
                "教官的茶杯",
                "教官的帽子"
            ],
            "effects": {
                "4": "触发元素反应后，队伍中所有角色的元素精通提高120点，持续8秒。",
                "2": "元素精通提高80点。"
            }
        },
        "gladiatorFinale": {
            "setName": "角斗士的终幕礼",
            "items": [
                "角斗士的留恋",
                "角斗士的归宿",
                "角斗士的希冀",
                "角斗士的酣醉",
                "角斗士的凯旋"
            ],
            "effects": {
                "4": "装备该圣遗物套装的角色为单手剑、双手剑、长柄武器角色时，角色普通攻击造成的伤害提高35%。",
                "2": "攻击力提高18%。"
            }
        },
        "lavaWalker": {
            "setName": "渡过烈火的贤人",
            "items": [
                "渡火者的决绝",
                "渡火者的解脱",
                "渡火者的煎熬",
                "渡火者的醒悟",
                "渡火者的智慧"
            ],
            "effects": {
                "2": "火元素抗性提高40%。",
                "4": "对处于火元素影响下的敌人造成的伤害提升35%。"
            }
        },
        "paleFlame": {
            "setName": "苍白之火",
            "items": [
                "无垢之花",
                "贤医之羽",
                "停摆之刻",
                "超越之盏",
                "嗤笑之面"
            ],
            "effects": {
                "4": "元素战技命中敌人后，攻击力提升9%。该效果持续7秒，至多叠加2层，每0.3秒至多触发一次。叠满2层时，2件套的效果提升100%。",
                "2": "造成的物理伤害提高25%。"
            }
        },
        "scholar": {
            "setName": "学士",
            "items": [
                "学士的书签",
                "学士的羽笔",
                "学士的时钟",
                "学士的墨杯",
                "学士的镜片"
            ],
            "effects": {
                "2": "元素充能效率提高20%。",
                "4": "获得元素微粒或元素晶球时，队伍中所有弓箭和法器角色额外恢复3点元素能量。该效果每3秒只能触发一次。"
            }
        },
        "braveHeart": {
            "setName": "勇士之心",
            "items": [
                "勇士的勋章",
                "勇士的期许",
                "勇士的坚毅",
                "勇士的壮行",
                "勇士的冠冕"
            ],
            "effects": {
                "2": "攻击力提高18%。",
                "4": "对生命值高于50%的敌人，造成的伤害增加30%。"
            }
        },
        "prayersToSpringtime": {
            "setName": "祭冰之人",
            "items": [
                "祭冰礼冠"
            ],
            "effects": {
                "1": "受到的冰元素附着效果的持续时间减少40%。"
            }
        },
        "oceanHuedClam": {
            "setName": "海染砗磲",
            "items": [
                "海染之花",
                "渊宫之羽",
                "离别之贝",
                "真珠之笼",
                "海祇之冠"
            ],
            "effects": {
                "2": "治疗加成提高15%。",
                "4": "装备此圣遗物套装的角色对队伍中的角色进行治疗时，将产生持续3秒的海染泡沫，记录治疗的生命值回复量（包括溢出值）。持续时间结束时，海染泡沫将会爆炸，对周围的敌人造成90%累计回复量的伤害（该伤害结算方式同感电、超导等元素反应，但不受元素精通、等级或反应伤害加成效果影响）。每3.5秒至多产生一个海染泡沫；海染泡沫至多记录30000点回复量，含溢出部分的治疗量；自己的队伍中同时至多存在一个海染泡沫。装备此圣遗物套装的角色处于队伍后台时，依然能触发该效果。"
            }
        },
        "shimenawaReminiscence": {
            "setName": "追忆之注连",
            "items": [
                "羁缠之花",
                "思忆之矢",
                "朝露之时",
                "祈望之心",
                "无常之面"
            ],
            "effects": {
                "2": "攻击力提高18%。",
                "4": "施放元素战技时，如果角色的元素能量高于或等于15点，则会流失15点元素能量，使接下来的10秒内，普通攻击、重击、下落攻击造成的伤害提高50%，持续期间内该效果不会再次触发。"
            }
        },
        "tenacityOfTheMillelith": {
            "setName": "千岩牢固",
            "items": [
                "勋绩之花",
                "昭武翎羽",
                "金铜时晷",
                "盟誓金爵",
                "将帅兜鍪"
            ],
            "effects": {
                "4": "元素战技命中敌人后，使队伍中附近的所有角色攻击力提升20%，护盾强效提升30%，持续3秒。该效果每0.5秒至多触发一次。装备此圣遗物套装的角色处于队伍后台时，依然能触发该效果。",
                "2": "生命值提升20%"
            }
        },
        "Empty": {
            "setName": "赌徒",
            "items": [
                "赌徒的胸花",
                "赌徒的羽饰",
                "赌徒的怀表",
                "赌徒的骰盅",
                "赌徒的耳环"
            ],
            "effects": {
                "4": "击败敌人时，有100%概率清除元素战技的冷却时间。该效果每15秒至多触发一次。",
                "2": "元素战技造成的伤害提升20%。"
            }
        },
        "VermillionHereafter": {
            "setName": "辰砂往生录",
            "items": [
                "生灵之华",
                "潜光片羽",
                "阳辔之遗",
                "结契之刻",
                "虺雷之姿"
            ],
            "effects": {
                "2": "攻击力提高18%。",
                "4": "施放元素爆发后，将产生持续16秒的「潜光」效果：攻击力提升8%；并在角色的生命值降低时，攻击力进一步提升10%，至多通过这种方式提升4次，每0.8秒至多触发一次。「潜光」效果将在角色退场时消失；持续期间再次施放元素爆发，将移除原有的「潜光」。"
            }
        },
        "maidenBeloved": {
            "setName": "被怜爱的少女",
            "items": [
                "远方的少女之心",
                "少女飘摇的思念",
                "少女苦短的良辰",
                "少女片刻的闲暇",
                "少女易逝的芳颜"
            ],
            "effects": {
                "2": "角色造成的治疗效果提升15%。",
                "4": "施放元素战技或元素爆发后的10秒内，队伍中所有角色受治疗效果加成提高20%。"
            }
        },
        "EchoesOfAnOffering": {
            "setName": "来歆余响",
            "items": [
                "魂香之花",
                "垂玉之叶",
                "祝祀之凭",
                "涌泉之盏",
                "浮溯之珏"
            ],
            "effects": {
                "4": "普通攻击命中敌人时，有36%概率触发「幽谷祝祀」：普通攻击造成的伤害提高，伤害提高值为攻击力的70%，该效果将在普通攻击造成伤害后的0.05秒后清除。普通攻击未触发「幽谷祝祀」时，会使下次触发概率提升20%；0.2秒内至多判定1次触发与否。",
                "2": "攻击力提高18%。"
            }
        },
        "martialArtist": {
            "setName": "武人",
            "items": [
                "武人的红花",
                "武人的羽饰",
                "武人的水漏",
                "武人的酒杯",
                "武人的头巾"
            ],
            "effects": {
                "4": "施放元素战技后的8秒内，普通攻击和重击造成的伤害提升25%。",
                "2": "普通攻击与重击造成的伤害提高15%；"
            }
        },
        "prayersForWisdom": {
            "setName": "祭雷之人",
            "items": [
                "祭雷礼冠"
            ],
            "effects": {
                "1": "受到的雷元素附着效果的持续时间减少40%。"
            }
        },
        "exile": {
            "setName": "流放者",
            "items": [
                "流放者之花",
                "流放者之羽",
                "流放者怀表",
                "流放者之杯",
                "流放者头冠"
            ],
            "effects": {
                "2": "元素充能效率提高20%。",
                "4": "施放元素爆发后，每2秒为队伍中所有角色（不包括自己）恢复2点元素能量。该效果持续6秒，无法叠加。"
            }
        },
        "thunderingFury": {
            "setName": "如雷的盛怒",
            "items": [
                "雷鸟的怜悯",
                "雷灾的孑遗",
                "雷霆的时计",
                "降雷的凶兆",
                "唤雷的头冠"
            ],
            "effects": {
                "4": "超载、感电、超导反应造成的伤害提升40%。触发这些元素反应时，元素战技冷却时间减少1秒。该效果每0.8秒最多触发一次。",
                "2": "获得15%雷元素伤害加成。"
            }
        },
        "prayersForDestiny": {
            "setName": "祭水之人",
            "items": [
                "祭水礼冠"
            ],
            "effects": {
                "1": "受到的水元素附着效果的持续时间减少40%。"
            }
        },
        "crimsonWitch": {
            "setName": "炽烈的炎之魔女",
            "items": [
                "魔女的炎之花",
                "魔女常燃之羽",
                "魔女破灭之时",
                "魔女的心之火",
                "焦灼的魔女帽"
            ],
            "effects": {
                "2": "获得15%火元素伤害加成。",
                "4": "超载、燃烧反应造成的伤害提升40%，蒸发、融化反应的加成系数提高15%。施放元素战技后的10秒内，2件套的效果提高50%，该效果最多叠加3次。"
            }
        },
        "noblesseOblige": {
            "setName": "昔日宗室之仪",
            "items": [
                "宗室之花",
                "宗室之翎",
                "宗室时计",
                "宗室银瓮",
                "宗室面具"
            ],
            "effects": {
                "2": "元素爆发造成的伤害提升20%。",
                "4": "施放元素爆发后，队伍中所有角色攻击力提升20%，持续12秒。该效果不可叠加。"
            }
        },
        "viridescentVenerer": {
            "setName": "翠绿之影",
            "items": [
                "野花记忆的绿野",
                "猎人青翠的箭羽",
                "翠绿猎人的笃定",
                "翠绿猎人的容器",
                "翠绿的猎人之冠"
            ],
            "effects": {
                "2": "获得15%风元素伤害加成。",
                "4": "扩散反应造成的伤害提升60%。根据扩散的元素类型，降低受到影响的敌人40%的对应元素抗性，持续10秒。"
            }
        },
        "luckyDog": {
            "setName": "幸运儿",
            "items": [
                "幸运儿绿花",
                "幸运儿鹰羽",
                "幸运儿沙漏",
                "幸运儿之杯",
                "幸运儿银冠"
            ],
            "effects": {
                "2": "防御力提高100点。",
                "4": "拾取摩拉时，恢复300点生命值。"
            }
        },
        "tinyMiracle": {
            "setName": "奇迹",
            "items": [
                "奇迹之花",
                "奇迹之羽",
                "奇迹之沙",
                "奇迹之杯",
                "奇迹耳坠"
            ],
            "effects": {
                "4": "受到某个元素类型的伤害后，相应的抗性提升30%，持续10秒。该效果每10秒只能触发一次。",
                "2": "所有元素抗性提高20%。"
            }
        }
    },
    config: {
        w1: "被动等效层数",
        w2: "被动应用比例",
        w3: "充能需求",
        w4: "数值",
        w5: "精炼",
        w6: "周围存在敌人",
        w7: "状态",
        w8: "效果1比例",
        w9: "效果2比例",
        w10: "队伍元素能量上限总和",
        w11: "「白夜极星」层数",
        w12: "0.3秒内命中",
        w13: "「飞雷之巴印」层数",
        w14: "满层比例",
        w15: "护盾覆盖率",
        w16: "宣叙调比例",
        w17: "咏叹调比例",
        w18: "间奏曲比例",
        w19: "队伍璃月角色数量",
        w20: "「圆顿」等效层数",
        w21: "后台比例",
        w22: "身边至少有2个敌人",
        w23: "满层状态比例",
        w24: "生命值低于50%时间比例",
        w25: "「波穗」层数",
        w26: "「雾切之巴印」层数",
        w27: "元素精通",
        w28: "生命值",
        w29: "同元素角色数",
        w30: "不同元素角色数",

        c1: "天赋「天地交泰」应用比例",
        c2: "天赋「唯此一心」应用比例",
        c3: "生命值低于50%",
        c4: "彼岸蝶舞",
        c5: "天赋「天罪国罪镇词」应用比例",
        c6: "天赋「寒天宣命祝词」应用比例",
        c7: "神里流·霰步",
        c8: "六命效果",
        c9: "天赋「玉衡之贵」应用比例",
        c10: "E附魔",
        c11: "生命值不高于50%（天赋1：治疗加成+15%）",
        c12: "启用六命",
        c13: "天赋「储之千日，用之一刻」应用比例",
        c14: "应用天赋「聆听忏悔的幽影」效果",
        c15: "雷之印层数",
        c16: "天赋「饥饿」应用比例",
        c17: "队伍不同元素数量",
        c18: "天赋「袖火百景图」应用层数",
        c19: "庭火焰硝",
        c20: "线圈层数",
        c21: "处于「怒目鬼王」",
        c22: "是否被大招附魔",
        c23: "光降之剑能量层数",
        c24: "六命：血赤叶红",
        c25: "「浪闪」层数",
        c26: "处于「水囿」",
        c27: "Q技能之后",
        c28: "处于雷罚恶曜之眼",
        c29: "诸愿百眼之愿力层数",
        c30: "「仪来羽衣」状态",
        c31: "靖妖傩舞",
        c32: "天赋「降魔·平妖大圣」应用层数",
        c33: "天赋「坏劫·国土碾尘」应用层数",
        c34: "应用4命效果",
        c35: "「热情拂扫」护盾覆盖比例",
        c36: "灼灼",
        c37: "处于后台",
        c38: "天赋「眼识殊明」应用比例",
        c39: "命座2「由茎干剖析来缘」应用比例",
        c40: "「漫掷万镒」",
        c41: "「金杯的丰馈」比例",
        c42: "命座2「贯月的耀锋」比例",
        c43: "赤冕祝祷",
        c44: "启途誓使",
        c45: "触发「裁定」效果",
        c46: "命座2「令仪·引谒归灵」等效层数",
        c47: "Q技能火元素加伤",
        c48: "Q技能火元素个数",
        c49: "（4命）蕴种印状态敌人数量",
        c50: "处于「优风倾姿」状态",
        c51: "「拾玉得花」染水",
        c52: "「拾玉得花」染火",
        c53: "「拾玉得花」染冰",
        c54: "等效「空居力」",
        c55: "「祈风之赐」比例",
        c56: "「烈风护持」比例",
        c57: "命座4「爰爰可亲」比例",
        c58: "命座2「辩章」层数",
        c59: "命座4「义贯」层数",
        c60: "命座6「正理」比例",
        c61: "琢光镜",

        t1: "类型",
        t2: "触发元素",
        t3: "技能",
        t4: "充能需求",
        t5: "融化占比",
        t6: "蒸发占比",
        t7: "治疗-伤害比重（0：纯治疗，1：纯伤害）",
        t8: "扩散相对频率",
        t9: "他人伤害比例",
        t10: "扩散占比",
        t11: "超载频率",
        t12: "伤害需求",
        t13: "感电相对频率",
        t14: "超载相对频率",
        t15: "E技能伤害占比",
        t16: "蔓激化比例",
        t17: "超激化比例",
        t18: "元素战技倍数",
        t19: "元素爆发倍数",
        t20: "绽放倍数",
        t21: "队友的等效精通",
        t22: "队友的绽放倍数",
        t23: "连招选择",
        t24: "a到大招完全结束",
        t25: "感电比例",
        t26: "超载比例",
        t27: "超绽放比例",
        t28: "精通需求",
        t29: "燃烧持续时间（秒）",
        t30: "火系队友数量",
        t31: "额外攻速（不算自身和专武）",
        t32: "攻速伤害修正",
        t33: "「梦迹一风」风矢命中数",
        t34: "Q命中数",
        t35: "扩散命中数",
        t36: "重击次数",
        t37: "元素战技次数",
        t38: "元素爆发次数",
        t39: "蔓激化比例",

        a1: "元素",
        a2: "效果应用比例",
        a3: "等效暴击率",
        a4: "效果等效层数",
        a5: "平均触发比例",
        a6: "「问答」效果等效层数",
        a7: "敌人火元素覆盖率",
        a8: "效果1等效层数",
        a9: "满层效果比例",
        a10: "护盾覆盖率",
        a11: "敌方雷元素覆盖率",
        a12: "元素爆发频率",
        a13: "平均层数",
        a14: "同元素角色数",
        a15: "不同元素角色数",

        p1: "攻击力有效",
        p2: "攻击力权重",
        p3: "攻击力%有效",
        p4: "攻击力%权重",
        p5: "生命值有效",
        p6: "生命值权重",
        p7: "生命值%有效",
        p8: "生命值%权重",
        p9: "防御力有效",
        p10: "防御力权重",
        p11: "防御力%有效",
        p12: "防御力%权重",
        p13: "暴击率有效",
        p14: "暴击率权重",
        p15: "暴击伤害有效",
        p16: "暴击伤害权重",
        p17: "元素精通有效",
        p18: "元素精通权重",
        p19: "元素充能效率有效",
        p20: "元素充能效率权重",

        b1: "班尼特的基础攻击力",
        b2: "是否1命",
        b3: "技能等级",
        b4: "五郎E技能等级",
        b5: "领域等级",
        b6: "扩散元素",
        b7: "万叶的元素精通",
        b8: "神里绫人Q技能等级",
        b9: "九条裟罗的基础攻击力",
        b10: "是否6命",
        b11: "E技能等级",
        b12: "Q技能等级",
        b13: "是否4命",
        b14: "雷电将军E技能等级",
        b15: "受BUFF角色最大元素能量",
        b16: "罗莎莉亚的暴击率",
        b17: "申鹤的攻击力",
        b18: "申鹤E技能等级",
        b19: "申鹤Q技能等级",
        b20: "是否2命",
        b21: "技能释放方式",
        b22: "砂糖的元素精通",
        b23: "扩散类型",
        b24: "叠加层数",
        b25: "落地前",
        b26: "发生了元素转化",
        b27: "转化类型",
        b28: "经过的秒数",
        b29: "「袖火百景图」叠加层数",
        b30: "云堇的防御力",
        b31: "60级突破",
        b32: "队伍不同属性数量",
        b33: "元素",
        b34: "应用比例",
        b35: "效果①比例",
        b36: "效果②比例",
        b37: "结晶元素",
        b38: "造生缠藤箭触发了燃烧、绽放、原激化或蔓激化反应",
        b39: "生命值低于50%",
        b40: "元素能量低于50%",
        b41: "应用比例",
        b42: "妮露的生命值",
        b43: "坎蒂丝的生命值",
        b44: "队伍最大元素精通",
        b45: "标记数量",
        b46: "法露珊基础攻击力",
        b47: "「诡风之祸」比例",
        b48: "「祈风之赐」比例",
        b49: "「七窟遗智」比例（加成hit数/一轮hit总数）",
    },
    ele: {
        Pyro: "火",
        Cryo: "冰",
        Hydro: "水",
        Electro: "雷",
        Anemo: "风",
        Dendro: "草",
        Geo: "岩",
        Physical: "物理",
        None: "无",
    },
    stat: {
        cureEffect: "治疗加成",
        criticalDamage: "暴击伤害",
        critical: "暴击率",
        attackStatic: "攻击力",
        attackPercentage: "攻击力%",
        elementalMastery: "元素精通",
        recharge: "元素充能效率",
        lifePercentage: "生命值%",
        defendPercentage: "防御力%",
        lifeStatic: "生命值",
        defendStatic: "防御力",
        thunderBonus: "雷元素伤害加成",
        fireBonus: "火元素伤害加成",
        waterBonus: "水元素伤害加成",
        iceBonus: "冰元素伤害加成",
        windBonus: "风元素伤害加成",
        rockBonus: "岩元素伤害加成",
        dendroBonus: "草元素伤害加成",
        physicalBonus: "物理伤害加成",
        shield: "护盾强效",
        base: "基础属性",
        advanced: "进阶属性",
        ele: "元素属性",
    },
    accountPage: {
        title: "账号与同步",
        syncButton: "同步本地目录",
        syncedButton: "已同步本地目录",
        addAccount: "添加账号",
        chooseSyncBase: "选择同步基准",
        browserBase: "以浏览器存储为准",
        fileBase: "以本地目录为准",
        lastModifiedAt: "最后修改于",
        confirmDelete: "确定删除吗？",
        delete: "删除",
        newAccountName: "新账号",
        deletingAccount: "删除账号中",
        switchingAccount: "切换账号中",
        cancelSyncing: "取消同步",
    },
    artPage: {
        shareDesc: "通过分享链接可以快速导入圣遗物，有效期为一天",
        deleteUnseen: "删除不存在的圣遗物",
        edit: "编辑圣遗物",
        recommend: "推荐圣遗物",
        unlockAll: "启用全部",
        exportMona: "导出莫娜JSON",
        shareLink: "分享链接",
        confirmClear: "确定清除吗，将会同时清除圣遗物套装数据",
        monaJSON: "莫娜JSON",
        show16: "只显示16级以上",
        copied: "复制成功",
        creating: "创建中",
        createDesc: "莫娜正在创建分享链接",
        wrongFormat: "格式不正确",
        importing: "导入中",
        msg1: "添加计算预设以使用该功能",

        // add artifact dialog
        newArt: "添加圣遗物",
        dup: "检测到已有相同圣遗物，是否继续？",
    },
    kumiPage: {
        selectArt: "选择圣遗物",
        newFolder: "新建收藏夹",
        newKumi: "新建圣遗物组",
        deleteFolder: "删除收藏夹",
        enterFolder: "请输入新收藏夹名",
        renameFolder: "重命名收藏夹",
        enterKumi: "请输入新圣遗物组名",
        renameKumi: "重命名圣遗物组"
    },
    presetPage: {
        exportAll: "导出全部",
        go: "请前往",
        toCalc: "页面添加预设",
        wrongFormat: "导入格式错误"
    },
    calcPage: {
        selectArt: "选择圣遗物",
        dmgComp: "伤害构成",
        selectBuff: "选择BUFF",
        setupCalc: "计算设置",
        algoDesc: "A*：推荐<br>启发式剪枝：不保证得到最优解，但是速度快<br>纯枚举：不推荐",
        plzSetConst: "请限定套装或者主词条，否则计算将十分耗时，可能导致计算超时",
        aStar: "A*",
        heuristic: "启发式剪枝",
        naive: "纯枚举",
        constSet: "限定套装",
        constMain: "限定主词条",
        constMin: "限定最小值",
        filKumi: "过滤圣遗物组",
        artAnalysis: "圣遗物分析",
        statCurve: "词条收益曲线",
        selectKumi: "选择圣遗物组",
        setupEnemy: "敌人设置",
        setupArt: "圣遗物设置",
        artMode: "圣遗物特效模式",
        modeAuto: "自动",
        modeCustom: "手动",
        artEffect: "圣遗物特效（仅在手动模式下有效）",
        start: "开始计算",
        newPreset: "新建预设",
        savePreset: "保存预设",
        saveAsPreset: "另存为预设",
        tfNormal: "普通",
        beta: "该功能为测试版",
        statAnalysis: "词条分析",
        saveKumi: "存为套装",
        useKumi: "应用套装",
        effect4: "四件套效果：",
        dmg: "伤害计算",
        detail: "明细",
        dmg2: "剧变反应伤害",
        panel: "面板",
        selectDir: "选择收藏夹",
        name: "名称",
        enterName: "请输入名称",
        bonus1: "1词条收益",
        statCount: "词条数",
        gain: "相对提升幅度",
        lockAll: "锁定全部",
        unlockAll: "解锁全部",
        skill: "技能",
        fumo: "附魔",
        skillConfig: "技能设置",
    },
    dmg: {
        electroCharged: "感电",
        overload: "超载",
        shattered: "碎冰",
        superConduct: "超导",
        swirlElectro: "扩散（雷）",
        swirlPyro: "扩散（火）",
        swirlCryo: "扩散（冰）",
        swirlHydro: "扩散（水）",
        burning: "燃烧",
        crystallize: "结晶盾",
        "Pyro": "火元素伤害",
        "Hydro": "水元素伤害",
        "Electro": "雷元素伤害",
        "Cryo": "冰元素伤害",
        "Dendro": "草元素伤害",
        "Geo": "岩元素伤害",
        "Anemo": "风元素伤害",
        "Physical": "物理伤害",
        expect: "期望伤害",
        crit: "暴击伤害",
        nonCrit: "非暴击伤害",
        melt: "融化",
        vaporize: "蒸发",
        heal: "治疗",
        spread: "蔓激化",
        aggravate: "超激化",
        bloom: "绽放",
        hyperbloom: "超绽放",
        burgeon: "烈绽放",
    },
    res: {
        Pyro: "火抗",
        Cryo: "冰抗",
        Hydro: "水抗",
        Electro: "雷抗",
        Anemo: "风抗",
        Dendro: "草抗",
        Geo: "岩抗",
        Physical: "物抗",
    },
    teamPage: {
        start: "开始计算",
        add: "添加成员",
        member: "成员",
        weight: "权重",
        showStat: "查看面板",
    },
    poPage: {
        start: "开始计算",
    },
    pfName: {
        ArtifactEff: "有效词条",
    },
    pfDesc: {
        ArtifactEff: "以单次强化最大档位为1分",
    },
    dbPage: {
        tooSmall: "角色数据过少",
        weapon: "武器使用率",
        art: "推荐圣遗物",
        mainStat: "推荐主词条",
        subStat: "推荐副词条分布",
        count: "词条数",
    },
    setupPage: {
        storage: "存储",
        clear: "清空本地存储",
        confirmClear: "确定清空本地存储吗？",
        loading: "正在切换语言",
    },
    skillType: {
        a: "普通攻击",
        b: "重击",
        e: "元素战技",
        q: "元素爆发",
    },
    buffGenre: {
        Character: "角色引发的BUFF",
        Weapon: "武器引发的BUFF",
        Artifact: "圣遗物引发的BUFF",
        Resonance: "元素共鸣",
        Common: "自定义",
    }
}
