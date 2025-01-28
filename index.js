//create async functiion for party api

const state ={partyList:[]}
const getParty = async () => {
const response =await fetch (`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2501-FTB-ET-WEB-FT/events`)

const jsonObject = await response.json();
const allParties = jsonObject.data;
state.partyList = allParties;
console.log(state.partyList);
renderParties ();
}

const renderParties = ()=> {
  //grab ul mode
const partyOL = document.querySelector(`ol`);
//erase old list
partyOL.innerHTML = ``;

state.partyList.forEach((singleParty)=>{
  //create new LI
  const li = document.createElement(`li`);
  //console.log(li)
  //add inner text to li
  li.innerText = `Party Name: ${singleParty.name}; Description: ${singleParty.description}DATE AND TIME: ${singleParty.date}`
  partyOL.append (li)
})
}

getParty();