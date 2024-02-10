import React from 'react'
import AccordionItem from '../components/AccordionItem'
import Attribution from '../components/Attribution'
import Theme from '../components/Theme'
import data from '../data.json'

export default function Home() {
	const [items, setItems] = React.useState(data)

	const handleClick = id => {
		setItems(prevItems =>
			prevItems.map(item =>
				item.id === id
					? { ...item, active: !item.active }
					: { ...item, active: false }
			)
		)
	}

	const accordion = items.map(item => (
		<AccordionItem
			key={item.id}
			id={item.id}
			header={item.question}
			content={item.answer}
			active={item.active}
			onClick={handleClick}
		/>
	))

	return (
		<>
			<header>
				<Theme />
			</header>

			<main>
				<h1 className='title'>
					<abbr title='frequently asked questions'>FAQs</abbr>
				</h1>
				<ul className='accordion'>{accordion}</ul>
			</main>

			<footer>
				<Attribution />
			</footer>
		</>
	)
}
