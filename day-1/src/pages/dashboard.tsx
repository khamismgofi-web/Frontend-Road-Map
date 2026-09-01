const Dashboard = () => {
    return (
        <div className="pt-5 px-4">
            <h2 className="text-2xl font-bold pb-2" >Welcome to Dekio</h2>
            <div>
                <table>
                    <thead>
                        <tr className="border border-gray-950 px-4 py-2">
                            <th className="border border-gray-950 px-4 py-2">No</th>
                            <th className="border border-gray-950 px-4 py-2">FullName</th>
                            <th className="border border-gray-950 px-4 py-2">Email</th>
                            <th className="border border-gray-950 px-4 py-2">Age</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="border border-gray-950 px-4 py-2">
                            <td className="border border-gray-950 px-4 py-2">1</td>
                            <td className="border border-gray-950 px-4 py-2">John Doe</td>
                            <td className="border border-gray-950 px-4 py-2">john.doe@example.com</td>
                            <td className="border border-gray-950 px-4 py-2">30</td>
                        </tr>
                        <tr className="border border-gray-950 px-4 py-2">
                            <td className="border border-gray-950 px-4 py-2">2</td>
                            <td className="border border-gray-950 px-4 py-2">Jane Smith</td>
                            <td className="border border-gray-950 px-4 py-2">jane.smith@example.com</td>
                            <td className="border border-gray-950 px-4 py-2">25</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dashboard;