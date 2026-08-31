import TopBar from './components/TopBar'
import StatCard from './components/StatCard'
import DataTable from './components/DataTable'

function App() {
  return (
    <div  className="p-6 space-y-6">
      <TopBar />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard
          title="Total Users"
          value="1,248"
        />

        <StatCard
          title="Revenue"
          value="$24,580"
        />

        <StatCard
          title="Active Sessions"
          value="342"
        />
      </div>
      <DataTable />
    </div>
  )
}

export default App