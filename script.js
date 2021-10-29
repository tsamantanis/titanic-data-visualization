import data from './titanic-data.js'

// Get a reference to the #titanic
const titanic = document.querySelector('#titanic')

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
  tt.innerHTML = "Sex: " + data[i].fields.sex + ", Embarked: " + data[i].fields.embarked + ", Survived: " + data[i].fields.survived
  p.addEventListener('mouseenter', () => {
    tt.classList.add("show");
  })
  p.addEventListener('mouseleave', () => {
    tt.classList.remove("show");
  })
  titanic.appendChild(tt)
})

// Let's loop over each passenger and set some styles 
passengers.forEach((p, i) => {
  p.classList.add(data[i].fields.embarked)
  p.classList.add(data[i].fields.sex)
  if (data[i].fields.survived === "No") p.classList.add("dead")
})

// Challenges - 


// Change the number of columns on the titanic to 34
// I did 33 because it aligns all squares perfectly



