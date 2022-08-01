$(document).ready(()=>{

    var body=document.getElementById("contenedor")
    $.ajax({
        url: 'https://www.feriadosapp.com/api/holidays.json',
        success: (data)=>{
            let datos=data.data
            console.log(datos)

            let tabla =document.createElement('table')
            tabla.className='table table-striped table-hover table-bordered'
            let thead =document.createElement('thead')
            thead.className='text-center '
            var tr =document.createElement('tr')
            tr.className='table-info'
            var th= document.createElement('th')
            th.innerHTML='#'
            tr.appendChild(th)
            var th= document.createElement('th')
            th.innerHTML='Fecha'
            tr.appendChild(th)
            var th= document.createElement('th')
            th.innerHTML='Tìtulo'
            tr.appendChild(th)
            var th= document.createElement('th')
            th.innerHTML='Tipo'
            tr.appendChild(th)
            var th= document.createElement('th')
            th.innerHTML='Ley'
            tr.appendChild(th)
            thead.appendChild(tr)
            var tbody=document.createElement('tbody')
            tbody.className='border-danger'
            datos.forEach((el, index)=>{
                var tr =document.createElement('tr')
                var td = document.createElement('td')
                td.innerHTML=index+1
                tr.appendChild(td)
                var td = document.createElement('td')
                td.innerHTML=el.date
                tr.appendChild(td)
                var td = document.createElement('td')
                td.innerHTML=el.title
                tr.appendChild(td)
                var td = document.createElement('td')
                td.innerHTML=el.extra
                tr.appendChild(td)
                var td = document.createElement('td')
                td.innerHTML=el.law.toString()
                tr.appendChild(td)
                tbody.appendChild(tr)
            })
            thead.appendChild(tr)
            tabla.appendChild(thead)
            tabla.appendChild(tbody)
            body.appendChild(tabla)
        }
    });
});