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
