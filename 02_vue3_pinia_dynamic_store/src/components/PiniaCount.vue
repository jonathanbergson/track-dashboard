<script setup>
import { useCounterStore } from '../stores/counter';

const counter = useCounterStore();
counter.count += 2;
</script>

<template>
  <button @click="counter.increment">
    count: {{ counter.count }}
  </button>
</template>
