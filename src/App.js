import React, { useState } from "react";
import SingleColor from "./SingleColor";
import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(
    new Values("#f15025").all(10)
  );
  const [number, setNumber] = useState("");
  const handleChange = (e) => {
    setColor(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let num = parseInt(number);
      let colors = new Values(color).all(num);
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }

    setColor("");
    setNumber("");
  };
  return (
    <>
      <section className='color-picker'>
        <form
          className='form'
          onSubmit={handleSubmit}
        >
          <label htmlFor='picker'>
            Color Generator
          </label>
          <input
            type='text'
            name='picker'
            id='picker'
            value={color}
            onChange={handleChange}
            className={`${
              error ? "error" : null
            }`}
          ></input>

          <label htmlFor='picker2'>
            Number of Colors
          </label>
          <input
            type='text'
            name='picker'
            id='picker'
            value={number}
            onChange={(e) =>
              setNumber(e.target.value)
            }
          ></input>
          <button type='submit' className='btn'>
            Submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
