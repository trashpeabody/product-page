import './styles/Filter.css'

const Filter = ({ isHover }) => {
  return (
    <div className={isHover ? 'white-filter hover' : 'white-filter'} />
  )
}

export default Filter
