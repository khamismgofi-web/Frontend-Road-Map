function StatCard({title,value}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
  <h2>{title}</h2>
  <p>{value}</p>
</div>
    
  )
}

export default StatCard