import data from "../data.json"

function getGroups(array){
  const result = array.reduce((groupedObj,personObj)=>{
    const {group,name,type} = personObj

    if(!(group in groupedObj)){
      groupedObj[group] = {student:[],assistant:""}
    }

    if(type === "assistant"){
      groupedObj[group].assistant = name
      
    }else{
      groupedObj[group].student.push(name)
    }

    return groupedObj
  },{})

  return result
}

function getGroupStudents(array,groupName){
  return getGroups(array)[groupName].student
}

const student = getGroupStudents(data,"Orchid")
console.log("Student:", student)

