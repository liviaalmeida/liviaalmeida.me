import {
	experience,
	presentations,
	skills,
	education,
	languages,
} from './data.json'

export default {
	getExperience(): TimeEvent[] {
		return experience as TimeEvent[]
	},
	getPresentations(): TimeEvent[] {
		return presentations as TimeEvent[]
	},
	getSkills(): Skill[] {
		return skills as Skill[]
	},
	getEducation(): TimeEvent[] {
		return education as TimeEvent[]
	},
	getLanguages(): TimeEvent[] {
		return languages as TimeEvent[]
	},
}