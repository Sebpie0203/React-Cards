// eslint-disable-next-line no-unused-vars
import React from "react";
import ListWrapper from "./Componenes/ListWrapper/ListWrapper";
import "./index.css";
import Form from "./Componenes/Form/Form";

const initialStateItems = [
	{
		image:
			"https://leditorial.pl/wp-content/uploads/2020/09/121593628_660533111525365_4149125885204225497_n.jpg",
		name: "Dan Abramov",
		text: "Working on @reactjs. The demo guy.",
		xLink: "https://x.com/dan_abramov",
	},
	{
		image:
			"https://leditorial.pl/wp-content/uploads/2020/09/121593628_660533111525365_4149125885204225497_n.jpg",
		name: "Ryan Florence",
		text: "Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.",
		xLink: "https://x.com/ryanflorence",
	},
	{
		image:
			"https://leditorial.pl/wp-content/uploads/2020/09/121593628_660533111525365_4149125885204225497_n.jpg",
		name: "Michael Jackson",
		text: "Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.",
		xLink: "https://x.com/mjackson",
	},
	{
		image:
			"https://leditorial.pl/wp-content/uploads/2020/09/121593628_660533111525365_4149125885204225497_n.jpg",
		name: "Kent C. Dodds",
		text: "Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS",
		xLink: "https://x.com/kentcdodds",
	},
];

class App extends React.Component {
	state = {
		items: [...initialStateItems],
	};

	addItem = (e) => {
		e.preventDefault();

		const newItem = {
			name: e.target[0].value,
			image: e.target[1].value,
			xLink: e.target[2].value,
			text: e.target[3].value
		};

		e.target.reset()


		this.setState(prevState => ({
			// items: [...this.state.items, newItem]
			items: [...prevState.items, newItem]
		}))
	};

	render() {
		return (
			<div>
				<ListWrapper items={this.state.items} />
				<Form submitFn={this.addItem} />
			</div>
		);
	}
}

export default App;
