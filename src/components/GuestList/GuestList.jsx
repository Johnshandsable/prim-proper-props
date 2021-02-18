import GuestItem from '../GuestItem/GuestItem';

function GuestList({guestList, deleteGuest}) {
  console.log('GuestList');
  console.log(guestList);
  return (
    <div>
    <h2>Guest List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Kid's Meal</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {guestList.map(guest => (
            <GuestItem
            key={guest.id}
            guest={guest} 
            deleteGuest={deleteGuest}/>
          ))}
        </tbody>
      </table>
      </div>
  )
}

export default GuestList;