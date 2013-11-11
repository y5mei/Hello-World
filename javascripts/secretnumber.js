/*
var caution = false
function setCookie(name, value, expires, path, domain, secure) {
        var curCookie = name + "=" + escape(value) +
                ((expires) ? "; expires=" + expires.toGMTString() : "") +
                ((path) ? "; path=" + path : "") +
                ((domain) ? "; domain=" + domain : "") +
                ((secure) ? "; secure" : "")
        if (!caution || (name + "=" + escape(value)).length <= 4000)
                document.cookie = curCookie
        else
                if (confirm("Cookie exceeds 4KB and will be cut!"))
                        document.cookie = curCookie
}
function getCookie(name) {
        var prefix = name + "=" 
        var cookieStartIndex = document.cookie.indexOf(prefix)
        if (cookieStartIndex == -1)
                return null
        var cookieEndIndex = document.cookie.indexOf(";", cookieStartIndex + prefix.length)
        if (cookieEndIndex == -1)
                cookieEndIndex = document.cookie.length
        return unescape(document.cookie.substring(cookieStartIndex + prefix.length, cookieEndIndex))
}
function deleteCookie(name, path, domain) {
        if (getCookie(name)) {
                document.cookie = name + "=" + 
                ((path) ? "; path=" + path : "") +
                ((domain) ? "; domain=" + domain : "") +
                "; expires=Thu, 01-Jan-70 00:00:01 GMT"
        }
}
function fixDate(date) {
        var base = new Date(0)
        var skew = base.getTime()
        if (skew > 0)
                date.setTime(date.getTime() - skew)
}
var now = new Date()
fixDate(now)
now.setTime(now.getTime() + 365 * 24 * 60 * 60 * 1000)
var visits = getCookie("counter")
if (!visits)
        visits = 1
else
        visits = parseInt(visits) + 1
setCookie("counter", visits, now)
document.write("梅耀文欢迎您的第" + visits + "次光临！")
*/


//页面的表格元素
var datatable = null;
//创建一个数据库对象，包含4个参数
//分别为数据库名称，版本号，数据库描述，数据库大小
var db = openDatabase('UserInfo', '', 'Username and UserPwd', 1024 * 1024);
//初始化，显示所有数据库的数据
function init(){
    datatable = document.getElementById('datatable');
    showAllData();   
}
//删掉table中的所有数据，但是并不删除数据库里面的数据
function removeAllData(){
    //遍历table标签，然后删除所有子节点
    for(var i=datatable.childNodes.length-1;i>=0;i--){ 
        datatable.removeChild(datatable.childNodes(i)); 
    } 
    var tr = document.createElement('tr');
    var th1 = document.createElement('th');
    var th2 = document.createElement('th');
    th1.innerHTML = '用户名';
    th2.innerHTML = '密码';
    tr.appendChild(th1);
    tr.appendChild(th2);
    datatable.appendChild(tr);
}

function showData(row){
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    td1.innerHTML = row.username;
    var td2 = document.createElement('td');
    td2.innerHTML = row.pwd;
    tr.appendChild(td1);   
    tr.appendChild(td2);
    datatable.appendChild(tr);
}
//此方法显示所有的数据到table中
function showAllData(){
    //对数据库执行的sql语句sql1和sql2
    //sql1:创建一个表名为UserMag的表，包含username和pwd两个字段，类型都是text
    var sql1 = 'CREATE TABLE IF NOT EXISTS UserMag(username TEXT, pwd TEXT)';
    var sql2 = 'SELECT * FROM UserMag';
    //SQLLite数据库的transaction方法，里面包含一个回调函数为参数，并执行
    db.transaction(function(tx){
        tx.executeSql(sql1,[]);    
        //查询表里面所有的数据，并定义了一个回调函数，返回结果集rs
        tx.executeSql(sql2, [], function(tx, rs){
            removeAllData();
            for(var i=0; i<rs.rows.length; i++){
                //针对每一行记录item(i)，调用showData进行处理
                showData(rs.rows.item(i));
            }    
        });
    });  
}
//此方法是保存我们输入的用户名和密码
function addData(username, pwd){
    /*
    * 在这里，使用了"INSERT INTO UserMag VALUES(?,?)"
    * 这句sql语句来追加数据，同时使用了[username,pwd]
    * 数组来传入sql语句中所需要的参数，真正对数据库
    * 执行操作时，是把里面的两个问号换成后面的值。
    */
    db.transaction(function(tx){
        tx.executeSql('INSERT INTO UserMag VALUES(?, ?)', [username, pwd], 
                      //当追加数据成功时执行的处理
                      function(tx, rs){
                        alert('saved!!!');    
                      },
                      //当追加失败时执行的处理
                      function(tx, error){
                        alert(error.source + "::" + error.message); 
                      });    
    });
}

function saveData(){
    var username = document.getElementById('username').value;
    var pwd = document.getElementById('pwd').value;
    addData(username, pwd);
    showAllData();
}