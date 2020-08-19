import React from 'react';
import { Link } from 'react-router-dom';

export const Event = ({event}) => (
    <article className={"Article Event" + event.categories[0].id}>
        <h2 className="artTitle">{event.title}</h2>
        <p className="artPar">{event.description}</p>
        {/* {
        event.geometries.map((value,index) => {
          return (
            
          );
        })
      } */}
      <br/>
      {
        event.sources.map((value,index) => {
          return (<a target="_blank" href={value.url}>{value.id} <br/></a>
          
          );
        })
      }
        <br/>
    </article>
)

