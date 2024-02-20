const Listitem = ({ id, item, quantity, price, onDelete }) => {
  const deleteItem = () => {
    onDelete(id);
  };
  return (
    <div className="grid grid-cols-4">
      <p>{item}</p>
      <p>Quantity : {quantity}</p>
      <p>Price : ${quantity * price}</p>
      <button
        className="bg-red-500 text-white py-1 w-20 rounded-sm"
        onClick={deleteItem}
      >
        Delete
      </button>
    </div>
  );
};

export default Listitem;
