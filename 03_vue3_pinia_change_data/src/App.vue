<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import CoDashboard from '@/components/Dashboard.vue';
import { name } from '../package.json';
</script>

<template>
  <co-dashboard :title="name" />
</template>
