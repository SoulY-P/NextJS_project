export async function getYouTubeVideos(){
    const apiKey = process.env.YOUTUBE_API_KEY;
    const channelId = process.env.YOUTUBE_CHANNEL_ID;
    const apiURL = process.env.YOUTUBE_API_URL;
    const maxResults = 48;
}

try{
    const data = fetch(
        `${apiURL}?key=${apiKey}&channelId=${channelId}&order=date&part=snippet&maxResults=${maxResults}`
    );

    if(!data.ok){
        throw Error('Failed to fetch videos');
    }
      return await data.json();
} catch(error){
    throw new Error('An error occured when fetching the videos');
}