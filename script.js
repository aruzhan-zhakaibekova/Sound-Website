let synth = new Tone.Synth().toMaster();

document.body.addEventListener('keypress', (event) => {
  if(event.key == 's'){
    synth.triggerAttackRelease('C3', '4n')
		$("arnold-music").effect("shake");
  }else if(event.key == 'f'){
    synth.triggerAttackRelease('C4', '4n')
  }else if(event.key == 'h'){
    synth.triggerAttackRelease('C5', '4n')
  }
});
