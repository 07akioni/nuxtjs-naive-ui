<template>
  <NButton @click="success">
    Hello World
  </NButton>
</template>

<script setup lang="ts">
const notification = useNotification()

function success() {
  notification.success({
    content: 'Hello World!',
  })
}
</script>
