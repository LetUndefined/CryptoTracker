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
.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  border: none;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-primary {
  background: var(--accent);
  color: var(--text-primary);
}

.btn-primary:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
}

.btn-secondary {
  background: var(--card-bg);
  color: var(--text-primary);
  border: 1px solid var(--border);
}

.btn-secondary:hover {
  background: rgba(59, 130, 246, 0.1);
  border-color: var(--accent);
}

.btn-danger {
  background: var(--danger);
  color: var(--text-primary);
}

.btn-danger:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(239, 68, 68, 0.4);
}

.btn-small {
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
}

.btn-medium {
  padding: 0.75rem 1.5rem;
  font-size: 0.95rem;
}

.btn-large {
  padding: 1rem 2rem;
  font-size: 1.05rem;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
