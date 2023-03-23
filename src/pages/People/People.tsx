import { FC, useEffect, useState } from 'react';
import { getPeople } from '../../api';
import { EmptyResponseError } from '../../components/EmptyResponseError';
import { Loader } from '../../components/Loader';
import { LoadingError } from '../../components/LoadingError';
import { PeopleTable } from '../../components/PeopleTable';
import { Person } from '../../types/Person';

export const People:FC = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [hasLoadingError, setHasLoadingError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadPeople = async () => {
      setLoading(true);
      setHasLoadingError(false);
      try {
        await getPeople()
          .then(data => setPeople(data));
      } catch {
        setHasLoadingError(true);
      } finally {
        setLoading(false);
      }
    };

    loadPeople();
  }, []);

  return (
    <>
      <h1 className="title">People Page</h1>
      <div className="block">
        <div className="box table-container">
          {loading ? (
            <Loader />
          ) : (
            <PeopleTable
              people={people}
            />
          ) }
          {hasLoadingError && (
            <LoadingError />
          )}
          {(people.length === 0
            && !loading
            && !hasLoadingError) && (
            <EmptyResponseError />
          )}
        </div>
      </div>
    </>
  );
};
