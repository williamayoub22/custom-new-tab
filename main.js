
            //link class
            class link{
                constructor(name,url){
                    this.name=name;
                    this.url=url;
                }
            }

            //---on window load---
           // localStorage.clear();


            //check it's first time
            if(localStorage.getItem('personName')==null){
                
                localStorage.setItem('personName','some name');
                let linkCount=0;
                


                document.getElementById('settings').querySelector('h1').innerHTML='Welcome !';

               
                //adds link to start with
                addLinkSettingsPanel('google','google.com');
                linkCount++;
                addLinkSettingsPanel('youtube','youtube.com');
                linkCount++;
                addLinkSettingsPanel('google translate','translate.google.com');
                linkCount++;
                addLinkSettingsPanel('gmail','mail.google.com');
                linkCount++;
                
                addLinkSettingsPanel('spotify','open.spotify.com');
                linkCount++;
                


                localStorage.setItem('linkCount',linkCount);
                saveChanges();


                $('#settings').css('display','block');

            }

            else{
                getLinks();
                let pName=localStorage.getItem('personName');
                //name in settings 
                document.getElementById('personName').value=pName;
                //sitename

                pName=pName.split(" ");
                
                document.getElementsByClassName('siteName')[0].innerHTML=pName[0]+'<br>'+pName[1];


            }




            //---functions---

            function addLinkSettingsPanel(name,url){
                

                let settingsPanel=document.getElementById('settingsBody');
                //div that contains all elements
                let div=document.createElement('div');
                $(div).addClass('linkDiv');
                //name input  
                let nameInput=document.createElement('input');
                nameInput.placeholder='Name';
                nameInput.value=name;
                $(nameInput).addClass('unsortable');

                //url input
                let urlInput=document.createElement('input');
                urlInput.placeholder='Url';
                urlInput.value=url;
                $(urlInput).addClass('unsortable');

                //trash button -no icon
                let button=document.createElement('button');
                $(button).addClass('removeLink');
                $(button).addClass('unsortable');

                //sortable icon
                let SortableIcon=document.createElement('i');
                $(SortableIcon).addClass('fa-sort');
                $(SortableIcon).addClass('fa');
                $(SortableIcon).addClass('unsortable');
                

                //trash icon
                let trashIcon=document.createElement('i');
                $(trashIcon).addClass('fa');
                trashIcon.innerHTML='&#xf014';

                button.appendChild(trashIcon);
                div.appendChild(SortableIcon);
                div.appendChild(nameInput);
                div.appendChild(urlInput);
                div.appendChild(button);
                

                settingsPanel.appendChild(div);



                //let newlink= new link('','https://'+urlInput.value);
               // localStorage.setItem('link'+linkCount,JSON.stringify());
                
            }


            function saveChanges(){
                let linkCount=localStorage.getItem('linkCount');
                localStorage.clear();

                if(countSpaces(document.getElementById('personName').value)==0){
                localStorage.setItem('personName',document.getElementById('personName').value+" ");
                }

                else{
                    localStorage.setItem('personName',document.getElementById('personName').value);
                }

                localStorage.setItem('linkCount',linkCount);
                let linksDivArray=document.getElementsByClassName('linkDiv');

                for(let i=0;i<linksDivArray.length;i++){
                   let name= linksDivArray[i].querySelector('input[placeholder="Name"]').value;
                   let url= linksDivArray[i].querySelector('input[placeholder="Url"]').value;

                   let currentLink=new link(name,url);
                   currentLink=JSON.stringify(currentLink);

                    localStorage.setItem('link'+i,currentLink);
                }

            }


            function getLinks(){


                for(let i=0;i<(localStorage.getItem('linkCount'));i++){
                    
                    let linkObj=JSON.parse(localStorage.getItem('link'+i));
                    
                    addLinkSettingsPanel(linkObj.name,linkObj.url);
                    createLinkTopBar(linkObj);


                }
            }



            function createLinkTopBar(linkObj){
                let ul=document.getElementById('linksUl');
                let li=document.createElement('li');
                let a=document.createElement('a');


                //check if url points to local file or contains http or https
                if(linkObj.url.includes('file://') || linkObj.url.includes('http')){
                    a.href=linkObj.url;
                }
                else{
                    a.href='https://'+linkObj.url;
                    }

                a.innerHTML=linkObj.name;
            
                li.appendChild(a);
                ul.appendChild(li);
            }

            //count spaces of a string
            function countSpaces(anyString){

                let givenStr = anyString;
                let ch = ' ';
                let count = 0;
                
                for(let i = 0; i<givenStr.length; i++){
                  if(givenStr.charAt(i) == ch){
                    count ++;
                  }
                }

                return count;
            }


                //---events---
                
                //keyboard shortcut system
                /*
                this.addEventListener('keydown', function(event) {
                        const key = event.key;
                        for(let i =0;i<9;i++){
                            if(key==i){
                                document.getElementById('linksUl').childNodes;
                            }
                        }
                });	

                */
                
                //oprn settings
                $('#settingsBtn').click(function(){
                    
                    
                    $('#settings').css('display','block');
                    $('#siteName').css('display','none');
    
                });
                


                //add link using th e button  
                $('#addLinkBtn').click(function(){
    
                    addLinkSettingsPanel('','');
                    let linkCount =localStorage.getItem('linkCount');
                    linkCount++;
                    localStorage.setItem('linkCount',linkCount);


                    //reAdd the event because new links have been created
                    //note the event is down there
                    $('.removeLink').click(function(){
                        $(this).parent().remove();

                        let linkCount=localStorage.getItem('linkCount')-1;
                        localStorage.setItem('linkCount',linkCount);
                     });

                });
    

                //save changes and refresh window
                $('#saveChangesBtn').click(function(){
                    saveChanges();
                    location.reload(); 
                });
    

                //close settings
                $('#settingsExitBtn').click(function(){
                    $('#settings').css('display','none');
                    $('#siteName').css('display','block');
                });

                //remove a link
                $('.removeLink').click(function(){
                    $(this).parent().remove();

                    let linkCount=localStorage.getItem('linkCount')-1;
                    localStorage.setItem('linkCount',linkCount);

                });




                //jquery-ui sort elements inside #settingsBody

                $( "#settingsBody" ).sortable({

                    //remove the ability to sort from unsortable class.
                    items : ':not(.unsortable)'

                });





                let num = Math.floor(Math.random()*181);
                let url = "url(./photos/"+num+".jpg";
    
                $("#con").css("background",url);
                $("#con").css("background-repeat","no-repeat");
                $("#con").css("background-size","cover");
