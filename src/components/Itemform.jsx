import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

const Itemform = (props) => {
  const item = useRef();
  const quantity = useRef();
  const price = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const enteredItem = item.current.value;
    const enteredQuantity = quantity.current.value;
    const enteredPrice = price.current.value;
    if (
      enteredItem.length === 0 ||
      enteredQuantity.length === 0 ||
      enteredPrice.length === 0
    ) {
      toast.error("Please fill the details first!");
      return;
    }
    props.onSubmit(
      enteredItem,
      parseInt(enteredQuantity),
      parseInt(enteredPrice)
    );
  }
  return (
    <>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="item">Item :</label>
          <input
            type="text"
            name="item"
            id="item"
            className="border-[1px] border-black"
            ref={item}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="item">Quantity :</label>
          <input
            type="number"
            name="quantity"
            id="quantity"
            className="border-[1px] border-black"
            ref={quantity}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="item">Price :</label>
          <input
            type="number"
            name="price"
            id="price"
            className="border-[1px] border-black"
            ref={price}
          />
        </div>
        <button className="bg-red-500 text-white py-1 w-20 rounded-sm">
          Add Item
        </button>
      </form>
    </>
  );
};

export default Itemform;
