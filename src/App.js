import './App.css';
 
import { useState, useEffect } from 'react';
 
const Table = () => {
  const [rows, setRows] = useState([[0, 0]]);
 
  return (
    <>
    <table >
      <thead>
        <tr>
          <th>First</th>
          <th>Second</th>
          <th>Sum</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => {
          return (
            <Row rows= {rows} row={row} setRows={setRows} i = {i}/>
          )
        })}
        <tr>
          <td>{rows.map((row) => row[0]).reduce((a, b) => a + b, 0)}</td>
          <td>{rows.map((row) => row[1]).reduce((a, b) => a + b, 0)}</td>
          <td>
            {rows.map((row) => row[0] + row[1]).reduce((a, b) => a + b, 0)}
          </td>
        </tr>
      </tbody>
    </table>
    <button
      onClick={() => {
        setRows([...rows, [0, 0]]);
      }}
    >
    Add rows
    </button>
    </>
  );
};
 
const Row = ({
  rows,
  row,
  setRows,
  i,
}) => {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  
  useEffect(()=>{
    const newrow = [...rows];
    newrow[i][0] = first;
    newrow[i][1] = second;
    setRows(newrow);
    console.log(rows[i]);
    },[first, second])
 
  return (
    <tr>
      <td>
        <input
          type="number"
          onChange={(e) => {
            setFirst(Number(e.target.value));
          }}
        />{' '}
      </td>
      <td>
         <input
          type="number"
          onChange={(e) => {
            setSecond(Number(e.target.value));
          }}
        />
      </td>
      <td>{first + second}</td>
    </tr>
  );
};
 
export default function App() {
  return (
    <main>
      <Table />
    </main>
  );
}