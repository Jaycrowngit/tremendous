import React, { useState, useEffect } from 'react';

export const AdminPage = () => {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    // Load data from localStorage
    const data = JSON.parse(localStorage.getItem('tremendous_volunteers') || '[]');
    // Sort by newest first
    setVolunteers(data.sort((a, b) => new Date(b.date) - new Date(a.date)));
  }, []);

  const clearData = () => {
    if (window.confirm('Are you sure you want to delete ALL volunteer records? This cannot be undone.')) {
      localStorage.removeItem('tremendous_volunteers');
      setVolunteers([]);
    }
  };

  const deleteRecord = (id) => {
    if (window.confirm('Delete this record?')) {
      const updated = volunteers.filter(v => v.id !== id);
      localStorage.setItem('tremendous_volunteers', JSON.stringify(updated));
      setVolunteers(updated);
    }
  };

  const exportToCSV = () => {
    if (volunteers.length === 0) return alert("No data to export");
    const headers = ["Date", "Name", "Phone", "Department"];
    const csvRows = [];
    csvRows.push(headers.join(','));
    
    volunteers.forEach(v => {
      const dateStr = new Date(v.date).toLocaleString().replace(/,/g, '');
      const row = [dateStr, `"${v.name}"`, `"${v.phone}"`, v.department];
      csvRows.push(row.join(','));
    });

    const blob = new Blob([csvRows.join('\n')], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', 'volunteers.csv');
    a.click();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-serif font-bold text-navy-900">Admin Dashboard</h1>
            <p className="text-gray-500 mt-1">Manage local volunteer registrations ({volunteers.length} total)</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button onClick={() => window.location.href = '/'} className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition">
              Back to Site
            </button>
            <button onClick={exportToCSV} className="px-4 py-2 bg-navy-900 text-white rounded-lg text-sm font-medium hover:bg-navy-800 transition">
              Export CSV
            </button>
            <button onClick={clearData} className="px-4 py-2 bg-red-50 text-red-600 border border-red-100 rounded-lg text-sm font-medium hover:bg-red-100 transition">
              Clear All Data
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50/80">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Full Name</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Phone</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Department</th>
                  <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {volunteers.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="px-6 py-16 text-center">
                      <p className="text-gray-500 text-sm">No volunteers registered yet.</p>
                      <p className="text-gray-400 text-xs mt-1">Submissions from the website will appear here.</p>
                    </td>
                  </tr>
                ) : (
                  volunteers.map((vol) => (
                    <tr key={vol.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(vol.date).toLocaleDateString()} <span className="text-gray-400 ml-1">{new Date(vol.date).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-navy-900">{vol.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{vol.phone}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 capitalize">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gold-500/10 text-gold-600 border border-gold-500/20">
                          {vol.department}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button onClick={() => deleteRecord(vol.id)} className="text-red-500 hover:text-red-700 transition">Delete</button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-8 text-center text-xs text-gray-400">
          <p>Data is stored locally in your browser. It will not be visible on other devices.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
