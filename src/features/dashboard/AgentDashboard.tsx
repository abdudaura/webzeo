import { useState } from 'react';
import { Search, Filter, MoreVertical, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';

// Mock Data for Reports
const MOCK_REPORTS = [
    { id: 1, title: 'Broken Water Pipe', location: 'Zangon Shanu', time: '10:30 AM', status: 'pending', unread: 2, category: 'Infrastructure' },
    { id: 2, title: 'Road Blockage', location: 'Sokoto Road', time: 'Yesterday', status: 'investigating', unread: 0, category: 'Traffic' },
    { id: 3, title: 'Power Outage', location: 'Area F', time: 'Yesterday', status: 'resolved', unread: 0, category: 'Utilities' },
    { id: 4, title: 'Suspicious Activity', location: 'Market Square', time: 'Tuesday', status: 'pending', unread: 5, category: 'Security' },
    { id: 5, title: 'School Roof Leak', location: 'Primary School', time: 'Monday', status: 'investigating', unread: 1, category: 'Education' },
];

export default function AgentDashboard() {
    const [activeTab, setActiveTab] = useState('all');
    const [selectedReport, setSelectedReport] = useState<number | null>(null);

    return (
        <div className="flex h-screen bg-gray-100 overflow-hidden">
            {/* Left Sidebar - Report List */}
            <div className="w-full md:w-[400px] bg-white border-r border-gray-200 flex flex-col">
                {/* Header */}
                <div className="bg-gray-50 p-4 border-b border-gray-200 flex justify-between items-center">
                    <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div> {/* User Avatar */}
                        <span className="font-semibold text-gray-700">Agent Dashboard</span>
                    </div>
                    <div className="flex space-x-4 text-gray-600">
                        <button><MoreVertical className="w-5 h-5" /></button>
                    </div>
                </div>

                {/* Search & Filter */}
                <div className="p-3 bg-white border-b border-gray-100">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search reports..."
                            className="w-full bg-gray-100 text-gray-700 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-1 focus:ring-brand-primary"
                        />
                        <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
                    </div>
                    <div className="flex mt-3 space-x-2 overflow-x-auto pb-2">
                        <button
                            onClick={() => setActiveTab('all')}
                            className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${activeTab === 'all' ? 'bg-brand-primary text-white' : 'bg-gray-100 text-gray-600'}`}
                        >
                            All
                        </button>
                        <button
                            onClick={() => setActiveTab('pending')}
                            className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${activeTab === 'pending' ? 'bg-brand-primary text-white' : 'bg-gray-100 text-gray-600'}`}
                        >
                            Pending
                        </button>
                        <button
                            onClick={() => setActiveTab('investigating')}
                            className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${activeTab === 'investigating' ? 'bg-brand-primary text-white' : 'bg-gray-100 text-gray-600'}`}
                        >
                            Investigating
                        </button>
                        <button
                            onClick={() => setActiveTab('resolved')}
                            className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${activeTab === 'resolved' ? 'bg-brand-primary text-white' : 'bg-gray-100 text-gray-600'}`}
                        >
                            Resolved
                        </button>
                    </div>
                </div>

                {/* Report List */}
                <div className="flex-1 overflow-y-auto">
                    {MOCK_REPORTS.map((report) => (
                        <div
                            key={report.id}
                            onClick={() => setSelectedReport(report.id)}
                            className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${selectedReport === report.id ? 'bg-gray-100' : ''}`}
                        >
                            <div className="flex justify-between mb-1">
                                <h3 className="font-semibold text-gray-900 truncate pr-2">{report.title}</h3>
                                <span className={`text-xs ${report.unread > 0 ? 'text-green-500 font-bold' : 'text-gray-400'}`}>{report.time}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-sm text-gray-600 truncate flex items-center">
                                    <MapPin className="w-3 h-3 mr-1" /> {report.location}
                                </p>
                                {report.unread > 0 && (
                                    <span className="bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full min-w-[20px] text-center">
                                        {report.unread}
                                    </span>
                                )}
                            </div>
                            <div className="mt-2 flex items-center space-x-2">
                                <span className="text-xs px-2 py-0.5 bg-gray-200 text-gray-600 rounded">{report.category}</span>
                                {report.status === 'pending' && <span className="text-xs flex items-center text-yellow-600"><AlertCircle className="w-3 h-3 mr-1" /> Pending</span>}
                                {report.status === 'resolved' && <span className="text-xs flex items-center text-green-600"><CheckCircle className="w-3 h-3 mr-1" /> Resolved</span>}
                                {report.status === 'investigating' && <span className="text-xs flex items-center text-blue-600"><Clock className="w-3 h-3 mr-1" /> Investigating</span>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Side - Report Detail (Placeholder) */}
            <div className="hidden md:flex flex-1 bg-[#efeae2] flex-col justify-center items-center relative">
                {/* Chat Background Pattern */}
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")' }}></div>

                {selectedReport ? (
                    <div className="z-10 text-center p-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg max-w-md">
                        <h2 className="text-2xl font-bold mb-4">Report #{selectedReport} Selected</h2>
                        <p className="text-gray-600">Detailed view and chat interface for this report will go here.</p>
                        <p className="text-sm text-gray-500 mt-4">Select another report from the list to view details.</p>
                    </div>
                ) : (
                    <div className="z-10 text-center">
                        <h2 className="text-3xl font-light text-gray-600 mb-4">CEDDERT Agent Console</h2>
                        <p className="text-gray-500">Select a report from the list to start working.</p>
                        <div className="mt-8 w-64 h-1 bg-gray-300 mx-auto rounded-full"></div>
                    </div>
                )}
            </div>
        </div>
    );
}
