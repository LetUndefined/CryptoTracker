<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'medium',
  disabled: false
})
</script>

<template>
  <button
    class="btn"
    :class="[`btn-${variant}`, `btn-${size}`]"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
.btn-medium {
  padding: 0.75rem 1.5rem;
  font-size: 0.95rem;
}

.btn-large {
  padding: 1rem 2rem;
  font-size: 1.05rem;
}
</style>
