	const <%= openFunc %> = (e: Ti.UI.Window_open_Event)<%= returnType %> => {
		e.source.removeEventListener('open', <%= openFunc %>);
		if (e.source.activity) {
			e.source.activity.onCreateOptionsMenu = (<%= eventObject %>)<%= returnType %> => {
				<%= code %>
			};
		} else {
			Ti.API.warn('You attempted to attach an Android Menu to a lightweight Window');
			Ti.API.warn('or other UI component which does not have an Android activity.');
			Ti.API.warn('Android Menus can only be opened on TabGroups and heavyweight Windows.');
		}
	}
	<%= parent %>.addEventListener('open', <%= openFunc %>);
