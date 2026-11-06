//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
function strip(bandName){
	let name = bandName.toLowerCase()
	if(name.startsWith('a ')){
		return bandName.slice(2)
	}else if(name.startsWith('an ')){
		return bandName.slice(3)
	}else if(name.startsWith('the ')){
		return bandName.slice(4)
	}return bandName
}
bands.sort((a,b)=>{
	return strip(a).localeCompare(strip(b))
})
const bandsList = document.getElementById('band')
bands.forEach(band=>{
	const li = document.createElement('li')
	li.textContent = band
	bandList.appendChild(li)
})