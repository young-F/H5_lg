import { Module } from "vuex";
import { GlobalDataProps } from "./index";

export interface TemplateProps {
  id: number;
  title: string;
  coverImg: string;
  author: string;
  copiedCount: number;
}

const testData: TemplateProps[] = [
  {
    id: 1,
    title: "前端架构师直播海报",
    coverImg:
      "https://static.imooc-lego.com/upload-files/screenshot-889755.png",
    author: "demonfu",
    copiedCount: 123,
  },
  {
    id: 2,
    title: "reprehenderit est",
    coverImg:
      "https://static.imooc-lego.com/upload-files/screenshot-977815.png",
    author: "demonfu",
    copiedCount: 123,
  },
  {
    id: 3,
    title: "officia porro",
    coverImg:
      "https://static.imooc-lego.com/upload-files/screenshot-323204.png",
    author: "demonfu",
    copiedCount: 123,
  },
  {
    id: 4,
    title: "culpa odio esse ",
    coverImg:
      "https://static.imooc-lego.com/upload-files/screenshot-677311.png",
    author: "demonfu",
    copiedCount: 123,
  },
  {
    id: 5,
    title: "natus nisi omnis",
    coverImg:
      "https://static.imooc-lego.com/upload-files/screenshot-133701.png",
    author: "demonfu",
    copiedCount: 123,
  },
  {
    id: 6,
    title: "accusamus ea aliquid ",
    coverImg:
      "https://static.imooc-lego.com/upload-files/screenshot-726751.png",
    author: "demonfu",
    copiedCount: 123,
  },
];

export interface TemplatesProps {
  data: TemplateProps[];
}

const templates: Module<TemplatesProps, GlobalDataProps> = {
  state: {
    data: testData,
  },
  getters: {
    getTemplateById: (state) => (id: number) => {
      return state.data.find((t) => t.id === id);
    },
  },
};

export default templates;
