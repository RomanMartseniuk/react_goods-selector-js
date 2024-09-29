import { useState } from 'react';
import cn from 'classnames';

import 'bulma/css/bulma.css';
import './App.scss';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selected, setSelected] = useState('Jam');

  return (
    <main className="section container">
      {!(selected === '') ? (
        <h1 className="title is-flex is-align-items-center">
          {selected} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelected('')}
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}
      <h1 className="title is-flex is-align-items-center">
        <button
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
          onClick={() => setSelected('')}
        />
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isEqual = good === selected;

            return (
              <tr
                data-cy="Good"
                key={good}
                className={cn({
                  'has-background-success-light': isEqual,
                })}
              >
                <td>
                  <button
                    data-cy={!isEqual ? 'AddButton' : 'RemoveButton'}
                    type="button"
                    className={cn('button', { 'is-info': isEqual })}
                    onClick={() => {
                      if (isEqual) {
                        setSelected('');
                      } else {
                        setSelected(good);
                      }
                    }}
                  >
                    {isEqual ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            );
          })}

          {/* {goods.map(good => (
            <tr data-cy="Good" key={good}>
              <td>
                <button
                  data-cy="AddButton"
                  type="button"
                  className="button"
                  onClick={() => setSelected(good)}
                >
                  +
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))} */}

          {/* <tr data-cy="Good" className="has-background-success-light">
            <td>
              <button
                data-cy="RemoveButton"
                type="button"
                className="button is-info"
              >
                -
              </button>
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              Jam
            </td>
          </tr> */}
        </tbody>
      </table>
    </main>
  );
};
