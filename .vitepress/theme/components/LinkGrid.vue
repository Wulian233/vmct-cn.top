<script setup>
import Swal from "sweetalert2";

const props = defineProps({
  items: Array,
});

function handleClick(item) {
  if (item.id === "lanzou") {
    showModal(item);
  } else if (item.id === "lazy") {
    showRandomQuestion(item);
  } else if (item.id === "mapdl") {
    showMapModal(item);
  } else if (item.id === "quark-lanzou") {
    showQuarkModal(item);
  } else if (item.id === "lanzou-quark-mapdl") {
    showQuarkMapModal(item);
  } else if (item.link) {
    window.open(item.link, "_blank");
  }
}

function showError() {
  Swal.fire({
    icon: "error",
    title: "回答错误",
    html: `看起来不太对哦，愿意的话你可以再试一次！<br>PS：题目仅供娱乐，看一看有多少还给老师了呢awa`,
  });
}

function showQuestion(item, title, content, correctAnswer, imageUrl = null) {
  let selectedAnswer = ""; // 用来存储语文题的输入答案

  // 生成选项按钮HTML（仅用于非语文题）
  const options = ["A", "B", "C", "D"];
  const optionButtons = options
    .map((option) => {
      return `<button id="btn-${option}" class="swal2-confirm swal2-styled" style="margin: 5px; padding: 10px 20px; font-size: 18px;">
              ${option}
            </button>`;
    })
    .join("");

  const swalConfig = {
    title,
    html: `${content}<br>${imageUrl ? `<img src="${imageUrl}" style="max-width: 100%; height: auto;" />` : ""}
           <div style="margin-top: 10px;">
             ${
               title === "语文题"
                 ? `<input type="text" id="answer-input" style="width: 100%; padding: 10px; font-size: 18px;" placeholder="请输入答案（例如：AB）" />`
                 : optionButtons
             }
           </div>`,
    showCancelButton: false,
    showConfirmButton: title === "语文题", // 只有语文题才显示提交按钮
    confirmButtonText: "提交",
    willOpen: () => {
      if (title === "语文题") {
        const input = document.getElementById("answer-input");
        input.addEventListener("input", (event) => {
          selectedAnswer = event.target.value.trim().toUpperCase();
        });
      } else {
        options.forEach((option) => {
          const button = document.getElementById(`btn-${option}`);
          button.addEventListener("click", () => {
            selectedAnswer = option;
            Swal.close();
            validateAnswer(selectedAnswer, correctAnswer, item);
          });
        });
      }
    },
    preConfirm: () => {
      return selectedAnswer;
    },
  };

  Swal.fire(swalConfig).then((result) => {
    // 如果是语文题，并且点击了提交按钮
    if (result.isConfirmed && title === "语文题") {
      validateAnswer(selectedAnswer, correctAnswer, item);
    }
  });
}

function validateAnswer(selectedAnswer, correctAnswer, item) {
  if (Array.isArray(selectedAnswer)) {
    // 语文题
    const correctAnswers = correctAnswer.split(""); // 支持ABCD多个答案的情况
    const isCorrect = selectedAnswer.every((a) => correctAnswers.includes(a));
    if (isCorrect) {
      showCorrectAnswersModal(item);
    } else {
      showError();
    }
  } else {
    if (selectedAnswer === correctAnswer) {
      showCorrectAnswersModal(item);
    } else {
      showError();
    }
  }
}

