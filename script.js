const ul1 = document.querySelector('.names');
const mybutton = document.querySelector('.create');
const input1 = document.querySelector('.input1')
const input2 = document.querySelector('.input2')
const input3 = document.querySelector('.input3')
const input4 = document.querySelector('.input4')
const okaybutton = document.querySelector('.okb')
const myh3 = document.querySelectorAll('.h3')
const myselect = document.querySelector(".labelo")
const myfail = document.querySelector(".fail")

var i = 0

const ulname = document.querySelector('.ul1')
const uldes = document.querySelector('.ul2')
const uldate = document.querySelector('.ul3')
const ulrt = document.querySelector('.ul5')
const ullabel = document.querySelector('.ul6')





okaybutton.addEventListener('click', () => {

  // Remaining Time Function
  const today = new Date();
  const deadline = (new Date (input3.value.replace('T', ' ')));
  const deadlinestring = (new Date (input3.value.replace('T', ' '))).toLocaleString('en-FR');
  const remaining = (deadline.getTime()) - (today.getTime())

  function msToTime(ms) {
    let seconds = (ms / 1000).toFixed(1);
    let minutes = (ms / (1000 * 60)).toFixed(1);
    let hours = (ms / (1000 * 60 * 60)).toFixed(1);
    let days = (ms / (1000 * 60 * 60 * 24)).toFixed(1);
    if (seconds < 60) return seconds + " Sec";
    else if (minutes < 60) return minutes + " Min";
    else if (hours < 24) return hours + " Hrs";
    else return days + " Days"
  }

  const reti = (msToTime(remaining));
  
  // Create A New Task
  const newtask = {"name" : ""+input1.value+"", "des" : ""+input2.value+"", "date" : ""+deadlinestring+"", "rt" : ""+reti+"",  "label" : ""+myselect.value+""}
  localStorage.setItem('tasky'+[i]+'', JSON.stringify(newtask));

  if (input1.value == '' || input2.value == '') {
    myfail.style.display = 'block'
  } else {

  const task1 = localStorage.getItem('tasky'+[i]+'');
  const newobject = JSON.parse(task1);
  const newli = document.createElement("li")
  newli.classList.add('namez')
  newli.classList.add([i])
  ulname.appendChild(newli)
  newli.textContent = (newobject.name)
  const newli2 = document.createElement("li")
  newli2.classList.add('desz')
  newli2.classList.add([i])
  uldes.appendChild(newli2)
  newli2.textContent = (newobject.des)
  const newli3 = document.createElement("li")
  newli3.classList.add('datez')
  newli3.classList.add([i])
  uldate.appendChild(newli3)
  newli3.textContent = (newobject.date)
  const newli4 = document.createElement("li")
  newli4.classList.add('rtz')
  newli4.classList.add([i])
  ulrt.appendChild(newli4)
  newli4.textContent = (newobject.rt)
  const newli5 = document.createElement("li")
  newli5.classList.add('labelz')
  newli5.classList.add([i])
  ullabel.appendChild(newli5)

  const newselect = document.createElement("select")
  newselect.classList.add('labelo2')
  newselect.classList.add([i])
  const option1 = document.createElement("option")
  const option2 = document.createElement("option")
  const option3 = document.createElement("option")
  newselect.appendChild(option1)
  newselect.appendChild(option2)
  newselect.appendChild(option3)
  option1.innerHTML='To Do'
  option2.innerHTML='Doing'
  option3.innerHTML='Done'
  option1.value = 'To Do'
  option2.value = 'Doing'
  option3.value = 'Done'
  
    if (newobject.label == 'To Do') {
      option1.setAttribute('selected', 'selected')
    } else if (newobject.label == 'Doing') {
      option2.setAttribute('selected', 'selected')
    } else if (newobject.label == 'Done') {
      option3.setAttribute('selected', 'selected')
    }

  newli5.appendChild(newselect)

  const newbutton = document.createElement("button")
  newli5.appendChild(newbutton)
  newbutton.classList.add('okayy')
  newbutton.classList.add([i])
  newbutton.innerHTML='Ok'

  newbutton.addEventListener('click', refresh)

  myfail.style.display = 'none'

  i++
  }
})

const refresh = (e) => {
const dex = e.target.classList[1]

const taskfind = localStorage.getItem('tasky'+[dex]+'');
const taskfindtoobject = JSON.parse(taskfind);
console.log(taskfindtoobject)

const changingselect = document.querySelectorAll('.labelo2')
changingselect.forEach(element => {
  if (element.classList.contains(dex)){
    taskfindtoobject.label = element.value
  }

  localStorage.setItem('tasky'+[dex]+'', JSON.stringify(taskfindtoobject));
  console.log(taskfindtoobject)
}
)


}
  

// const changingname = document.querySelectorAll('.namez')
// changingname.forEach(element => {
//   if (element.classList.contains(dex)){
//     let thename = element
//   }
// }
// )

// const changingdes = document.querySelectorAll('.desz')
// changingdes.forEach(element => {
//   if (element.classList.contains(dex)){
//     let thedes = element
//   }
// }
// )

// const changingdate = document.querySelectorAll('.datez')
// changingdate.forEach(element => {
//   if (element.classList.contains(dex)){
//     let thedate = element
//   }
// }
// )

// const changingrt = document.querySelectorAll('.rtz')
// changingrt.forEach(element => {
//   if (element.classList.contains(dex)){
//     let thert = element
//   }
// }
// )

// const changingselect = document.querySelectorAll('.labelo2')
// changingselect.forEach(element => {
//   if (element.classList.contains(dex)){
//     let theselect = element
//   }
// }
// )

// const changingtask = {"name" : ""+thename+"", "des" : ""+thedes+"", "date" : ""+thedate+"", "rt" : ""+thert+"",  "label" : ""+theselect.value+""}
// localStorage.setItem('tasky'+[dex]+'', JSON.stringify(changingtask));

// console.log('tasky'+[dex]+'')
