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

function BusDetail({busId, voltage, owner, latitude, longitude, busName, mwEnergy, mwCapacity, allocatedCost, totalCost, numberConstraints}: Props) {
  return (
    <div className='BusDetail'>
      <div className='header'>
        <div className='header-left'>
          <EnergyDot energy={mwEnergy} />
          <div className='title'>{busName}</div>
        </div>
        <Icon icon='small-cross' size={25} color='gray'/>
      </div>
      <div className='pill-row'>
        <Pill backgroundColor='#2D72D2' text={`${mwEnergy} MWE`} />
        <Pill backgroundColor='#5F6B7C' text={`${mwCapacity} MWC`} />
      </div>
      <div className='section'>
        <div className='sub-heading'>Triggered constraints</div>
        <DetailRow label='Allocated cost' value={formattedCost(allocatedCost)} />
        <DetailRow label='Total cost' value={formattedCost(totalCost)} />
        <DetailRow label='Number of constraints' value={`${numberConstraints} constraints`} />
      </div>
      <div className='section'>
        <div className='sub-heading'>Bus details</div>
        <DetailRow label='Bus ID' value={busId} />
        <DetailRow label='Voltage' value={voltage.toString()} />
        <DetailRow label='Owner' value={owner} />
        <DetailRow label='Coordinates' value={`(${latitude}, ${longitude})`} />
      </div>
    </div>
  );
}

export default BusDetail;