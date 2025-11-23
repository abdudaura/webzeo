import { useState } from 'react'
import { LayoutDashboard, CheckSquare, Award, Settings } from 'lucide-react'
import AssignmentCard, { type AssignmentCardProps } from '../../components/volunteers/AssignmentCard'

const VolunteerDashboard = () => {
    const [activeTab, setActiveTab] = useState('assignments')

    // Mock data
    const assignments: AssignmentCardProps[] = [
        {
            id: '1',
            title: 'Verify School Collapse Incident',
            location: 'Kaduna North LGA',
            deadline: '24 hours',
            priority: 'critical',
            status: 'pending',
            description: 'Visit Government Primary School to verify reports of roof collapse. Take photos and interview witnesses.'
        },
        {
            id: '2',
            title: 'Confirm Roadblock Location',
            location: 'Zaria Road',
            deadline: '48 hours',
            priority: 'high',
            status: 'in_progress',
            description: 'Verify the exact location of reported illegal police checkpoint near the Zaria toll gate.'
        }
    ]

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <div className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
                <div className="p-6 border-b border-gray-200">
                    <h2 className="font-bold text-xl text-brand-primary">Volunteer Portal</h2>
                    <p className="text-xs text-gray-500 mt-1">Verified Agent #4291</p>
                </div>

                <nav className="flex-1 p-4 space-y-1">
                    <button
                        onClick={() => setActiveTab('assignments')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition ${activeTab === 'assignments' ? 'bg-brand-primary/10 text-brand-primary' : 'text-gray-600 hover:bg-gray-50'}`}
                    >
                        <LayoutDashboard className="w-5 h-5" />
                        Assignments
                    </button>
                    <button
                        onClick={() => setActiveTab('completed')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition ${activeTab === 'completed' ? 'bg-brand-primary/10 text-brand-primary' : 'text-gray-600 hover:bg-gray-50'}`}
                    >
                        <CheckSquare className="w-5 h-5" />
                        Completed Tasks
                    </button>
                    <button
                        onClick={() => setActiveTab('achievements')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition ${activeTab === 'achievements' ? 'bg-brand-primary/10 text-brand-primary' : 'text-gray-600 hover:bg-gray-50'}`}
                    >
                        <Award className="w-5 h-5" />
                        Achievements
                    </button>
                </nav>

                <div className="p-4 border-t border-gray-200">
                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50">
                        <Settings className="w-5 h-5" />
                        Settings
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto">
                <div className="p-8">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Current Assignments</h1>
                            <p className="text-gray-600">You have 2 active tasks requiring verification</p>
                        </div>
                        <div className="bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
                            <span className="text-sm text-gray-500">Reputation Score</span>
                            <div className="text-xl font-bold text-brand-primary">4.8/5.0</div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {assignments.map(assignment => (
                            <AssignmentCard key={assignment.id} {...assignment} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VolunteerDashboard
