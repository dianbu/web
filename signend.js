const signend = require('../../module/merchant/signend.js')

/**
 * 到期合同明细表中间件，错误err信息next向下传递，由app.js接收处理,getAppidlist(10)取10条记录
 */
module.exports = {
    getsignend: (req, res, next) => {
        let merOID = req.session.orgOID
        signend.getsignend(merOID).then(results => {
            req.signendid = results
            next()
        }).catch(err => {
            next(err)
        })
    }

}