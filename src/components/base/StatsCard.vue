<script setup lang="ts">
interface Props {
  label: string
  value: string | number
  change?: string
  changeType?: 'positive' | 'negative' | 'neutral'
}

defineProps<Props>()
</script>

<template>
  <div class="stat-card">
    <div class="stat-label">{{ label }}</div>
    <div class="stat-value" :class="changeType">{{ value }}</div>
    <div v-if="change" class="stat-change" :class="changeType">
      {{ change }}
    </div>
  </div>
</template>

<style scoped>
.stat-card {
  background: var(--card-bg);
  padding: 1.5rem;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(59, 130, 246, 0.2);
}

.stat-label {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  font-family: "JetBrains Mono", monospace;
}

.stat-change {
  font-size: 0.9rem;
  margin-top: 0.5rem;
  font-weight: 500;
}

.positive {
  color: var(--success);
}

.negative {
  color: var(--danger);
}
</style>
