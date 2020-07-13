import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Bounty from './Bounty';
import AddBountyForm from './AddBountyForm';

function App() {
  const [bounties, setBounties] = useState([])

  function getBounties() {
    axios.get("/bounty")
    .then(res => setBounties(res.data))
    .catch(err => console.log(err))
  }

  function addBounty(newBounty) {
    axios.post("/bounty", newBounty)
      .then(res => {
        setBounties(prevBounties => [res.data, ...prevBounties])
      })
      .catch(err => console.log(err))
  }

  function deleteBounty(bountyId) {
    axios.delete(`/bounty/${bountyId}`)
      .then(res => {
        setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
      })
      .catch(err => console.log(err))
  }

  function editBounty(updates, bountyId) {
    axios.put(`/bounty/${bountyId}`, updates)
      .then(res => {
        setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
      })
      .catch(err => console.log(err))
  }

  function changeStatus(newBounty, bountyId) {
    console.log(newBounty)
    axios.put(`/bounty/${bountyId}`, newBounty)
      .then(res => {
        setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : newBounty))
      }, getBounties())
      .catch(err => console.log(err))
  }

useEffect(() => {
  getBounties()
}, [])

  return (
    <div className="bountyContainer">
      <img className="toystory" src="https://tse3.mm.bing.net/th?id=OIP.w5g4tz4Xn6qWPSNIiN4o2gHaFa&pid=Api&P=0&w=211&h=155" alt="toy story"/>
      <h1 id="name">BOUNTIES</h1>
      <img className="toys" src="https://tse2.mm.bing.net/th?id=OIP.MmQRUip5AhOWuUF51C34dAHaEK&pid=Api&P=0&w=278&h=157" alt="toy story"/>
      <AddBountyForm 
        submit={addBounty}
        buttonText="Add Bounty" />
      {bounties.map(bounty => 
        <Bounty {...bounty} 
          bounty={bounty}
          key={bounty._id}
          deleteBounty={deleteBounty}
          editBounty={editBounty}
          changeStatus={changeStatus} />)}
    </div>
  );
}

export default App;