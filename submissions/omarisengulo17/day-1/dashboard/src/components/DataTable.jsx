const users = [
  {
    name: 'Ominja',
    email: 'ominja@example.com',
    status: 'Active',
  },
  {
    name: 'Sarah',
    email: 'sarah@example.com',
    status: 'Active',
  },
  {
    name: 'Peter',
    email: 'peter@example.com',
    status: 'Inactive',
  },
]
function DataTable() {
  return (
    <div className="overflow-x-auto rounded-lg bg-white shadow">
  <table className="w-full">
    <thead className="bg-gray-50">
      <tr>
        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
  Name</th>
        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
  Email</th>
        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
            Status</th>
      </tr>
    </thead>

    <tbody className="divide-y">
  {users.map((user) => (
    <tr key={user.email}>
      <td className="px-6 py-4 text-sm text-gray-700">
        {user.name}</td>
      <td className="px-6 py-4 text-sm text-gray-700">{user.email}</td>
      <td className="px-6 py-4 text-sm">
  <span
  className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
    user.status === 'Active'
      ? 'bg-green-100 text-green-700'
      : 'bg-red-100 text-red-700'
  }`}
>
    {user.status}
  </span>
</td>
    </tr>
  ))}
</tbody>
  </table>

</div>
  )
}

export default DataTable