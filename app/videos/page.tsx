import { getYouTubeVideos } from "./";
//import React from 'react';

type YouTubeResponse = {
    items: Video[];
};

type Video = {
    id: {kind: string, videoId: string};
    snippet: {title: string};
};

export default async function Videos(){
    const videos: YouTubeResponse = await getYouTubeVideos();
    //console.log(videos);
  return (
    
    <div className="grid grid-cols-3">
        <p className='mb-10'>
        <a href="/" className="w-full disabled:bg-purple-400 bg-purple-800 text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">&lt;-&nbsp;&nbsp;</span>go back</a>
        </p>
        {videos.items.map((video: Video) => (
            <div key={video.id.videoId}>
                <iframe src={`https://www.youtube.com/embeb/${video.id.videoId}`} />
            </div>
        ))}
    </div>
    
  )
}