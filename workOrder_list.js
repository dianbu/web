const workOrder_list = require('../../module/merchant/workOrder_list.js');

/**
 * 工单列表，错误err信息next向下传递，由app.js接收处理,getAppidlist(10)取10条记录
 */
module.exports = {
    getworkOrder: (req, res, next) => {
        let merOID = req.session.orgOID
        workOrder_list.getworkOrder(merOID).then(results => {
            req.workid = results
            next()
        }).catch(err => {
            next(err)
        })
    }

}