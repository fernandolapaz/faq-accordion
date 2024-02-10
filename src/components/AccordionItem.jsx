import React from 'react'
import minus from '../assets/images/icon-minus.svg'
import plus from '../assets/images/icon-plus.svg'

export default function AccordionItem(props) {
	const styleContent = {
		maxHeight: props.active ? '15rem' : 0,
		paddingTop: props.active ? '1.4rem' : 0,
	}

	return (
		<li className='item'>
			<button
				className='header'
				type='button'
				aria-expanded={props.active ? 'true' : 'false'}
				onClick={() => props.onClick(props.id)}
			>
				<span>{props.header}</span>
				<img
					src={props.active ? minus : plus}
					alt=''
					width={30}
					height={31}
				/>
			</button>
			<p
				className='content'
				aria-hidden={props.active ? 'false' : 'true'}
				style={styleContent}
			>
				{props.content}
			</p>
		</li>
	)
}
