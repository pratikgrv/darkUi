import React from 'react'

const SlidingMiniTab = ({ activeTab, handleTabChange }) => {
	return (
		<div>
			<div className="wrapper ">
				<nav>
					<input
						type="radio"
						name="tab"
						id="all"
						checked={activeTab === "all"}
						onChange={handleTabChange}
					/>
					<input
						type="radio"
						name="tab"
						id="popular"
						checked={activeTab === "popular"}
						onChange={handleTabChange}
					/>
					<input
						type="radio"
						name="tab"
						id="new"
						checked={activeTab === "new"}
						onChange={handleTabChange}
					/>

					<label htmlFor="all" className="all">
						<a href="#">all</a>
					</label>
					<label htmlFor="popular" className="popular">
						<a href="#">popular</a>
					</label>
					<label htmlFor="new" className="new">
						<a href="#">new</a>
					</label>

					<div className="tab"></div>
				</nav>
			</div>
		</div>
	);
};

export default SlidingMiniTab