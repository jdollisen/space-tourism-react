import classes from "../css/spaceSavvy.module.scss"
import { useState, useEffect } from 'react'
import Moment from 'react-moment'

export const SearchResult = () => {
    // Launch Pads Data
    //const [launchPads, setLaunchPads] = useState([]);

    /*const fetchLaunchPadData = () => {
      fetch("http://localhost:8001/launchpads")
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
    */
    // Launches Data
    const [launches, setLaunches] = useState([]);

    const fetchLaunchesData = () => {
      fetch("http://localhost:8001/launches")
        .then(response => {
          return response.json()
        })
        .then(data => {
            setLaunches(data)
        })
    }

    //const filteredYear = [...new Set(launches.map(year => new Date(year.launch_date_local).getFullYear()))];

    useEffect(() => {
        fetchLaunchesData();
    }, []);

    return (
    <div className={classes.results_grid}>
        <p className={classes.total_mission}>Showing {launches.length} missions</p>
        {launches.length > 0 && (launches.map(launch => (
            <div key={launch.flight_number} className={classes.flex}>
                <div><img src="https://spacexpatchlist.space/thumbs/usaf_30sw_f1_001_tacsat_1.png" alt='' /></div>
                <div className={classes.results_details}>
                    <p className={classes.launch_title}>{launch.rocket.rocket_name} - {launch.rocket.rocket_type}</p>
                    <p className={classes.launch_detail}>
                        Launched <Moment date={launch.launch_date_local} format="Do MMMM YYYY" /> at &nbsp;
                        <Moment date={launch.launch_date_local} format="H:mm a" /> from &nbsp;
                        {launch.launch_site.site_name}
                    </p>
                    <p className={classes.launch_buttons}>
                        <button>Reddit Campaign</button>
                        <button>Reddit Launch</button>
                        <button>Reddit Media</button>
                        <button>Press Kit</button>
                        <button>Watch Video</button>
                    </p>
                </div>
                <div className={classes.flight_no}>
                    <label>#{launch.flight_number}</label>
                    <p>Flight Number</p>
                </div>
            </div>
        )))}
    </div>
    )
}