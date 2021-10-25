import data from './titanic-data.js'

// Get a reference to the #titanic
const titanic = document.querySelector('#titanic')

// Map over the data and make a new element for each passenger
const passengers = data.map(p => {
  return document.createElement('div')
})

// Loop over each passenger and append them to the titanic
passengers.forEach(p => {
  titanic.appendChild(p)
})

// Let's loop over each passenger and set some styles 
passengers.forEach((p, i) => {
  p.classList.add(data[i].fields.embarked)
  if (data[i].fields.survived === "No") p.classList.add("dead")
})

// Challenges - 


// Change the number of columns on the titanic to 34
// I did 33 because it aligns all squares perfectly

// Set the backgroundColor of each passenger by their 
// embarked value. There are three possible values: 
// 'S', 'C', and 'Q'



