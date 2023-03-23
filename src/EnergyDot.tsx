interface Props {
  energy: number
}

function EnergyDot({ energy }: Props) {
  let color = '';

  // assumption: energy is a non-negative number
  if (energy >= 0 && energy < 20) { // assumption: 0-20 --> [0, 20)
    color = 'red';
  } else if (energy >= 20 && energy < 100) { // assumption: 20-100 --> [20, 100)
    color = 'orange';
  } else if (energy >= 100) { // assumption: 100+ --> [100, infinity)
    color = 'green';
  }

  const circleStyle =  {
    width: '10px',
    height: '10px',
    borderWidth: '6px',
    borderStyle: 'solid',
    borderColor: color,
    borderRadius: '50%',
  };

  return (
    <div style={circleStyle}></div>
  );
}

export default EnergyDot;