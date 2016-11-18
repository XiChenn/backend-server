define(
	[
		'react',
		'reactDom',
		'jquery',
		'./pages/login-page',
		'./pages/citizen-page',
		'./pages/police-page',
		'./pages/stats-page'
		
	],function(React, ReactDOM, $, LoginPage, CitizenPage, PolicePage, StatsPage){	
		console.log('Loaded the Home Page');
		var documentBody = document.body,
			userId = documentBody.getAttribute('data-userid'),
			displayName = documentBody.getAttribute('data-display-name'),
			userType = documentBody.getAttribute('data-user-type');
			pageType = documentBody.getAttribute('data-page-type');

		if(pageType === ''){
			switch(userType){
				case '':
					ReactDOM.render(<LoginPage />, document.getElementById('componentContainer'));
					break;
				case 'citizen':
					ReactDOM.render(<CitizenPage userId={userId} userType={userType} displayName={displayName}/>, document.getElementById('componentContainer'));
					break;
				case 'police':
					ReactDOM.render(<PolicePage userId={userId} userType={userType} displayName={displayName}/>, document.getElementById('componentContainer'));
					break;
			}
		}else if(pageType === 'stats'){
			console.log(pageType);
			ReactDOM.render(<StatsPage userId={userId} userType={userType} displayName={displayName}/>, document.getElementById('componentContainer'));
		}
		
	}
);

//webpack --progress --colors --watch (for development)
//webpack -p (for production)