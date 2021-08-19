const import_list = require('../../module/merchant/import_list.js')

/**
 * 批量派单列表中间件，错误err信息next向下传递，由app.js接收处理,getimport(10)取10条记录
 */
module.exports = {
    getimport: (req, res, next) => {
        let merOID = req.session.orgOID
        import_list.getimport(merOID).then(results => {
            req.importid = results
            next()
        }).catch(err => {
            next(err)
        })
    }


}