export function testInterceptReq(config){
  console.log('test interceptor req')
  return config
}

export function testInterceptRes(config){
  console.log('test interceptor res')
  return config
}