const questions = [
  {
    title: "语文题",
    content:
      "2023北京中考语文2、3。请用连续不加空格的字母作答，忽略大小写。比如AB。",
    correctAnswer: "DB",
    imageUrl: "https://vmct-cn.top/imgs/questions/chinese.png",
  },
  {
    title: "数学题",
    content: "2023北京中考数学8",
    correctAnswer: "D",
    imageUrl: "https://vmct-cn.top/imgs/questions/math.jpg",
  },
  {
    title: "物理题",
    content:
      "小瑶同学在一次实验中将定值电阻R两端的电压从2V增加到3V，她观察到和R串联的电流表的示数变化了0.1A。下列判断正确的是<br><br>A. 电阻R的阻值为20Ω<br>B. 电阻R的阻值从20Ω变为30Ω<br>C. 电阻R消耗的电功率增加了0.5W<br>D. 电阻R消耗的电功率从0.2W变为0.3W<br>（2023北京通州物理一模11 区得分率50.71%）",
    correctAnswer: "C",
  },
  {
    title: "MC科技模组题",
    content:
      "以下哪个能量单位没有被科技模组使用过？<br><br>A. LU<br>B. EU<br>C. RF<br>D. PT",
    correctAnswer: "D",
  },
  {
    title: "MC原版译名题",
    content:
      "____（Warden）是一种高大而危险的敌对生物，会根据振动和气息判断生物的位置。下列选项为其现行标准译名的一项是<br><br>A. 循声守卫<br>B. 寻声守卫<br>C. 坚守者<br>D. 监守者",
    correctAnswer: "D",
  },
  {
    title: "MC原版译名题",
    content:
      "____（Hay Bale）方块能减少80%的摔落伤害，下列选项为其现行标准译名的一项是<br><br>A. 干草捆<br>B. 干草块<br>C. 干草堆<br>D. 干草垛",
    correctAnswer: "A",
  },
  {
    title: "MC原版题",
    content:
      "合成末地烛需要用到什么<br>A. 烈焰棒<br>B. 紫颂果<br>C. 烈焰粉<br>D. 紫珀块",
    correctAnswer: "A",
  },
  {
    title: "历史物理题",
    content:
      "漂附在液体中的物体,在自身重力不变的情况下，外来的压力加重力小于浮力时，就会上浮，反之则会下沉。下面与图二的外力有关的史实是<br><br>",
    correctAnswer: "A",
    imageUrl: "https://vmct-cn.top/imgs/questions/history.jpg",
  },
  {
    title: "MC原版题",
    content:
      "Minecraft 中，玩家在高度差最小为__时（整数）摔落会直接死亡<br>A. 22<br>B. 23<br>C. 24<br>D. 25",
    correctAnswer: "C",
  },
  {
    title: "MC原版题",
    content:
      "蜜蜂农场往往将蜂巢和花放在农田两侧，可能的原因是什么？<br>A. 只是为了好看<br>B. 为了促进蜜蜂产蜜<br>C. 农田里的植物需要蜜蜂传播花粉才能生长<br>D. 蜜蜂采蜜后，回蜂巢途中掉落的花粉相当于骨粉，促进植物生长",
    correctAnswer: "D",
  },
  {
    title: "MC原版题",
    content:
      "对于海洋神殿，下列说法不正确的是<br>A. 海洋神殿的宝藏为8个金块<br>B. 正常情况下，一个海洋神殿中的远古守卫者至少有 6 个，并会给玩家挖掘疲劳效果<br>C. 海洋神殿中的房间生成随机，且有着不同数量、至少6个的房间<br>D. 击杀守卫者是获得大量海晶砂砾、海晶碎片以及经验的较好来源",
    correctAnswer: "B",
  },
  {
    title: "MC原版和电学题",
    content:
      "红石中继器和荧石在红石电路中的的部分作用相当于真实电路中的<br>A. 变压器<br>B. 电阻<br>C. 线圈<br>D. 二极管",
    correctAnswer: "D",
  },
];

function showRandomQuestion(item) {
  const randomIndex = Math.floor(Math.random() * questions.length);
  const question = questions[randomIndex];

  showQuestion(
    item,
    question.title,
    question.content,
    question.correctAnswer,
    question.imageUrl,
  );
}

function showCorrectAnswersModal(item) {
  Swal.fire({
    title: "回答正确！",
    html: `
      您可以下载汉化了！懒汉下载和普通下载的链接一样，只是为了增加娱乐用途。<br>
      不过在此之前，请您先阅读并接受<a href="/agreement/" target="_blank" style="color: blue; text-decoration: underline;">VM汉化组用户服务协议</a>，
      并仔细阅读 <a href="/modpacks/" target="_blank" style="color: blue; text-decoration: underline;">汉化补丁安装说明</a>。
    `,
    icon: "success",
    showCancelButton: true,
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    reverseButtons: true,
    focusCancel: true,
    preConfirm: () => {
      if (item.link) {
        window.open(item.link, "_blank");
      }
    },
    didOpen: () => {
      const confirmButton = Swal.getConfirmButton();
    },
  });
}

