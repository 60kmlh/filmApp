export function getQueryParams(str, key) {
  var reg = new RegExp("(^|&)"+ key +"=([^&]*)(&|$)");
	var r = str.substr(1).match(reg);
	if(r!=null)return  unescape(r[2]); return null;
}