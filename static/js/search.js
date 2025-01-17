(function() {
	// Function to scrape video details from YouTube search results
	function scrapeYouTubeVideos() {
	    const videos = [];
	    const videoElements = document.querySelectorAll('ytd-video-renderer');

	    videoElements.forEach(video => {
	        const title = video.querySelector('#video-title')?.innerText;
	        const thumbnail = video.querySelector('#img')?.src;
	        const description = video.querySelector('#description-text')?.innerText;
	        const channelName = video.querySelector('#channel-name')?.innerText;

	        videos.push({
	            title,
	            thumbnail,
	            description,
	            channelName
	        });
	    });

	    console.log(videos);
	}

	// Call the function to execute scraping
	scrapeYouTubeVideos();
})();
