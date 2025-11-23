import React from 'react'
import { ArrowLeft, ThumbsUp, MessageCircle, Share2, Clock } from 'lucide-react'

interface NewsDetailProps {
    news: {
        id: string
        title: string
        author: string
        category: string
        preview: string
        content?: string
        likes: number
        comments: number
        timeAgo: string
    }
    onBack: () => void
}

export const NewsDetail: React.FC<NewsDetailProps> = ({ news, onBack }) => {
    return (
        <div className="flex flex-col h-full bg-background">
            {/* Header */}
            <div className="bg-white border-b border-border p-4 flex items-center gap-3">
                <button
                    onClick={onBack}
                    className="p-2 hover:bg-muted rounded-full transition"
                >
                    <ArrowLeft className="w-5 h-5" />
                </button>
                <div>
                    <h2 className="font-semibold text-foreground">News</h2>
                    <p className="text-xs text-muted-foreground">{news.category}</p>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6">
                <article className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-6 md:p-8">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <span className="font-medium text-foreground">{news.author}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {news.timeAgo}
                        </span>
                        <span>•</span>
                        <span className="text-xs px-2 py-1 bg-muted rounded-full">{news.category}</span>
                    </div>

                    <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                        {news.title}
                    </h1>

                    <div className="prose prose-gray max-w-none mb-6">
                        <p className="text-muted-foreground leading-relaxed">
                            {news.content || news.preview}
                        </p>
                        
                        {/* Extended content - in real app, this would come from backend */}
                        <p className="text-muted-foreground leading-relaxed mt-4">
                            This is where the full article content would appear. The CEDDERT platform enables 
                            citizens to share important stories and updates that matter to their communities. 
                            Through verified reporting and community engagement, we're building a more transparent 
                            and accountable society.
                        </p>
                    </div>

                    {/* Engagement */}
                    <div className="flex items-center gap-6 pt-6 border-t border-border">
                        <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition">
                            <ThumbsUp className="w-5 h-5" />
                            <span className="text-sm font-medium">{news.likes}</span>
                        </button>
                        <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition">
                            <MessageCircle className="w-5 h-5" />
                            <span className="text-sm font-medium">{news.comments}</span>
                        </button>
                        <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition">
                            <Share2 className="w-5 h-5" />
                            <span className="text-sm font-medium">Share</span>
                        </button>
                    </div>
                </article>
            </div>
        </div>
    )
}
