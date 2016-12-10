
function start (callback){
  // document.addEventListener('keyup', function(){
  //   if(userText.value === prompt.innerHTML){
  //     document.addEventListener();
  //   }
  // });
  var text = document.getElementById('userText').value;
  var prompt = document.getElementById('prompt').innerHTML = text;

}

function displayOutput (err, wpm){
  if(err){
  }
  console.log(err, wpm);
}