/**
 * render 图标
 * */
const dataBase = {
  category: [
    { id: 1, name: '常用' },
    { id: 2, name: '购物' },
    { id: 3, name: '资讯' },
    { id: 4, name: '生活' },
    { id: 5, name: '影音' },
    { id: 6, name: '娱乐' },
    { id: 7, name: '工作' },
    { id: 8, name: '工具' },
    { id: 9, name: '开发' }
  ],
  logos: [
    {
      name: '京东',
      url: 'https://www.jd.com',
      logo: '/assets/images/logo/jd.jpg',
      category: [2]
    },
    {
      name: '淘宝',
      url: 'https://www.taobao.com',
      logo: '/assets/images/logo/tb.jpg',
      category: [2]
    },
    {
      name: '天猫',
      url: 'https:www.tmall.com',
      logo: '/assets/images/logo/tm.jpg',
      category: [2]
    },
    {
      name: '小米商城',
      url: 'https://www.mi.com/shop',
      logo: '/assets/images/logo/mi.png',
      category: [2]
    },

    {
      name: '小米有品',
      url: 'https://www.xiaomiyoupin.com/',
      logo: '/assets/images/logo/xiaomiyoupin.png',
      category: [2]
    },
    {
      name: '唯品会',
      url: 'https://www.vip.com/',
      logo: '/assets/images/logo/vip.png',
      category: [2]
    },

    {
      name: '苏宁电器',
      url: 'https://sugs.suning.com/NmcwkpLx',
      logo: '/assets/images/logo/suning.png',
      category: [2]
    },
    {
      name: '天猫超市',
      url: 'https://chaoshi.tmall.com/',
      logo: '/assets/images/logo/tmallcs.png',
      category: [2]
    },
    {
      name: '国美',
      url: 'https://www.gome.com.cn',
      logo: '/assets/images/logo/guomei.png',
      category: [2]
    },
    {
      name: '当当',
      url: 'http://www.dangdang.com/',
      logo: '/assets/images/logo/dangdang.png',
      category: [2]
    },

    {
      name: '考拉海购',
      url: 'https://www.kaola.com',
      logo: '/assets/images/logo/kaola.png',
      category: [2]
    },
    {
      name: '聚美优品',
      url: 'http://jumei.com',
      logo: '/assets/images/logo/jumei.png',
      category: [2]
    },
    {
      name: '亚马逊',
      url: 'https://www.amazon.cn/',
      logo: '/assets/images/logo/amazon.png',
      category: [2]
    },
    {
      name: '蘑菇街',
      url: 'https://www.mogu.com',
      logo: '/assets/images/logo/mogujie.png',
      category: [2]
    },

    {
      name: '阿里云',
      url: 'https://www.aliyun.com/?source=5176.11533457&userCode=dq8yrpds',
      logo: '/assets/images/logo/aliyun.png',
      category: [2]
    },
    {
      name: '腾讯云',
      url: 'https://cloud.tencent.com',
      logo: '/assets/images/logo/tencentyun6.png',
      category: [2]
    },
    {
      name: '京东图书',
      url: 'https://union-click.jd.com/jdc?e=&p=JF8BAJwJK1olXDYDZBoCUBVIMzZNXhpXVhgcBwADUlRMVnBaRQcLbVBbJyQeeEpFYTtUfAEPJ3sKMC06Xx0bD18NG1oUWQUDXFZVOEgWA2kBHVMUXwQyZF5cOAB5Al8KGloXVAIGUVhfOEsQAW4KGl0TWQAEXFhtD0seMzRddV1ACgJWAF9fC0ofAz84K2sWbTYyVW5dOBRTXjI4GVoUWQ8',
      logo: '/assets/images/logo/jdread123.png',
      category: [2]
    },
    {
      name: '京东手机',
      url: 'https://union-click.jd.com/jdc?e=&p=JF8BAJ4JK1olXDYDZBoCUBVIMzZNXhpXVhgcFgcDTBBPHDRdBAlLARgyACMmcShTSBFtUBtRJlBqKAYVDBxlY2MEK14VXAcGV19VAEMnAG4IHVITVQcAVm5tCEonSAEJK1kUXAQLUFxYD08nA2gKGlkUWw8DVV9ZAXsQA2Y4QA57W1NVUAoJCUkUAmcIS2slbQUyZG5cOEsnXCtVRmsXXAcGXQ',
      logo: '/assets/images/logo/jdother123.png',
      category: [2]
    },
    {
      name: '什么值得买',
      url: 'https://www.smzdm.com',
      logo: '/assets/images/logo/smzdm.png',
      category: [2]
    },
    {
      name: '去哪儿',
      url: 'https://www.qunar.com',
      logo: '/assets/images/logo/qunaer.png',
      category: [2]
    },
    {
      name: '携程旅行',
      url: 'https://www.ctrip.com/?AllianceID=3224858&sid=7319777&ouid=&app=0101F00',
      logo: '/assets/images/logo/ctrip.png',
      category: [2]
    },
    {
      name: '飞猪',
      url: 'https://s.click.taobao.com/5VPHqiu',
      logo: '/assets/images/logo/feizhu.png',
      category: [2]
    },
    {
      name: '途牛',
      url: 'https://www.tuniu.com',
      logo: '/assets/images/logo/tuniu.png',
      category: [2]
    },
    {
      name: '马蜂窝',
      url: 'https://www.mafengwo.cn',
      logo: '/assets/images/logo/mafengwo.png',
      category: [2]
    },
    {
      name: 'Airbnb',
      url: 'https://www.airbnb.cn',
      logo: '/assets/images/logo/airbnb.png',
      category: [2]
    },
    {
      name: '12306',
      url: 'https://www.12306.cn',
      logo: '/assets/images/logo/12306.png',
      category: [2]
    },
    {
      name: '人民网',
      url: 'http://www.people.com.cn',
      logo: '/assets/images/logo/renminwang.png',
      category: [3]
    },
    {
      name: '新华网',
      url: 'http://www.news.cn',
      logo: '/assets/images/logo/xinhuanet.png',
      category: [3]
    },
    {
      name: '今日头条',
      url: 'https://www.toutiao.com',
      logo: '/assets/images/logo/toutiao.png',
      category: [3]
    },
    {
      name: '新浪',
      url: 'https://www.sina.com.cn',
      logo: '/assets/images/logo/sina.png',
      category: [3]
    },
    {
      name: '腾讯网',
      url: 'https://www.qq.com',
      logo: '/assets/images/logo/qqxinwen.png',
      category: [3]
    },
    {
      name: '搜狐',
      url: 'https://www.sohu.com',
      logo: '/assets/images/logo/sohunews.png',
      category: [3]
    },
    {
      name: '网易',
      url: 'https://www.163.com',
      logo: '/assets/images/logo/wangyi.png',
      category: [3]
    },
    {
      name: '凤凰网',
      url: 'https://www.ifeng.com',
      logo: '/assets/images/logo/fenghuang.png',
      category: [3]
    },
    {
      name: '环球时报',
      url: 'https://www.huanqiu.com',
      logo: '/assets/images/logo/huanqiu.png',
      category: [3]
    },
    {
      name: '南方周末',
      url: 'https://www.infzm.com',
      logo: '/assets/images/logo/nanfang.png',
      category: [3]
    },
    {
      name: '观察者',
      url: 'https://www.guancha.cn',
      logo: '/assets/images/logo/guanchazhe.png',
      category: [3]
    },
    {
      name: '界面新闻',
      url: 'https://www.jiemian.com',
      logo: '/assets/images/logo/jiemian.png',
      category: [3]
    },

    {
      name: '澎湃',
      url: 'https://www.thepaper.cn',
      logo: '/assets/images/logo/pengpai.png',
      category: [3]
    },
    {
      name: '虎嗅',
      url: 'https://www.huxiu.com',
      logo: '/assets/images/logo/huxiu.png',
      category: [3]
    },

    {
      name: '财新网',
      url: 'https://www.caixin.com',
      logo: '/assets/images/logo/caixin.png',
      category: [3]
    },
    {
      name: '东方财富网',
      url: 'https://www.eastmoney.com',
      logo: '/assets/images/logo/eastmoney.ico',
      category: [3]
    },
    {
      name: '雪球',
      url: 'https://xueqiu.com',
      logo: '/assets/images/logo/xueqiu.png',
      category: [3]
    },
    {
      name: '新浪财经',
      url: 'https://finance.sina.com.cn',
      logo: '/assets/images/logo/sinacai.png',
      category: [3]
    },
    {
      name: '中国经济网',
      url: 'http://www.ce.cn',
      logo: '/assets/images/logo/ce.png',
      category: [3]
    },
    {
      name: '钛媒体',
      url: 'https://www.tmtpost.com',
      logo: '/assets/images/logo/taimeiti.png',
      category: [3]
    },
    {
      name: '36氪',
      url: 'https://36kr.com',
      logo: '/assets/images/logo/36kr.png',
      category: [3]
    },
    {
      name: '极客公园',
      url: 'https://www.geekpark.net',
      logo: '/assets/images/logo/geekpark.png',
      category: [3]
    },
    {
      name: '铁血军事',
      url: 'https://www.tiexue.net',
      logo: '/assets/images/logo/tiexue.png',
      category: [3]
    },
    {
      name: '中华军事',
      url: 'https://military.china.com',
      logo: '/assets/images/logo/zhjunshi.png',
      category: [3]
    },
    {
      name: '直播吧',
      url: 'https://www.zhibo8.cc',
      logo: '/assets/images/logo/zhibo8.png',
      category: [3]
    },
    {
      name: '虎扑',
      url: 'https://www.hupu.com',
      logo: '/assets/images/logo/hupu.png',
      category: [3]
    },
    {
      name: '腾讯体育',
      url: 'https://sports.qq.com',
      logo: '/assets/images/logo/qqsports.png',
      category: [3]
    },
    {
      name: 'PP体育',
      url: 'https://www.ppsport.com',
      logo: '/assets/images/logo/pptvsports.png',
      category: [3]
    },
    {
      name: 'NBA中国',
      url: 'https://china.nba.com',
      logo: '/assets/images/logo/nba.png',
      category: [3]
    },
    {
      name: '知乎',
      url: 'https://www.zhihu.com/',
      logo: '/assets/images/logo/zhihu.png',
      category: [4]
    },
    {
      name: '简书',
      url: 'https://www.jianshu.com',
      logo: '/assets/images/logo/jianshu.png',
      category: [4]
    },
    {
      name: '安居客',
      url: 'https://www.anjuke.com',
      logo: '/assets/images/logo/anjuke.png',
      category: [4]
    },
    {
      name: '链家网',
      url: 'https://www.lianjia.com',
      logo: '/assets/images/logo/lianjia.png',
      category: [4]
    },
    {
      name: '我爱我家',
      url: 'https://www.5i5j.com',
      logo: '/assets/images/logo/wiwj.png',
      category: [4]
    },
    {
      name: '房天下',
      url: 'https://www.fang.com',
      logo: '/assets/images/logo/fangtx.png',
      category: [4]
    },
    {
      name: '贝壳',
      url: 'https://www.ke.com',
      logo: '/assets/images/logo/beike.png',
      category: [4]
    },
    {
      name: '自如',
      url: 'https://www.ziroom.com',
      logo: '/assets/images/logo/ziroom.png',
      category: [4]
    },
    {
      name: '天涯',
      url: 'https://bbs.tianya.cn',
      logo: '/assets/images/logo/tianya.png',
      category: [4]
    },

    {
      name: '煎蛋',
      url: 'https://jandan.net',
      logo: '/assets/images/logo/jiandan.png',
      category: [4]
    },
    {
      name: '果壳',
      url: 'https://www.guokr.com',
      logo: '/assets/images/logo/guoke.png',
      category: [4]
    },
    {
      name: 'LOFTER',
      url: 'https://www.lofter.com',
      logo: '/assets/images/logo/lofter.png',
      category: [4]
    },
    {
      name: '堆糖',
      url: 'https://www.duitang.com',
      logo: '/assets/images/logo/duitang.png',
      category: [4]
    },
    {
      name: '汽车之家',
      url: 'https://www.autohome.com.cn',
      logo: '/assets/images/logo/autohome333.png',
      category: [4]
    },
    {
      name: '太平洋汽车',
      url: 'https://www.pcauto.com.cn',
      logo: '/assets/images/logo/pcauto2.png',
      category: [4]
    },
    {
      name: '易车网',
      url: 'https://www.yiche.com',
      logo: '/assets/images/logo/yiche222.png',
      category: [4]
    },
    {
      name: '瓜子二手车',
      url: 'https://www.guazi.com',
      logo: '/assets/images/logo/guazi555.png',
      category: [4]
    },
    {
      name: '58同城',
      url: 'https://58.com',
      logo: '/assets/images/logo/58.png',
      category: [4]
    },
    {
      name: '赶集网',
      url: 'https://ganji.com',
      logo: '/assets/images/logo/ganji.png',
      category: [4]
    },
    {
      name: '宝宝树',
      url: 'https://babytree.com',
      logo: '/assets/images/logo/baobaoshu.png',
      category: [4]
    },
    {
      name: '百合网',
      url: 'https://www.baihe.com',
      logo: '/assets/images/logo/baihe.png',
      category: [4]
    },
    {
      name: '39健康网',
      url: 'http://www.39.net',
      logo: '/assets/images/logo/39net.png',
      category: [4]
    },
    {
      name: '丁香园',
      url: 'https://www.dxy.cn',
      logo: '/assets/images/logo/dxy1306.png',
      category: [4]
    },
    {
      name: '下厨房',
      url: 'https://www.xiachufang.com',
      logo: '/assets/images/logo/xiachufang.png',
      category: [4]
    },
    {
      name: '美食天下',
      url: 'https://www.meishichina.com',
      logo: '/assets/images/logo/meishitianxia.png',
      category: [4]
    },
    {
      name: '体彩网',
      url: 'https://www.lottery.gov.cn',
      logo: '/assets/images/logo/zhcw888.png',
      category: [4]
    },
    {
      name: '福彩网',
      url: 'http://www.cwl.gov.cn',
      logo: '/assets/images/logo/fucai55.png',
      category: [4]
    },
    {
      name: '腾讯视频',
      url: 'https://v.qq.com',
      logo: '/assets/images/logo/vqq.png',
      category: [5]
    },
    {
      name: '爱奇艺',
      url: 'https://www.iqiyi.com',
      logo: '/assets/images/logo/iqiyi.png',
      category: [5]
    },
    {
      name: '优酷',
      url: 'https://www.youku.com',
      logo: '/assets/images/logo/youku.png',
      category: [5]
    },
    {
      name: '芒果TV',
      url: 'https://www.mgtv.com',
      logo: '/assets/images/logo/mgtv.png',
      category: [5]
    },
    {
      name: '搜狐视频',
      url: 'https://tv.sohu.com',
      logo: '/assets/images/logo/sohutv.png',
      category: [5]
    },
    {
      name: 'CCTV',
      url: 'https://tv.cctv.com',
      logo: '/assets/images/logo/cctv.png',
      category: [5]
    },
    {
      name: 'Bilibili',
      url: 'https://www.bilibili.com',
      logo: '/assets/images/logo/bilibili.png',
      category: [5]
    },
    {
      name: '抖音',
      url: 'https://www.douyin.com',
      logo: '/assets/images/logo/douyin6789.png',
      category: [5]
    },
    {
      name: '快手',
      url: 'https://www.kuaishou.com',
      logo: '/assets/images/logo/kuaishou7677.png',
      category: [5]
    },
    {
      name: '虎牙',
      url: 'https://www.huya.com',
      logo: '/assets/images/logo/huya.png',
      category: [5]
    },
    {
      name: '斗鱼',
      url: 'https://www.douyu.com',
      logo: '/assets/images/logo/douyu.png',
      category: [5]
    },

    {
      name: 'YY直播',
      url: 'https://www.yy.com',
      logo: '/assets/images/logo/yyzhibo.png',
      category: [5]
    },
    {
      name: '企鹅电竞',
      url: 'https://egame.qq.com',
      logo: '/assets/images/logo/qqdianj.png',
      category: [5]
    },
    {
      name: 'AcFun',
      url: 'https://www.acfun.cn',
      logo: '/assets/images/logo/acfun.png',
      category: [5]
    },

    {
      name: '网易云音乐',
      url: 'https://music.163.com',
      logo: '/assets/images/logo/yunyinyue.png',
      category: [5]
    },
    {
      name: 'QQ音乐',
      url: 'https://y.qq.com',
      logo: '/assets/images/logo/qqmusic.png',
      category: [5]
    },
    {
      name: '酷狗',
      url: 'https://www.kugou.com',
      logo: '/assets/images/logo/kugou.png',
      category: [5]
    },
    {
      name: '千千音乐',
      url: 'https://music.taihe.com',
      logo: '/assets/images/logo/qianqmusic.png',
      category: [5]
    },
    {
      name: '酷我音乐',
      url: 'https://www.kuwo.cn',
      logo: '/assets/images/logo/kuwo.png',
      category: [5]
    },
    {
      name: '虾米',
      url: 'https://www.xiami.com',
      logo: '/assets/images/logo/xiami.png',
      category: [5]
    },
    {
      name: '喜马拉雅FM',
      url: 'https://www.ximalaya.com',
      logo: '/assets/images/logo/ximalaya.png',
      category: [5]
    },
    {
      name: '蜻蜓FM',
      url: 'https://www.qingting.fm',
      logo: '/assets/images/logo/qingting.png',
      category: [5]
    },
    {
      name: '咪咕音乐',
      url: 'https://music.migu.cn',
      logo: '/assets/images/logo/migumusic72.png',
      category: [5]
    },

    {
      name: '乐视',
      url: 'https://www.le.com',
      logo: '/assets/images/logo/letv.png',
      category: [5]
    },
    {
      name: 'PPTV',
      url: 'https://www.pptv.com',
      logo: '/assets/images/logo/pptvcom.png',
      category: [5]
    },
    {
      name: '豆瓣电影',
      url: 'https://movie.douban.com',
      logo: '/assets/images/logo/doubandy.png',
      category: [5]
    },
    {
      name: '猫眼电影',
      url: 'https://maoyan.com',
      logo: '/assets/images/logo/maoyan6.png',
      category: [5]
    },
    {
      name: '1905电影',
      url: 'https://www.1905.com',
      logo: '/assets/images/logo/m1905dy.png',
      category: [5]
    },
    {
      name: '时光网',
      url: 'http://www.mtime.com',
      logo: '/assets/images/logo/mtime.png',
      category: [5]
    },
    {
      name: '中国电影网',
      url: 'https://www.chinafilm.com',
      logo: '/assets/images/logo/zgfilmcom6.png',
      category: [5]
    },
    {
      name: '游民星空',
      url: 'https://www.gamersky.com',
      logo: '/assets/images/logo/gamersky.ico',
      category: [6]
    },
    {
      name: '游侠网',
      url: 'https://www.ali213.net',
      logo: '/assets/images/logo/ali213Net6.png',
      category: [6]
    },
    {
      name: '3DMGAME',
      url: 'https://www.3dmgame.com',
      logo: '/assets/images/logo/3dmgame.png',
      category: [6]
    },
    {
      name: '电玩巴士',
      url: 'https://www.tgbus.com',
      logo: '/assets/images/logo/tgbus.png',
      category: [6]
    },
    {
      name: 'NGA玩家',
      url: 'https://nga.cn',
      logo: '/assets/images/logo/ngacn678.png',
      category: [6]
    },
    {
      name: 'QQ游戏',
      url: 'https://qqgame.qq.com',
      logo: '/assets/images/logo/qqgame.png',
      category: [6]
    },
    {
      name: 'Steam',
      url: 'https://store.steampowered.com',
      logo: '/assets/images/logo/steam2.png',
      category: [6]
    },
    {
      name: '网易游戏',
      url: 'https://game.163.com',
      logo: '/assets/images/logo/163game.png',
      category: [6]
    },
    {
      name: '猫耳FM',
      url: 'https://www.missevan.com',
      logo: '/assets/images/logo/missevan.png',
      category: [6]
    },
    {
      name: '半次元',
      url: 'https://bcy.net',
      logo: '/assets/images/logo/banciyuan.png',
      category: [6]
    },
    {
      name: '腾讯动漫',
      url: 'https://ac.qq.com',
      logo: '/assets/images/logo/acqq.png',
      category: [6]
    },
    {
      name: '快看漫画',
      url: 'https://www.kuaikanmanhua.com',
      logo: '/assets/images/logo/kuaikan.png',
      category: [6]
    },
    {
      name: '有妖气',
      url: 'https://www.u17.com',
      logo: '/assets/images/logo/youyaoqi.png',
      category: [6]
    },
    {
      name: '萌娘百科',
      url: 'https://zh.moegirl.org',
      logo: '/assets/images/logo/mengniangbk.png',
      category: [6]
    },
    {
      name: '爱奇艺动漫',
      url: 'https://www.iqiyi.com/dongman/',
      logo: '/assets/images/logo/iqiyi.png',
      category: [6]
    },
    {
      name: '起点中文网',
      url: 'https://www.qidian.com',
      logo: '/assets/images/logo/qidian1.png',
      category: [6]
    },
    {
      name: '红袖添香',
      url: 'https://www.hongxiu.com',
      logo: '/assets/images/logo/hongxiu1.png',
      category: [6]
    },
    {
      name: '潇湘书院',
      url: 'https://www.xxsy.net',
      logo: '/assets/images/logo/xiaoxiang1.png',
      category: [6]
    },
    {
      name: '晋江文学城',
      url: 'http://www.jjwxc.net',
      logo: '/assets/images/logo/jjwxc1.png',
      category: [6]
    },
    {
      name: '17k小说网',
      url: 'https://www.17k.com',
      logo: '/assets/images/logo/17kxs1.png',
      category: [6]
    },
    {
      name: '纵横中文网',
      url: 'http://www.zongheng.com',
      logo: '/assets/images/logo/zhongheng1.png',
      category: [6]
    },
    {
      name: '创世中文网',
      url: 'http://chuangshi.qq.com',
      logo: '/assets/images/logo/chuangshizww1.png',
      category: [6]
    },
    {
      name: '飞卢小说',
      url: 'https://b.faloo.com',
      logo: '/assets/images/logo/feiluxs1.png',
      category: [6]
    },
    {
      name: '七猫小说',
      url: 'https://www.qimao.com',
      logo: '/assets/images/logo/qimao6.png',
      category: [6]
    },
    {
      name: '知乎日报',
      url: 'https://daily.zhihu.com',
      logo: '/assets/images/logo/zhihudaily.png',
      category: [6]
    },
    {
      name: '米游社原神',
      url: 'https://bbs.mihoyo.com/ys/',
      logo: '/assets/images/logo/mihoyobbs5.png',
      category: [6]
    },
    {
      name: '4399小游戏',
      url: 'http://www.4399.com',
      logo: '/assets/images/logo/4399.ico',
      category: [6]
    },

    {
      name: '微信读书',
      url: 'https://weread.qq.com',
      logo: '/assets/images/logo/qqread6.png',
      category: [6]
    },
    {
      name: '全历史',
      url: 'https://www.allhistory.com',
      logo: '/assets/images/logo/quanlishi777.png',
      category: [6]
    },
    {
      name: '观沧海',
      url: 'https://www.ageeye.cn',
      logo: '/assets/images/logo/ageeyecn889.png',
      category: [6]
    },
    {
      name: '学信网',
      url: 'https://www.chsi.com.cn',
      logo: '/assets/images/logo/chsi130.png',
      category: [7]
    },
    {
      name: '中小学教育',
      url: 'https://www.zxx.edu.cn/',
      logo: '/assets/images/logo/zxx1educn6.png',
      category: [7]
    },
    {
      name: '网易云课堂',
      url: 'https://study.163.com',
      logo: '/assets/images/logo/163ykt.png',
      category: [7]
    },
    {
      name: '网易公开课',
      url: 'https://open.163.com',
      logo: '/assets/images/logo/163open.png',
      category: [7]
    },
    {
      name: 'MOOC',
      url: 'https://www.icourse163.org',
      logo: '/assets/images/logo/icourse163.png',
      category: [7]
    },
    {
      name: '腾讯课堂',
      url: 'https://ke.qq.com',
      logo: '/assets/images/logo/qqcourse.png',
      category: [7]
    },
    {
      name: '学堂在线',
      url: 'https://www.xuetangx.com',
      logo: '/assets/images/logo/xuetangx.png',
      category: [7]
    },
    {
      name: '高教智慧教育',
      url: 'https://higher.smartedu.cn',
      logo: '/assets/images/logo/smarteduCN3high.png',
      category: [7]
    },
    {
      name: '百度翻译',
      url: 'https://fanyi.baidu.com',
      logo: '/assets/images/logo/baidufanyi.png',
      category: [7]
    },
    {
      name: '谷歌翻译',
      url: 'https://translate.google.cn',
      logo: '/assets/images/logo/googlefanyi.png',
      category: [7]
    },
    {
      name: '学校安全教育',
      url: 'https://www.xueanquan.com/',
      logo: '/assets/images/logo/xueanquan.png',
      category: [7]
    },
    {
      name: '知网',
      url: 'https://cnki.net',
      logo: '/assets/images/logo/cnki.png',
      category: [7]
    },
    {
      name: '万方',
      url: 'https://www.wanfangdata.com.cn',
      logo: '/assets/images/logo/wanfangdatacn.png',
      category: [7]
    },
    {
      name: '谷歌学术',
      url: 'https://scholar.google.cn',
      logo: '/assets/images/logo/googlexueshu.png',
      category: [7]
    },
    {
      name: '有道词典',
      url: 'https://dict.youdao.com',
      logo: '/assets/images/logo/youdao.png',
      category: [7]
    },
    {
      name: '百度文库',
      url: 'https://wenku.baidu.com',
      logo: '/assets/images/logo/baidu.png',
      category: [7]
    },
    {
      name: '腾讯文档',
      url: 'https://docs.qq.com',
      logo: '/assets/images/logo/qqdoc.png',
      category: [7]
    },
    {
      name: '语雀',
      url: 'https://www.yuque.com',
      logo: '/assets/images/logo/yuque5.png',
      category: [7]
    },
    {
      name: '流程图',
      url: 'https://www.liuchengtu.com',
      logo: '/assets/images/logo/liuchengtu6.png',
      category: [7]
    },
    {
      name: '兔小巢',
      url: 'https://txc.qq.com',
      logo: '/assets/images/logo/qqtuxc.png',
      category: [7]
    },
    {
      name: '汉典',
      url: 'https://www.zdic.net',
      logo: '/assets/images/logo/zdicnet123.png',
      category: [7]
    },
    {
      name: '微信公众号',
      url: 'https://mp.weixin.qq.com',
      logo: '/assets/images/logo/weixin.png',
      category: [7]
    },
    {
      name: '智联招聘',
      url: 'https://www.zhaopin.com',
      logo: '/assets/images/logo/zhaopin.png',
      category: [7]
    },
    {
      name: 'BOSS直聘',
      url: 'https://www.zhipin.com',
      logo: '/assets/images/logo/bosszp.png',
      category: [7]
    },
    {
      name: '猎聘网',
      url: 'https://www.liepin.com',
      logo: '/assets/images/logo/liepin.png',
      category: [7]
    },
    {
      name: '前程无忧',
      url: 'https://www.51job.com',
      logo: '/assets/images/logo/51job.png',
      category: [7]
    },
    {
      name: '天眼查',
      url: 'https://www.tianyancha.com',
      logo: '/assets/images/logo/tianyancha.png',
      category: [7]
    },
    {
      name: '企查查',
      url: 'https://www.qcc.com',
      logo: '/assets/images/logo/qichacha.png',
      category: [7]
    },
    {
      name: '天气预报',
      url: 'http://www.weather.com.cn/weather/101190101.shtml',
      logo: '/assets/images/logo/weather.png',
      category: [8]
    },
    {
      name: '百度地图',
      url: 'https://map.baidu.com',
      logo: '/assets/images/logo/baidumap.png',
      category: [8]
    },
    {
      name: '高德地图',
      url: 'https://www.amap.com',
      logo: '/assets/images/logo/gaodemap.png',
      category: [8]
    },

    {
      name: '百度网盘',
      url: 'https://pan.baidu.com',
      logo: '/assets/images/logo/pan.ico',
      category: [8]
    },
    {
      name: '草料二维码',
      url: 'https://cli.im',
      logo: '/assets/images/logo/cliaoewm6.png',
      category: [8]
    },
    {
      name: '163邮箱',
      url: 'https://mail.163.com',
      logo: '/assets/images/logo/163mail.svg',
      category: [8]
    },
    {
      name: 'qq邮箱',
      url: 'https://mail.qq.com',
      logo: '/assets/images/logo/qqmail.png',
      category: [8]
    },
    {
      name: '126邮箱',
      url: 'https://mail.126.com',
      logo: '/assets/images/logo/126mail.svg',
      category: [8]
    },
    {
      name: 'Outlook',
      url: 'https://outlook.live.com',
      logo: '/assets/images/logo/outlook.svg',
      category: [8]
    },
    {
      name: 'Gmail',
      url: 'https://mail.google.com',
      logo: '/assets/images/logo/gmail.svg',
      category: [8]
    },
    {
      name: '搜狐邮箱',
      url: 'https://mail.sohu.com',
      logo: '/assets/images/logo/sohumail.png',
      category: [8]
    },
    {
      name: '快递100',
      url: 'https://www.kuaidi100.com',
      logo: '/assets/images/logo/kuaidi100.png',
      category: [8]
    },
    {
      name: '便民查询',
      url: 'https://www.bmcx.com',
      logo: '/assets/images/logo/bmcx.png',
      category: [8]
    },
    {
      name: '驾校一点通',
      url: 'https://www.jxedt.com',
      logo: '/assets/images/logo/jxydt.png',
      category: [8]
    },
    {
      name: '交管查询',
      url: 'https://www.122.gov.cn',
      logo: '/assets/images/logo/jiaoguan123.png',
      category: [8]
    },
    {
      name: '人社平台',
      url: 'http://www.12333.gov.cn',
      logo: '/assets/images/logo/12333gov.png',
      category: [8]
    },

    {
      name: '支付宝',
      url: 'https://www.alipay.com',
      logo: '/assets/images/logo/alipay666.png',
      category: [8]
    },
    {
      name: '在线文件转换',
      url: 'https://www.aconvert.com',
      logo: '/assets/images/logo/aconvert.ico',
      category: [8]
    },
    {
      name: 'IP查询',
      url: 'https://ip138.com',
      logo: '/assets/images/logo/ip138ccc.png',
      category: [8]
    },
    {
      name: '网络测速',
      url: 'https://www.speedtest.cn',
      logo: '/assets/images/logo/speedtestcn.png',
      category: [8]
    },
    {
      name: '颜色转换',
      url: 'https://www.sioe.cn/yingyong/yanse-rgb-16/',
      logo: '/assets/images/logo/xinqingpic6.png',
      category: [8]
    },
    {
      name: '路过图床',
      url: 'https://imgtu.com/',
      logo: '/assets/images/logo/imgtu186.png',
      category: [8]
    },

    {
      name: '奶牛快传',
      url: 'https://cowtransfer.com',
      logo: '/assets/images/logo/nainiukc.png',
      category: [8]
    },

    {
      name: '加水印',
      url: 'https://simpletool.cn',
      logo: '/assets/images/logo/zjshuiyin.png',
      category: [8]
    },
    {
      name: '12306',
      url: 'https://www.12306.cn',
      logo: '/assets/images/logo/12306.png',
      category: [8]
    },
    {
      name: '8684公交',
      url: 'https://www.8684.cn',
      logo: '/assets/images/logo/8684gongj.png',
      category: [8]
    },
    {
      name: '中国移动',
      url: 'https://www.10086.cn',
      logo: '/assets/images/logo/chinamobile.png',
      category: [8]
    },
    {
      name: '中国电信',
      url: 'https://www.189.cn',
      logo: '/assets/images/logo/chinadianx.png',
      category: [8]
    },
    {
      name: '中国联通',
      url: 'https://www.10010.com',
      logo: '/assets/images/logo/10010com.png',
      category: [8]
    },
    {
      name: '微信网页版',
      url: 'https://wx.qq.com',
      logo: '/assets/images/logo/weixin.png',
      category: [8]
    },
    {
      name: 'Github',
      url: 'https://www.github.com',
      logo: '/assets/images/logo/github.ico',
      category: [9]
    },
    {
      name: '开源中国',
      url: 'https://www.oschina.net',
      logo: '/assets/images/logo/oschina.ico',
      category: [9]
    },
    {
      name: 'v2ex',
      url: 'https://www.v2ex.com',
      logo: '/assets/images/logo/v2ex.png',
      category: [9]
    },
    {
      name: '思否',
      url: 'https://segmentfault.com',
      logo: '/assets/images/logo/segmentfault.png',
      category: [9]
    },
    {
      name: 'stackoverflow',
      url: 'https://stackoverflow.com',
      logo: '/assets/images/logo/stackoveru9019.png',
      category: [9]
    },
    {
      name: 'CSDN',
      url: 'https://www.csdn.net',
      logo: '/assets/images/logo/csdnbak.png',
      category: [9]
    },
    {
      name: '博客园',
      url: 'https://www.cnblogs.com',
      logo: '/assets/images/logo/cnblogs6.png',
      category: [9]
    },
    {
      name: 'IT之家',
      url: 'https://www.ithome.com',
      logo: '/assets/images/logo/ithome.png',
      category: [9]
    },
    {
      name: '太平洋电脑',
      url: 'https://www.pconline.com.cn',
      logo: '/assets/images/logo/pconline.png',
      category: [9]
    },
    {
      name: '数字尾巴',
      url: 'https://www.dgtle.com',
      logo: '/assets/images/logo/shuzitail.png',
      category: [9]
    },
    {
      name: 'Chiphell',
      url: 'https://www.chiphell.com',
      logo: '/assets/images/logo/chiphell.png',
      category: [9]
    },
    {
      name: '中关村在线',
      url: 'https://www.zol.com.cn',
      logo: '/assets/images/logo/zol.png',
      category: [9]
    },
    {
      name: 'iconfont',
      url: 'https://www.iconfont.cn',
      logo: '/assets/images/logo/iconfontbak.png',
      category: [9]
    },
    {
      name: 'pexels',
      url: 'https://www.pexels.com',
      logo: '/assets/images/logo/pexelbak.png',
      category: [9]
    },
    {
      name: 'pixabay',
      url: 'https://pixabay.com',
      logo: '/assets/images/logo/pixabay.png',
      category: [9]
    },
    {
      name: 'Unsplash',
      url: 'https://unsplash.com',
      logo: '/assets/images/logo/unsplash666.png',
      category: [9]
    },
    {
      name: '蜂鸟网',
      url: 'https://www.fengniao.com',
      logo: '/assets/images/logo/fengniao89Q11.png',
      category: [9]
    },
    {
      name: '闪萌',
      url: 'https://www.weshineapp.com',
      logo: '/assets/images/logo/shanmeng88.png',
      category: [9]
    },
    {
      name: 'wallheaven',
      url: 'https://wallhaven.cc',
      logo: '/assets/images/logo/wallhavencc.ico',
      category: [9]
    },
    {
      name: 'wallhere',
      url: 'https://wallhere.com',
      logo: '/assets/images/logo/wallhere6.png',
      category: [9]
    },
    {
      name: '花瓣网',
      url: 'https://huaban.com',
      logo: '/assets/images/logo/huaban.svg',
      category: [9]
    },
    {
      name: '站酷',
      url: 'https://www.zcool.com.cn',
      logo: '/assets/images/logo/zcoolcomcn2.png',
      category: [9]
    },
    {
      name: '优设网',
      url: 'https://www.uisdc.com',
      logo: '/assets/images/logo/uisdc888.png',
      category: [9]
    },
    {
      name: '菜鸟教程',
      url: 'https://www.runoob.com',
      logo: '/assets/images/logo/runbooo6.png',
      category: [9]
    },
    {
      name: 'W3school',
      url: 'https://www.w3school.com.cn',
      logo: '/assets/images/logo/w3cschool6.png',
      category: [9]
    },
    {
      name: 'JSON',
      url: 'https://www.json.cn',
      logo: '/assets/images/logo/jsoncn6.png',
      category: [9]
    },
    {
      name: 'PHP',
      url: 'https://www.php.net',
      logo: '/assets/images/logo/phpnet6.png',
      category: [9]
    },
    {
      name: 'Python',
      url: 'https://www.python.org',
      logo: '/assets/images/logo/python666.png',
      category: [9]
    },
    {
      name: '站长之家',
      url: 'https://www.chinaz.com',
      logo: '/assets/images/logo/chinaz.png',
      category: [9]
    },
    {
      name: '爱站网',
      url: 'https://www.aizhan.com',
      logo: '/assets/images/logo/aizhan.png',
      category: [9]
    }
  ]
}

// 根据分类查数据
export function getLogoData() {
  const showData = []
  const category = dataBase.category
  const logoList = dataBase.logos
  category.forEach((item, index) => {
    const { id } = item
    const curList = logoList.filter((node) => node.category.includes(id))
    if (curList.length > 0) {
      showData.push({
        name: item.name,
        list: curList
      })
    }
  })

  return showData
}

// export function renderIcon(icon) {
//   return () => h(NIcon, null, { default: () => h(icon) })
// }
