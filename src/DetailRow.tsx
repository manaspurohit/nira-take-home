import './BusDetail.css';

interface Props {
  label: string,
  value: string,
}

function DetailRow({label, value}: Props) {
  return (
    <div className='row'>
      <div className='label'>{label}</div>
      <div className='value'>{value}</div>
    </div>
  )
}

export default DetailRow;