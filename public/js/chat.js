document.addEventListener('DOMContentLoaded', function(){ 
   const firebaseConfig = {
   apiKey: "AIzaSyBS_AX_xTJxCQYLIsntlBrmVt18gD6NSGo",
   authDomain: "chan-711c9.firebaseapp.com",
   databaseURL: "https://chan-711c9.firebaseio.com",
   projectId: "chan-711c9",
   storageBucket: "chan-711c9.appspot.com",
   messagingSenderId: "106474645077",
   appId: "1:106474645077:web:0f8bf8e94b8f796f8ad6dc",
   measurementId: "G-V6EYLK93GZ"
 };

firebase.initializeApp(firebaseConfig);
 
 var database = firebase.database();
let room = "blog_list";
const send = document.getElementById("send");
const name = document.getElementById("name");
const message = document.getElementById("message");
const output = document.getElementById("output");
const del = document.getElementById("del");

//送信処理
send.addEventListener('click', function() {
   var now = new Date();
   database.ref(room).push({
       name: name.value,
       message: message.value,
       date: now.getFullYear() + '年' + (1+now.getMonth()) + '月' + now.getDate() + '日' + now.getHours() + '時' + now.getMinutes() + '分'
   });
   message.value="";
   name.value="";
});

//受信処理
database.ref(room).on("child_added", function(data) {
   const v = data.val();
   const k = data.key;
   let str = "";
   str += '<div class="name"><hr>Title：'+v.name+'</div><hr>';
   str += '<div class="text">Data：'+v.date+'<hr></div>';
   str += '<div class="text">Contents：'+v.message+'</div>';
   output.innerHTML += str + '<button id="edit">edit</button><button id="delsec">delete</button><hr>'
});
//削除処理(全削除処理)
del.addEventListener('click', function(){ 
   firebase.database().ref(room).remove().then(function(){
   alert('delete!please reload')
});
})
})
