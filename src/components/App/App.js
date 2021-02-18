import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import DinnerSupplies from '../DinnerSupplies/DinnerSupplies';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import GuestForm from '../GuestForm/GuestForm';
import GuestList from '../GuestList/GuestList';
import PartyLeader from '../PartyLeader/PartyLeader';

function App() {
  let [guestList, setGuestList] = useState([]);
  let [newGuestName, setNewGuestName] = useState('');
  let [newGuestMeal, setNewGuestMeal] = useState('false');

  //On load, get guests
  useEffect(() => {
    getGuests()
  }, [])

  const getGuests = () => {
    axios.get('/guests')
      .then(response => {
        setGuestList(response.data)
      })
      .catch(err => {
        alert('error getting guests');
        console.log(err);
      })
  }


  const addGuest = () => {
    axios.post('/guests', { name: newGuestName, kidsMeal: newGuestMeal })
      .then(response => {
        // clear inputs
        setNewGuestName('');
        setNewGuestMeal(false);

        getGuests();
      })
      .catch(err => {
        alert('Error Adding Guest');
        console.log(err);
      })
  }

  const deleteGuest = (event) => {
    // console.log('event', event.target.dataset.id);
    const guestId = event.target.dataset.id;

    axios.delete(`/guests/${guestId}`)
    .then(response => {
      console.log('DELETE in /guests', response);
      getGuests();
    })
    .catch(error => {
      console.log('An error occurred', error);
    })
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    if (newGuestName) {
      addGuest();
    }
    else {
      alert('The new guest needs a name!');
    }
  }

  console.log(newGuestMeal)
  return (
    <div className="App">
      <Header />
      <PartyLeader leader={guestList[0]}/>
      < GuestForm 
        handleSubmit = {handleSubmit}
        newGuestName = {newGuestName}
        newGuestMeal = {newGuestMeal}
        setNewGuestName = {setNewGuestName}
        setNewGuestMeal = {setNewGuestMeal}
      />
      < GuestList guestList = {guestList} 
      deleteGuest = {deleteGuest}/>
      < DinnerSupplies guestList = {guestList} />
      <Footer />
    </div> 
  );
}

export default App;
