const zclistt = require('../../module/merchant/zclistt.js')

/**
 * mer   工单主分类中间件，错误err信息next向下传递，由app.js接收处理,getAppidlist(10)取10条记录
 */
module.exports = {
    getzclist: (req, res, next) => {
        let orgOID = req.session.orgOID
        zclistt.getzclist(orgOID).then(results => {
            req.zcid = results
            next()
        }).catch(err => {
            next(err)
        })
    },

    getzc: (req, res, next) => {
        let orgID = req.session.orgOID
        zclistt.getzc(orgID).then(results => {
            req.zclid = results
            next()
        }).catch(err => {
            next(err)
        })
    },


    getall: (req, res, next) => {
        let orgID = req.session.orgOID
        zclistt.getall(orgID).then(results => {
            req.aid = results
            next()
        }).catch(err => {
            next(err)
        })
    }


}