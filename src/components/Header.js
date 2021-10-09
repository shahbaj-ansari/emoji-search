import React from "react";
import "../css/Header.css"

class Header extends React.Component {
	render() {
		return (
			<header>
				<div>
				<span><img src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png" alt="" /></span>
                Emoji Search
				<span><img src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png" alt="" /></span>
				</div>
			</header>
		);
	}
}

export default Header;
