import SilverWare from '../SilverWare/SilverWare';

function DinnerSupplies({guestList}) {
  console.log('DinnerSupplies() ');
  const count = guestList.length * 2;
  return (
    <div>
      <h2>Dinner Supplies</h2>
      <SilverWare name="Spoons" count={count} />
      <SilverWare name="Forks" count={count} />
      <SilverWare name="Knives" count={count} />
    </div>
    
  )
}

export default DinnerSupplies;