// Gallerysong.js
import { useState } from 'react'
import { Link } from 'react-router-dom'


function GalleryItem(props) {
    let [view, setView] = useState(false)

    const simpleStyle = {
        'width': '25vw',
        'height': '25vh',
        'border': '1px solid black',
        'margin': '5px'
    }

    const detailStyle = {
        'width': '80vw',
        'height': '50vh',
        'border': '1px solid black',
        'margin': '5px',
        'backgroundColor': 'peru',
        'color': 'white'
    }

    const simpleView = () => {
        return (
            <div style={simpleStyle} >
                <h3>{props.song.trackName}</h3>
                <h4>{props.song.collectionName}</h4>
            </div>
        )
    }


    const detailView = () => {
        return (
            <div>
                <h2>"{props.song.trackName}"</h2>
                <h3>
                    <Link to={`/artist/${props.song.artistId}`} >
                        {props.song.artistName}
                    </Link>
                </h3>
                <h3>
                    <Link to={`/album/${props.song.artistId}`} >
                        {props.song.collectionName}
                    </Link>
                </h3>
            </div>
        )
    }

    return (
        <div onClick={() => setView(!view)}
            style={{ 'display': 'inline-block' }}>

            {view ? detailView() : simpleView()}

        </div>
    )

}
export default GalleryItem