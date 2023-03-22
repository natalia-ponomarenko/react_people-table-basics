import { FC } from 'react';

export const LoadingError: FC = () => {
  return (
    <p data-cy="peopleLoadingError" className="has-text-danger">
      Something went wrong
    </p>
  );
};
