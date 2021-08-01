export interface IProducto {
    nombre: string,
    cantNeto?: number,
    alertaMinInventario?: number,
    disponible?: number,
    //Precio unitario
    precioOriginal?: number,
    precioVenta?: number,
}