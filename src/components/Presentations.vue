<template>
  <div class="presentations">
		<Timeline
      :icon="require('@/assets/icons/microphone.png')"
      :timeEvents="$t('presentations')"
      :title="$t('title.presentations')"
    />
  </div>
</template>
