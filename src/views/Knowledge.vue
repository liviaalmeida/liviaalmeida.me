<template>
	<div class="columns">

		<div class="column column-5">
			<programming />
		</div>

		<div class="column column-5">
			<education />
			<languages />
		</div>

	</div>
</template>

<script lang="ts">
import Vue from 'vue'

import Programming from '@/components/Programming.vue'
import Education from '@/components/Education.vue'
import Languages from '@/components/Languages.vue'

export default Vue.extend({
	components: {
		Programming,
		Education,
		Languages,
	},
})
</script>
