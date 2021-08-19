const upwork_list = require('../../module/merchant/upwork_list.js')

/**
 * 完工凭证列表中间件，错误err信息next向下传递，由app.js接收处理,getAppidlist(10)取10条记录
 */
module.exports = {
    getupwork: (req, res, next) => {
        let merOID = req.session.orgOID
        upwork_list.getupwork(merOID).then(results => {
            req.upworkid = results
            next()
        }).catch(err => {
            next(err)
        })
    }

}