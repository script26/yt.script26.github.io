(function() {
	// New div function
	function newdiv() {
		// Select the main element
		const mainElement = document.getElementsByTagName('main')[0];

		// Create a new div element
		const newDiv = document.createElement('div');

		// Optionally, you can set attributes or styles for the new div
		newDiv.id = 'empty-div'; // Set an ID if needed
		newDiv.className = 'empty-div-class'; // Set a class name if needed

		// Append the new div to the main element
		mainElement.appendChild(newDiv);
	};

	// Call the function to execute newdiv
	newdiv();

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

	// Testing
	console.log("Testing and running");
})();
