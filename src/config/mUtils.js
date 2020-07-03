/**
 * 存储localStorage
 */

export const setStore = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
export const getStore = name => {
  if (!name) return;
  return window.localStorage.getItem(name);
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
  if (!name) return;
  window.localStorage.removeItem(name);
}
/**
 * 存储sessionStorage
 */
export const setSessionStore = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.sessionStorage.setItem(name, content);
}
/**
 * 获取sessionStorage
 */
export const getSessionStore = name => {
  if (!name) return;
  return window.sessionStorage.getItem(name);
}
/**
 * 删除sessionStorage
 */
export const removeSessionStore = name => {
  if (!name) return;
  window.sessionStorage.removeItem(name);
}
/**
 * base64加密
 */
export const encode64 = (input) =>{
  // base64加密开始
  var keyStr = "ABCDEFGHIJKLMNOP" + "QRSTUVWXYZabcdef" + "ghijklmnopqrstuv" +
    "wxyz0123456789+/" + "=";
  var output = "";
  var chr1, chr2, chr3 = "";
  var enc1, enc2, enc3, enc4 = "";
  var i = 0;
  do {
    chr1 = input.charCodeAt(i++);
    chr2 = input.charCodeAt(i++);
    chr3 = input.charCodeAt(i++);
    enc1 = chr1 >> 2;
    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
    enc4 = chr3 & 63;
    if (isNaN(chr2)) {
      enc3 = enc4 = 64;
    } else if (isNaN(chr3)) {
      enc4 = 64;
    }
    output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) +
      keyStr.charAt(enc3) + keyStr.charAt(enc4);
    chr1 = chr2 = chr3 = "";
    enc1 = enc2 = enc3 = enc4 = "";
  } while (i < input.length);

  return output;
}

/**
 * 深拷贝
 */
export const deepClone  = (obj) =>{
  if(obj === null) return null;
  if(obj instanceof RegExp) return new RegExp(obj);
  if(obj instanceof Date) return new Date(obj);
  if(typeof obj !== 'object') {
    return obj;
  }
  let t = new obj.constructor();
  for(let key in obj) {
    t[key] = deepClone(obj[key]);
  }
  return t;
}
