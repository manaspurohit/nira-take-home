import BusDetail from './BusDetail';
import './App.css';

const data = {
  bus_id: "25518",
  voltage: 138,
  owner: "Northern Indiana Public Service Co LLC",
  latitude: 41.494,
  longitude: -87.026,
  bus_name: "Flint Lake - 138 kV",
  mw_energy: 70,
  mw_capacity: 70,
  allocated_cost: 9780000,
  total_cost: 63720000,
  number_constraints: 4,
};

function App() {
  const {
    bus_id: busId,
    voltage,
    owner,
    latitude,
    longitude,
    bus_name: busName,
    mw_energy: mwEnergy,
    mw_capacity: mwCapacity,
    allocated_cost: allocatedCost,
    total_cost: totalCost,
    number_constraints: numberConstraints
  } = data;

  return (
    <div className='App'>
     <BusDetail 
        busId={busId} 
        voltage={voltage} 
        owner={owner} 
        latitude={latitude} 
        longitude={longitude} 
        busName={busName} 
        mwEnergy={mwEnergy}
        mwCapacity={mwCapacity}
        allocatedCost={allocatedCost}
        totalCost={totalCost}
        numberConstraints={numberConstraints}
      />
    </div>
  );
}

export default App;
