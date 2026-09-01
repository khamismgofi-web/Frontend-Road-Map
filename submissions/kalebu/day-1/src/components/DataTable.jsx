import React, { useState } from 'react';

const mockUsers = [
  {
    id: 1,
    name: 'Kalebu Mgofi',
    email: 'kalebu@example.com',
    role: 'Frontend Lead',
    status: 'Active',
    joined: 'Sep 01, 2026',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Amina Salum',
    email: 'amina.s@example.com',
    role: 'UI Designer',
    status: 'Active',
    joined: 'Aug 28, 2026',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Omari Sengulo',
    email: 'omari.s@example.com',
    role: 'React Engineer',
    status: 'Pending',
    joined: 'Aug 31, 2026',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    name: 'Baraka Juma',
    email: 'baraka.j@example.com',
    role: 'Backend Developer',
    status: 'Active',
    joined: 'Aug 20, 2026',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
  },
  {
    id: 5,
    name: 'Neema Joseph',
    email: 'neema.j@example.com',
    role: 'QA Analyst',
    status: 'Inactive',
    joined: 'Jul 15, 2026',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80',
  },
  {
    id: 6,
    name: 'John Mwangi',
    email: 'john.m@example.com',
    role: 'DevOps Specialist',
    status: 'Active',
    joined: 'Jun 10, 2026',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
  },
];

const DataTable = () => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = mockUsers.filter((user) => {
    const matchesFilter = filter === 'All' || user.status === filter;
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="bg-white rounded-xl border border-slate-200/80 shadow-xs overflow-hidden">
      {/* Table Header & Filters */}
      <div className="p-4 sm:p-6 border-b border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-slate-900">Recent Team Members & Logins</h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Manage authenticated users, roles, and real-time activity status.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {/* Search */}
          <div className="relative flex-1 sm:w-56">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search table..."
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition"
            />
            <svg
              className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Filter pills */}
          <div className="flex items-center bg-slate-100 p-0.5 rounded-lg text-xs font-medium text-slate-600">
            {['All', 'Active', 'Pending', 'Inactive'].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-2.5 py-1 rounded-md transition ${
                  filter === tab
                    ? 'bg-white text-indigo-600 font-semibold shadow-xs'
                    : 'hover:text-slate-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead className="bg-slate-50/75 border-b border-slate-200 text-slate-500 font-semibold uppercase text-[11px] tracking-wider">
            <tr>
              <th className="py-3.5 px-4 sm:px-6">Member</th>
              <th className="py-3.5 px-4">Role</th>
              <th className="py-3.5 px-4">Status</th>
              <th className="py-3.5 px-4">Joined Date</th>
              <th className="py-3.5 px-4 sm:px-6 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6">
                    <div className="flex items-center gap-3">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-9 h-9 rounded-full object-cover border border-slate-200"
                      />
                      <div>
                        <div className="font-semibold text-slate-900">{user.name}</div>
                        <div className="text-xs text-slate-500">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-700">
                      {user.role}
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        user.status === 'Active'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/60'
                          : user.status === 'Pending'
                          ? 'bg-amber-50 text-amber-700 border border-amber-200/60'
                          : 'bg-slate-100 text-slate-600 border border-slate-200/60'
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          user.status === 'Active'
                            ? 'bg-emerald-500'
                            : user.status === 'Pending'
                            ? 'bg-amber-500'
                            : 'bg-slate-400'
                        }`}
                      ></span>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-xs text-slate-500">{user.joined}</td>
                  <td className="py-3.5 px-4 sm:px-6 text-right">
                    <button
                      type="button"
                      className="text-indigo-600 hover:text-indigo-900 font-medium text-xs hover:underline mr-3"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      className="text-slate-400 hover:text-slate-600"
                    >
                      <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-8 text-center text-slate-500 text-sm">
                  No records match your filter criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="p-4 border-t border-slate-200/80 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500">
        <div>
          Showing <span className="font-semibold text-slate-800">{filteredUsers.length}</span> of{' '}
          <span className="font-semibold text-slate-800">{mockUsers.length}</span> members
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            disabled
            className="px-3 py-1.5 border border-slate-200 rounded-md bg-white text-slate-400 cursor-not-allowed text-xs font-medium"
          >
            Previous
          </button>
          <button
            type="button"
            className="px-3 py-1.5 border border-slate-200 rounded-md bg-white text-slate-700 hover:bg-slate-50 text-xs font-medium shadow-xs"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
