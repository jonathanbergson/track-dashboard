<script setup>
import CoDashboard from '@/components/Dashboard.vue';
import { name } from '../package.json';
</script>

<template>
  <co-dashboard :title="name" />
</template>
