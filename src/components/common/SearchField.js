import classes from "../css/spaceSavvy.module.scss"
import { useState, useEffect } from 'react'
import { Button } from "../ui/Button"
import Moment from 'react-moment'


export const SearchField = (props) => {
    // Launch Pads Data
    const [launchPads, setLaunchPads] = useState([]);
    const fetchLaunchPadData = () => {
    // uncomment if working in local
    //fetch("http://localhost:8001/launchpads")

    //for github deployment use
    fetch("https://jdollisen.github.io/data/launchpads.json")
        .then(response => {
          return response.json()
        })
        .then(data => {
            setLaunchPads(data)
        })
    }

    useEffect(() => {
        fetchLaunchPadData()
      }, [])

    // Launches Data
    const [launches, setLaunches] = useState([]);
    const fetchLaunchesData = () => {
    // uncomment if working in local
    //fetch("http://localhost:8001/launches")

    //for github deployment use
      fetch("https://jdollisen.github.io/data/launches.json")
        .then(response => {
          return response.json()
        })
        .then(data => {
            setLaunches(data)
        })
    }

    const filteredYear = [...new Set(launches.map(year => new Date(year.launch_date_local).getFullYear()))];
    const [searchFieldValues, setSearchFieldValues] = useState({
        keyword: '',
        launchPad: '',
        minYear: '',
        maxYear: '',
        id: ''
    });


    const handleSelectYear = (field, value) => {
        //update the id value state
        setSearchFieldValues((prevState) => {
            return { ...prevState, id: field };
        });

        if (field === 'minYear') {
            (value === '') ?
                setSearchFieldValues((prevState) => {
                    return { ...prevState, minYear: filteredYear[0] };
                }) :
                setSearchFieldValues((prevState) => {
                    return { ...prevState, minYear: value };
                });
        } else {
            (value === '') ?
                setSearchFieldValues((prevState) => {
                    return { ...prevState, maxYear: filteredYear[filteredYear.length - 1] };
                }) :
                setSearchFieldValues((prevState) => {
                    return { ...prevState, maxYear: value };
                });
        }
    }

    const handleKeywordSearch = (val) => {
        setSearchFieldValues((prevState) => {
            return {
                ...prevState,
                keyword: val,
                id: 'keyword'
            };
        })
    }

    const handleLaunchPadSearch = (val) => {
        setSearchFieldValues((prevState) => {
            return {
                ...prevState,
                launchPad: val,
                id: 'launchPad'
            };
        })
    }

    const handleAllSearch = () => {
        setSearchFieldValues((prevState) => {
            return {
                ...prevState,
                id: 'applyAll'
            };
        })

        if (searchFieldValues.minYear > searchFieldValues.maxYear) {

            const errorData = {
                value: true,
                message: 'Minimum year cannot be greater than maximum year.',
            };
            props.errorMessage(errorData);
        }
    }

    const addDefaultImage = (e) => {
        e.target.src = 'https://dummyimage.com/81.57x79.94/CCC/FFF';
    }

    const filteredLaunches = launches.filter(value => {
        const payload_id = value.payloads.map(payload => payload.payload_id.toLowerCase());

        if (searchFieldValues.keyword === "" && 
            searchFieldValues.launchPad === "" && 
            searchFieldValues.minYear === "" && 
            searchFieldValues.maxYear === "") {
            return value;
        } else if (searchFieldValues.id === 'keyword' &&
            (value.flight_number.toString() === searchFieldValues.keyword ||
                value.rocket.rocket_name.toLowerCase().includes(searchFieldValues.keyword.toLowerCase()) ||
                payload_id.toString().includes(searchFieldValues.keyword.toLowerCase()))
        ) {
            return value;
        } else if (searchFieldValues.id === 'launchPad' &&
            value.launch_site.site_id.includes(searchFieldValues.launchPad)
        ) {
            return value;
        } else if (searchFieldValues.id === 'minYear' &&
            new Date(value.launch_date_local).getFullYear() >= searchFieldValues.minYear
        ) {
            return value;
        }  else if (searchFieldValues.id === 'maxYear' &&
            new Date(value.launch_date_local).getFullYear() <= searchFieldValues.maxYear
        ) {
            return value;
        } else if (searchFieldValues.id === 'applyAll' &&
            (value.flight_number.toString() === searchFieldValues.keyword ||
            value.rocket.rocket_name.toLowerCase().includes(searchFieldValues.keyword.toLowerCase()) ||
            payload_id.includes(searchFieldValues.keyword.toLowerCase()))
                &&
            value.launch_site.site_id.includes(searchFieldValues.launchPad)
                &&
            ((new Date(value.launch_date_local).getFullYear() >= searchFieldValues.minYear) &&
            (new Date(value.launch_date_local).getFullYear() <= searchFieldValues.maxYear))
        ) {
            return value;
        }

        return null;
    });

    useEffect(() => {
        fetchLaunchesData();
    }, []);

    return (<>
        <ul className="flex">
            <li>
              <label htmlFor="keyword">Keyword</label>
              <input id="keyword" type="text" placeholder="eg Falcon"
                onChange={(e) => {
                    handleKeywordSearch(e.target.value);
                }}
                value={searchFieldValues.keyword} />
            </li>
            <li>
              <label htmlFor="launchPad">Launch Pad</label>
              <select data-testid="launchPad" id="launchPad" onChange={(e) => {
                    handleLaunchPadSearch(e.target.value);
                }}>
                <option value="">Any</option>
                {launchPads.length > 0 && (
                    launchPads.map(launchPad => (
                        <option key={launchPad.id} value={launchPad.id}>{launchPad.full_name}</option>
                    ))
                )}
              </select>
            </li>
            <li>
              <label>Min Year</label>
              <select onChange={(e) => handleSelectYear('minYear', e.target.value)}>
                <option value="">Any</option>
                {
                filteredYear.map((year, i) => <option key={i} value={year}>{year}</option>)
                }
              </select>
            </li>
            <li>
              <label>Max Year</label>
              <select onChange={(e) => handleSelectYear('maxYear', e.target.value)}>
                <option value="">Any</option>
                {
                filteredYear.map((year, i) => <option key={i} value={year}>{year}</option>)
                }
              </select>
            </li>
            <li>
              <span>&nbsp;</span>
              <Button type="button" onClick={handleAllSearch}>Apply</Button>
            </li>
        </ul>
        <div className={classes.results_grid}>
            <p className={classes.total_mission}>Showing {filteredLaunches.length} Mission{filteredLaunches.length > 1 && 's'}</p>

            {launches.length > 0 && (filteredLaunches.map((launch, i) => (
                <div key={launch.flight_number} className={classes.flex}>
                        {((typeof launch.links.mission_patch !== 'undefined') && (launch.links.mission_patch !== null)) &&
                            <img onError={addDefaultImage} src={launch.links.mission_patch} alt='' />}
                    
                    <div className={classes.results_details}>
                        <p className={classes.launch_title}>{launch.rocket.rocket_name} -&nbsp;
                            {launch.payloads.map(
                                (payload, i) => (
                                    <span key={i}>{(i > 0 && ',')} {payload.payload_id}</span>
                                )
                            )}
                            {((typeof launch.launch_success !== 'undefined') && (launch.launch_success === false)) &&
                                <span className={classes.failed}>Failed Mission</span>
                            }
                        </p>
                        <p className={classes.launch_detail}>
                            Launched <b key={classes.date}><Moment date={launch.launch_date_local} format="Do MMMM YYYY" /></b> at &nbsp;
                            <b key={classes.hour}><Moment date={launch.launch_date_local} format="H:mm a" /></b> from&nbsp;
                            {launchPads.map(
                                (launchPad, i) => (
                                    (launch.launch_site.site_id === launchPad.id) &&
                                    <b key={classes.launch_site+i}>{launchPad.full_name}</b>
                                )
                            )}
                        </p>
                        <p className={classes.launch_buttons}>
                            {((typeof launch.links.reddit_campaign !== 'undefined') && (launch.links.reddit_campaign !== null)) && <a href={launch.links.reddit_campaign} target="_blank" rel="noopener noreferrer">Reddit Campaign</a>}
                            {((typeof launch.links.reddit_launch !== 'undefined') && (launch.links.reddit_launch !== null)) && <a href={launch.links.reddit_launch} target="_blank" rel="noopener noreferrer">Reddit Launch</a>}
                            {((typeof launch.links.reddit_media !== 'undefined') && (launch.links.reddit_media !== null)) && <a href={launch.links.reddit_media} target="_blank" rel="noopener noreferrer">Reddit Media</a>}
                            {((typeof launch.links.presskit !== 'undefined') && (launch.links.presskit !== null)) &&<a href={launch.links.presskit} target="_blank" rel="noopener noreferrer">Press Kit</a>}
                            {((typeof launch.links.article_link !== 'undefined') && (launch.links.article_link !== null)) && <a href={launch.links.article_link} target="_blank" rel="noopener noreferrer">Article Link</a>}
                            {((typeof launch.links.video_link !== 'undefined') && (launch.links.video_link !== null)) && <a href={launch.links.video_link} target="_blank" rel="noopener noreferrer">Watch Video</a>}
                        </p>
                    </div>
                    <div className={classes.flight_no}>
                        <label>#{launch.flight_number}</label>
                        <p>Flight Number</p>
                    </div>
                </div>
            )))}
        </div>
    </>
    )
}