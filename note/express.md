# express note : 开始

## 初探express

### 运行框架-第一个项目

下载express框架

```reason
npn install  express-generator -g
// -g 全局
```

 初始化express项目

```reason
express
```

下载依赖

```reason
npm install
```

运行应用

```reason
DEBUG=new-project:* npm start
```

然后访问[http://localhost:3000/](http://localhost:3000/) 便可以看到自己的第一个express应用啦

(**注：**
指定 DEBUG 变量可启用控制台日志记录/调试)

### 文件改动自动重启

默认只有重启才能看到express网站所做改动

第一步:安装 `nodemon` 工具

```reason
sudo npm install -g nodemon
```

or 作为开发依赖安装本地

```reason
npm install --save-dev nodemon
```

如果没有全局安装该工具，就无法从命令行启动它（除非我们将其添加到路径中），

第二步: `package.json` *dependencies*添加新属性

```reason
"nodemon": "^1.18.9"
```

第三步: `pacage.json` *scripts*添加新启动命令

```reason
"devstart": "nodemon ./bin/www"
```

第四步:启动项目 

```reason
DEBUG=project-1:* npm run devstart
```