# 连接和创建mongodb

## 连接字符串 connectionString

mongodb://user_name:pass@ip:port/dbname

## 超管登录

···console
/usr/local/mongodb/bin/mongo -u "root" --authenticationDatabase "admin" -p 'your-password'
use admin
db.createUser({user:"test",pwd:"test",roles:["root"]})
db.auth("test","test")
···