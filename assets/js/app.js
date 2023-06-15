// Esperar a que el HTML este listo...
document.addEventListener('DOMContentLoaded', () => 
{
    // Creacion de variables...
    const form = document.querySelector('.form');
    const email = document.querySelector('#email');
    const copy = document.querySelector('#copy');
    const subject = document.querySelector('#subject');
    const message = document.querySelector('#message');
    const send = document.querySelector('#submit');

    // Crear obejto email
    const emailDate = { email: '', copy: '', subject: '', message: ''};

    // Se escucha el evento blur los input, y se ejecuta la funcion de validación...
    email.addEventListener('blur', validate);
    copy.addEventListener('blur', validate);
    subject.addEventListener('blur', validate);
    message.addEventListener('blur', validate);

    //console.log(form, email, copy, subject, message);

    // Funcion que valida que el campo no este vacio y elimina los espacios en blanco... 
    function validate(evt)
    {  
        // Captura el id de cada imput para personaliar el mensaje de error...
        const input = evt.target.id
        
        // Valida que el input sea diferente de vacio y quita los espacios en blanco (.trim()) 
        if(evt.target.value.trim() === '')
        {   
            // Se llama a la función que muestra la alerta y como parametros recibe un mensaje y la refencia del elemnto pra agregar la alerta...
            alertView(`El campo ${input} es requerido`, evt.target.parentElement);
            return;
        }

        // Con una condición valida que el id sea igual a email y que la función de validar email devuelva false para llamar la función de mostrar alerta... 
        if(evt.target.id === 'email' && !emailValidate(evt.target.value))
        {
            alertView('El email escrito no es valido...', evt.target.parentElement);
            return;
        }

        // Llama la función de limpiar la alerta despues de que el campo es valido, recibe como parametro al referencia del elemento...
        alertClear(evt.target.parentElement);

        // Asignar valores de los campos del objeto del email con los datos de los input...
        emailDate[evt.target.name] = evt.target.value.trim().toLowerCase();

        comprovateInputsEmail();
        
    }

    // Crea el memsaje de error y lo agrega al elemento fomulario...
    function alertView(message, references)
    {  
        // Llama la función de limpiar la alerta despues de que el campo es valido, recibe como parametro al referencia del elemento...
        alertClear(references);        
        
        // se crea el elemento de alerta p y se genera el mensaje que va a llevar...
        const alert =  document.createElement('p');
        alert.classList.add('alert')
        alert.textContent = message;

        // Inyectar error al formulario usando la refencia del elemento...
        references.appendChild(alert)
    }

    // Quita la alerta si el campo es valido
    function alertClear(references)
    {
        // Validar si ya existe una alerta en el input, para que no se generen varias alertas en el mismo input...
        const alertCreated = references.querySelector('.alert');
        if(alertCreated)
        {
            alertCreated.remove();
        }
    }

    // Validar que el email este escrito de forma correcta con una expresion regular...
    function emailValidate(email)
    {
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const result = regex.test(email);
        console.log(result);

    }

    function comprovateInputsEmail()
    {
        if(Object.values(emailDate).includes(''))
        {
            
        }else
        {
            send.classList.remove('disable');
            send.classList.add('send');
        }
    }

})

