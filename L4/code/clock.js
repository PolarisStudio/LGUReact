function showTime(){
    var clock = document.getElementById('clock');
    var time = new Date();
    // console.log(time.getHours())
    clock.innerHTML = `<div class="card text-center">
    <div class="card-header">
      I'm a Clock
    </div>
    <div class="card-body">
      <h5 class="card-title">` + time.getHours()+ ':' + time.getMinutes() + ':' + time.getSeconds() + `</h5>
      
    </div>
    </div>)`;
}

setInterval(showTime, 1000);