let beep = process.argv.slice(2);

//console.log(beep);

for (let seg of beep){
  // just number and not a negative
  if (seg >= 0 && !isNaN(seg)) {
  setTimeout(() => {
    console.log('Piiiiiiii'); 
  }, seg * 1000);
  } else {
    continue;
  }
  
}
