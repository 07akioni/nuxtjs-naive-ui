<template>
  <NConfigProvider inline-theme-disabled>
    <NSpace vertical>
      <NSwitch v-model:value="loading" />
      <NCard>
        <template #header>
          <NSkeleton
            v-if="loading"
            text
            width="60%"
          />
          <template v-else>
            Lorem Ipsum
          </template>
        </template>
        <NSkeleton
          v-if="loading"
          text
          :repeat="6"
        />
        <template v-else>
          Lorem ipsum dolor sit amet,<br>
          consectetur adipiscing elit,<br>
          sed do eiusmod tempor incididunt<br>
          ut labore et dolore magna aliqua.<br>
          Ut enim ad minim veniam,<br>
          quis nostrud exercitation ullamco
        </template>
      </NCard>
    </NSpace>
    <NNotificationProvider>
      <NotificationTest />
    </NNotificationProvider>
  </NConfigProvider>
</template>

<script setup lang="ts">
const loading = ref(true)
</script>
