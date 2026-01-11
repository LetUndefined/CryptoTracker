<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useCryptoApi } from '@/composables/useCryptoApi'
import { useFormatters } from '@/composables/useFormatters'
import type { Cryptocurrency, GlobalData } from '@/types/crypto'
import StatsCard from './base/StatsCard.vue'
import LoadingSpinner from './base/LoadingSpinner.vue'
import CryptoCard from './CryptoCard.vue'
import BaseButton from './base/BaseButton.vue'

const { fetchCryptos, fetchGlobalData } = useCryptoApi()
const { formatMoney } = useFormatters()

const cryptos = ref<Cryptocurrency[]>([])
const loading = ref<boolean>(true)
const error = ref<string>('')

const globalData = ref<GlobalData>({
  total_market_cap: { usd: 0 },
  total_volume: { usd: 0 },
  market_cap_percentage: { btc: 0 },
  active_cryptocurrencies: 0
})

const totalMarketCap = computed(() => formatMoney(globalData.value.total_market_cap.usd || 0))
const totalVolume = computed(() => formatMoney(globalData.value.total_volume.usd || 0))
const btcDominance = computed(() => `${(globalData.value.market_cap_percentage.btc || 0).toFixed(1)}%`)
const activeCoins = computed(() => globalData.value.active_cryptocurrencies || 0)

const loadCryptos = async (): Promise<void> => {
  loading.value = true
  error.value = ''
  try {
    console.log('Fetching cryptos...')
    cryptos.value = await fetchCryptos(12)
    console.log('Fetched cryptos:', cryptos.value.length)
  } catch (err) {
    console.error('Error loading cryptos:', err)
    error.value = 'Failed to load cryptocurrency data. Please try again.'
  } finally {
    loading.value = false
  }
}

const loadGlobalData = async (): Promise<void> => {
  try {
    console.log('Fetching global data...')
    const response = await fetchGlobalData()
    globalData.value = response.data
    console.log('Fetched global data')
  } catch (err) {
    console.error('Error loading global data:', err)
  }
}

onMounted(() => {
  loadCryptos()
  loadGlobalData()
})
</script>

<template>
  <div class="container">
    <div class="stats-grid">
      <StatsCard label="Total Market Cap" :value="totalMarketCap" />
      <StatsCard label="24h Volume" :value="totalVolume" />
      <StatsCard label="BTC Dominance" :value="btcDominance" />
      <StatsCard label="Active Cryptos" :value="activeCoins" />
    </div>

    <section class="section">
      <div class="section-header">
        <h2 class="section-title">Top Cryptocurrencies</h2>
        <BaseButton variant="secondary" size="small" @click="loadCryptos">
          Refresh
        </BaseButton>
      </div>

      <LoadingSpinner v-if="loading" message="Loading market data..." />

      <div v-else-if="error" class="error-state">
        <div class="error-icon">⚠️</div>
        <div class="error-text">{{ error }}</div>
        <BaseButton @click="loadCryptos">Try Again</BaseButton>
      </div>

      <div v-else-if="cryptos.length === 0" class="error-state">
        <div class="error-icon">🔍</div>
        <div class="error-text">No cryptocurrencies found</div>
        <BaseButton @click="loadCryptos">Retry</BaseButton>
      </div>

      <div v-else class="crypto-grid">
        <CryptoCard
          v-for="crypto in cryptos"
          :key="crypto.id"
          :crypto="crypto"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.section {
  margin-bottom: 2.5rem;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.section-title {
  font-size: 1.75rem;
  font-weight: 700;
}

.crypto-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}

.error-state {
  text-align: center;
  padding: 4rem 2rem;
}

.error-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.error-text {
  color: var(--text-secondary);
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}
</style>
