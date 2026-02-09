import { useState, useEffect } from 'react';
import './index.scss';
import MatrixBackground from '../MatrixBackground';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';

const RocketLeagueClips = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    }, []);

    /**
     * Helper function to normalize video URLs
     * Supports:
     * - Local files in public/clips folder: '/clips/video.mp4' or 'clips/video.mp4'
     * - Remote URLs: 'https://...' or 'http://...'
     * - Medal shareable links: Any URL starting with http/https
     */
    const normalizeVideoUrl = (url) => {
        if (!url) return '';
        
        // If it's already a full URL (http/https), use it as-is
        if (url.startsWith('http://') || url.startsWith('https://')) {
            return url;
        }
        
        // If it starts with /, use it as-is (already a public path)
        if (url.startsWith('/')) {
            return url;
        }
        
        // If it's a relative path, prepend /clips/ if it doesn't already have it
        if (url.startsWith('clips/')) {
            return `/${url}`;
        }
        
        // Default: assume it's a filename in the clips folder
        return `/clips/${url}`;
    };

    /**
     * Check if a Medal link is expired (for user info)
     * Medal links have exp=timestamp in the URL
     */
    const checkMedalLinkExpiry = (url) => {
        if (!url || !url.includes('exp=')) return null;
        const match = url.match(/exp=(\d+)/);
        if (match) {
            const expiryTimestamp = parseInt(match[1]);
            const expiryDate = new Date(expiryTimestamp * 1000);
            const now = new Date();
            return {
                expired: now > expiryDate,
                expiryDate: expiryDate,
                daysUntilExpiry: Math.ceil((expiryDate - now) / (1000 * 60 * 60 * 24))
            };
        }
        return null;
    };

    // ============================================
    // VIDEO DATA CONFIGURATION
    // ============================================
    // 
    // RECOMMENDED: Medal Links (for portfolio)
    // - Pros: No repo bloat, easy to update, Medal handles hosting
    // - Cons: Links expire (check exp= timestamp in URL)
    // - Tip: Use "Post to Profile" in Medal for permanent links, or refresh links periodically
    // 
    // ALTERNATIVE: Local Files
    // - Put videos in: react-portfolio/public/clips/
    // - Use path: '/clips/your-video-name.mp4'
    // - Note: Increases repo size, may hit hosting limits (100MB on Vercel/Netlify)
    // 
    // THUMBNAILS:
    // - Medal links: Medal provides thumbnail URLs (check Medal's share page)
    // - Local files: Create in public/clips/thumbnails/ or leave blank for placeholder
    // ============================================
    
    const videos = [
        {
            id: 1,
            title: 'Full Field Flip Reset',
            thumbnail: '/thumbnails/MedalTVRocketLeague20260119140249074-1768859063.jpg',
            // MEDAL LINK (Recommended):
            videoUrl: 'https://cdn.medal.tv/ugcc/content-social/bwRoJAzwmvB9K0fNe0d3Cw.mp4?auth=exp=1768887000~data=Mzg2NTkxNTgxLGxXTGd2bHpMVllCV0dXaUJrLGFkdWZvbjlIVyw1MjYyMTU3NzE~hmac=26ff6d203258cb8cbaad51d901b1d304e380c4e741fde168d285b174c37cda64',
            // Note: This link expires on: Jan 20, 2026 (check exp= timestamp)
            // To get permanent link: Post clip to your Medal profile, then use that link
            // 
            // LOCAL FILE ALTERNATIVE (if preferred):
            // videoUrl: '/clips/MedalTVRocketLeague20260119140249074-1768859063.mp4',
            duration: '0:07'
        },
        {
            id: 2,
            title: 'Nutty Double Tap',
            thumbnail: '/thumbnails/MedalTVRocketLeague20251120203039414-1768869397--tr-edit-ffac.jpg',
            videoUrl: '/clips/MedalTVRocketLeague20251120203039414-1768869397--tr-edit-ffac.mp4',
            duration: '0:08'
        },
        {
            id: 3,
            title: 'Incredible Aerial',
            thumbnail: '/thumbnails/MedalTVRocketLeague20250805202207-tr-edit.jpg',
            videoUrl: '/clips/MedalTVRocketLeague20250805202207-tr-edit-4x-RIFE-RIFE3.1-240fps.mp4',
            duration: '0:30'
        },
        {
            id: 4,
            title: 'Team Play',
            thumbnail: 'https://via.placeholder.com/320x180/ffa07a/ffffff?text=Clip+4',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
            duration: '2:15'
        },
        {
            id: 5,
            title: 'Clutch Moment',
            thumbnail: 'https://via.placeholder.com/320x180/98d8c8/ffffff?text=Clip+5',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
            duration: '0:55'
        },
        {
            id: 6,
            title: 'Perfect Shot',
            thumbnail: 'https://via.placeholder.com/320x180/f7dc6f/ffffff?text=Clip+6',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
            duration: '1:10'
        },
        {
            id: 7,
            title: 'Amazing Goal #2',
            thumbnail: 'https://via.placeholder.com/320x180/bb8fce/ffffff?text=Clip+7',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
            duration: '0:40'
        },
        {
            id: 8,
            title: 'Sick Redirect',
            thumbnail: 'https://via.placeholder.com/320x180/85c1e2/ffffff?text=Clip+8',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
            duration: '1:30'
        },
        {
            id: 9,
            title: 'Incredible Play',
            thumbnail: 'https://via.placeholder.com/320x180/f8b739/ffffff?text=Clip+9',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
            duration: '0:50'
        },
        {
            id: 10,
            title: 'Best Goal Ever',
            thumbnail: 'https://via.placeholder.com/320x180/e74c3c/ffffff?text=Clip+10',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
            duration: '1:05'
        },
        {
            id: 11,
            title: 'Epic Moment',
            thumbnail: 'https://via.placeholder.com/320x180/3498db/ffffff?text=Clip+11',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
            duration: '0:35'
        },
        {
            id: 12,
            title: 'Unbelievable Save',
            thumbnail: 'https://via.placeholder.com/320x180/2ecc71/ffffff?text=Clip+12',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',
            duration: '1:15'
        }
    ];

    const handleVideoClick = (video) => {
        setSelectedVideo(video);
    };

    const closeVideo = () => {
        setSelectedVideo(null);
    };

    const handleBackdropClick = (e) => {
        if (e.target.classList.contains('video-modal-backdrop')) {
            closeVideo();
        }
    };

    return (
        <>
            <MatrixBackground />
            <div className="container rocket-league-clips-page">
                <div className="title-wrapper">
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['R', 'o', 'c', 'k', 'e', 't', ' ', 'L', 'e', 'a', 'g', 'u', 'e', ' ', 'C', 'l', 'i', 'p', 's']}
                            idx={15}
                        />
                    </h1>
                </div>
            
            <div className="videos-grid">
                {videos.map((video) => (
                    <div 
                        key={video.id} 
                        className="video-card"
                        onClick={() => handleVideoClick(video)}
                    >
                        <div className="video-thumbnail">
                            {video.thumbnail ? (
                                <img src={video.thumbnail} alt={video.title} />
                            ) : (
                                <div className="thumbnail-placeholder">
                                    <span>🎮</span>
                                    <p>No Preview</p>
                                </div>
                            )}
                            <div className="video-duration">{video.duration}</div>
                            <div className="play-overlay">
                                <svg viewBox="0 0 24 24" fill="white" width="48" height="48">
                                    <path d="M8 5v14l11-7z"/>
                                </svg>
                            </div>
                        </div>
                        <div className="video-info">
                            <h3 className="video-title">{video.title}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {selectedVideo && (
                <div 
                    className="video-modal-backdrop" 
                    onClick={handleBackdropClick}
                >
                    <div className="video-modal">
                        <button className="close-button" onClick={closeVideo}>
                            <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
                                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                            </svg>
                        </button>
                        <div className="video-player">
                            <video 
                                src={normalizeVideoUrl(selectedVideo.videoUrl)} 
                                controls 
                                autoPlay
                                className="expanded-video"
                                onError={(e) => {
                                    console.error('Error loading video:', selectedVideo.videoUrl);
                                    const expiryInfo = checkMedalLinkExpiry(selectedVideo.videoUrl);
                                    let errorMsg = 'Error loading video. ';
                                    if (expiryInfo?.expired) {
                                        errorMsg += 'This Medal link has expired. Please refresh the link in Medal app.';
                                    } else if (expiryInfo) {
                                        errorMsg += `Link expires in ${expiryInfo.daysUntilExpiry} days.`;
                                    } else {
                                        errorMsg += 'Please check the file path or URL.';
                                    }
                                    e.target.parentElement.innerHTML = 
                                        `<p style="color: #ffd700; padding: 20px; text-align: center;">${errorMsg}</p>`;
                                }}
                            >
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="video-details">
                            <h2>{selectedVideo.title}</h2>
                            {(() => {
                                const expiryInfo = checkMedalLinkExpiry(selectedVideo.videoUrl);
                                if (expiryInfo) {
                                    return (
                                        <p className="expiry-info" style={{ 
                                            fontSize: '12px', 
                                            color: expiryInfo.expired ? '#ff6b6b' : '#ffd700',
                                            marginTop: '10px',
                                            opacity: 0.8
                                        }}>
                                            {expiryInfo.expired 
                                                ? '⚠️ Link expired - Please refresh in Medal app'
                                                : `Link expires: ${expiryInfo.expiryDate.toLocaleDateString()} (${expiryInfo.daysUntilExpiry} days)`}
                                        </p>
                                    );
                                }
                                return null;
                            })()}
                        </div>
                    </div>
                </div>
            )}
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default RocketLeagueClips;
