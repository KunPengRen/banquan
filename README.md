版权app后台

--contract :合约代码

​	

--web : 后台代码



### 二、接口文档

##### 2.1 判断用户资料是否存在

注：导入钱包后，调用该接口，查看数据库里是否有用户，如果有返回用户资料，没有返回false

```json
reques header
http://39.106.169.68:8080/api/v1/dev/ishave/:address
method：Get

response
存在
{
     "address":"xx",
     "name":"xx",
     "username":"xx",
     "phone":"xx",
     "mail":"xx@qq.com",
     "identify":"xx",
     "created_at":"2018-xx-05",
     "updated_at":"2018-xx-05"
}
不存在
{"res":false}

示例
http://39.106.169.68:8080/api/v1/dev/ishave/0xa1c2ba713363d23253f46854b467dde717e6f4bc

{
     "address":"0xa1c2ba713363d23253f46854b467dde717e6f4bc",
     "name":"dayu",
     "username":"renkunpeng",
     "phone":"18810386312",
     "mail":"xiaohuang@qq.com",
     "identify":"411425199600000000",
     "created_at":"2018-10-05",
     "updated_at":"2018-10-05"
}

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

