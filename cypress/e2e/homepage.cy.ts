describe('Home page test', () => {
	it('passes', () => {
		cy.visit('http://localhost:3000/');

		cy.get('h1').contains('Welcome to your multi-stream platform!');

		//First Stream Provider
		cy.get('h2').contains('Choose your main stream provider');
		cy.get('svg')
			.get('#mainYoutubeStreamProvider')
			.click()
			.should('have.css', 'color', 'rgb(239, 68, 68)')
			.then(() => {
				cy.get('h2').contains('Insert stream url');
				cy.get('input[id="mainStreamProviderInput"]').type('https://www.youtube.com/watch?v=QH2-TGUlwu4').blur();
			});

		//Second Stream Provider
		cy.get('h2').contains('Choose your secondary stream provider');
		cy.get('svg')
			.get('#secondaryTwitchStreamProvider')
			.click()
			.should('have.css', 'color', 'rgb(139, 92, 246)')
			.then(() => {
				cy.get('h2').contains('Insert stream url');
				cy.get('input[id="secondaryStreamProviderInput"]').type('https://www.twitch.tv/joaos92').blur();
			});
		cy.get('button')
			.contains('Go to stream')
			.click()
			.then(() => {
				cy.url().should(
					'include',
					'/coView?mainStream=QH2-TGUlwu4&mainProvider=youtube&secondaryStream=joaos92&secondaryProvider=twitch',
				);
			});
	});
});

export {};
