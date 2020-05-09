import Mock from 'mockjs'
Mock.setup({
  timeout: 400
})
const Random = Mock.Random;


//listData mock
let listData = function() {
  let _data = []
  for (let i = 0; i < 20; i++) {
    let newList = { // 详细 规则 参照mockjs官网
      title: Random.csentence(5, 30), //  Random.csentence( min, max )
      imgSrc: Random.dataImage('160x160', '这是图片中的文本'), // Random.dataImage( size, text ) 生成图片（base64位数据格式）
      author_name: Random.cname(), // Random.cname() 随机生成中文名
      date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    }
    _data.push(newList)
  }
  return {
    success:true,
    errorType: "0",
    errorMessage:null,
    data: _data
  }
}

// mock模拟的接口
Mock.mock('/list', 'get',listData )
