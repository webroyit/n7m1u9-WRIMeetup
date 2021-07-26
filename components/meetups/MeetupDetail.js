// 'Fragment' for multiple adjecent jsx elements
//import { Fragment } from 'react';

// 'classes' is a JS object that will be available as properties that guaranteed to be unique
// You can use the same class name on different components and they would not clash with the styles 
import classes from '../../styles/MeetupDetail.module.css';

function MeetupDetail(props) {
    return (
        <section className={classes.detail}>
            <img src={props.images} alt={props.title} />
            <h1>{props.title}</h1>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </section>
    )
}

export default MeetupDetail;
