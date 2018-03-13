var katzDeli = [];
function takeANumber(katzDeli, name){
  katzDeli.push(name);
  return "Welcome, ${name}. + You are number ${katzDeli.length} in line."
};

function nowServing(line){
  if (line.length === 0){
    console.log("There is no one waiting to be served.")
    return "There is no one waiting to be served."
  } else {
    return "Now serving" + line.shift()"."
  }
};
