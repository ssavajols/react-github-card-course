import * as React from 'react';
import './card.css';

export type ICardProps = {
  image: string;
  name: string;
  description: string;
  url: string;
}

export function Card(props: ICardProps) {
  return <div className='card' style={{width: '200px'}}>
      <img className="card-img-top" src={props.image} alt={props.name} />
      <div className="card-body">
        <h2 className="card-title">{props.name}</h2>
        <p className="card-text">{props.description}</p>
        <a href={props.url} className="btn btn-primary">See it on github</a>
      </div>
    </div>;
} 