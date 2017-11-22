const express = require('express')
const userModifyAvatar = require('./handlers/userModifyAvatar')
const userModifyData = require('./handlers/userModifyData')
const getUsersAllUsers = require('./handlers/getUsersAllUsers')
const getUsersAllAdministrators = require('./handlers/getUsersAllAdministrators')
const getAllArticles = require('./handlers/getAllArticles')
const getFeaturedArticles = require('./handlers/getFeaturedArticles')
const getAtriclesByCategory = require('./handlers/getAtriclesByCategory')
const userDashboard = require('./handlers/userDashboard')
const articleDashboard = require('./handlers/articleDashboard')
const newArticle = require('./handlers/newArticle')
const removeArticle = require('./handlers/removeArticle')
const getArticleToModify = require('./handlers/getArticleToModify')
const modifyArticle = require('./handlers/modifyArticle')

const router = express.Router()

router.get('/api/users/admin', getUsersAllAdministrators)
router.get('/api/articles/', getAllArticles)
router.get('/api/articles/featured', getFeaturedArticles)
router.get('/api/articles/:category', getAtriclesByCategory)
router.get('/api/dashboard/user', userDashboard)
router.get('/api/dashboard/article', articleDashboard)
router.get('/api/users/', getUsersAllUsers)
router.get('/api/article/:id', getArticleToModify)
router.post('/api/article/new', newArticle)
router.post('/user/:id/modify/avatar', userModifyAvatar)
router.post('/user/:id/modify/data', userModifyData)
router.delete('/api/article/:id/remove', removeArticle)
router.put('/api/article/:id/modify', modifyArticle)

module.exports = router