// 将重复的HTML内容提取出来，方便管理和修改
function getDownloadModalHtml(showInstallLink = true) {
  const installLinkHtml = `，并仔细查阅<a href="/modpacks/" target="_blank">汉化补丁安装说明</a>`;
  return `
    <div class="modal-content-container">
      <p class="intro-text">请选择您偏好的下载方式（文件内容一致）：</p>
      <ul class="download-options-list">
        <li class="option-item recommended">
            <div class="option-title">
                <strong>📂 夸克网盘</strong>
            </div>
            <div class="option-desc">转存即可<strong>自动获取后续更新</strong>。您的支持是我们持续用爱发电的动力 ❤️</div>
        </li>
        <li class="option-item lanzou">
            <div class="option-title">
                <strong>🚀 蓝奏云</strong>
            </div>
            <div class="option-desc">无需客户端，点击链接直接下载，轻量快捷。</div>
        </li>
      </ul>
      <p class="important-notice">
          <strong>重要提示：</strong>下载前请务必阅读并接受<a href="/agreement/" target="_blank">VM汉化组用户服务协议</a>${showInstallLink ? installLinkHtml : "。"}
      </p>
    </div>
  `;
}

// 倒计时逻辑函数
function setupButtonCountdown() {
  const confirmBtn = Swal.getConfirmButton();
  const denyBtn = Swal.getDenyButton();

  if (!confirmBtn || !denyBtn) return;

  const originalConfirmText = confirmBtn.innerText;
  const originalDenyText = denyBtn.innerText;

  confirmBtn.disabled = true;
  denyBtn.disabled = true;

  let countdown = 3;

  confirmBtn.innerText = `${originalConfirmText} (${countdown})`;
  denyBtn.innerText = `${originalDenyText} (${countdown})`;

  const timer = setInterval(() => {
    countdown -= 1;
    if (countdown > 0) {
      confirmBtn.innerText = `${originalConfirmText} (${countdown})`;
      denyBtn.innerText = `${originalDenyText} (${countdown})`;
    } else {
      clearInterval(timer);
      confirmBtn.disabled = false;
      denyBtn.disabled = false;
      confirmBtn.innerText = originalConfirmText;
      denyBtn.innerText = originalDenyText;
    }
  }, 1000);
}

function showQuarkModal(item) {
  Swal.fire({
    title: "网盘选择",
    icon: "info",
    html: getDownloadModalHtml(true),
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "夸克网盘",
    denyButtonText: "蓝奏云",
    cancelButtonText: "取消",
    customClass: {
      popup: "vm-swal-popup",
      htmlContainer: "vm-swal-html-container",
      confirmButton: "btn btn-quark",
      denyButton: "btn btn-lanzou",
      cancelButton: "btn btn-cancel",
    },

    focusCancel: true,
    allowOutsideClick: false,
    showConfirmButton: true,
    didOpen: (modal) => {
      const icon = modal.querySelector(".swal2-icon");
      if (icon) icon.style.display = "none";
      setupButtonCountdown();
    },
  }).then((result) => {
    if (result.isConfirmed) {
      const link = item.quarkLink;
      if (link) window.open(link, "_blank");
    } else if (result.isDenied) {
      const link = item.lanzouLink;
      if (link) window.open(link, "_blank");
    }
  });
}

function showModal(item) {
  Swal.fire({
    title: "请您先阅读并接受",
    html: `
      <a href="/agreement/" target="_blank" style="color: blue; text-decoration: underline;">VM汉化组用户服务协议</a>，
      并仔细阅读 <a href="/modpacks/" target="_blank" style="color: blue; text-decoration: underline;">汉化补丁安装说明</a>。
    `,
    icon: "info",
    showCancelButton: true,
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    reverseButtons: true,
    focusCancel: true,
    preConfirm: () => {
      if (item.link) {
        window.open(item.link, "_blank");
      }
    },
    willOpen: () => {
      // 在弹窗显示后，延迟3秒启用确认按钮
      setTimeout(() => {
        const confirmButton = Swal.getConfirmButton();
        confirmButton.disabled = false;
      }, 3000);
    },
    didOpen: () => {
      const confirmButton = Swal.getConfirmButton();
      confirmButton.disabled = true;
    },
  });
}

