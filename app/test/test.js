const moment = require('moment')
let str = `<a href="https://bbs.hupu.com/43472726.html" target="_blank" class="list-item-title">
<div class="item-title-conent">[流言板]阿什利-扬经纪人抵达国米总部，与国米洽谈球员续约事宜</div>
</a>`;
// let reg = /<a href="([^"]+)".+>([\s\S]+?)<\/a>/;
let reg = /^<a href="([^"]+)".+>[\s\S]+?<div [^>]+>([\s\S]+?)<\/div>[\s\S]?<\/a>$/;
let result = str.match(reg);
// console.log(result[2]);

let reg2 = /<h1[^>]+><a[^>]+href\s*=\s*['\"]([^'\"]+)['\"][^>]*>([\s\S]+?)<\/a>\s*<\/h1>/
let str2 = `
<h1 data-client="headline"><a target="_blank"
href="https://news.sina.com.cn/c/2021-06-09/doc-ikqciyzi8516101.shtml"
class="linkNewsTopBold">重磅！新冠全球溯源研究中国部分公布！</a>
</h1>`


    let reg3 = /<h3[^>]+>\s*<a[^>]+href\s*=\s*['\"]([^'\"]+)['\"][^>]*>([\s\S]+?)<\/a>\s*<\/h3>/
let str3 = `<h3 class="ty-card-tt">
<a href="https://sports.sina.com.cn/basketball/nba/2021-06-09/doc-ikqciyzi8579539.shtml" target="_blank" node-type="sima-click-0">慈世平：詹姆斯明年仍将是联盟中最好的球员！</a></h3>`
// console.log(str3.match(reg3))

console.log(moment(new Date()).fromNow());