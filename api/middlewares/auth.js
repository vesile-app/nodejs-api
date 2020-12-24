 function checkUserRegisterInfo(req, res, next) {
  if(req.body.firstName && req.body.lastName &&  req.body.email && req.body.password) {
    next()
  } else {
    res.status(400).json({
      error: 'Hatali/Eksik bilgi',
      status: 400
    })
  }
}

function checkUserLoginInfo(req, res, next) {
  if(req.body.email && req.body.password) {
    next()
  } else {
    res.status(400).json({
      error: 'Hatali/Eksik bilgi',
      status: 400
    })
  }
}

module.exports = {
  checkUserLoginInfo,
  checkUserRegisterInfo
}

