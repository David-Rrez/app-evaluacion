fetch("data.json")
.then(response=>response.json()
)
.then(function(data){
	let datatable = document.querySelector("#data-output");
	let out = "";
	for(let uni of data.evaluacion){
		out += `
			<tr>
				<td>${uni.Alpha_two_code}</td>
				<td>${uni.Country}</td>
				<td>${uni.Name}</td>
			</tr>
		`;
	}

	datatable.innerHTML = out;
})
.catch( error=>{
    console.log("Error get data "+error)
}

)

function search() {
    var input,filter;
    input = document.getElementById('name');
    select = document.getElementById('pais').value;
    filter = input.value != "" ? input.value:"";
    if (select == 0) {
        swal("Oops!","Favor de Selecciónar un Filtro", "error")   
    }else{
    fetch("data.json")
    .then(response=>response.json()
    )
    .then(function(data){
        let datatable = document.querySelector("#data-output");
        let out = "";
        var keyword = filter.toLowerCase();
        var names = data.evaluacion;
        
        names = select != "ALL" ? 
                            names.filter(uni => uni.Name.toLowerCase().indexOf(keyword) > -1 && select == uni.Alpha_two_code) 
                            : 
                            (keyword != null ? names.filter(uni => uni.Name.toLowerCase().indexOf(keyword) > -1 ) 
                            : names);
        for(let uni of names){
                out += `
                    <tr>
                        <td>${uni.Alpha_two_code}</td>
                        <td>${uni.Country}</td>
                        <td>${uni.Name}</td>
                    </tr>
                `;
        }

        datatable.innerHTML = out;
    })
    }
}
