import React, { useState, useEffect } from 'react';
import { ArrowBigUp, ArrowBigDown } from 'lucide-react';
import { votingApi } from '../../lib/api/voting';

interface VotingButtonsProps {
    reportId: string;
    initialScore?: number;
}

export const VotingButtons: React.FC<VotingButtonsProps> = ({ reportId, initialScore = 0 }) => {
    const [score, setScore] = useState(initialScore);
    const [userVote, setUserVote] = useState<'up' | 'down' | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadVoteData = async () => {
            try {
                const vote = await votingApi.getUserVote(reportId);
                setUserVote(vote as 'up' | 'down' | null);
                const count = await votingApi.getVoteCount(reportId);
                setScore(count);
            } catch (error) {
                console.error('Error loading vote data:', error);
            }
        };
        loadVoteData();
    }, [reportId]);

    const handleVote = async (type: 'up' | 'down') => {
        if (loading) return;
        setLoading(true);

        // Optimistic update
        const previousVote = userVote;
        const previousScore = score;

        let newScore = score;
        if (userVote === type) {
            // Toggle off (not supported by API yet, but UI logic here)
            // For now, re-clicking same vote does nothing or could remove vote
            // Let's assume re-clicking confirms it. 
            // Actually, usually re-clicking removes it. 
            // But our API is upsert. Let's just stick to switching or setting.
        } else if (userVote === null) {
            newScore += (type === 'up' ? 1 : -1);
        } else {
            // Switching vote
            newScore += (type === 'up' ? 2 : -2);
        }

        setUserVote(type);
        setScore(newScore);

        try {
            if (type === 'up') {
                await votingApi.upvoteReport(reportId);
            } else {
                await votingApi.downvoteReport(reportId);
            }
        } catch (error) {
            console.error('Error voting:', error);
            // Revert
            setUserVote(previousVote);
            setScore(previousScore);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center bg-gray-50 rounded-lg p-1">
            <button
                onClick={(e) => { e.stopPropagation(); handleVote('up'); }}
                className={`p-1 rounded hover:bg-gray-200 transition-colors ${userVote === 'up' ? 'text-orange-600' : 'text-gray-400'}`}
                disabled={loading}
            >
                <ArrowBigUp size={24} fill={userVote === 'up' ? "currentColor" : "none"} />
            </button>

            <span className={`text-sm font-bold ${userVote === 'up' ? 'text-orange-600' :
                    userVote === 'down' ? 'text-blue-600' : 'text-gray-700'
                }`}>
                {score}
            </span>

            <button
                onClick={(e) => { e.stopPropagation(); handleVote('down'); }}
                className={`p-1 rounded hover:bg-gray-200 transition-colors ${userVote === 'down' ? 'text-blue-600' : 'text-gray-400'}`}
                disabled={loading}
            >
                <ArrowBigDown size={24} fill={userVote === 'down' ? "currentColor" : "none"} />
            </button>
        </div>
    );
};
