const merlistinfo = require('../../module/merchant/merlistinfo.js')

/**
 * 设置商户基本信息中间件，错误err信息next向下传递，由app.js接收处理,getAppidlist(10)取10条记录
 */
module.exports = {
    getsetinfo: (req, res, next) => {
        let merOID = req.session.orgOID
        merlistinfo.getsetinfo(merOID).then(results => {
            req.ttid = results
            next()
        }).catch(err => {
            next(err)
        })
    }

}