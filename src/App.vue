<script setup lang="ts">
import hello from '@/components/hello.vue';
import axios from '@/package/axios';

const getList = () => {
  const res = axios.get('/test')
}
getList()
</script>

<template>
  <div>
    halo my todolist
    <hello msg="1"/>
  </div>
</template>

