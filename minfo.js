const minfo = require('../../module/merchant/minfo.js')

/**
 *商户信息
 */
module.exports = {
    getminfo: (req, res, next) => {
        let merOID = req.session.orgOID
        minfo.getminfo(merOID).then(results => {
            req.minfoid = results
            next()
        }).catch(err => {
            next(err)
        })
    }

}