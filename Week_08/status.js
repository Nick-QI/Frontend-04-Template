const key = 'abababx'

function match(str) {
  let state = start
  for (let c of str) {
    console.log(c, state)
    state = state(c)
  }
  return state === end
}

function start(c) {
  if (c === 'a') {
    return foundA
  }
  return start(c)
}

function end(c) {
  return end
}

function foundA(c) {
  return c === 'b' ? foundB : start(c)
}
function foundB(c) {
  return c === 'a' ? foundA2 : start(c)
}
function foundA2(c) {
  return c === 'b' ? foundB2 : start(c)
}
function foundB2(c) {
  return c === 'a' ? foundA3 : start(c)
}
function foundA3(c) {
  return c === 'b' ? foundX : start(c)
}
function foundX(c) {
  return c === 'x' ? end : foundB2(c)
}

// match(key)

console.log(match('abababx k'))



