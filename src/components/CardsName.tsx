import './style.scss';

interface CardProps {
  name: string;
}

export default function CardsName({ name }: CardProps) {
  return (
    <div className="card card-style">
      <h5 className="card-title text-uppercase">{name}</h5>
    </div>
  );
}