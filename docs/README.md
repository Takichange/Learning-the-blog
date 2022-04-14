## 你是来拉屎的吗
## 敌军还有五秒到达战场 :tada: ！:tada: ！:tada: ！
<!-- 链接 -->
[gui](./guide//page.md)
<!-- 当前菜单映射 -->
[[toc]]

```ts{1,6-8}
import type { UserConfig } from '@vuepress/cli'

export const config: UserConfig = {
  title: '你好， VuePress',

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
  },
}
```

<!-- v-pre演示 -->
```md
<!-- 默认情况下，这里会被保持原样 -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```md:no-v-pre
<!-- 这里会被 Vue 编译 -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```js:no-v-pre
// 由于 JS 代码高亮，这里不会被正确编译
const onePlusTwoPlusThree = {{ 1 + 2 + 3 }}
```

<!-- 路径别名示例 -->
```js
@[code](@/src/foo.js)
```
<!-- vue模板语法支持 -->
{{1+1}}
<!-- 内置模板组件 -->
- VuePress - <Badge type="tip" text="v2" vertical="top" />
- VuePress - <Badge type="warning" text="v2" vertical="middle" />
- VuePress - <Badge type="danger" text="v2" vertical="bottom" />

<CodeGroup>
  <CodeGroupItem title="YARN">

```bash:no-line-numbers
yarn
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM" active>

```bash:no-line-numbers
npm install
```

  </CodeGroupItem>
</CodeGroup>

<!-- 静态图片引入 -->

![VuePress Logo](/images/q.jpg)

![33](@src/img/b.png)

```md
.gitignore文件不生效解决方法
使用git提交代码希望忽略某些文件时，需要配置.gitignore。

不过已经提交后文件，再修改.gitignore文件会没有效果。

用下面命令解决：

git rm -r --cached .
 
git add .
 
git commit -m 'update .gitignore'
```
