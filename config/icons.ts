import type { Component } from "vue";

import IconsCall from "~/components/icons/Call.vue";
import IconsClose from "~/components/icons/Close.vue";
import IconsMenu from "~/components/icons/Menu.vue";

import IconsHtml5 from "~/components/icons/Html5.vue";
import IconsCss3 from "~/components/icons/Css3.vue";
import IconsJavaScript from "~/components/icons/JavaScript.vue";
import IconsTypeScript from "~/components/icons/TypeScript.vue";
import IconsVue from "~/components/icons/Vue.vue";
import IconsVuetify from "~/components/icons/Vuetify.vue";
import IconsReact from "~/components/icons/React.vue";
import IconsTailwindCss from "~/components/icons/TailwindCss.vue";
import IconsNuxt from "~/components/icons/Nuxt.vue";
import IconsNest from "~/components/icons/Nest.vue";
import IconsSequelize from "~/components/icons/Sequelize.vue";
import IconsPostgreSQL from "~/components/icons/PostgreSQL.vue";
import IconsPostman from "~/components/icons/Postman.vue";
import IconsGit from "~/components/icons/Git.vue";
import IconsGitLab from "~/components/icons/GitLab.vue";
import IconsDocker from "~/components/icons/Docker.vue";
import IconsJenkins from "~/components/icons/Jenkins.vue";
import IconsLinux from "~/components/icons/Linux.vue";

import IconsGithub from "~/components/icons/Github.vue";
import IconsVkontakte from "~/components/icons/Vkontakte.vue";
import IconsTelegram from "~/components/icons/Telegram.vue";
import IconsInstagram from "~/components/icons/Instagram.vue";

export const uiIcons = {
  call: IconsCall,
  close: IconsClose,
  menu: IconsMenu,
} as const;

export const techIcons: Record<string, Component> = {
  html5: IconsHtml5,
  css3: IconsCss3,
  javaScript: IconsJavaScript,
  typeScript: IconsTypeScript,
  vue: IconsVue,
  vuetify: IconsVuetify,
  react: IconsReact,
  tailwindCss: IconsTailwindCss,
  nuxt: IconsNuxt,
  nest: IconsNest,
  sequelize: IconsSequelize,
  postgresSQL: IconsPostgreSQL,
  postman: IconsPostman,
  git: IconsGit,
  gitLab: IconsGitLab,
  docker: IconsDocker,
  jenkins: IconsJenkins,
  linux: IconsLinux,
};

export const socialIcons: Record<string, Component> = {
  github: IconsGithub,
  vkontakte: IconsVkontakte,
  telegram: IconsTelegram,
  instagram: IconsInstagram,
};
