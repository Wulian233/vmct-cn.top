<script setup>
import Swal from 'sweetalert2'

const props = defineProps({
  items: Array
});

function handleClick(item) {
  if (item.id === 'lanzou') {
    showModal(item);
  } else if (item.id === 'lazy') {
    showRandomQuestion(item);
  } else if (item.id === 'mapdl') {
    showMapModal(item)
  } else {
    window.open(item.link, item.target || '_self');
  }
}

function showError() {
  Swal.fire({
    icon: 'error',
    title: '回答错误',
    html: `emmm，看起来不太对哦，愿意的话你可以再试一次！<br>PS. 题目仅供娱乐，看一看有多少还给老师了呢awa`
  });
}


function showQuestion(item, title, content, correctAnswer, imageUrl = null) {
  let selectedAnswer = ''; // 用来存储语文题的输入答案

  // 生成选项按钮HTML（仅用于非语文题）
  const options = ['A', 'B', 'C', 'D'];
  const optionButtons = options.map((option) => {
    return `<button id="btn-${option}" class="swal2-confirm swal2-styled" style="margin: 5px; padding: 10px 20px; font-size: 18px;">
              ${option}
            </button>`;
  }).join('');

  const swalConfig = {
    title,
    html: `${content}<br>${imageUrl ? `<img src="${imageUrl}" style="max-width: 100%; height: auto;" />` : ''}
           <div style="margin-top: 10px;">
             ${title === '语文题' ?
               `<input type="text" id="answer-input" style="width: 100%; padding: 10px; font-size: 18px;" placeholder="请输入答案（例如：AB）" />`
               : optionButtons}
           </div>`,
    showCancelButton: false,
    showConfirmButton: title === '语文题', // 只有语文题才显示提交按钮
    confirmButtonText: '提交',
    willOpen: () => {
      if (title === '语文题') {
        const input = document.getElementById('answer-input');
        input.addEventListener('input', (event) => {
          selectedAnswer = event.target.value.trim().toUpperCase();
        });
      } else {
        options.forEach((option) => {
          const button = document.getElementById(`btn-${option}`);
          button.addEventListener('click', () => {
            selectedAnswer = option;
            Swal.close();
            validateAnswer(selectedAnswer, correctAnswer, item);
          });
        });
      }
    },
    preConfirm: () => {
      return selectedAnswer;
    }
  };

  Swal.fire(swalConfig).then((result) => {
    // 如果是语文题，并且点击了提交按钮
    if (result.isConfirmed && title === '语文题') {
      validateAnswer(selectedAnswer, correctAnswer, item);
    }
  });
}

function validateAnswer(selectedAnswer, correctAnswer, item) {
  if (Array.isArray(selectedAnswer)) {
    // 语文题
    const correctAnswers = correctAnswer.split(''); // 支持ABCD多个答案的情况
    const isCorrect = selectedAnswer.every(a => correctAnswers.includes(a));
    if (isCorrect) {
      window.open(item.link, item.target || '_self');
    } else {
      showError();
    }
  } else {
    if (selectedAnswer === correctAnswer) {
      window.open(item.link, item.target || '_self');
    } else {
      showError();
    }
  }
}

