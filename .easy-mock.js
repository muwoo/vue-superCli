module.exports = {
  output: "src/api", // 产出到项目下的 api 目录，不用手动创建
  template: "axios", // 基于 easy-mock-templates 提供的 axios 模板
  projects: [
    {
      id: "59ccc676a0ab222a113acacc", // 你要创建的 Easy Mock 项目的 id
      name: "example" // 该项目下的 API 生成之后会被放到 api/demo 目录下
    }
  ]
};