function showQuarkMapModal(item) {
  Swal.fire({
    title: "网盘选择",
    icon: "info",
    html: getDownloadModalHtml(false),
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "夸克网盘",
    denyButtonText: "蓝奏云",
    cancelButtonText: "取消",
    customClass: {
      popup: "vm-swal-popup",
      htmlContainer: "vm-swal-html-container",
      confirmButton: "btn btn-quark",
      denyButton: "btn btn-lanzou",
      cancelButton: "btn btn-cancel",
    },
    focusCancel: true,
    allowOutsideClick: false,
    showConfirmButton: true,
    didOpen: (modal) => {
      const icon = modal.querySelector(".swal2-icon");
      if (icon) icon.style.display = "none";
      setupButtonCountdown();
    },
  }).then((result) => {
    if (result.isConfirmed) {
      const link = item.quarkLink;
      if (link) window.open(link, "_blank");
    } else if (result.isDenied) {
      const link = item.lanzouLink;
      if (link) window.open(link, "_blank");
    }
  });
}

function showMapModal(item) {
  Swal.fire({
    title: "请您先阅读并接受",
    html: `
      <a href="/agreement/" target="_blank" style="color: blue; text-decoration: underline;">VM汉化组用户服务协议</a>。
    `,
    icon: "info",
    showCancelButton: true,
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    reverseButtons: true,
    focusCancel: true,
    preConfirm: () => {
      if (item.link) {
        window.open(item.link, "_blank");
      }
    },
    willOpen: () => {
      // 在弹窗显示后，延迟3秒启用确认按钮
      setTimeout(() => {
        const confirmButton = Swal.getConfirmButton();
        confirmButton.disabled = false;
      }, 3000);
    },
    didOpen: () => {
      const confirmButton = Swal.getConfirmButton();
      confirmButton.disabled = true;
    },
  });
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
      <div
        v-if="
          item.icon &&
          typeof item.icon === 'string' &&
          item.icon.startsWith('i')
        "
        :class="item.icon"
        class="w-10 h-10 mb2"
      />
      <img v-else :src="item.icon" class="w-10 h-10 mb-2 no-zoomable" />
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

<style>
.vm-swal-popup {
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", "Microsoft YaHei",
    "Helvetica Neue", sans-serif !important;
}

.vm-swal-html-container {
  margin: 0 !important;
  padding: 0 !important;
}

.modal-content-container {
  padding: 25px 20px 10px 20px;
  text-align: left;
  color: #333;
  line-height: 1.75;
}

.intro-text {
  margin-bottom: 15px;
  text-align: left;
  color: #555;
  font-size: 0.95em;
}

.download-options-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.option-item {
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 15px 20px;
  margin-bottom: 12px;
  transition: all 0.2s ease-in-out;
}

.option-item:hover {
  border-color: #007bff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

.option-item.recommended:hover {
  border-color: #e74c3c !important;
}

.option-item.lanzou:hover {
  border-color: #3498db !important;
}

.option-item.recommended {
  border-left: 4px solid #e74c3c;
}

.option-item.lanzou {
  border-left: 4px solid #3498db;
}

.option-item strong {
  color: #000;
}

.important-notice {
  font-size: 13px;
  color: #6c757d;
  margin-top: 25px;
  text-align: left;
}

.important-notice a {
  color: #007bff;
  text-decoration: underline;
  font-weight: normal !important;
}

.btn {
  padding: 10px 24px !important;
  border: none !important;
  border-radius: 6px !important;
  font-size: 15px !important;
  font-weight: 500 !important;
  margin: 0 8px !important;
  cursor: pointer !important;
  transition: all 0.2s ease !important;
  box-shadow: none !important;
}

.btn:hover {
  opacity: 0.85;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;
}

.btn:active {
  transform: scale(0.97);
  opacity: 1;
}

.btn-quark {
  background-color: #e74c3c !important;
}

.btn-lanzou {
  background-color: #3498db !important;
}

.btn-cancel {
  background-color: #f0f2f5 !important;
  color: #555 !important;
  border: 1px solid #dcdfe6 !important;
}

.option-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
}

.option-desc {
  font-size: 14px;
  color: #666;
  line-height: 1.5;
}
</style>
