const CoInfoCard = ({ data, title }) => {
	return data.map((item) => {
		return (
			<div key={item.id} className="info-card">
				<img className="info-card-icon" src={item.icon} alt={item.title} />
				<h3 className="info-card-title" style={{display: title}}>{item.title}</h3>
				<p className="info-card-desc">{item.description}</p>
			</div>
		);
	});
};

export default CoInfoCard;
