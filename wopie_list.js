const wopie_list = require('../../module/merchant/wopie_list.js')

/**
 *工件列表中间件，错误err信息next向下传递，由app.js接收处理,getwopie(10)取10条记录
 */
module.exports = {
    getwopie: (req, res, next) => {
        let merOID = req.session.orgOID
        wopie_list.getwopie(merOID).then(results => {
            req.woid = results
            next()
        }).catch(err => {
            next(err)
        })
    }

}