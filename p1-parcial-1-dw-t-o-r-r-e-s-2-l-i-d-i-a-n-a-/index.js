var _c = console.log, r = '',
 
aDiscos = [],
aCodigos = [];
 
function Cargar() {
    function Disco(Nombre, Autor, Codigo, Pistas) {
 
        this.Nombre = Nombre;
        this.Autor = Autor;
        this.Codigo = Codigo;
        this.Pistas = Pistas;
 
   }
 
    function Pista (Nombre, Duracion) {
        this.Nombre = Nombre;
        this.Duracion = Duracion;
    }
 
    var CargarNombre, CargarAutor, CargarCodigo, aCargarPistas = [];
 
    do {
        CargarNombre = prompt('Ingrese nombre del disco');
        if (!CargarNombre) {
            alert('Debe colocar un nombre, vuelva a intentarlo');
        }
    } while (!CargarNombre)
 
    do {
        CargarAutor = prompt('Ingrese autor/banda');
        if (!CargarAutor) {
            alert('Debe colocar un autor y banda, vuelva a intentarlo');
        }
    } while (!CargarAutor)
 
    do {
        CargarCodigo = parseInt(prompt('Ingrese código unico del disco'));
        if (!CargarCodigo) {
            alert('Debe colocar un codigo, vuelva a intentarlo');
        } else if (CargarCodigo < 1 || CargarCodigo > 9999) {
            alert('El código es incorrecto, vuelva a intentarlo');
        } else if (aCodigos.indexOf(CargarCodigo) != -1) {
            alert('El código ya fué cargado, pruebe con otro');
        }
    } while (!CargarCodigo || CargarCodigo < 1 || CargarCodigo > 9999 || aCodigos.indexOf(CargarCodigo) != -1)
        aCodigos.push(CargarCodigo);
 
 
    var NombrePista, DuracionPista;
 
    do {
 
        do {
            NombrePista = prompt('Ingrese nombre de la pista');
            if (!NombrePista) {
                alert('Debe colocar un nombre, vuelva a intentarlo');
            }
        } while (!NombrePista)
 
 
        do {
            DuracionPista = parseInt(prompt('Ingrese duración de la pista'));
            if (!DuracionPista) {
                alert('Debe colocar la duración, vuelva a intentarlo');
            } else if (DuracionPista <= 0 || DuracionPista > 7200) {
                alert('La duración es invalida, vuelva a ingresarla')
            } else if (DuracionPista > 180) {
                return '<li>  '+ NombrePista + ':' +'<span style="color:red;">'+ DuracionPista +'segundos' +'</span>'+ '</li>';
            }
        } while (!DuracionPista || DuracionPista <= 0 || DuracionPista > 7200)
            var NuevaPista = new Pista(NombrePista, DuracionPista);
            aCargarPistas.push(NuevaPista);
 
    } while (confirm('¿Desea seguir ingresando pistas?'));
 
    var NuevoDisco = new Disco(CargarNombre, CargarAutor, CargarCodigo, aCargarPistas);
 
    aDiscos.push(NuevoDisco);
    _c(aDiscos)
 
}

