### 一、版权app后台

#### 1.1、contract :合约代码

```JavaScript
--banquan.sol 智能合约代码
--abi.js   智能合约部署后的abi数据，用于app调用智能合约时使用
```

​	

#### 1.2、 web : 后台代码

```JavaScript
--app 项目主目录
	--controller 控制器目录 对应路由文件
    	--user.js 用户信息接口相关控制器
        --mydoc.js 版权存证信息接口相关控制器
    --modle 数据层目录(使用egg-sequelize 插件)
    	--user.js 用户表orm层声明
		--mydoc.js 版权存证表orm层声明
    --service 服务层目录
    	--user.js 用户信息接口操作	
        --mydoc.js 存证信息接口操作
    --router.js 接口路由信息
--config 配置文件目录
--package.json 包文件信息
```



### 二、接口文档

##### 2.1 判断用户资料是否存在

注：导入钱包后，调用该接口，查看数据库里是否有用户，如果有返回用户资料，没有返回false

```json
reques header
http://39.106.169.68:8080/api/v1/dev/ishave/:address
method：Get

response
{"res":true,"data":""}

示例
http://39.106.169.68:8080/api/v1/dev/ishave/0xa1c2ba713363d23253f46854b467dde717e6f4bc

{"res":true,"data":{"address":"0xa1c2ba713363d23253f46854b467dde717e6f4bc","name":"dayu","username":"renkunpeng","phone":"18810386312","mail":"xiaohuang@qq.com","identify":"411425199600000000","created_at":"2018-10-05","updated_at":"2018-10-05"}}

```

##### 2.2 上传用户资料

```json
request header
http://39.106.169.68:8080/api/v1/dev/adduser

POST /api/v1/dev/adduser HTTP/1.1
Host: 39.106.169.68:8080
Content-Type: application/json

{"address":"0xa1c2ba713363d23253f46854b467dde717e6f4bc","name":"dayu","username":"renkunpeng","phone":"18810386312","mail":"xiaohuang@qq.com","identify":"411425199600000000"}

response 

{
    "res": true
}

```

##### 2.3 上传版权存证

```json
request header
POST /api/v1/dev/uploaddoc HTTP/1.1
Host: 39.106.169.68:8080
Content-Type: application/json
Cache-Control: no-cache
Postman-Token: 0442d93b-aad7-4a3b-9eb8-bf81492d2624

{"address":"0xa1c2ba713363d23253f46854b467dde717e6f4bc","user":"dayu","docname":"qq","time":"2018-10-11","info":"微信","hash":"0x06d6618af81d32d10d4197b88266970e6d3bcf71b7c5ff594e575591a434f8cc","transaction":"0x06d6618af81d32d10d4197b88266970e6d3bcf71b7c5ff594e575591a434f8cc"}

response
{
    "res": true
}

```

##### 2.4 返回我的存证列表

```json
reques header
http://39.106.169.68:8080/api/v1/dev/mydoclist/:address
method：Get

response
mydoclist
示例
请求
http://39.106.169.68:8080/api/v1/dev/mydoclist/0xa1c2ba713363d23253f46854b467dde717e6f4bc
返回
[{"id":1,"address":"0xa1c2ba713363d23253f46854b467dde717e6f4bc","user":"dayu","docname":"weichat","time":"2018-10-11","info":"微信","hash":"0x06d6618af81d32d10d4197b88266970e6d3bcf71b7c5ff594e575591a434f8cc","transaction":"0x06d6618af81d32d10d4197b88266970e6d3bcf71b7c5ff594e575591a434f8cc","created_at":"2018-10-05","updated_at":"2018-10-05"},{"id":2,"address":"0xa1c2ba713363d23253f46854b467dde717e6f4bc","user":"dayu","docname":"qq","time":"2018-10-11","info":"微信","hash":"0x06d6618af81d32d10d4197b88266970e6d3bcf71b7c5ff594e575591a434f8cc","transaction":"0x06d6618af81d32d10d4197b88266970e6d3bcf71b7c5ff594e575591a434f8cc","created_at":"2018-10-05","updated_at":"2018-10-05"},{"id":3,"address":"0xa1c2ba713363d23253f46854b467dde717e6f4bc","user":"dayu","docname":"qq","time":"2018-10-11","info":"微信","hash":"0x06d6618af81d32d10d4197b88266970e6d3bcf71b7c5ff594e575591a434f8cc","transaction":"0x06d6618af81d32d10d4197b88266970e6d3bcf71b7c5ff594e575591a434f8cc","created_at":"2018-10-05","updated_at":"2018-10-05"}]
```

### 三、智能合约

合约地址：0x4D3F0D9a79ee462c29608De5A7f2692613502d70

```javascript
method:
newBanquan(address useraddress,string user,string docname,string time,string info,string dochash) returns(uint  banquanID)
```

### 四、数据库

用户表

user

| address  | varchar | 钱包地址；主键 |
| -------- | ------- | -------------- |
| name     | varchar | 姓名           |
| username | varchar | 用户名         |
| phone    | varchar | 手机号         |
| identity | varchar | 身份证         |

版权存证表

mydoc

| id          | int     | 版权id，自增 主键    |
| ----------- | ------- | -------------------- |
| address     | varchar | 拥有者钱包地址  外键 |
| user        | varchar | 声明人               |
| docname     | varchar | 版权名称             |
| time        | time    | 声明时间戳           |
| info        | varchar | 简介                 |
| hash        | varchar | hash信息             |
| transaction | varchar | 区块链交易hash       |