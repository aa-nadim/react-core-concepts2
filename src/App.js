import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      {/* <Counter /> */}
      <ExternalUsers />
    </div>
  );
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p>
      {users.map((user) => (
        <User name={user.name} email={user.email} />
      ))}
    </div>
  );
}

function User(props) {
  //console.log(props);
  return (
    <div style={{ border: '2px solid red', margin: '20px' }}>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => increaseCount()}>Increase</button>
      <button onClick={() => decreaseCount()}>Decrease</button>
    </div>
  );
}

//  const products = [
//    { name: 'laptop', price: 15000 },
//    { name: 'phone', price: 930000 },
//    { name: 'watch', price: 980000 },
//    { name: 'tablet', price: 30000 },
//  ];
// {products.map((product) => (
//         <Product name={product.name} price={product.price} />
//       ))}

//       <Product name='laptop' price='80000' />
//       <Product name='phone' price='75000' />
//       <Product name='watch' price='3500' />

function Product(props) {
  return (
    <div className='product'>
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price} </p>
    </div>
  );
}

export default App;
