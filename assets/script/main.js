import data from "../data.json"

function getGroups(array){
  //Reduce methoduyla boş bir obje oluşturdum -groupedObj-. Fonksiyon kişi bilgilerini -personObj- değişkeniyle döndü.  
  
  return array.reduce((groupedObj,personObj)=>{
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

function getGroupStudents(array,groupName){
  return getGroups(array)[groupName].student
}

const student = getGroupStudents(data,"Orchid")
console.log("Student:", student)

