//import $ from 'jquery';
'use strict';
let input = 3;
function watchForm(){
    $('form').submit(event=>{
        event.preventDefault();
        console.log($('.maxDogs').val())
        if($('.maxDogs').val() == undefined && $('.maxDogs').val() < 50)
            input = 3;
        else    
            input = $('.maxDogs').val();
        let url = `https://dog.ceo/api/breeds/image/random/${input}`;
        console.log(url);
        console.log(input);
        getDogImage(url);
    })
    
}

function getDogImage(url){
    console.log('getImage');
    
    fetch(url).then(function(response){
        return response.json();
    }).then(function(jsonData){
        render(jsonData);
        console.log(jsonData);
    })
}

function render(data){
    let htmlTemplate = [];
    for(let i = 0; i < data.message.length; i++){
        htmlTemplate.push(`
            <img src="${data.message[i]}"></img>

        `)
    }
    
    console.log(htmlTemplate);
    $('.dogPark').html(htmlTemplate);
}

$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
  });
