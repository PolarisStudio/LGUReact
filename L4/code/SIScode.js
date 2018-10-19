
Date.prototype.Format = function (fmt) {
  var o = {
    'M+': this.getMonth() + 1,
    'd+': this.getDate(),
    'h+': this.getHours(),
    'm+': this.getMinutes(),
    's+': this.getSeconds(),
    'q+': Math.floor((this.getMonth() + 3) / 3),
    'S': this.getMilliseconds()
  }
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length)); for (var k in o)
    if (new RegExp('(' + k + ')').test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length))); return fmt
}

document.getElementById('currentSysDate').innerHTML = new Date().Format('yyyy-MM-dd hh:mm:ss')

var int = setInterval(clock, 1000)
var currSysDateStr = document.getElementById('currentSysDate').innerHTML
var currSysDate = new Date(Date.parse(currSysDateStr.replace(/-/g, '/')))
var currYear = currSysDate.getFullYear()
var currMonth = currSysDate.getMonth()
var currDay = currSysDate.getDate()
var currHour = currSysDate.getHours()
var currMin = currSysDate.getMinutes()
var currSec = currSysDate.getSeconds()
var currDesc = document.getElementById('currentSysDateDescr').innerHTML
function clock () {
  currSec = currSec + 1
  document.getElementById('systemDateRef').innerHTML = currDesc + '<B>' + new Date(currYear, currMonth, currDay, currHour, currMin, currSec).Format('yyyy/MM/dd hh:mm:ss') + '<\/B>'
  document.getElementById('currentSysDate').innerHTML = new Date(currYear, currMonth, currDay, currHour, currMin, currSec).Format('yyyy-MM-dd hh:mm:ss')
  document.getElementById('currentSysDateDescr').innerHTML = currDesc


  document.getElementById('realDate').innerHTML = '真实时间：'+new Date().Format('yyyy-MM-dd hh:mm:ss')
}
