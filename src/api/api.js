import http from './http'
import config from '@/config/index.js'


export const getList = p => http.get('/list',p)

