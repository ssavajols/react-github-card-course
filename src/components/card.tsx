import * as React from 'react';
import './card.css';

export type ICardProps = {
  image: string;
  name: string;
  description: string;
}

export function Card(props: ICardProps) {
  return <div className='card' style={{width: '150px'}}>
      <img className="card-img-top" src={props.image} alt={props.name} />
      <div className="card-body">
        <div className="card-title">{props.name}</div>
        <div className="card-text">{props.description}</div>
      </div>
    </div>;
} 