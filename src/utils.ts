export const checkIfIsValidUrl = (url: string) => {
	return url.includes('https://www.youtube.com/') || url.includes('https://www.twitch.tv/');
};

export const replaceUrl = (url: string, type: string) => {
	if (type === 'twitch') {
		return url.replace('https://www.twitch.tv/', '');
	} else {
		return url.replace('https://www.youtube.com/watch?v=', '');
	}
};
