function getPosition(element: string): number[] {
	let e: HTMLElement = document.getElementById(element);
	let left = 0;
	let top = 0;

	do {
		left += e.offsetLeft;
		top += e.offsetTop;
	} while (e = e.offsetParent as HTMLElement);

	return [left, top];
}

function jumpTo(id) {
	if(id == 'home')
	{
		window.scrollTo(0, 0);

		history.pushState('', `${document.title}`, `/`)
	} else {
		var position = getPosition(id);

		window.scrollTo(position[0], position[1]);

		history.pushState('', `${document.title}`, `/${id}`)
	}
}

window.onload = (ev: Event) => {
	let url = location.hash.slice(1) || '/';
	if(url === '/')
	{
		jumpTo('home');
	} else if (url === 'about')
	{
		jumpTo('about');
	} else if (url === 'contact')
	{
		jumpTo('contact')
	}
};