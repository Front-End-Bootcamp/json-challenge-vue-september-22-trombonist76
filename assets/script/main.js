import data from "../data.json"

function getGroups(personArray){
  //Reduce methoduyla boş bir obje oluşturdum -groupedObj-. Fonksiyon kişi bilgilerini -personObj- değişkeniyle döndü.  
  
  return personArray.reduce((groupedObj,personObj)=>{
    const {group,name,type} = personObj

  //Burada kişinin grubu, daha önce boş olan objeye -groupedObj- eklenmediyse aşağıdaki gibi key,value olarak ekleniyor.
    if(!(group in groupedObj)){
      groupedObj[group] = {student:[],assistant:""}
    }

  //Burada ise kişi asistan ise objenin -assistant- prop'una ekleniyor. Katılımcı ise student dizisine ekleniyor.
    if(type === "assistant"){
      groupedObj[group].assistant = name
      
    }else{
      groupedObj[group].student.push(name)
    }

    return groupedObj
  },{})
}

function getGroupStudents(personArray,groupName){
  //Parametre olarak ismi alınan gruba ait bilgileri getiriyor.
  return getGroups(personArray)[groupName] 
}


const allGroups = getGroups(data)
const selectedGroup = getGroupStudents(data,"Orchid")
console.log("All groups", allGroups)
console.log("Selected Group", selectedGroup)

