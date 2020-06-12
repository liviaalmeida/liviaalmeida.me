<template>
	<div class="locale">
		<label v-for="(lang, l) in langs" :key="l">
			<input type="radio" name="lang" :value="lang" @click="updateLocale">
			<span>{{lang}}</span>
		</label>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	data() {
		return {
			langs: ['pt', 'en']
		}
	},
	mounted() {
		const inputs = this.$el.querySelectorAll('input')
		inputs.forEach((input: HTMLInputElement) => {
			if (input.value === this.$i18n.locale) input.checked = true
		})
	},
	methods: {
		updateLocale({ target }: MouseEvent) {
			const value = (target as HTMLInputElement).value
			if (value && value !== this.$i18n.locale) this.$i18n.locale = value
		}
	}
})
</script>

<style lang="scss">
.locale {
	label {
		font-weight: 400;

		&:not(:last-child):after {
			content: '|';
			margin: 0 3px;
		}

		span {
			opacity: .5;
		}

		input {
			display: none;

			&:checked ~ span {
				font-weight: 700;
				opacity: 1;
			}
		}
	}
}
</style>