---
title: 懒汉下载
layout: doc
comment: false
gitChangelog: false
---

<script setup>
import Swal from 'sweetalert2'

function showError() {
  Swal.fire({
    icon: 'error',
    title: '回答错误',
    html: `回答错误，不予下载。<br>
           初中题目，实属不该。<br>
           如欲下载，请看教程。<br>
           或欲挑战，请君自便。`
  });
}

function showQuestion(title, content, correctAnswer, imageUrl = null) {
  Swal.fire({
    title,
    html: content,
    input: 'text',
    confirmButtonText: '确认',
    showLoaderOnConfirm: true,
    imageUrl,
    preConfirm: (answer) => {
      if (answer === correctAnswer) {
        download();
      } else {
        showError();
      }
    }
  });
}

const questions = [
  { title: '数学题', content: '2023北京中考数学8', correctAnswer: 'D', imageUrl: 'https://s1.ax1x.com/2023/07/22/pCbzf5q.jpg' },
  { title: '道德与法治题', content: '2022年10月30日，第十三届全国人民代表大会常务委员会通过《中华人民共和国黄河保护法》，旨在通过立法加强黄河流域生态环境保护，保障黄河安澜，推进水资源节约利用，推动高质量发展。为了更好地落实该法，以下说法正确的是<br><br>A. 人大要组织力量加强对各地黄河生态保护的执法检查监督<br>B. 行政机关要积极履行监察职责，对黄河生态问题进行调查<br>C. 人民检察院公开审理污染黄河流域的案件，维护社会利益<br>D. 人民法院对污染黄河的行为提起公诉，保障法律正确实施<br>（2023北京顺义政治一模9）', correctAnswer: 'A' },
  { title: '物理题', content: '小瑶同学在一次实验中将定值电阻R两端的电压从2V增加到3V，她观察到和R串联的电流表的示数变化了0.1A。下列判断正确的是<br><br>A. 电阻R的阻值为20Ω<br>B. 电阻R的阻值从20Ω变为30Ω<br>C. 电阻R消耗的电功率增加了0.5W<br>D. 电阻R消耗的电功率从0.2W变为0.3W<br>（2023北京通州物理一模11 区得分率50.71%）', correctAnswer: 'C' },
  { title: '语文题', content: '2023北京中考语文2、3。请用连续不加空格的大写字母作答，比如AB。', correctAnswer: 'DB', imageUrl: 'https://s1.ax1x.com/2023/07/22/pCqStzT.png' },
  { title: '化学题', content: '向分别盛有下列物质的点滴版孔穴中滴加足量稀硫酸，无明显现象的是<br><br>A. Fe₂O₃<br>B. Fe<br>C. 稀 NaOH 溶液<br>D. Na₂CO₃ 溶液<br>（2023北京中考化学17）', correctAnswer: 'C' },
  { title: '历史题', content: '随着西方列强的侵华，中国人民为救亡图存进行了不懈地抗争和探索。下列相关表述逻辑关系不正确的是<br><br>A. 英国为了打开中国市场→鸦片战争→《南京条约》→太平天国运动<br>B. 英法为了镇压太平天国运动→第二次鸦片战争→《辛丑条约》→新文化运动<br>C. 日本为了征服朝鲜、侵略中国、称霸世界→甲午中日战争→《马关条约》→公车上书<br>D. 帝国主义列强为了镇压义和团运动→八国联军侵华战争→《辛丑条约》→辛亥革命', correctAnswer: 'B' },
  { title: '生物题', content: '普世界上唯一一株完全野生的普陀鹅耳枥生长在浙江省普陀山上。科学家历经半个世纪成功培育了 108 粒种子，之后又成功地用枝条进行扦插繁殖，大大降低了普陀鹅耳枥灭绝的风险。关于其繁殖的叙述，正确的是<br><br>A. 只能进行无性生殖<br>B. 种子繁殖属于无性生殖<br>C. 扦插繁殖属于有性生殖<br>D. 可以进行有性生殖<br>（2023陕西中考生物）', correctAnswer: 'D' },
  { title: '地理题', content: '小丽在终南山景区内看到一则标语“人杰地灵名胜迹，和合南北贯东西”，联想到地理课堂上学习的“秦岭一淮河”一线的地理意义是<br><br>A. 干旱区与半干旱区的分界线<br>B. 农耕区与畜牧区的分界线<br>C. 季风区与非季风区的分界线<br>D. 暖温带与亚热带的分界线<br>（2023陕西中考地理）', correctAnswer: 'D' },
  { title: '历史物理题', content: '漂附在液体中的物体,在自身重力不变的情况下，外来的压力加重力小于浮力时，就会上浮，反之则会下沉。下面与图二的外力有关的史实是<br><br>', correctAnswer: 'A', imageUrl: 'https://s21.ax1x.com/2024/03/31/pFTxnD1.jpg' }
];

function showRandomQuestion() {
  const randomIndex = Math.floor(Math.random() * questions.length);
  const question = questions[randomIndex];

  if (question.title === '英语作文题') {
    Swal.fire({
      title: question.title,
      html: question.content,
      confirmButtonText: '确认'
    }).then(() => {
      window.location.href = "mailto:1055917385@qq.com?subject=英语作文题";
    });
  } else {
    showQuestion(question.title, question.content, question.correctAnswer, question.imageUrl);
  }
}

// showRandomQuestion();
// 还没做完，怎么给下载链接问题
</script>

> [!TIP] 提示  
> 还没做完，招贤纳士请到更多-加入我们！

# 鼓励我们的开发  
请到Github [点亮Star⭐](https://github.com/Wulian233/vmct-cn.top)，非常感谢！

<DownloadLinks :methods="[
  { id: 'vm', text: '返回我们的主页', icon: '/imgs/logo/logo_64.png', link: '/' }
]" />