import { type SchemaTypeDefinition } from 'sanity'
import { studentType } from './studentType'
import { courseType } from './courseType'
import { instructorType } from './instructorType'
import { lessonCompletionType } from './lessonCompletionType'
import { lessonType } from './lessonType'
import { categoryType } from './categoryType'
import { enrollmentType } from './enrollmentType'
import { moduleType } from './moduleType'
import { blockContent } from './blockContent'

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		studentType,
		courseType,
		moduleType,
		lessonType,
		instructorType,
		blockContent,
		lessonCompletionType,
		categoryType,
		enrollmentType
	]
}
