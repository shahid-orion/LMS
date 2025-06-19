import { client } from '../adminClient'

interface CreateEnrollmentParams {
	studentId: string
	courseId: string
	paymentId: string
	amount: number
}

export async function createEnrollment({
	studentId, // This should be Sanity user ID
	courseId,
	paymentId,
	amount
}: CreateEnrollmentParams) {
	const enrollment = client.create({
		_type: 'enrollment',
		student: {
			_type: 'reference',
			_ref: studentId
		},
		course: {
			_type: 'reference',
			_ref: courseId
		},
		paymentId,
		amount,
		enrolledAt: new Date().toISOString()
	})
	console.log('Enrollment created:', enrollment)
	return enrollment
}
