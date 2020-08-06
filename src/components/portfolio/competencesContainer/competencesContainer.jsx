import CompetenceCard from '../competenceCard/competenceCard'
import React  from "react";
import styles from './competencesContainer.module.css';
import VizSensor from 'react-visibility-sensor';


function CompetenceContainer(props) {

    return (
      <VizSensor partialVisibility minTopValue={-300} onChange={props.onChange} >
      <section className={styles.centered} id={props.title} ref={props.getRef}>
        <h1 className={styles.heading1} >{props.title}</h1>
        <div className={styles.gridCompetences}>
          {props.competences.map((res, index) => (
            <CompetenceCard competences={res} key={index} />
          ))}
        </div>
      </section>
      </VizSensor>
    );
}


export default CompetenceContainer;
