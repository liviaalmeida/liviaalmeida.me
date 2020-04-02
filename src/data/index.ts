import data from './data.json'

export default {
	getExperience(): TimeEvent[] {
		return data.experience as TimeEvent[]
	},
	getPresentations(): TimeEvent[] {
		return data.presentations as TimeEvent[]
	},
	getSkills(): Skill[] {
		return data.skills as Skill[]
	},
	getEducation(): TimeEvent[] {
		return data.education as TimeEvent[]
	},
	getLanguages(): TimeEvent[] {
		return data.languages as TimeEvent[]
	},
}