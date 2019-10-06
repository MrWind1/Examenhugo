function Leer() {

    var nams = $('#names').val()
    var tipss = $('#types').val()
    let url = 'http://www.omdbapi.com/?apikey=f297a046&s=' + nams + '&Type=' + tipss

    console.log(url);

    $.ajax({
        url: url,
        type: 'GET',
        success: function (response) {
            console.log(response.Search)
            let tasks = JSON.stringify(response.Search)
            tasks = JSON.parse(tasks)
            let template = '';
            tasks.forEach(task => {
                template += `
                <div class="col-md-4">
                    <div class="card mt-4 bg-secondary">

                        <div class="card-header bg-danger">
                            <h4 class="text-light  .font-weight-light" align="center">${task.Title}</h4>
                        </div>
                    
                        <div class="card-body align-self-center">
                            <img src="${task.Poster}" class="img-fluid rounded" width="300" height="350">

                            <div class="">
                                </br>
                                <b><label class="text-warning .font-weight-light">${task.Year}</label></b></br>
                                
                            </div>

                        </div>
                    </div>                
                </div> 
            `;
            });

            $('#movies').html(template);

        }
    });
}