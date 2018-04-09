import React from 'react';

export const activeTeam = (goals, email) => {
  const emailArr = goals.reduce((arr, goal) => {
    const email = goal.email;
    arr.push(email);
    return arr;
  }, []);

  const emailSet = new Set(emailArr);
  const size = emailSet.size;
  return (
    <ul style={{ listStyle: 'none', marginLeft: '-25px' }}>
      <span style={{ marginRight: 4 }}>Active Team Members:</span>
      {[...emailSet].map((item, i) => (
        <li
          style={{ display: 'inline' }}
          key={item + Math.floor(Math.random() * 10000)}
        >
          {item === email && (
            <span
              style={{
                marginRight: 3,
                marginBottom: 5,
                color: '#FF4100',
                border: '1px solid #FF4100',
                padding: '0 3px 0 3px',
                textTransform: 'uppercase'
              }}
            >
              {item.split('@')[0] + ' '}
            </span>
          )}
          {item &&
            item !== email && (
              <span
                style={{
                  marginRight: 3,
                  marginBottom: 5,
                  color: '#001272',
                  textTransform: 'uppercase'
                }}
              >
                {i + 1 < size
                  ? item.split('@')[0] + ', '
                  : item.split('@')[0] + ' '}
              </span>
            )}
        </li>
      ))}
    </ul>
  );
};
