


import React from "react";
import ListItem from "./ListItem/ListItem";
import "./ListWrapper.css";
import { xAccounts } from "../../data/xAccounts";

function ListWrapper() {
	return (
		<ul className="list-wrapper__wrapper">
			{xAccounts.map((item) => (
				<ListItem key={item.name} {...item} /*spread operator*/ 
					// name={item.name}
					// image={item.image}
					// text={item.text}
					// Link={item.xLink}
				/>
			))}
		</ul>
	);
}

export default ListWrapper;
