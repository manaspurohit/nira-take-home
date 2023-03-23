import './DetailRow.css'

interface Props {
  label: string,
  value: string,
}

function DetailRow({label, value}: Props) {
  return (
    <div className='DetailRow'>
      <div className='DetailRow-label'>{label}</div>
      <div className='DetailRow-value'>{value}</div>
    </div>
  )
}

export default DetailRow;