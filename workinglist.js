const workinglist = require('../../module/merchant/workinglist.js')

/**
 * mer 接单明细表  中间件，错误err信息next向下传递，由app.js接收处理,getAppidlist(10)取10条记录
 */
module.exports = {
    getworkinglist: (req, res, next) => {
        let merOID = req.session.orgOID
        workinglist.getworkinglist(merOID).then(results => {
            req.workinglistid = results
            next()
        }).catch(err => {
            next(err)
        })
    }


}