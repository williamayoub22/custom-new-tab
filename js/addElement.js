function createButton(type,icon){

}

function createInput(name,value){
    let nameInput=document.createElement('input');
    nameInput.placeholder=name;
    nameInput.value=value;
}





function addLinkSettingsPanel(name,url){
                

    let settingsPanel=document.getElementById('settingsBody');
    //div that contains all elements
    let div=document.createElement('div');
    $(div).addClass('linkDiv');
    
    createInput(name,value);

    //url input
    let urlInput=document.createElement('input');
    urlInput.placeholder='Url';
    urlInput.value=url;

    //trash button -no icon
    let button=document.createElement('button');
    $(button).addClass('removeLink');

    //trash icon
    let trashIcon=document.createElement('i');
    $(trashIcon).addClass('fa');
    trashIcon.innerHTML='&#xf014';

    button.appendChild(trashIcon);
    div.appendChild(nameInput);
    div.appendChild(urlInput);
    div.appendChild(button);

    settingsPanel.appendChild(div);



    //let newlink= new link('','https://'+urlInput.value);
   // localStorage.setItem('link'+linkCount,JSON.stringify());
    
}