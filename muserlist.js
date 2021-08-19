// const muserlist = require('../../module/merchant/muserlist.js')

// /**
//  * 商户操作员列表中间件，错误err信息next向下传递，由app.js接收处理,getAppidlist(10)取10条记录
//  */
// module.exports = {
//     getmuser: (req, res, next) => {
//         muserlist.getmuser().then(results => {
//             req.muserid = results
//             next()
//         }).catch(err => {
//             next(err)
//         })
//     }

// }




const express = require('express'),
    app = express();
const conn = require("../../module/conn.js");

app.get('/', (req, res) => {
    let orgOID = req.session.orgOID;
    let sql = 'select * from merchantuser where delid="0" and orgOID="' + orgOID + '"'
    var pageNum = req.query.page; // ?page=12&oncon=up
    conn.query(sql, function(err, data) {
        var pager = {};
        pager.pageCurrent = pageNum || 1; //当前第几页，默认第一页    
        pager.maxNum = data.length; //总的记录数   
        pager.pageSize = 10; //每页显示多少条记录    
        pager.pageCount = parseInt(Math.ceil(pager.maxNum / pager.pageSize)); //一共有多少页

        //修改了传递的数据数量 data.slice取0,0条数据到数组，dataList存放数组
        var dataList = data.slice((pager.pageCurrent - 1) * pager.pageSize, (pager.pageCurrent - 1) * pager.pageSize + pager.pageSize);
        if (err) {
            throw err;
        } else {
            res.render('./pcpages/merchant/mer_meruser_list.html', {
                list: dataList,
                pager: pager,
                msg: ''
            })
        }
    })
})

module.exports = app;