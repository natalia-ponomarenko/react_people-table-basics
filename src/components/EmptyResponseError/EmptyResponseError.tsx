import { FC } from 'react';

export const EmptyResponseError: FC = () => {
  return (
    <p data-cy="noPeopleMessage">
      There are no people on the server
    </p>
  );
};
