// Esperar a que el HTML este listo...
document.addEventListener('DOMContentLoaded', () => 
{
    // Creacion de variables...
    const form = document.querySelector('.form');
    const email = document.querySelector('#email');
    const copy = document.querySelector('#copy');
    const subject = document.querySelector('#subject');
    const message = document.querySelector('#message');

    // Se escucha el evento blur los input, y se ejecuta la funcion de validación...
    email.addEventListener('blur', validate);
    copy.addEventListener('blur', validate);
    subject.addEventListener('blur', validate);
    message.addEventListener('blur', validate);

    //console.log(form, email, copy, subject, message);

    // Funcion que valida que el campo no este vacio y elimina los espacios en blanco... 
    function validate(evt)
    {   
        // Valida que el input sea diferente de vacio y quita los espacios en blanco (.trim()) 
        if(evt.target.value.trim() === '')
        {
            alertView();
        }
        
    }

    // Crea el memsaje de error y lo agrega al elemento fomulario...
    function alertView()
    {   
        // se crea el elemento de alerta p y se genera el mensaje que va a llevar...
        const alert =  document.createElement('p');
        alert.classList.add('alert')
        alert.textContent = `El campo es requerido`;
    }

})

