import { IProducto } from '../../interfaces/productos.interfaces';
export const productos: IProducto[] = [
    {
        nombre: 'Masajeador Facial: Kitty and Bob',
        alertaMinInventario: 5,
        cantNeto: 12,
        disponible: 14,
        precioOriginal: 15,
        precioVenta: 25
    },
    {
        nombre: 'Cepillo Figura Zorro',
        alertaMinInventario: 3,
        cantNeto: 12,
        disponible: 8,
        precioOriginal: 15,
        precioVenta: 25
    },
    {
        nombre: 'Brochas de maquillaje para sombras',
        alertaMinInventario: 5,
        cantNeto: 4,
        disponible: 0,
        precioOriginal: 40,
        precioVenta: 60
    },
    {
        nombre: 'Cosmetiquera Cuadrada gris',
        alertaMinInventario: 3,
        cantNeto: 1,
        disponible: 1,
        precioOriginal: 15,
        precioVenta: 25
    },
    {
        nombre: 'Brocha De Maquillaje Retráctil Con Doble Extremo Gris',
        alertaMinInventario: 2,
        cantNeto: 6,
        disponible: 6,
        precioOriginal: 15,
        precioVenta: 25
    },
]