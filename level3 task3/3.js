var aqiData = {};
var inputCity  = document.getElementById("aqi-city-input") ;
var inputValue = document.getElementById("aqi-value-input");
var addBtn = document.getElementById("add-btn");
var table  = document.getElementById("aqi-table");
var delBtn = table.getElementsByTagName("button");

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 * trim() 方法用于删除字符串的头尾空白符为了后面好匹配
 */
function addAqiData() {
    var city  = inputCity.value.trim() ;
    var value = inputValue.value.trim();
//用来判断，为了后面匹配，简便
    var cityflag  = 0;
    var valueflag = 0;

    //正则匹配城市名称,感觉写不来正则
    var regCity = /^[a-zA-Z\u4E00-\u9FA5]+$/ ;
    //正则匹配空气质量整数
    var regValue = /[\d*]/;

    //匹配城市
    if( regCity.test(city)==false )
    {
        alert("城市名称要是中英文字符");
        //点击了警示框之后，清除错误的输入。因为是表单注意一下用value
        inputCity.value  = '';        
    }
    else cityflag = 1;//满足输入城市正确

    //匹配空气质量指数
    if( regValue.test(value)==false )
    {
        alert("请输入整数");
        inputValue.value = ''; 
    }
    else valueflag = 1;

    if( cityflag && valueflag )
        aqiData[city]  = value ; 
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var tr = '<tr>'+'<td>'+'城市'+'</td>'+'<td>'+'空气质量'+'</td>'+'<td>'+'操作'+'</td>'+'</tr>';
    for ( var k in aqiData ){
        tr += '<tr>'+'<td>'+k+'</td>'+'<td>'+aqiData[k]+'</td>'+'<td>'+"<button onclick='delBtnHandle(\""+k+"\")'>"+'删除'+'</button>'+'</td>'+'</tr>';
        }
    table.innerHTML = tr;
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(city) {
  // do sth.
  delete aqiData[city] ;
  renderAqiList();
}

window.onload = function () {
  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  addBtn.addEventListener("click",addBtnHandle);
}