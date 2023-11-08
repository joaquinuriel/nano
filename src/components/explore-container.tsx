import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

export function ExploreContainer({ name }: ContainerProps): JSX.Element {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>
        Explore{' '}
        <a
          href="https://ionicframework.com/docs/components"
          rel="noopener noreferrer"
          target="_blank"
        >
          UI Components
        </a>
      </p>
    </div>
  );
}
