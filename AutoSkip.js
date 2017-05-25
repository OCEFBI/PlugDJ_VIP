var TIMEOUT = 3 // seconds

var _timer
API.on(API.ADVANCE, function () {
  var current = API.getMedia()
  clearTimeout(_timer)
  _timer = setTimeout(function () {
  
    if (API.getMedia().cid === current.cid) {
      API.moderateForceSkip()
      API.sendChat("Song auto skipped");
    }
  }, (current.duration + TIMEOUT) * 1000)
})
