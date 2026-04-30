import logo from "./logo.svg";
import backend from "./backend.png";
import creator from "./creator.png";
import mobile from "./mobile.png";
import web from "./web.png";
import github from "./github.png";
import menu from "./menu.svg";
import close from "./close.svg";

import css from "./tech/css.png";
import docker from "./tech/docker.png";
import figma from "./tech/figma.png";
import git from "./tech/git.png";
import html from "./tech/html.png";
import javascript from "./tech/javascript.png";
import mongodb from "./tech/mongodb.png";
import nodejs from "./tech/nodejs.png";
import reactjs from "./tech/reactjs.png";
import redux from "./tech/redux.png";
import tailwind from "./tech/tailwind.png";
import typescript from "./tech/typescript.png";
import threejs from "./tech/threejs.png";

import meta from "./company/meta.png";
import mostaql from "./company/mostaqel-logo-removebg-preview.png";
import shopify from "./company/shopify.png";
import starbucks from "./company/starbucks.png";
import tesla from "./company/tesla.png";

import carrent from "./carrent.png";
import jobit from "./jobit.png";
import tripguide from "./tripguide.png";

const toAssetUrl = (asset) =>
  typeof asset === "string" ? asset : asset?.src ?? "";

const logoUrl = toAssetUrl(logo);
const backendUrl = toAssetUrl(backend);
const creatorUrl = toAssetUrl(creator);
const mobileUrl = toAssetUrl(mobile);
const webUrl = toAssetUrl(web);
const githubUrl = toAssetUrl(github);
const menuUrl = toAssetUrl(menu);
const closeUrl = toAssetUrl(close);
const cssUrl = toAssetUrl(css);
const dockerUrl = toAssetUrl(docker);
const figmaUrl = toAssetUrl(figma);
const gitUrl = toAssetUrl(git);
const htmlUrl = toAssetUrl(html);
const javascriptUrl = toAssetUrl(javascript);
const mongodbUrl = toAssetUrl(mongodb);
const nodejsUrl = toAssetUrl(nodejs);
const reactjsUrl = toAssetUrl(reactjs);
const reduxUrl = toAssetUrl(redux);
const tailwindUrl = toAssetUrl(tailwind);
const typescriptUrl = toAssetUrl(typescript);
const threejsUrl = toAssetUrl(threejs);
const metaUrl = toAssetUrl(meta);
const mostaqlUrl = toAssetUrl(mostaql);
const shopifyUrl = toAssetUrl(shopify);
const starbucksUrl = toAssetUrl(starbucks);
const teslaUrl = toAssetUrl(tesla);
const carrentUrl = toAssetUrl(carrent);
const jobitUrl = toAssetUrl(jobit);
const tripguideUrl = toAssetUrl(tripguide);

export {
  logoUrl as logo,
  backendUrl as backend,
  creatorUrl as creator,
  mobileUrl as mobile,
  webUrl as web,
  githubUrl as github,
  menuUrl as menu,
  closeUrl as close,
  cssUrl as css,
  dockerUrl as docker,
  figmaUrl as figma,
  gitUrl as git,
  htmlUrl as html,
  javascriptUrl as javascript,
  mongodbUrl as mongodb,
  nodejsUrl as nodejs,
  reactjsUrl as reactjs,
  reduxUrl as redux,
  tailwindUrl as tailwind,
  typescriptUrl as typescript,
  threejsUrl as threejs,
  metaUrl as meta,
  mostaqlUrl as mostaql,
  shopifyUrl as shopify,
  starbucksUrl as starbucks,
  teslaUrl as tesla,
  carrentUrl as carrent,
  jobitUrl as jobit,
  tripguideUrl as tripguide,
};
