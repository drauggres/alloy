var <%= style %><%= anyString %> = <%= styleCode %>;
if(<%= actionView %>) {
	<%= style %>.actionView = <%= actionView %>;
}
if (<%= parent %>) {
	<%= item %> = <%= parent %>.add(_.pick(<%= style %>, Alloy.Android.menuItemCreateArgs));	
}
if (<%= item %>) {
	<%= item %>.applyProperties(_.omit(<%= style %>, Alloy.Android.menuItemCreateArgs));
}
