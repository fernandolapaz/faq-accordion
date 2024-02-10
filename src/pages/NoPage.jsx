import React from 'react'
import { Link } from 'react-router-dom'

const styleBox = {
	display: 'grid',
	gap: '1rem',
	backgroundColor: '#212121',
	borderRadius: '0.5rem',
	padding: '2rem',
	fontSize: '1.5rem',
	color: 'white',
}

const styleLink = {
	color: 'skyblue',
}

export default function NoPage() {
	return (
		<div style={styleBox}>
			<span aria-hidden='true'>🤔</span>
			<h1>This page doesn't exist.</h1>
			<p>
				Back{' '}
				<Link
					to='/'
					style={styleLink}
				>
					Home
				</Link>
			</p>
		</div>
	)
}
