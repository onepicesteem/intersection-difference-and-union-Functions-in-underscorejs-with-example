$(function(){

    var selectedClub="football";//If no club is selected, you will be choosing football by default

    //DropDown capture selected items
    $('#ulClub>li>a').click(function(){

        selectedClub=$(this).text();
        $('#btnClub').text(selectedClub);
        
    })

    $.getJSON("football.json",function(dataFootball){//getting data from a json file

        $.getJSON("swimming.json",function(dataSwimming){//getting data from a json file

            //adding students according to the selected club
            $('#btnSubmit').click(function(){

                var student={
                    no:$('#inputNo').val(),
                    name:$('#inputName').val()
                }
                
                if(selectedClub=='Swimming'){
                    dataSwimming.push(student);
                    //console.log(dataSwimming);
                    //console.log(dataFootball);
                }
                if(selectedClub=='Football'){
                    dataFootball.push(student);
                    //console.log(dataSwimming);
                    //console.log(dataFootball);
                }
               
            })

            

            $('#btnIntersection').click(function(){

                $('#ulList').empty();//list cleanup

                //students by name
                var studentFootball=_.pluck(dataFootball,'name');
                var studentSwimming=_.pluck(dataSwimming,'name');

                var intersection=_.intersection(studentFootball,studentSwimming);

                _.each(intersection,function(value){
                    $('#ulList').append('<li class="list-group-item">'+value+'</li>')
                })
                

            });

            $('#btnDifferenceF').click(function(){

                $('#ulList').empty();

                var studentFootball=_.pluck(dataFootball,'name');
                var studentSwimming=_.pluck(dataSwimming,'name');

                var differenceFootball=_.difference(studentFootball,studentSwimming);

                _.each(differenceFootball,function(value){
                    $('#ulList').append('<li class="list-group-item">'+value+'</li>')
                })
                

            });

            $('#btnDifferenceS').click(function(){

                $('#ulList').empty();

                var studentFootball=_.pluck(dataFootball,'name');
                var studentSwimming=_.pluck(dataSwimming,'name');

                var differenceSwimming=_.difference(studentSwimming,studentFootball);

                _.each(differenceSwimming,function(value){
                    $('#ulList').append('<li class="list-group-item">'+value+'</li>')
                })
                

            });

            $('#btnUnion').click(function(){

                $('#ulList').empty();

                var studentFootball=_.pluck(dataFootball,'name');
                var studentSwimming=_.pluck(dataSwimming,'name');

                var union=_.union(studentFootball,studentSwimming);

                _.each(union,function(value){
                    $('#ulList').append('<li class="list-group-item">'+value+'</li>')
                })
                

            });


        })

    })

})