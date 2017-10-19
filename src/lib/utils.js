export function getQueryParams(str, key) {
  var reg = new RegExp("(^|&)"+ key +"=([^&]*)(&|$)");
	var r = str.substr(1).match(reg);
	if(r!=null)return  unescape(r[2]); return null;
}

export function sortCity(list) {
  var indexArr = []
  var res = []
  list.map((item, index) => {
    if(indexArr.indexOf(item.city_pre) === -1) {
      indexArr.push(item.city_pre)
      res.push({pre: item.city_pre, list: []})
    }
    res.map((item1, index1) => {
      if(item1.pre === item.city_pre) {
        item1.list.push(item)
      }
      return true
    })
    return true
  })
  res.sort((a, b) => {
    return a.pre.charCodeAt() - b.pre.charCodeAt()
  })
  indexArr.sort((a, b) => {
    return a.charCodeAt() - b.charCodeAt()
  })
	return {
		resList :res,
		indexList: indexArr
	}
}