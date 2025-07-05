'use client'

// import dynamic from 'next/dynamic'
import ReactPlayer from 'react-player'

// const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

interface VideoPlayerProps {
	url: string
}

export const VideoPlayer = ({ url }: VideoPlayerProps) => {
	return (
		<div className="relative aspect-video">
			<ReactPlayer
				src={url}
				width="100%"
				height="100%"
				controls
				playing={false}
			/>
		</div>
	)
}
