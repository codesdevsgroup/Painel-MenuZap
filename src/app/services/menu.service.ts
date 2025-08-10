import { Injectable } from '@angular/core';
import { MenuSection } from '../models/menu-item.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menu: MenuSection[] = [
    {
      title: 'GESTOR DE PEDIDOS',
      items: [
        { icon: 'shopping_basket', label: 'MEUS PEDIDOS', route: '/pedidos' },
        { icon: 'point_of_sale', label: 'PDV - Vendas Balcão', route: '/pdv' },
        { icon: 'schedule', label: 'TURNOS', route: '/turnos' }
      ]
    },
    {
      title: 'PARÂMETROS / LOJISTA',
      items: [
        { icon: 'access_time', label: 'HORÁRIOS/FUNCIONAMENTO', route: '/horarios' },
        { icon: 'payment', label: 'FORMAS DE PAGAMENTO', route: '/pagamentos' },
        { icon: 'pix', label: 'SISTEMA PIX AUTOMÁTICO', route: '/pix' },
        { icon: 'delivery_dining', label: 'TAXAS/ÁREA DE ENTREGA', route: '/taxas' }
      ]
    },
    {
      title: 'WhatsApp',
      items: [
        { svgIcon: 'whatsapp', label: 'WhatsApp', route: '/whatsapp' }
      ]
    },
    {
      title: 'CADASTROS',
      items: [
        { icon: 'category', label: 'CATEGORIAS', route: '/categorias' },
        { icon: 'fastfood', label: 'PRODUTOS', route: '/produtos' },
        { icon: 'layers', label: 'GRUPOS/OPÇÕES', route: '/opcoes' },
        { icon: 'local_offer', label: 'CUPONS', route: '/cupons' },
        { icon: 'people', label: 'CLIENTES', route: '/clientes' },
        { icon: 'two_wheeler', label: 'MOTOBOY/ENTREGADORES', route: '/motoboys' }
      ]
    }
  ];

  getMenu(): MenuSection[] {
    return this.menu;
  }
}
