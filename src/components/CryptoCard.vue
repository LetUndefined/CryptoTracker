<script setup lang="ts">
import { computed } from 'vue'
import { useFormatters } from '@/composables/useFormatters'
import type { Cryptocurrency } from '@/types/crypto'

interface Props {
  crypto: Cryptocurrency
}

const props = defineProps<Props>()
const { formatPrice } = useFormatters()

const isPositiveChange = computed(() => props.crypto.price_change_percentage_24h >= 0)
const changeSymbol = computed(() => isPositiveChange.value ? '▲' : '▼')
const changeClass = computed(() => isPositiveChange.value ? 'positive' : 'negative')
</script>

<template>
  <div class="crypto-card">
    <div class="crypto-header">
      <img :src="crypto.image" :alt="crypto.name" class="crypto-icon" />
      <div class="crypto-info">
        <div class="crypto-name">{{ crypto.name }}</div>
        <div class="crypto-symbol">{{ crypto.symbol }}</div>
      </div>
    </div>

    <div class="crypto-price">${{ formatPrice(crypto.current_price) }}</div>

    <div class="crypto-change" :class="changeClass">
      {{ changeSymbol }}
      {{ Math.abs(crypto.price_change_percentage_24h).toFixed(2) }}%
    </div>
  </div>
</template>

<style scoped>
.crypto-card {
  background: var(--card-bg);
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid transparent;
}

.crypto-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 40px rgba(59, 130, 246, 0.2);
  border-color: var(--accent);
}

.crypto-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.crypto-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.crypto-info {
  flex: 1;
}

.crypto-name {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.crypto-symbol {
  color: var(--text-secondary);
  font-size: 0.85rem;
  text-transform: uppercase;
  font-family: "JetBrains Mono", monospace;
}

.crypto-price {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  font-family: "JetBrains Mono", monospace;
}

.crypto-change {
  display: inline-block;
  padding: 0.35rem 0.75rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: "JetBrains Mono", monospace;
}

.crypto-change.positive {
  background: rgba(16, 185, 129, 0.15);
  color: var(--success);
}

.crypto-change.negative {
  background: rgba(239, 68, 68, 0.15);
  color: var(--danger);
}
</style>
