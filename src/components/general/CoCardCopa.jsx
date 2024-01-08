const CoCardCopa = ({casos}) => {
	
	return casos.map((caso) => {
		return (
			<a key={caso.id} href={caso.link} target="_blank" rel="noreferrer">
				<div className="caso-card">
					<img loading="lazy" className="caso-card-img" src={caso.banner} alt={caso.title} />
					<div className="caso-card-info">
						<div>
							<h3>{caso.title}</h3>
							<p>{caso.sub}</p>
						</div>
						<p style={{color: "#ff2079"}} className="">{caso.link}</p>
					</div>
				</div>
			</a>
		);
	});
};

export default CoCardCopa;