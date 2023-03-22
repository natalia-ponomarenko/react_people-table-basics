import classnames from 'classnames';
import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Person } from '../../types';

type Props = {
  people: Person[],
};

export const PeopleTable: FC<Props> = ({ people }) => {
  const { personSlug } = useParams();

  return (
    <table
      data-cy="peopleTable"
      className="table is-striped is-hoverable is-narrow is-fullwidth"
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Sex</th>
          <th>Born</th>
          <th>Died</th>
          <th>Mother</th>
          <th>Father</th>
        </tr>
      </thead>

      <tbody>
        {people.map(({
          name,
          sex,
          born,
          died,
          fatherName,
          motherName,
          slug,
        }) => {
          const mother = people.find(
            (mom) => motherName === mom.name,
          );
          const father = people.find(
            (dad) => fatherName === dad.name,
          );

          return (
            <tr
              data-cy="person"
              key={name}
              className={classnames({
                'has-background-warning': personSlug === slug,
              })}
            >
              <td>
                <Link
                  to={`/people/${slug}`}
                  className={classnames(
                    { 'has-text-danger': sex === 'f' },
                  )}
                >
                  {name}
                </Link>
              </td>

              <td>{sex}</td>
              <td>{born}</td>
              <td>{died}</td>
              <td>
                {mother?.slug ? (
                  <Link
                    to={`/people/${mother?.slug}`}
                    className="has-text-danger"
                  >
                    {motherName}
                  </Link>
                ) : (
                  motherName || '-'
                )}
              </td>
              <td>
                {father?.slug ? (
                  <Link
                    to={`/people/${father?.slug}`}
                  >
                    {fatherName}
                  </Link>
                ) : (
                  fatherName || '-'
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
