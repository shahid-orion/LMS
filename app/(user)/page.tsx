import { CourseCard } from '@/components/CourseCard'
import Hero from '@/components/Hero'
import { getCourses } from '@/sanity/lib/courses/getCourses'

export default async function Home() {
	const courses = await getCourses()

	// console.log('Courses:', courses)
	return (
		<div className="min-h-screen bg-background">
			<Hero />

			{/* Courses Grid */}
			<div className="container mx-auto px-4">
				<div className="flex items-center gap-4 py-8">
					<div className="h-px flex-1 bg-gradient-to-r from-border/0 via-border to-border/0" />
					<span className="text-sm font-medium text-muted-foreground">
						Featured Courses
					</span>
					<div className="h-px flex-1 bg-gradient-to-r from-border/0 via-border to-border/0" />
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
					{/* course Cards */}
					{courses.map((course) => (
						<CourseCard
							key={course._id}
							course={course}
							href={`/courses/${course.slug}`}
						/>
					))}
				</div>
			</div>
		</div>
	)
}
