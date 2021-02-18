function GuestItem({guest, deleteGuest}) {
  console.log('GuestItem() ');

  return (
    <tr key={guest.id}>
      <td>{guest.name}</td>
      <td>{String(guest.kidsMeal)}</td>
      <td>
      <button data-id={guest.id} onClick={deleteGuest}>
        DELETE
      </button>
      </td>
    </tr>
  )
}

export default GuestItem;