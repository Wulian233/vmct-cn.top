<template>
  <div slide-enter>
    <div class="one-time-donations">
      <div class="links">
        <a
          v-for="(payment, key) in theme.payment"
          :key="key"
          :href="`#${key}`"
          :title="payment.name"
        >
          <span :class="`i-custom-${key}`"></span>
          {{ payment.name }}
        </a>
      </div>
    </div>

    <div
      v-if="selectedPayment && coins[selectedPayment]"
      class="coin-details slide-enter"
    >
      <p>
        <span ref="icon"></span>
        {{ coins[selectedPayment].name }}：<br /><a
          :href="coins[selectedPayment].address"
          :title="coins[selectedPayment].name"
          target="_blank"
          rel="noopener noreferrer"
          >{{ coins[selectedPayment].address }}</a
        >
      </p>
      <img :src="qrcode" alt="QR Code" />
    </div>
  </div>

  <!-- 在这里显式声明Pay Icon，给Unocss识别导入 -->
  <div v-once hidden>
    <span class="i-custom-bilibili"></span>
    <span class="i-custom-afdian"></span>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import { useQRCode } from "@vueuse/integrations/useQRCode";
import { useData } from "vitepress";

const { theme } = useData();
let qrcode = ref();

const icon = ref();
const selectedPayment = ref();
const coins = ref(theme.value.payment);

const updatePaymentType = () => {
  const hash = window.location.hash.slice(1);
  if (hash && coins.value[hash]?.address) {
    selectedPayment.value = hash;
    qrcode = useQRCode(coins.value[hash].address);
    nextTick(() => {
      icon.value.className = `i-custom-${hash}`;
    });
  }
};

onMounted(() => {
  updatePaymentType();
  window.addEventListener("hashchange", updatePaymentType);
});

onBeforeUnmount(() => {
  window.removeEventListener("hashchange", updatePaymentType);
});
</script>

<style scoped>
.links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.links a {
  flex: 1 1 auto;
  padding: 12px 8px;
  text-decoration: none !important;
  user-select: none;
  transition: transform 0.3s;
  display: inline-block;
  font-size: 16px;
  text-align: center;
  font-weight: 600;
  text-indent: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--vp-c-text-1);
}

.links a > span {
  display: inline-block;
  height: 2em;
  width: 2em;
}

@media (any-hover: hover) {
  .links a:hover,
  .links a:active {
    transform: translateY(-3px);
  }

  .links a svg:hover {
    transform: scale(1);
  }
}

.links a svg {
  margin-right: 5px;
}

@media (max-width: 788px) {
  .coin-details > p {
    display: none !important;
  }
}

.coin-details {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 2rem;
}

.coin-details img {
  box-shadow: var(--vp-shadow-1);
}

.coin-details p {
  font-weight: bold;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  width: 400px;
}

.coin-details p a {
  font-weight: normal;
}

.coin-details p span {
  display: block;
  height: 5rem;
  width: 5rem;
  margin-left: 1rem;
  margin-bottom: 12px;
  animation: 4s whirling linear;
  animation-direction: alternate;
  animation-iteration-count: infinite;
}

@keyframes whirling {
  from {
    transform: rotate3d(0, 1, 0, -90deg) scale(0.9);
  }

  to {
    transform: rotate3d(0, 1, 0, 90deg) scale(1);
  }
}
</style>
