<template>
  <div class="presentations">
		<Timeline
      :icon="require('@/assets/icons/rocket.png')"
      :timeEvents="$t('projects')"
      :title="$t('title.projects')"
    />
  </div>
</template>
