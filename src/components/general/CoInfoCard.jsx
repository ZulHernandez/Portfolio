const CoInfoCard = ({ data, title, size }) => {
	return data.map((item) => {
		return (
			<div key={item.id} className={size + "-info-card"}>
				<img
					className={size + "-info-card-icon"}
					src={item.icon}
					alt={item.title}
				/>
				<h3 className={size + "-info-card-title"} style={{ display: title }}>
					{item.title}
				</h3>
				<p className={size + "-info-card-desc"}>{item.description}</p>
			</div>
		);
	});
};

export default CoInfoCard;