const questions = [
  {
    title: '语文题',
    content: '2023北京中考语文2、3。请用连续不加空格的字母作答，忽略大小写。比如AB。',
    correctAnswer: 'DB',
    imageUrl: 'https://s1.ax1x.com/2023/07/22/pCqStzT.png'
  },
  {
    title: '数学题',
    content: '2023北京中考数学8',
    correctAnswer: 'D',
    imageUrl: 'https://s1.ax1x.com/2023/07/22/pCbzf5q.jpg'
  },
  {
    title: '物理题',
    content: '小瑶同学在一次实验中将定值电阻R两端的电压从2V增加到3V，她观察到和R串联的电流表的示数变化了0.1A。下列判断正确的是<br><br>A. 电阻R的阻值为20Ω<br>B. 电阻R的阻值从20Ω变为30Ω<br>C. 电阻R消耗的电功率增加了0.5W<br>D. 电阻R消耗的电功率从0.2W变为0.3W<br>（2023北京通州物理一模11 区得分率50.71%）',
    correctAnswer: 'C'
  },
  {
    title: '化学题',
    content: '向分别盛有下列物质的点滴版孔穴中滴加足量稀硫酸，无明显现象的是<br><br>A. Fe₂O₃<br>B. Fe<br>C. 稀 NaOH 溶液<br>D. Na₂CO₃ 溶液<br>（2023北京中考化学17）',
    correctAnswer: 'C'
  },
  {
    title: '道德与法治题',
    content: '2022年10月30日，第十三届全国人民代表大会常务委员会通过《中华人民共和国黄河保护法》，旨在通过立法加强黄河流域生态环境保护，保障黄河安澜，推进水资源节约利用，推动高质量发展。为了更好地落实该法，以下说法正确的是<br><br>A. 人大要组织力量加强对各地黄河生态保护的执法检查监督<br>B. 行政机关要积极履行监察职责，对黄河生态问题进行调查<br>C. 人民检察院公开审理污染黄河流域的案件，维护社会利益<br>D. 人民法院对污染黄河的行为提起公诉，保障法律正确实施<br>（2023北京顺义政治一模9）',
    correctAnswer: 'A'
  },
  {
    title: '历史题',
    content: '随着西方列强的侵华，中国人民为救亡图存进行了不懈地抗争和探索。下列相关表述逻辑关系不正确的是<br><br>A. 英国为了打开中国市场→鸦片战争→《南京条约》→太平天国运动<br>B. 英法为了镇压太平天国运动→第二次鸦片战争→《辛丑条约》→新文化运动<br>C. 日本为了征服朝鲜、侵略中国、称霸世界→甲午中日战争→《马关条约》→公车上书<br>D. 帝国主义列强为了镇压义和团运动→八国联军侵华战争→《辛丑条约》→辛亥革命',
    correctAnswer: 'B'
  },
  {
    title: '地理题',
    content: '小丽在终南山景区内看到一则标语“人杰地灵名胜迹，和合南北贯东西”，联想到地理课堂上学习的“秦岭一淮河”一线的地理意义是<br><br>A. 干旱区与半干旱区的分界线<br>B. 农耕区与畜牧区的分界线<br>C. 季风区与非季风区的分界线<br>D. 暖温带与亚热带的分界线<br>（2023陕西中考地理）',
    correctAnswer: 'D'
  },
  {
    title: 'MC原版题',
    content: '合成末地烛需要用到什么<br>A. 烈焰棒<br>B. 紫颂果<br>C. 烈焰粉<br>D. 紫珀块',
    correctAnswer: 'A'
  },
  {
    title: '历史物理题',
    content: '漂附在液体中的物体,在自身重力不变的情况下，外来的压力加重力小于浮力时，就会上浮，反之则会下沉。下面与图二的外力有关的史实是<br><br>',
    correctAnswer: 'A',
    imageUrl: 'https://s21.ax1x.com/2024/03/31/pFTxnD1.jpg'
  }
];

function showRandomQuestion(item) {
  const randomIndex = Math.floor(Math.random() * questions.length);
  const question = questions[randomIndex];

  showQuestion(item, question.title, question.content, question.correctAnswer, question.imageUrl);
}

function showModal(item) {
  Swal.fire({
    title: '请您先阅读并接受',
    html: `
      <a href="/agreement/" target="_blank" style="color: blue; text-decoration: underline;">VM汉化组用户服务协议</a>，
      并仔细阅读 <a href="/modpacks/" target="_blank" style="color: blue; text-decoration: underline;">汉化补丁安装说明</a>。
    `,
    icon: 'info',
    showCancelButton: true,
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    reverseButtons: true,
    focusCancel: true,
    preConfirm: () => {
      if (item.link) {
        window.open(item.link, item.target || '_self')
      }
    }
  })
}

function showMapModal(item) {
  Swal.fire({
    title: '请您先阅读并接受',
    html: `
      <a href="/agreement/" target="_blank" style="color: blue; text-decoration: underline;">VM汉化组用户服务协议</a>。
    `,
    icon: 'info',
    showCancelButton: true,
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    reverseButtons: true,
    focusCancel: true,
    preConfirm: () => {
      if (item.link) {
        window.open(item.link, item.target || '_self')
      }
    }
  })
}
</script>

<template>
  <div class="flex flex-wrap gap-4 slide-enter">
    <div
      v-for="item of items"
      :key="item.name"
      :class="['Link', { 'lazy-text': item.id === 'lazy' }]"
      class="w-30 h-30 text-center text-inherit flex flex-col items-center justify-center"
      @click="handleClick(item)"
    >
    <div v-if="item.icon && typeof item.icon === 'string' && item.icon.startsWith('i')" :class="item.icon" class="w-10 h-10 mb2" />

      <!-- <div
        v-if="item.icon.startsWith('i')"
        :class="item.icon"
        class="w-10 h-10 mb2"
      /> -->
      <img
        v-else
        :src="item.icon"
        class="w-10 h-10 mb-2 no-zoomable"
      />
      <span class="text-sm">{{ item.name }}</span>
      <span class="text-xs opacity-50">{{ item.secondary }}</span>
    </div>
  </div>
</template>

<style scoped>
.Link {
  color: inherit !important;
  text-decoration: none !important;
  border-radius: 12px;
  background-color: var(--vp-c-bg-soft);
  transition: background-color 0.25s;
  cursor: pointer;
}

.Link:hover {
  color: var(--vp-c-brand) !important;
}

.lazy-text .text-sm,
.lazy-text .text-xs {
  animation: textFlow 2s linear infinite;
}

@keyframes textFlow {
  0% {
    color: orangered;
  }
  25% {
    color: limegreen;
  }
  50% {
    color: blue;
  }
  100% {
    color: orangered;
  }
}
</style>
