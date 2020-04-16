var theme = 'light'
function toggletheme (btn){
  var targets = {body:document.querySelector('body'), links:document.querySelectorAll('a'), buttons:document.querySelectorAll('.themebutton')}
  if(theme === 'light'){
    theme = 'dark'
    //alert(targets.links)
    targets.body.style.backgroundColor = 'black';
    targets.body.style.color = 'white';
    for (i of targets.links){i.style.color = 'powderblue';}
    //alert(1);
  }
  else{
    //alert(2);
    theme = 'light'
    targets.body.style.backgroundColor = 'white';
    targets.body.style.color = 'black';
    for (i of targets.links){i.style.color = 'black';}
  }
  for (i of targets.buttons){i.value = theme;}
}
