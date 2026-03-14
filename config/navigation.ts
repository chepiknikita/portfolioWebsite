export interface NavItem {
  name: string;
  path: string;
  key: string;
}

export const navItems: NavItem[] = [
  {
    name: "Главная",
    path: "/",
    key: "index",
  },
  {
    name: "Резюме",
    path: "/resume",
    key: "resume",
  },
  {
    name: "Проекты",
    path: "/projects",
    key: "projects",
  },
];

export const socialLinks: { link: string; name: string }[] = [
  { link: "https://github.com/nikitachepik", name: "github" },
  { link: "https://vk.com/id91007120", name: "vkontakte" },
  { link: "https://t.me/nikitachepik", name: "telegram" },
  { link: "", name: "instagram" },
];
