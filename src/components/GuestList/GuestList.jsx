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
            <tr key={guest.id}>
              <td>{guest.name}</td>
              <td>{String(guest.kidsMeal)}</td>
              <td>
                <button data-id={guest.id} onClick={deleteGuest}>
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
  )
}

export default GuestList;