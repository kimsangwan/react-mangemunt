import React, { Component } from 'react';

import './App.css';
import Customer from './components/Customer';

const customer = [
  {
    id: 1,
    image: 'https://placeimg.com/64/64/any',
    name: '상완',
    brithday: '921120',
    gender: '남자',
    job: '대학생',
  },
  {
    id: 2,
    image: 'https://placeimg.com/64/64/1',
    name: '르르',
    brithday: '921120',
    gender: '남자',
    job: '대학생',
  },
  {
    id: 3,
    image: 'https://placeimg.com/64/64/115',
    name: 'ㅇㄴㅇㄴ',
    brithday: '921120',
    gender: '남자',
    job: '대학생',
  },
];

class App extends Component {
  render() {
    return (
      <div>
        {customer.map((a) => {
          return (
            <Customer
              id={a.id}
              image={a.image}
              name={a.name}
              brithday={a.brithday}
              gender={a.gender}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
