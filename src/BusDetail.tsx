import './BusDetail.css';
import { Icon } from "@blueprintjs/core";
import Pill from './Pill';
import DetailRow from './DetailRow';
import EnergyDot from './EnergyDot';

interface Props {
  busId: string,
  voltage: number,
  owner: string,
  latitude: number,
  longitude: number,
  busName: string,
  mwEnergy: number,
  mwCapacity: number,
  allocatedCost: number,
  totalCost: number,
  numberConstraints: number,
};

const formattedCost = (cost: number): string => {
  let result = '';
  if (cost > 1000000) {
    result = `${(cost / 1000000).toFixed(1)}M`;
  } else if (cost > 1000) {
    result = `${(cost / 1000).toFixed(1)}K`;
  } else {
    result = cost.toString();
  }

  return '$' + result;
};

const formattedConstraints = (constraints: number): string => {
  let result = constraints === 1 ? ' constraint' : ' constraints';
  return constraints.toString() + result;
}

function BusDetail({busId, voltage, owner, latitude, longitude, busName, mwEnergy, mwCapacity, allocatedCost, totalCost, numberConstraints}: Props) {
  return (
    <div className='BusDetail'>
      <div className='BusDetail-row'>
        <EnergyDot energy={mwEnergy} />
        <div className='BusDetail-title'>{busName}</div>
        <Icon icon='small-cross' size={25} color='gray'/>
      </div>
      <div className='BusDetail-row BusDetail-pill-row'>
        <Pill backgroundColor='#2D72D2' text={`${mwEnergy} MWE`} />
        <Pill backgroundColor='#5F6B7C' text={`${mwCapacity} MWC`} />
      </div>
      <div className='BusDetail-section'>
        <div className='BusDetail-sub-heading'>Triggered constraints</div>
        <DetailRow label='Allocated cost' value={formattedCost(allocatedCost)} />
        <DetailRow label='Total cost' value={formattedCost(totalCost)} />
        <DetailRow label='Number of constraints' value={formattedConstraints(numberConstraints)} />
      </div>
      <div className='BusDetail-section'>
        <div className='BusDetail-sub-heading'>Bus details</div>
        <DetailRow label='Bus ID' value={busId} />
        <DetailRow label='Voltage' value={voltage.toString()} />
        <DetailRow label='Owner' value={owner} />
        <DetailRow label='Coordinates' value={`(${latitude}, ${longitude})`} />
      </div>
    </div>
  );
}

export default BusDetail;