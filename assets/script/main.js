import data from "../data.json"

function getGroups(personArray){
  //Reduce methoduyla boş bir obje oluşturdum -groupedObj-. Fonksiyon kişi bilgilerini -personObj- değişkeniyle döndü.  
  return personArray.reduce((groupedObj,personObj)=>{
    const {group,name,type} = personObj
    const roleCondition = type === "assistant"
    
    //Burada kişinin grubu, daha önce boş olan objeye -groupedObj- eklenmediyse aşağıdaki gibi key,value olarak ekleniyor.
    if(!(group in groupedObj)) groupedObj[group] = {student:[],assistant:""}  //Orchid : {student:[], assistant:""}

  //Burada ise kişi asistan ise objenin -assistant- prop'una ekleniyor. Katılımcı ise student dizisine ekleniyor.
    roleCondition 
    ? groupedObj[group].assistant = name 
    : groupedObj[group].student.push(name)

    return groupedObj
  },{})
}

let selectedGroupName = "Orchid"
const allGroups = getGroups(data)
const selectedGroup = allGroups[selectedGroupName]
console.log("All groups", allGroups)
console.log("Selected Group", selectedGroup)

