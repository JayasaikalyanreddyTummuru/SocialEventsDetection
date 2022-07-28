import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from '../Modal';
import styled from 'styled-components'
const Div = styled.div`
    display : flex;
    align-items : center;
    flex-direction : column;
    justify-content : center;
    margin-top : 2%;
`;
const Styles = styled.div`
  padding: 1rem;
  table {
    width : 70vw;
    border-radius: 12px;
    box-shadow: -8px -8px 8px #fff,8px 8px 8px #cbced1;
    border: 1px solid #EBEBED;
    tr {
      :last-child {
        td {
          border-bottom: 0;/
        }
      }
    }
    button {
        cursor: pointer;
        width: 100%;
        border-radius: 5px;
        font-weight: 700;
        font-family: 'Lato', sans-serif;
        color: #fff;
        text-align: center;
        background-color: #448a96;
        transition: all 0.5s;
        &:hover {
            background-color: #337180;
          }
        &:active {
            background-color: #88ef9e;
        }
    }
    th{
        background-color : #EBEBED;
        border-radius : 25px;
    },
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 2px solid #EBEBED;
      border-right: 2px solid #EBEBED;
      :last-child {
        border-right: 0;
      }
    }
  }
`;
function Event() {
  const [modalOpen, setModalOpen] = useState(false);
  const [index, setindex] = useState(-1);
  const [locations, setlocations] = useState([]);
  const [categories, setCategories] = useState(['Consert', 'Sports', 'CareerFair', 'Conference', 'Parties', 'Gettogether', 'Movie', 'Contest', 'Festival']);
  const [qlocation, setqlocation] = useState();
  const [qcategory, setqcategory] = useState();
  const [qcid, setqcid] = useState();
  const [events, setevents] = useState([]);
  useEffect(async () => {
    await axios.post('http://localhost:5000/getlocations', {}).then((response) => {
      console.log('locs', response.data);
      setlocations(response.data.locs);
    })
    await axios.post('http://localhost:5000/getcategories', {}).then((response) => {
      console.log('cats', response.data);
      setCategories(response.data.cats);
    })
    // await axios.post('http://localhost:5000/getevents', {}).then((response) => {
    //   setevents(response.data)
    //   console.log('eves', response.data)
    // })

  }, [])
  const handleSearch = async () => {
    await axios.post('http://localhost:5000/getevents', {}).then((response) => {
      setevents(response.data.eves)
      console.log('eves', response.data)
    })
  }
  return (
    <Div>

      <Div>
        <div>
          <h1> Find the Events near you!! </h1>
          <label>Select Location<label className="text-danger">*</label></label>
          <select aria-label="available" required value={qlocation} onChange={(e) => { setqlocation(e.target.value) }} >
            <option value="Select an option">Select an option</option>
            {locations.map(loc => (
              <option value={loc.id}>{loc.place}</option>
            ))}
          </select>
          <label>Select Category<label className="text-danger">*</label></label>
          <select aria-label="available" required value={qcategory} onChange={(e) => { setqcategory(e.target.value) }} >
            <option value="Select an option">Select an option</option>

            {categories.map(cat => (
              <option value={cat.id}>{cat.category}</option>
            ))}
          </select>
          <button onClick={handleSearch}> Search </button>
        </div>
      </Div>
      {modalOpen && <Modal data={events[index]} setOpenModal={setModalOpen} />}
      <Styles>
        <table>
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Event Location</th>
              <th>Email</th>
              <th> Action </th>
            </tr>
          </thead>
          <tbody>
            {events.map((row, i) => (
              <tr id={row.id}>
                <td>{row.name}</td>
                <td>{qlocation}</td>
                <td>{row.email}</td>
                <td>  <button
                  className="openModalBtn"
                  onClick={() => { setModalOpen(true); setindex(i) }}>
                  Show More
                </button></td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </Styles>
    </Div>
  )
}
export default Event