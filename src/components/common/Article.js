export const Article = (props) => {
    //console.log(props.page);
    return (<>
        {props.data.map((data, i) => {
            if (props.page === 'destination') {
                return (
                    <article key={data.id} 
                    hidden={(i === 0)?false:true} 
                    className="destination-info flow" 
                    id={data.id + '-tab'} 
                    tabIndex={data.index} 
                    role="tabpanel">
                        <h2 className="fs-800 uppercase ff-serif">{data.name}</h2>
                        <p>{data.description}</p>
                        <div className="destination-meta flex">
                            <div>
                                <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
                                <p className="ff-serif uppercase">{data.distance}</p>
                            </div>
                            <div>
                                <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
                                <p className="ff-serif uppercase">{data.travel}</p>
                            </div>
                        </div>
                    </article>
                )
            } else if (props.page === 'crew') {
                return (
                    <article key={data.id} 
                    hidden={(i === 0)?false:true} 
                    className="crew-details flow" 
                    id={data.id + "-tab"} 
                    tabIndex={data.index} 
                    role="tabpanel">
                        <header className="flow flow--space-small">
                            <h2 className="fs-600 ff-serif uppercase">{data.role}</h2>
                            <p className="fs-700 uppercase ff-serif">{data.name}</p>
                        </header>
                        <p>{data.bio}</p>
                    </article>
                )
            } else { //technology
                return (
                    <article key={data.id} 
                    hidden={(i === 0)?false:true} 
                    className="technology-details flow" 
                    id={data.id + "-tab"} 
                    tabIndex={i} 
                    role="tabpanel">
                        <header className="flow flow--space-small">
                            <h2 className="uppercase fs-400 ff-sans-cond text-accent letter-spacing-3">The terminology...</h2>
                            <h3 className="fs-700 uppercase ff-serif">{data.name}</h3>
                        </header>
                        <p>{data.description}</p>
                    </article>
                )
            }
        })}
    </>)
}
