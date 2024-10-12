export interface SidebarMenuItem {
  id: number;
  title: string;
  items: MenuItem[];
}

export interface MenuItem {
  id: number;
  title: string;
  icon?: string;
  image?: string;
  badgesNum?: string;
  badgeType?: string;
  path?: string;
}

export type SidebarMenuItemsType = SidebarMenuItem[];
