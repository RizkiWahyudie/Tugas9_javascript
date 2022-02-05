function objectCall(){
  var realMadrid = {
    pemain : "Kylian Mbappe",
    umur : 22,
    kontrak : 2027,
    overall : 92,
    posisi : "right/left winger forward",
  }
  for (var x in realMadrid){
    console.log(realMadrid[x]);
  }
}
objectCall();
