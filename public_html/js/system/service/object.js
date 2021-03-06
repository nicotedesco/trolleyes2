/*
 * Copyright (c) 2017 by Rafael Angel Aznar Aparici (rafaaznar at gmail dot com)
 *
 * TROLLEYES helps you to learn how to develop easily AJAX web applications
 *
 * Sources at https://github.com/rafaelaznar/trolleyes
 *
 * TROLLEYES is distributed under the MIT License (MIT)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
'use strict';
moduloServicios.factory('objectService', function () {
    return {
        getIcon: function (reg) {
            switch (reg) {
                case "usuario":
                    return 'fa fa-user';
                    break;
                case "tipousuario":
                    return 'fa fa-user-o';
                    break;
                case "pedido":
                    return 'fa fa-sticky-note-o ';
                    break;
                case "producto":
                    return 'fa fa-balance-scale';
                    break;
                case "linea_pedido":
                    return 'fa fa-th-list';
                    break;
                case "carrito":
                    return 'fa fa-shopping-cart';
                    break;
                case "vista":
                return 'fa fa-eye';
                break;
                default:
                    return null;
            }
        },
        getName: function (reg) {
            switch (reg) {
                case "usuario":
                    return "Usuario";
                    break;
                case "tipousuario":
                    return "Tipo de usuario";
                    break;
                case "pedido":
                    return "Pedido";
                    break;
                case "producto":
                    return "Producto";
                    break;
                case "linea_pedido":
                    return "Linea de pedido";
                    break;
                case "carrito":
                    return "Carrito";
                    break;
                default:
                    return null;
            }
        }
    };
});