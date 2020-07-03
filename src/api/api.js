import http from './http'
import config from '@/config/index.js'


export const getList = p => http.get('/list',p)
export const login = p => http.post('/v20/app/agent/validate/login.svc',p)
export const searchTicket = p => http.post('/v20/app/agent/ticket/searchTicket.svc',p)
export const getTicketDetail = p => http.get('/v20/app/agent/ticket/'+p.id+'.svc')
export const searchCustomer = p => http.get('/v20/app/agent/customer/search.svc',p)
export const getCustomerSystem = p => http.get('/v20/app/agent/customersystem/search.svc?customerId='+p.customerId)

