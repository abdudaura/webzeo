import { useParams, useOutletContext } from 'react-router-dom'
import { ArrowLeft, Search, Filter } from 'lucide-react'
import { useState, useEffect } from 'react'
import ReportCard, { type ReportCardProps } from '../../components/reports/ReportCard'
import { fetchReportsByState, voteOnReport } from '../../lib/api/reports'

interface OutletContext {
    onBack?: () => void
}

const StateReportBrowser = () => {
    const { state = 'Kaduna' } = useParams<{ state: string }>()
    const { onBack } = useOutletContext<OutletContext>()
    const [searchTerm, setSearchTerm] = useState('')
    const [reports, setReports] = useState<ReportCardProps[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        loadReports()
    }, [state])

    const loadReports = async () => {
        setIsLoading(true)
        try {
            const data = await fetchReportsByState(state)
            setReports(data)
        } catch (error) {
            console.error('Failed to load reports', error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleVote = async (id: string, type: 'up' | 'down') => {
        // Optimistic update
        setReports(prev => prev.map(r => {
            if (r.id === id) {
                return { ...r, votes: r.votes + (type === 'up' ? 1 : -1) }
            }
            return r
        }))

        try {
            await voteOnReport(id, type)
        } catch (error) {
            // Revert on failure
            console.error('Vote failed', error)
            setReports(prev => prev.map(r => {
                if (r.id === id) {
                    return { ...r, votes: r.votes - (type === 'up' ? 1 : -1) }
                }
                return r
            }))
        }
    }

    return (
        <div className="flex flex-col h-full bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 p-4 sticky top-0 z-10">
                <div className="flex items-center gap-4 mb-4">
                    <button onClick={onBack} className="lg:hidden p-2 hover:bg-gray-100 rounded-full">
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                    <div>
                        <h2 className="font-semibold text-gray-900 text-lg">{state} State Reports</h2>
                        <p className="text-sm text-gray-500">Verified Citizen Reports</p>
                    </div>
                </div>

                {/* Search & Filter */}
                <div className="flex gap-2">
                    <div className="flex-1 relative">
                        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search reports..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-9 pr-4 py-2 bg-gray-100 border-none rounded-lg text-sm focus:ring-2 focus:ring-brand-primary/20"
                        />
                    </div>
                    <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 text-gray-600">
                        <Filter className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Reports List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {isLoading ? (
                    <div className="flex justify-center py-8">
                        <div className="w-8 h-8 border-4 border-brand-primary border-t-transparent rounded-full animate-spin"></div>
                    </div>
                ) : (
                    reports.map((report) => (
                        <ReportCard
                            key={report.id}
                            {...report}
                            onVote={handleVote}
                        />
                    ))
                )}

                {!isLoading && reports.length > 0 && (
                    <div className="text-center py-8 text-gray-500 text-sm">
                        <p>End of reports for now.</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default StateReportBrowser
