import * as React from 'react';
import { Card, ICardProps }  from './card';

export type ICardListProps = {
  cards: ICardProps[]
}

export function CardList(props: ICardListProps) {
  return <ul>
    {props.cards.map((card, index) => {
      return <Card 
                key={index}
                image={card.image} 
                name={card.name} 
                description={card.description}
                url={card.url} />;
    })}
  </ul>;
}  