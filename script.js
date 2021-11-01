import data from './titanic-data.js'

// Get a reference to the #titanic
const titanic = document.querySelector('#titanic')

// Uncomment to sort by embarked
// data.sort((a, b) => {
//   if ( a.fields.embarked == b.fields.embarked ) return 0;
//   return ( a.fields.embarked > b.fields.embarked ) ? 1 : -1;
// })

// Uncomment to sort by fare amount
// data.sort((a, b) => a.fields.fare > b.fields.fare)

// Uncomment to sort by age
// data.sort((a, b) => a.fields.age > b.fields.age)

data.sort((a, b) => {
  if ( a.fields.survived == b.fields.survived ) return 0;
  return ( a.fields.survived > b.fields.survived ) ? 1 : -1;
}).sort((a, b) => {
  if ( a.fields.sex == b.fields.sex ) return 0;
  return ( a.fields.sex > b.fields.sex ) ? 1 : -1;
})

// Map over the data and make a new element for each passenger
const passengers = data.map(p => {
  return document.createElement('div')
})

// Loop over each passenger and append them to the titanic
passengers.forEach((p, i) => {
  titanic.appendChild(p)
  const tt = document.createElement('span');
  tt.setAttribute('id', "tooltip-" + i)
  tt.classList.add("tooltiptext")
  tt.innerHTML = "Sex: " + data[i].fields.sex + ", Embarked: " + data[i].fields.embarked + ", Survived: " + data[i].fields.survived + ", Fare: " + data[i].fields.fare
  p.addEventListener('mouseenter', () => {
    tt.classList.add("show");
  })
  p.addEventListener('mouseleave', () => {
    tt.classList.remove("show");
  })
  titanic.appendChild(tt)
})

const normalizeProperty = (data, property) => {
	const a = data.filter(item => typeof item.fields[property] !== "undefined").map(item => item.fields[property])
	return a.map(item => item / Math.max(...a))
}

const filterNullForProperty = (data, property) => {
	return data.filter(item => typeof item.fields[property] !== "undefined")
}

const sumAllProperty = (data, property) => {
	return filterNullForProperty(data, property).map(item => item.fields[property]).reduce((acc, k) => acc + k, 0)
}

const averageFare = sumAllProperty(data, 'fare') / filterNullForProperty(data, 'fare').length

const normalizedFares = normalizeProperty(data, 'fare')

// Let's loop over each passenger and set some styles 
passengers.forEach((p, i) => {
  p.style.width = normalizedFares[i] > 0.5 ? averageFare + "px" : averageFare / 2 * (1 - normalizedFares[i]) + "px"
  p.style.height = normalizedFares[i] > 0.5 ? averageFare + "px" : averageFare / 2 * (1 - normalizedFares[i]) + "px"
  if (normalizedFares[i] > 0.5) p.style.marginLeft = "-" + averageFare / 4 + "px"
  p.classList.add(data[i].fields.embarked)
  p.classList.add(data[i].fields.sex)
  if (data[i].fields.survived === "No") p.classList.add("dead")
})

// Challenges - 


// Change the number of columns on the titanic to 34
// I did 33 because it aligns all squares perfectly



