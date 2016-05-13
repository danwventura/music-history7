"use strict"

$(document).ready(function(){

let listView = $('#list-view');
let songs = [];
let songs2 = [];


  $.ajax({
    url: "data/musicOne.json"
  }).done(function (music){
      let firstSongs = music.songs
      for (var i = 0; i < firstSongs.length; i++) {
        let currSong = firstSongs[i]
        let bigString = `<div><p>${currSong.name} by ${currSong.artist} on the album ${currSong.album} <input type="button" class="delete" value="Delete"></input></div>`


    listView.append(bigString)
    deleteSongs()
  }
})

function deleteSongs(){
  let deleteBtn = $('.delete');
  deleteBtn.click(function(e){
    e.target.closest('div').remove()
  })
}


$('#moreButton').click(function () {
  $.ajax({
    url: "data/musicTwo.json"
  }).done(function(music2){

      let addedSongs = music2.songs
      let secondOutput = $('#secondOutput')
        for (var i = 0; i < addedSongs.length; i++) {
          let currSong2 = addedSongs[i]
          let bigString2 = `<div><p>${currSong2.name} by ${currSong2.artist} on the album ${currSong2.album} <input type="button" class="delete2" value="Delete"></input></div>`

    secondOutput.append(bigString2)
    deleteSongs2()
    }
  })
})



function deleteSongs2(){
  let deleteBtn2 = $('.delete2');
  
  deleteBtn2.click(function(e){
    e.target.closest('div').remove()
  })
}

});