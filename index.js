var katzDeliLine = []

function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}

function nowServing(katzDeliLine){
  if (katzDeli.length > 0) {
    return `Currently serving ${katzDeli.shift()}.`;
  } else if (katzDeli.length === 0) {
    return 'There is nobody waiting to be served!';
  }
}
