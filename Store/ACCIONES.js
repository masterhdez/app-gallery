import CONSTANTES from './CONSTANTES'

export  const actionRegistro= values =>({
        type: CONSTANTES.REGISTRO,
        datos: values
});


export const actionLogin = datos =>({
    type: CONSTANTES.LOGIN,
    datos,
})

export const actionEstablecerSesion = datos =>({
        type: CONSTANTES.ESTABLECER_SESION,
});


export const actionCerrarSesion = () =>({
    type: CONSTANTES.CERRAR_SESION,
});
