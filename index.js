let homeScoreEl = document.getElementById("score-home-el")
let guestScoreEl = document.getElementById("score-guest-el")
let resetEl = document.getElementById("reset-el")

homepoint = 0
guestpoint = 0

function homeAddOne() {
  homepoint += 1
  homeScoreEl.textContent = homepoint
}

function homeAddTwo() {
  homepoint += 2
  homeScoreEl.textContent = homepoint
}

function homeAddThree() {
  homepoint += 3
  homeScoreEl.textContent = homepoint
}

function guestAddOne() {
  guestpoint += 1
  guestScoreEl.textContent = guestpoint
}

function guestAddTwo() {
  guestpoint += 2
  guestScoreEl.textContent = guestpoint
}

function guestAddThree() {
  guestpoint += 3
  guestScoreEl.textContent = guestpoint
}

function reset() {
  homepoint = 0
  guestpoint = 0
  homeScoreEl.textContent = homepoint
  guestScoreEl.textContent = guestpoint
}