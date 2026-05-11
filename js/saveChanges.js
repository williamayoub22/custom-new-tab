
            function saveChanges(){
                let linkCount=localStorage.getItem('linkCount');
                localStorage.clear();
                localStorage.setItem('personName',document.getElementById('personName').value+" ");
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