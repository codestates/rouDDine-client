
let users = [
  {
    id : "1",
    username : "김코딩",
    email : "devv@asdf.com",
    gender : "남자",
    password : 1234,
  },
  {
    id : "2",
    username : "무야호",
    email : "andigh@asdf.com",
    gender :  "여자",
    password : 1555,
  },
  {
    id: "3",
    username :"박해커",
    email : "gozld@asdf.com",
    gender : "여자",
    password : 1233,
  }
]

let routines = [
  {
    id : "1",
    routine_name :"루틴 1",
  },
  {
    id :"2",
    routine_name :"루틴 2",
  },
  {
    id :"3",
    routine_name : "루틴 3",
  }
]

let exercises = [
  {   
    id : "1",
    routine_id : 1,
    name : "스쿼트",
    set : 3,
    set_time : 30,
    rest: 10,
    excersise_intensity : "180kg" ,
    feedback : "한개 더하자!"
  },
  {
    id : "2",
    routine_id : 1,
    name : "데드리프트",
    set : 2,
    set_time : 30,
    rest : 10,
    excersise_intensity : "180kg",
    feedback : "중량을 늘려보자!"
  },
  {
      id :"3",
      routine_id : 1,
      name : "벤치프레스",
      set : 3,
      set_time : 30,
      rest : 10,
      excersise_intensity : "140kg",
      feedback : "벤치 200 목표!"
  },
  {
    id :"4",
    routine_id : 2,
    name : "푸쉬업",
    set : 5,
    set_time : 60,
    rest : 30,
    excersise_intensity : "못할 때 까지",
    feedback : "최대 50개 함"
  }
]


module.exports = {
  users,
  routines,
  exercises 
}