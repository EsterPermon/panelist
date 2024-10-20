import { MouseEvent } from 'react';
import './styles.css';

type EventType = MouseEvent<HTMLButtonElement>;
type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface IconButtonProps {
  icon: IconType;
  onClick: (event: EventType) => void;
  label?: string;
}

const IconButton = (props: IconButtonProps) => {
  const Icon = props.icon;
  return (
    <button onClick={props.onClick} className="button-container">
      <Icon />
      <span className="button-label">{props.label}</span>
    </button>
  );
};

export default IconButton;
