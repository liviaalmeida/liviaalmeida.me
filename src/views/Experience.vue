<template>
	<div class="columns">
		<div class="column column-5">
			<work />
		</div>

		<div class="column column-5">
			<presentations />
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

import Work from '@/components/Work.vue'
import Presentations from '@/components/Presentations.vue'

export default Vue.extend({
	components: {
		Work,
		Presentations,
	},
})
</script>
