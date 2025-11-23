import { useNavigate } from 'react-router-dom'
import { MapPin, TrendingUp } from 'lucide-react'
import { NORTHERN_STATES } from '../../data/locations'

interface StatesTabProps {
    onSelect?: () => void
    searchQuery?: string
}

// All Nigerian states
const ALL_STATES = [
    ...NORTHERN_STATES.map(s => s.state),
    // Southern states
    'Abia', 'Akwa Ibom', 'Anambra', 'Bayelsa', 'Cross River', 'Delta', 'Ebonyi', 'Edo',
    'Ekiti', 'Enugu', 'Imo', 'Lagos', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Rivers',
    'FCT' // Federal Capital Territory
].sort()

const StatesTab = ({ onSelect, searchQuery = '' }: StatesTabProps) => {
    const navigate = useNavigate()

    const filteredStates = ALL_STATES.filter(state =>
        state.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const handleStateClick = (state: string) => {
        navigate(`/states/${state.toLowerCase().replace(/\s+/g, '-')}`)
        onSelect?.()
    }

    // Mock data - in real app, fetch from API
    const getStateStats = (state: string) => {
        const mockCount = Math.floor(Math.random() * 2000) + 100
        const mockPriority = Math.floor(Math.random() * 100) + 10
        return { count: mockCount, priority: mockPriority }
    }

    return (
        <div className="divide-y divide-gray-100">
            {filteredStates.map((state) => {
                const stats = getStateStats(state)
                return (
                    <button
                        key={state}
                        onClick={() => handleStateClick(state)}
                        className="w-full p-4 hover:bg-gray-50 transition flex items-center gap-4 text-left"
                    >
                        <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                            <MapPin className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-900 mb-1">{state} State</h3>
                            <div className="flex items-center gap-3 text-sm text-gray-500">
                                <span>{stats.count.toLocaleString()} verified reports</span>
                                {stats.priority > 50 && (
                                    <span className="flex items-center gap-1 text-red-600">
                                        <TrendingUp className="w-3 h-3" />
                                        {stats.priority} high priority
                                    </span>
                                )}
                            </div>
                        </div>
                    </button>
                )
            })}
        </div>
    )
}

export default StatesTab
