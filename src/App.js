import './App.css';
import Header from './components/Header';
import { v4 } from 'uuid';
import Listitem from './components/Listitem';
import Itemform from './components/Itemform';
import { useState } from 'react';
import { jsPDF } from 'jspdf'

const listItems = [
  {
    id: v4(),
    item: 'Bags',
    quantity: 2,
    price: 10,
  },
  {
    id: v4(),
    item: 'Jeans',
    quantity: 5,
    price: 5,
  }
]

function App() {

  const [items, setItems] = useState([{
    id: v4(),
    item: 'Bags',
    quantity: 2,
    price: 10,
  },
  {
    id: v4(),
    item: 'Jeans',
    quantity: 5,
    price: 5,
  }]);

  function submitHandler(item, quantity, price) {
    setItems(prevItems => ([
      ...prevItems,
      {
        id: v4(),
        item: item,
        quantity: quantity,
        price: price,
      }
    ]))
  }

  const downloadHandler = () => {
    const doc = new jsPDF();
    doc.text('Invoice', 20, 20);
    items.forEach((item, index) => {
      const possY = 30 + index * 30;
      doc.text(`
        Item : ${item.item},
            Quantity : ${item.quantity},
            Price : ${item.price},
            Total Amount : ${item.quantity * item.price}
      `, 20, possY)
    })
    doc.save("Invoice.pdf");
  }

  const DeleteHandler = (itemId) => {
    setItems(prevItems => prevItems.filter(item => item.id !== itemId));
  }
  return (
    <div className='w-[100%] md:w-[50%] flex flex-col px-5 justify-center mx-auto py-10 shadow-md space-y-10'>
      <Header />
      <Itemform onSubmit={submitHandler} />
      <h1 className='text-2xl font-medium'>Item List</h1>
      {
        items.map((item, index) => (
          <Listitem
            id={item.id}
            item={item.item}
            quantity={item.quantity}
            price={item.price}
            onDelete={DeleteHandler}
          />
        ))
      }
      <button className='bg-red-500 text-white py-1 w-20 rounded-sm' onClick={downloadHandler}>
        Download
      </button>
      <h1>Total Amount : {items.reduce((acc, item) => { return acc + (item.price * item.quantity) }, 0)}</h1>
    </div>
  );
}

export default App;
