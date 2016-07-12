http://www.ydcss.com/archives/18#lesson7
http://markpop.github.io/2014/09/17/Gulp%E5%85%A5%E9%97%A8%E6%95%99%E7%A8%8B/
http://www.dbpoo.com/getting-started-with-gulp/
http://www.gulpjs.com.cn/docs/api/

npm命令

3.2.1、<name>：node插件名称。例：npm install gulp-less --save-dev
3.2.2、-g：全局安装。将会安装在C:\Users\Administrator\AppData\Roaming\npm，并且写入系统环境变量；  非全局安装：将会安装在当前定位目录；  全局安装可以通过命令行在任何地方调用它，本地安装将安装在定位目录的node_modules文件夹下，通过require()调用；
3.2.3、--save：将保存配置信息至package.json（package.json是nodejs项目配置文件）；
3.2.4、-dev：保存至package.json的devDependencies节点，不指定-dev将保存至dependencies节点；一般保存在dependencies的像这些express/ejs/body-parser等等。
3.2.5、为什么要保存至package.json？因为node插件包相对来说非常庞大，所以不加入版本管理，将配置信息写入package.json并将其加入版本管理，其他开发者对应下载即可（命令提示符执行npm install，则会根据package.json下载所有需要的包，npm install --production只下载dependencies节点的包）。
3.3、使用npm卸载插件：npm uninstall <name> [-g] [--save-dev]  PS：不要直接删除本地插件包
3.3.1、删除全部插件：npm uninstall gulp-less gulp-uglify gulp-concat ……???太麻烦
3.3.2、借助rimraf：npm install rimraf -g 用法：rimraf node_modules
3.4、使用npm更新插件：npm update <name> [-g] [--save-dev]
3.4.1、更新全部插件：npm update [--save-dev]
3.5、查看npm帮助：npm help
3.6、当前目录已安装插件：npm list

安装cnpm

安装：命令提示符执行npm install cnpm -g --registry=https://registry.npm.taobao.org；
     注意：安装完后最好查看其版本号cnpm -v或关闭命令提示符重新打开，安装完直接使用有可能会出现错误
