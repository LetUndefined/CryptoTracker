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
